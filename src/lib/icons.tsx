import {
  Sun, CloudRain, Snowflake, Leaf, Thermometer, Star,
  PartyPopper, Gift, Droplets, Wind, Flame,
  Shirt, Tent, Heart, BookOpen, Briefcase, Bike,
  Dumbbell, Fish, Wine, Music, Home, Lightbulb, Trophy,
  Plane, Camera, Mountain, Sparkles, Utensils, Palette,
  Gamepad2, Flag, Bug, TreePine, Ghost, Umbrella, Moon,
} from 'lucide-react';
import type { ReactNode } from 'react';

const iconMap: Record<string, ReactNode> = {
  sun: <Sun className="w-5 h-5" />, snow: <Snowflake className="w-5 h-5" />,
  rain: <CloudRain className="w-5 h-5" />, leaf: <Leaf className="w-5 h-5" />,
  thermometer: <Thermometer className="w-4 h-4" />, wind: <Wind className="w-4 h-4" />,
  umbrella: <Umbrella className="w-4 h-4" />, tent: <Tent className="w-4 h-4" />,
  flame: <Flame className="w-4 h-4" />, heart: <Heart className="w-4 h-4" />,
  gift: <Gift className="w-4 h-4" />, tree: <TreePine className="w-4 h-4" />,
  ghost: <Ghost className="w-4 h-4" />, sparkles: <Sparkles className="w-4 h-4" />,
  party: <PartyPopper className="w-4 h-4" />, flag: <Flag className="w-4 h-4" />,
  shirt: <Shirt className="w-4 h-4" />, droplets: <Droplets className="w-4 h-4" />,
  gamepad: <Gamepad2 className="w-4 h-4" />, utensils: <Utensils className="w-4 h-4" />,
  palette: <Palette className="w-4 h-4" />, music: <Music className="w-4 h-4" />,
  home: <Home className="w-4 h-4" />, book: <BookOpen className="w-4 h-4" />,
  briefcase: <Briefcase className="w-4 h-4" />, bike: <Bike className="w-4 h-4" />,
  dumbbell: <Dumbbell className="w-4 h-4" />, fish: <Fish className="w-4 h-4" />,
  wine: <Wine className="w-4 h-4" />, moon: <Moon className="w-4 h-4" />,
  lightbulb: <Lightbulb className="w-4 h-4" />, trophy: <Trophy className="w-4 h-4" />,
  plane: <Plane className="w-4 h-4" />, camera: <Camera className="w-4 h-4" />,
  mountain: <Mountain className="w-4 h-4" />, bug: <Bug className="w-4 h-4" />,
  flower: <Sparkles className="w-4 h-4" />, sunscreen: <Sun className="w-4 h-4" />,
  egg: <Sparkles className="w-4 h-4" />, lantern: <Lightbulb className="w-4 h-4" />,
  pumpkin: <Sparkles className="w-4 h-4" />, cake: <Utensils className="w-4 h-4" />,
  pine: <TreePine className="w-4 h-4" />, mask: <Ghost className="w-4 h-4" />,
  prayer: <Star className="w-4 h-4" />, raincoat: <Umbrella className="w-4 h-4" />,
  icecream: <Droplets className="w-4 h-4" />, film: <Camera className="w-4 h-4" />,
  apple: <Sparkles className="w-4 h-4" />, gem: <Sparkles className="w-4 h-4" />,
  beer: <Wine className="w-4 h-4" />, ribbon: <Flag className="w-4 h-4" />,
  sprout: <Leaf className="w-4 h-4" />, sailboat: <Droplets className="w-4 h-4" />,
  shield: <Flag className="w-4 h-4" />, graduation: <BookOpen className="w-4 h-4" />,
  doll: <Sparkles className="w-4 h-4" />, smartphone: <Camera className="w-4 h-4" />,
  default: <Star className="w-4 h-4" />,
};

export function getIcon(name: string) { return iconMap[name] || iconMap.default; }

export function getImportanceColor(level: string, theme: string) {
  if (theme === 'light') {
    switch (level) {
      case 'S': return 'bg-red-100 text-red-600 border-red-200';
      case 'A': return 'bg-amber-100 text-amber-600 border-amber-200';
      case 'B': return 'bg-gray-100 text-gray-500 border-gray-200';
      default: return 'bg-gray-100 text-gray-500 border-gray-200';
    }
  }
  switch (level) {
    case 'S': return 'bg-red-500/20 text-red-400 border-red-500/30';
    case 'A': return 'bg-amber-500/20 text-amber-400 border-amber-500/30';
    case 'B': return 'bg-white/10 text-white/60 border-white/20';
    default: return 'bg-white/10 text-white/60 border-white/20';
  }
}
