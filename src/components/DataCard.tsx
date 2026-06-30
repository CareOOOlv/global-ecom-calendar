import { useRef, useEffect, type ReactNode } from 'react';
import gsap from 'gsap';

interface DataCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  delay?: number;
  className?: string;
}

function calculateTiltMatrix(e: MouseEvent, el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const centerX = (x / rect.width - 0.5) * 2;
  const centerY = (y / rect.height - 0.5) * 2;
  const maxRotation = 8;
  return { rotateX: -centerY * maxRotation, rotateY: centerX * maxRotation };
}

export default function DataCard({ title, icon, children, delay = 0, className = '' }: DataCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    if (!card || !content) return;

    gsap.fromTo(content,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, delay: delay * 0.08, ease: 'power2.out' }
    );

    const handleMouseMove = (e: MouseEvent) => {
      const tiltMatrix = calculateTiltMatrix(e, card);
      gsap.to(card, { duration: 0.4, rotateX: tiltMatrix.rotateX, rotateY: tiltMatrix.rotateY, ease: 'power2.out', transformPerspective: 1000 });
    };
    const handleMouseLeave = () => {
      gsap.to(card, { duration: 0.6, rotateX: 0, rotateY: 0, ease: 'power2.out', transformPerspective: 1000 });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [delay]);

  return (
    <div ref={cardRef} className={`glass-card rounded-lg p-5 will-change-transform ${className}`} style={{ transformStyle: 'preserve-3d' }}>
      <div ref={contentRef} className="opacity-0">
        <div className="flex items-center gap-2 mb-4">
          <div style={{ color: 'var(--accent-purple)' }}>{icon}</div>
          <h3 className="text-base font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>{title}</h3>
        </div>
        <div className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
