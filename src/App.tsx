import { useState, useEffect, useCallback, useRef } from 'react';
import { format, addMonths } from 'date-fns';
import { regions, getRegionData } from '@/data/regionData';
import type { RegionId, MonthlyData } from '@/types';
import NebulaBackground from '@/components/NebulaBackground';
import Header from '@/components/Header';
import RegionSelector from '@/components/RegionSelector';
import ExchangeRateBar from '@/components/ExchangeRateBar';
import MonthSection from '@/components/MonthSection';
import NewsTicker from '@/components/NewsTicker';

interface LoadedMonth {
  date: Date;
  data: MonthlyData;
  isStartMonth: boolean;
}

export default function App() {
  const [selectedDate, setSelectedDate] = useState(() => format(new Date(), 'yyyy-MM'));
  const [selectedRegion, setSelectedRegion] = useState<RegionId>('us');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [loadedMonths, setLoadedMonths] = useState<LoadedMonth[]>([]);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const currentRegion = regions.find(r => r.id === selectedRegion);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [theme]);

  const loadMonthData = useCallback((date: Date, regionId: RegionId, isStartMonth: boolean): LoadedMonth | null => {
    const monthIdx = date.getMonth() + 1;
    const data = getRegionData(regionId, monthIdx);
    if (!data) return null;
    return { date: new Date(date), data, isStartMonth };
  }, []);

  const initializeData = useCallback(() => {
    const startDate = new Date(selectedDate + '-01');
    const months: LoadedMonth[] = [];
    for (let i = 0; i < 6; i++) {
      const targetDate = addMonths(startDate, i);
      const item = loadMonthData(targetDate, selectedRegion, i === 0);
      if (item) months.push(item);
    }
    setLoadedMonths(months);
  }, [selectedDate, selectedRegion, loadMonthData]);

  useEffect(() => { initializeData(); }, [initializeData]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (datePickerRef.current && !datePickerRef.current.contains(e.target as Node)) {
        setShowDatePicker(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative min-h-screen">
      <NebulaBackground theme={theme} />

      <div className="relative z-10 min-h-screen flex flex-col" style={{
        background: theme === 'light' ? 'rgba(240,242,245,0.85)' : 'transparent',
        backdropFilter: theme === 'light' ? 'blur(2px)' : 'none'
      }}>
        <Header theme={theme} onToggleTheme={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />

        <RegionSelector
          selectedDate={selectedDate}
          selectedRegion={selectedRegion}
          showDatePicker={showDatePicker}
          onDateChange={setSelectedDate}
          onRegionChange={setSelectedRegion}
          onToggleDatePicker={() => setShowDatePicker(!showDatePicker)}
          datePickerRef={datePickerRef}
        />

        {currentRegion && (
          <div className="px-3 md:px-6 max-w-6xl mx-auto w-full mb-3 md:mb-4">
            <div className="glass-card rounded-xl px-3 py-2.5 md:px-4 md:py-3">
              <ExchangeRateBar region={currentRegion} />
            </div>
          </div>
        )}

        {/* 跨境资讯滚动条 */}
        <div className="px-3 md:px-6 max-w-6xl mx-auto w-full mb-3">
          <NewsTicker />
        </div>

        <div className="flex-1 px-6">
          <div className="max-w-7xl mx-auto">
            {loadedMonths.length === 0 && (
              <div className="text-center py-20"><p style={{ color: 'var(--text-tertiary)' }}>暂无该地区数据</p></div>
            )}
            {loadedMonths.map((item) => (
              <MonthSection
                key={`${selectedRegion}-${format(item.date, 'yyyy-MM')}`}
                item={item}
                regionName={currentRegion?.name || ''}
                theme={theme}
              />
            ))}
            {loadedMonths.length > 0 && (
              <div className="py-6 text-center text-sm" style={{ color: 'var(--text-tertiary)' }}>已显示全部6个月内容</div>
            )}
          </div>
        </div>

        <footer className="py-4 text-center text-xs" style={{ color: 'var(--text-tertiary)' }}>
          <p>全球电商日历 · 实时市场洞察</p>
        </footer>
      </div>
    </div>
  );
}
