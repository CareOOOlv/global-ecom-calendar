import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const PARTICLE_COUNT = 6000;

const vertexShader = `
  uniform float uTime;
  attribute float aSeed;
  varying float vSeed;
  varying vec2 vUv;
  varying float vCenter;
  #define RADIUS 0.3

  float hash(float n) {
    return fract(sin(n) * 43758.5453123);
  }

  mat4 rotationMatrix(vec3 axis, float angle) {
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;
    return mat4(
      oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s, 0.0,
      oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s, 0.0,
      oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,          0.0,
      0.0, 0.0, 0.0, 1.0
    );
  }

  float snoise4(vec4 v) {
    return fract(sin(dot(v, vec4(12.9898, 78.233, 45.164, 94.673))) * 43758.5453) * 2.0 - 1.0;
  }

  void main() {
    vUv = uv;
    vSeed = aSeed;
    vec3 p = position;
    float c = 1.0 - smoothstep(RADIUS, RADIUS * 2.5, length(p));
    vCenter = c;
    float r = hash(aSeed);
    for (int i = 0; i < 2; i++) {
      float L = length(p) * 0.3;
      vec3 dir = normalize(vec3(sin(aSeed * 10.0), cos(aSeed * 20.0), sin(aSeed * 30.0)));
      mat4 R = rotationMatrix(dir, c * 2.5 * exp(-L));
      p = (R * vec4(p, 1.0)).xyz;
      p += snoise4(vec4(p * 0.5, uTime * 0.1 + aSeed)) * c * 1.0;
    }
    p += normalize(p) * (0.1 + (1.0 - c) * 0.1) * uTime * 0.2;
    vec4 mvPosition = modelViewMatrix * vec4(p, 1.0);
    gl_PointSize = 1.5 * (1.0 + c * 1.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  uniform vec3 uColor1;
  uniform vec3 uColor2;
  uniform float uOpacity;
  varying float vSeed;
  varying vec2 vUv;
  varying float vCenter;

  void main() {
    float c = 1.0 - 2.0 * distance(vUv, vec2(0.5));
    vec3 color = mix(uColor1, uColor2, vSeed);
    gl_FragColor = vec4(color, c * (0.1 + vCenter * 0.2) * uOpacity);
  }
`;

interface NebulaParticlesProps {
  theme: 'dark' | 'light';
}

function NebulaParticles({ theme }: NebulaParticlesProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, seeds } = useMemo(() => {
    const positions = new Float32Array(PARTICLE_COUNT * 3);
    const seeds = new Float32Array(PARTICLE_COUNT);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = Math.cbrt(Math.random()) * 15;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      seeds[i] = Math.random();
    }
    return { positions, seeds };
  }, []);

  const positionAttr = useMemo(() => new THREE.BufferAttribute(positions, 3), [positions]);
  const seedAttr = useMemo(() => new THREE.BufferAttribute(seeds, 1), [seeds]);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uOpacity: { value: theme === 'light' ? 0.15 : 1.0 },
    uColor1: { value: new THREE.Color(theme === 'light' ? '#e0e7ff' : '#000000') },
    uColor2: { value: new THREE.Color(theme === 'light' ? '#818cf8' : '#A78BFA') },
  }), []);

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.elapsedTime * 0.3;
    }
    state.camera.position.x += (state.mouse.x * 2 - state.camera.position.x) * 0.02;
    state.camera.position.y += (state.mouse.y * 1 - state.camera.position.y) * 0.02;
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <primitive object={positionAttr} attach="attributes-position" />
        <primitive object={seedAttr} attach="attributes-aSeed" />
      </bufferGeometry>
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

interface NebulaBackgroundProps {
  theme?: 'dark' | 'light';
}

export default function NebulaBackground({ theme = 'dark' }: NebulaBackgroundProps) {
  return (
    <div
      className="fixed inset-0 z-0"
      style={{
        opacity: theme === 'light' ? 0.3 : 1,
        transition: 'opacity 0.6s ease',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: theme === 'light' ? '#f0f2f5' : '#050505' }}
      >
        <NebulaParticles theme={theme} />
      </Canvas>
    </div>
  );
}
