import { format, addMonths } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { RegionId } from '@/types';
import { regions } from '@/data/regionData';

const regionIds: RegionId[] = ['us', 'europe', 'russia', 'middle-east', 'southeast-asia', 'australia', 'japan', 'korea', 'latin-america'];

interface RegionSelectorProps {
  selectedDate: string;
  selectedRegion: RegionId;
  showDatePicker: boolean;
  onDateChange: (date: string) => void;
  onRegionChange: (region: RegionId) => void;
  onToggleDatePicker: () => void;
  datePickerRef: React.RefObject<HTMLDivElement | null>;
}

export default function RegionSelector({
  selectedDate, selectedRegion, showDatePicker,
  onDateChange, onRegionChange, onToggleDatePicker, datePickerRef
}: RegionSelectorProps) {
  const startDateObj = new Date(selectedDate + '-01');

  return (
    <div className="px-4 md:px-6 max-w-5xl mx-auto w-full mb-3">
      <div className="flex items-center justify-center gap-2 md:gap-4">
        <div ref={datePickerRef} className="relative shrink-0">
          <div className="glass-pill rounded-full px-2 py-1.5 flex items-center gap-1 cursor-pointer text-sm" style={{ color: 'var(--text-primary)' }}>
            <button
              onClick={(e) => { e.stopPropagation(); const d = addMonths(new Date(selectedDate + '-01'), -1); onDateChange(format(d, 'yyyy-MM')); }}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
              title="上个月">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={onToggleDatePicker} className="px-3 py-1 font-medium tabular-nums">
              {format(startDateObj, 'yyyy年MM月', { locale: zhCN })}
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); const d = addMonths(new Date(selectedDate + '-01'), 1); onDateChange(format(d, 'yyyy-MM')); }}
              className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
              title="下个月">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {showDatePicker && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 glass-pill rounded-2xl p-4 z-50 min-w-[260px]" style={{ background: 'var(--glass-bg)' }}>
              <div className="text-xs mb-2 text-center" style={{ color: 'var(--text-tertiary)' }}>选择起始月份</div>
              <input type="month" value={selectedDate}
                onChange={(e) => { onDateChange(e.target.value); onToggleDatePicker(); }}
                className="w-full rounded-xl px-4 py-2.5 text-sm focus:outline-none"
                style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-primary)' }} />
              <div className="mt-2 flex justify-center">
                <button onClick={() => { onDateChange(format(new Date(), 'yyyy-MM')); onToggleDatePicker(); }} className="text-xs" style={{ color: 'var(--accent-red)' }}>回到今天</button>
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-1.5 overflow-x-auto pb-1 max-w-full no-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {regionIds.map((id) => {
            const region = regions.find(r => r.id === id);
            return (
              <button key={id} onClick={() => onRegionChange(id)}
                className={`region-tab flex items-center gap-1 text-[10px] md:text-xs px-2 md:px-3 py-1.5 shrink-0 ${selectedRegion === id ? 'active' : ''}`}>
                <span>{region?.flag}</span><span>{region?.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
