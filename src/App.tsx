import { useState, useEffect, useCallback, useRef } from 'react';
import { format, addMonths } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import {
  Calendar, MapPin, Sun, CloudRain, Snowflake, Leaf,
  Thermometer, Star, PartyPopper, Gift, Sun as SunIcon, Moon,
  Shirt, Droplets, Wind, Sparkles, TreePine, Ghost,
  Umbrella, Tent, Flame, Heart, BookOpen, Briefcase,
  Bike, Dumbbell, Fish, Wine, Music, Home,
  Lightbulb, Trophy, Plane, Camera, Mountain,
  Utensils, Palette, Gamepad2, Flag, Bug,
  Loader2,
} from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { regions, getRegionData } from '@/data/regionData';
import type { RegionId, MonthlyData } from '@/types';
import NebulaBackground from '@/components/NebulaBackground';
import DataCard from '@/components/DataCard';

const regionIds: RegionId[] = ['us', 'europe', 'russia', 'middle-east', 'southeast-asia', 'australia', 'japan', 'korea', 'latin-america'];

const iconMap: Record<string, React.ReactNode> = {
  sun: <Sun className="w-5 h-5" />,
  snow: <Snowflake className="w-5 h-5" />,
  rain: <CloudRain className="w-5 h-5" />,
  leaf: <Leaf className="w-5 h-5" />,
  thermometer: <Thermometer className="w-4 h-4" />,
  wind: <Wind className="w-4 h-4" />,
  umbrella: <Umbrella className="w-4 h-4" />,
  tent: <Tent className="w-4 h-4" />,
  flame: <Flame className="w-4 h-4" />,
  heart: <Heart className="w-4 h-4" />,
  gift: <Gift className="w-4 h-4" />,
  tree: <TreePine className="w-4 h-4" />,
  ghost: <Ghost className="w-4 h-4" />,
  sparkles: <Sparkles className="w-4 h-4" />,
  party: <PartyPopper className="w-4 h-4" />,
  flag: <Flag className="w-4 h-4" />,
  shirt: <Shirt className="w-4 h-4" />,
  droplets: <Droplets className="w-4 h-4" />,
  gamepad: <Gamepad2 className="w-4 h-4" />,
  utensils: <Utensils className="w-4 h-4" />,
  palette: <Palette className="w-4 h-4" />,
  music: <Music className="w-4 h-4" />,
  home: <Home className="w-4 h-4" />,
  book: <BookOpen className="w-4 h-4" />,
  briefcase: <Briefcase className="w-4 h-4" />,
  bike: <Bike className="w-4 h-4" />,
  dumbbell: <Dumbbell className="w-4 h-4" />,
  fish: <Fish className="w-4 h-4" />,
  wine: <Wine className="w-4 h-4" />,
  moon: <Moon className="w-4 h-4" />,
  lightbulb: <Lightbulb className="w-4 h-4" />,
  trophy: <Trophy className="w-4 h-4" />,
  plane: <Plane className="w-4 h-4" />,
  camera: <Camera className="w-4 h-4" />,
  mountain: <Mountain className="w-4 h-4" />,
  bug: <Bug className="w-4 h-4" />,
  flower: <Sparkles className="w-4 h-4" />,
  sunscreen: <Sun className="w-4 h-4" />,
  ski: <Mountain className="w-4 h-4" />,
  candy: <Gift className="w-4 h-4" />,
  egg: <Sparkles className="w-4 h-4" />,
  lantern: <Lightbulb className="w-4 h-4" />,
  pumpkin: <Sparkles className="w-4 h-4" />,
  cake: <Utensils className="w-4 h-4" />,
  pine: <TreePine className="w-4 h-4" />,
  mask: <Ghost className="w-4 h-4" />,
  prayer: <Star className="w-4 h-4" />,
  raincoat: <Umbrella className="w-4 h-4" />,
  icecream: <Droplets className="w-4 h-4" />,
  film: <Camera className="w-4 h-4" />,
  apple: <Sparkles className="w-4 h-4" />,
  gem: <Sparkles className="w-4 h-4" />,
  beer: <Wine className="w-4 h-4" />,
  ribbon: <Flag className="w-4 h-4" />,
  sprout: <Leaf className="w-4 h-4" />,
  sailboat: <Droplets className="w-4 h-4" />,
  shield: <Flag className="w-4 h-4" />,
  graduation: <BookOpen className="w-4 h-4" />,
  doll: <Sparkles className="w-4 h-4" />,
  smartphone: <Camera className="w-4 h-4" />,
  default: <Star className="w-4 h-4" />,
};

function getIcon(name: string) {
  return iconMap[name] || iconMap.default;
}

function getImportanceColor(level: string, theme: string) {
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

interface LoadedMonth {
  date: Date;
  data: MonthlyData;
  isStartMonth: boolean;
}

function MonthSection({ item, regionName, theme, index }: { item: LoadedMonth; regionName: string; theme: string; index: number }) {
  const { data, date, isStartMonth } = item;
  if (!data) return null;

  // Calculate relative label
  const now = new Date();
  const curYear = now.getFullYear();
  const curMonth = now.getMonth();
  const itemYear = date.getFullYear();
  const itemMonth = date.getMonth();

  let relativeLabel: string;
  const monthDiff = (itemYear - curYear) * 12 + (itemMonth - curMonth);

  if (monthDiff === 0) relativeLabel = '当月';
  else if (monthDiff === 1) relativeLabel = '下个月';
  else if (monthDiff === -1) relativeLabel = '上个月';
  else if (monthDiff > 1) relativeLabel = `${monthDiff}个月后`;
  else relativeLabel = `${Math.abs(monthDiff)}个月前`;

  return (
    <div className={`mb-10 month-section-${index}`}>
      <div className="flex items-center gap-3 mb-5">
        <div
          className="px-3 py-1 rounded-full text-xs font-medium border"
          style={{
            background: isStartMonth ? 'rgba(239,68,68,0.15)' : 'rgba(167,139,250,0.15)',
            color: isStartMonth ? 'var(--accent-red)' : 'var(--accent-purple)',
            borderColor: isStartMonth ? 'rgba(239,68,68,0.3)' : 'rgba(167,139,250,0.3)',
          }}
        >
          {relativeLabel}
        </div>
        <h2 className="text-xl font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {format(date, 'yyyy年MM月', { locale: zhCN })} · {regionName}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Climate Card */}
        <DataCard title="气候概况" icon={<Thermometer className="w-5 h-5" />} delay={0}>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              {getIcon(data.climateIcon)}
              <span className="font-medium" style={{ color: 'var(--text-primary)' }}>{data.climate}</span>
            </div>
            <div className="flex items-center gap-2" style={{ color: 'var(--text-tertiary)' }}>
              <Thermometer className="w-3.5 h-3.5" />
              <span>{data.temperature}</span>
            </div>
          </div>
        </DataCard>

        {/* Holidays Card */}
        <DataCard title="节日" icon={<Star className="w-5 h-5" />} delay={1}>
          <ScrollArea className="h-[260px] custom-scrollbar pr-2">
            <div className="space-y-3">
              {data.holidays.map((holiday, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold border mt-0.5 ${getImportanceColor(holiday.importance, theme)}`}>
                    {holiday.importance}
                  </span>
                  <div>
                    <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{holiday.name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{holiday.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DataCard>

        {/* Activities Card */}
        <DataCard title="大型活动" icon={<PartyPopper className="w-5 h-5" />} delay={2}>
          <ScrollArea className="h-[260px] custom-scrollbar pr-2">
            <div className="space-y-3">
              {data.activities.map((activity, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border mt-0.5 shrink-0" style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)', borderColor: 'var(--tag-border)' }}>
                    {activity.type}
                  </span>
                  <div>
                    <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{activity.name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{activity.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DataCard>

        {/* Procurement Card */}
        <DataCard title="采购建议" icon={<Gift className="w-5 h-5" />} delay={3}>
          <ScrollArea className="h-[260px] custom-scrollbar pr-2">
            <div className="space-y-3">
              {data.procurement.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <div className="mt-0.5 shrink-0" style={{ color: 'var(--accent-purple)' }}>{getIcon(item.icon)}</div>
                  <div>
                    <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{item.name}</div>
                    <div className="text-xs" style={{ color: 'var(--text-tertiary)' }}>{item.reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DataCard>
      </div>
    </div>
  );
}

export default function App() {
  const [selectedDate, setSelectedDate] = useState(() => format(new Date(), 'yyyy-MM'));
  const [selectedRegion, setSelectedRegion] = useState<RegionId>('us');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loadedMonths, setLoadedMonths] = useState<LoadedMonth[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const datePickerRef = useRef<HTMLDivElement>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);
  const nextMonthIndex = useRef(0);
  const currentRegion = regions.find(r => r.id === selectedRegion);

  // Apply theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Load a specific month's data
  const loadMonthData = useCallback((date: Date, regionId: RegionId, isStartMonth: boolean): LoadedMonth | null => {
    const monthIdx = date.getMonth() + 1; // 1-based
    const data = getRegionData(regionId, monthIdx);
    if (!data) return null;
    return { date: new Date(date), data, isStartMonth };
  }, []);

  // Initialize: load start month + next 2 months
  const initializeData = useCallback(() => {
    const startDate = new Date(selectedDate + '-01');
    const months: LoadedMonth[] = [];

    for (let i = 0; i < 3; i++) {
      const targetDate = addMonths(startDate, i);
      const item = loadMonthData(targetDate, selectedRegion, i === 0);
      if (item) {
        months.push(item);
      }
    }

    setLoadedMonths(months);
    nextMonthIndex.current = 3;
    setHasMore(true);
    setIsLoading(false);
  }, [selectedDate, selectedRegion, loadMonthData]);

  // Load more months (infinite scroll)
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);

    // Small delay to show loading state
    setTimeout(() => {
      const startDate = new Date(selectedDate + '-01');
      const monthsToLoad = 2; // Load 2 more months at a time
      const newMonths: LoadedMonth[] = [];

      for (let i = 0; i < monthsToLoad; i++) {
        const targetDate = addMonths(startDate, nextMonthIndex.current + i);
        const item = loadMonthData(targetDate, selectedRegion, false);
        if (item) {
          newMonths.push(item);
        }
      }

      if (newMonths.length === 0) {
        setHasMore(false);
      } else {
        setLoadedMonths(prev => [...prev, ...newMonths]);
        nextMonthIndex.current += monthsToLoad;
      }

      setIsLoading(false);
    }, 300);
  }, [isLoading, hasMore, selectedDate, selectedRegion, loadMonthData]);

  // Initialize on mount or when date/region changes
  useEffect(() => {
    initializeData();
  }, [initializeData]);

  // Window scroll listener for infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!hasMore) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;
      // Trigger when within 400px of bottom
      if (scrollTop + clientHeight >= scrollHeight - 400) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore, hasMore]);

  // Date picker outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(e.target as Node)) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const startDateObj = new Date(selectedDate + '-01');

  return (
    <div className="relative min-h-screen">
      <NebulaBackground theme={theme} />

      <div
        className="relative z-10 min-h-screen flex flex-col"
        style={{
          background: theme === 'light' ? 'rgba(240,242,245,0.85)' : 'transparent',
          backdropFilter: theme === 'light' ? 'blur(2px)' : 'none'
        }}
      >
        {/* Header */}
        <header className="pt-12 pb-6 px-6 text-center relative">
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="glass-pill rounded-full p-3 flex items-center gap-2 transition-all duration-300"
              title={theme === 'dark' ? '切换到白天模式' : '切换到夜晚模式'}
            >
              {theme === 'dark' ? (
                <>
                  <SunIcon className="w-4 h-4 text-amber-400" />
                  <span className="text-xs text-white/60 hidden sm:inline">白天</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-indigo-500" />
                  <span className="text-xs hidden sm:inline" style={{ color: 'var(--text-secondary)' }}>夜晚</span>
                </>
              )}
            </button>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3" style={{ color: 'var(--text-primary)' }}>
            全球电商日历
          </h1>
          <p className="text-sm md:text-base max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
            探索全球市场节日、活动与采购机会
          </p>
        </header>

        {/* Control Deck */}
        <div className="px-6 max-w-5xl mx-auto w-full space-y-5 mb-8">
          <div className="flex justify-center">
            <div ref={datePickerRef} className="relative">
              <button
                onClick={() => setShowDatePicker(!showDatePicker)}
                className="glass-pill rounded-full px-6 py-3 flex items-center gap-3 cursor-pointer"
                style={{ color: 'var(--text-primary)' }}
              >
                <Calendar className="w-4 h-4" style={{ color: 'var(--accent-red)' }} />
                <span className="text-sm font-medium">
                  {format(startDateObj, 'yyyy年MM月', { locale: zhCN })}
                </span>
                <span className="mx-1" style={{ color: 'var(--text-tertiary)' }}>起</span>
              </button>

              {showDatePicker && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 glass-pill rounded-2xl p-4 z-50 min-w-[280px]" style={{ background: 'var(--glass-bg)' }}>
                  <div className="text-xs mb-3 text-center" style={{ color: 'var(--text-tertiary)' }}>选择起始月份</div>
                  <input
                    type="month"
                    value={selectedDate}
                    onChange={(e) => {
                      setSelectedDate(e.target.value);
                      setShowDatePicker(false);
                    }}
                    className="w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none"
                    style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)' }}
                  />
                  <div className="mt-3 flex justify-center">
                    <button
                      onClick={() => {
                        setSelectedDate(format(new Date(), 'yyyy-MM'));
                        setShowDatePicker(false);
                      }}
                      className="text-xs transition-colors"
                      style={{ color: 'var(--accent-red)' }}
                    >
                      回到今天
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Region Selector */}
          <div className="flex justify-center">
            <div className="flex gap-2 overflow-x-auto pb-2 max-w-full" style={{ scrollbarWidth: 'none' }}>
              {regionIds.map((id) => {
                const region = regions.find(r => r.id === id);
                return (
                  <button
                    key={id}
                    onClick={() => setSelectedRegion(id)}
                    className={`region-tab flex items-center gap-2 ${selectedRegion === id ? 'active' : ''}`}
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{region?.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Data Grid - Infinite Scroll */}
        <div className="flex-1 px-6">
          <div className="max-w-7xl mx-auto">
            {loadedMonths.length === 0 && !isLoading && (
              <div className="text-center py-20">
                <p style={{ color: 'var(--text-tertiary)' }}>暂无该地区数据</p>
              </div>
            )}

            {loadedMonths.map((item, index) => (
              <MonthSection
                key={`${selectedRegion}-${format(item.date, 'yyyy-MM')}`}
                item={item}
                regionName={currentRegion?.name || ''}
                theme={theme}
                index={index}
              />
            ))}

            {/* Loading sentinel */}
            <div ref={loadMoreRef} className="py-8 flex flex-col items-center justify-center">
              {isLoading && (
                <div className="flex items-center gap-3" style={{ color: 'var(--text-secondary)' }}>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span className="text-sm">加载更多月份...</span>
                </div>
              )}
              {!hasMore && loadedMonths.length > 0 && (
                <div className="text-sm" style={{ color: 'var(--text-tertiary)' }}>
                  已加载全部数据
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 text-center text-xs" style={{ color: 'var(--text-tertiary)' }}>
          <p>全球电商日历 · 实时市场洞察</p>
        </footer>
      </div>
    </div>
  );
}
