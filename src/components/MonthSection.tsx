import { format } from 'date-fns';
import { zhCN } from 'date-fns/locale';
import {
  Thermometer, CloudRain, Droplets, Wind, Sun, Star,
  Megaphone, Flame, Clock, CalendarDays, AlertCircle,
} from 'lucide-react';
import DataCard from '@/components/DataCard';
import { ScrollArea } from '@/components/ScrollArea';
import { getIcon, getImportanceColor } from '@/lib/icons';
import { getCountdown, type CountdownResult } from '@/lib/countdown';
import type { MonthlyData } from '@/types';

interface LoadedMonth {
  date: Date;
  data: MonthlyData;
  isStartMonth: boolean;
}

interface MonthSectionProps {
  item: LoadedMonth;
  regionName: string;
  theme: string;
}

/** 倒计时徽标颜色映射 */
function urgencyColors(urgency: CountdownResult['urgency'], isPast: boolean) {
  if (isPast) return 'bg-gray-100 text-gray-400 border-gray-200';
  switch (urgency) {
    case 0: return 'bg-gray-100 text-gray-500 border-gray-200';
    case 1: return 'bg-red-50 text-red-600 border-red-200';       // <=7天 红色紧急
    case 2: return 'bg-amber-50 text-amber-600 border-amber-200';   // <=30天 黄色提醒
    case 3: default: return 'bg-slate-50 text-slate-500 border-slate-200';
  }
}

/** 倒计时小徽标 */
function CountdownBadge({ cd }: { cd: CountdownResult }) {
  if (!cd.isExact && cd.label === '当月') return null; // 当月模糊日期不显示
  if (cd.isPast && cd.daysLeft !== null && cd.daysLeft < -30) return null; // 很久以前的也不显示

  return (
    <span className={`inline-flex items-center gap-0.5 px-1.5 py-0 rounded-[4px] text-[10px] font-medium border shrink-0 ${urgencyColors(cd.urgency, cd.isPast)}`}>
      <CalendarDays className="w-2.5 h-2.5" />
      {cd.label}
    </span>
  );
}

export default function MonthSection({ item, regionName, theme }: MonthSectionProps) {
  const { data, date, isStartMonth } = item;
  if (!data) return null;

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

  // 预计算所有倒计时
  const holidaysWithCd = data.holidays.map(h => ({
    ...h,
    cd: getCountdown(h.date, itemYear, itemMonth + 1),
    isHoliday: true as const,
  }));

  const promosWithCd = data.promos.map(p => ({
    ...p,
    cd: getCountdown(p.date, itemYear, itemMonth + 1),
  }));

  const activitiesDisplay = data.activities.map(a => ({ ...a, isHoliday: false as const }));

  // 按紧迫度排序节日（最近的排前面）
  const sortedHolidays = [...holidaysWithCd].sort((a, b) => {
    if (a.cd.isExact && b.cd.isExact) return (a.cd.daysLeft ?? 999) - (b.cd.daysLeft ?? 999);
    if (a.cd.isExact) return -1;
    if (b.cd.isExact) return 1;
    return a.cd.urgency - b.cd.urgency;
  });

  const sortedPromos = [...promosWithCd].sort((a, b) => {
    if (a.cd.isExact && b.cd.isExact) return (a.cd.daysLeft ?? 999) - (b.cd.daysLeft ?? 999);
    if (a.cd.isExact) return -1;
    if (b.cd.isExact) return 1;
    return a.cd.urgency - b.cd.urgency;
  });

  return (
    <div className="mb-8">
      {/* 月标题 */}
      <div className="flex items-center gap-3 mb-4">
        <div className="px-3 py-1 rounded-full text-xs font-medium border"
          style={{
            background: isStartMonth ? 'rgba(239,68,68,0.15)' : 'rgba(167,139,250,0.15)',
            color: isStartMonth ? 'var(--accent-red)' : 'var(--accent-purple)',
            borderColor: isStartMonth ? 'rgba(239,68,68,0.3)' : 'rgba(167,139,250,0.3)',
          }}>
          {relativeLabel}
        </div>
        <h2 className="text-lg font-semibold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          {format(date, 'yyyy年MM月', { locale: zhCN })} · {regionName}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
        {/* Climate */}
        <DataCard title="气候概况" icon={<Thermometer className="w-5 h-5" />} delay={0}>
          <div className="space-y-2">
            <div className="flex items-center gap-2">{getIcon(data.climateIcon)}<span className="font-medium text-sm" style={{ color: 'var(--text-primary)' }}>{data.climate}</span></div>
            <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-tertiary)' }}><Thermometer className="w-3.5 h-3.5" /><span>{data.temperature}</span></div>
            <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--text-secondary)' }}><CloudRain className="w-3.5 h-3.5" /><span>{data.weatherDetail}</span></div>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 mt-1 pt-2 border-t text-[10px]" style={{ borderColor: 'var(--glass-border)', color: 'var(--text-tertiary)' }}>
              <div className="flex items-center gap-1"><Droplets className="w-3 h-3" />{data.humidity}</div>
              <div className="flex items-center gap-1"><CloudRain className="w-3 h-3" />{data.precipitation}</div>
              <div className="flex items-center gap-1"><Wind className="w-3 h-3" />{data.wind}</div>
              <div className="flex items-center gap-1"><Sun className="w-3 h-3" />{data.daylight}</div>
            </div>
          </div>
        </DataCard>

        {/* Holidays + Activities —— 带倒计时 + 优化排版 */}
        <DataCard title="节日与活动" icon={<Star className="w-5 h-5" />} delay={1}>
          <ScrollArea className="h-[260px] custom-scrollbar pr-2">
            <div className="space-y-2">
              {sortedHolidays.map((holiday, idx) => (
                <div key={`h-${idx}`} className="group flex items-start gap-2 p-1.5 -mx-1 rounded-md transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.03]">
                  <span className={`inline-flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold border shrink-0 mt-0.5 ${getImportanceColor(holiday.importance, theme)}`}>{holiday.importance}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="text-xs font-medium leading-tight" style={{ color: 'var(--text-primary)' }}>{holiday.name}</span>
                      <CountdownBadge cd={holiday.cd} />
                    </div>
                    <div className="text-[10px] mt-0.5" style={{ color: 'var(--text-tertiary)' }}>{holiday.date}</div>
                  </div>
                </div>
              ))}
              {/* 分隔线 */}
              {sortedHolidays.length > 0 && activitiesDisplay.length > 0 && (
                <div className="border-t my-1" style={{ borderColor: 'var(--glass-border)' }} />
              )}
              {activitiesDisplay.map((activity, idx) => (
                <div key={`a-${idx}`} className="flex items-start gap-2 p-1.5 -mx-1 rounded-md transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.03]">
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-medium border mt-0.5 shrink-0" style={{ background: 'var(--tag-bg)', color: 'var(--tag-text)', borderColor: 'var(--tag-border)' }}>{activity.type}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium leading-tight" style={{ color: 'var(--text-primary)' }}>{activity.name}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DataCard>

        {/* Platform Promos —— 带倒计时 + 优化排版 */}
        <DataCard title="平台大促" icon={<Megaphone className="w-5 h-5" />} delay={2}>
          <ScrollArea className="h-[260px] custom-scrollbar pr-2">
            <div className="space-y-2">
              {sortedPromos.length === 0 && (
                <div className="flex flex-col items-center gap-1.5 py-4" style={{ color: 'var(--text-tertiary)' }}>
                  <AlertCircle className="w-6 h-6 opacity-30" />
                  <span className="text-xs">本月暂无已知大促</span>
                </div>
              )}
              {sortedPromos.map((promo, idx) => (
                <div key={idx} className="group p-2 -mx-1 rounded-lg border transition-all hover:shadow-sm"
                  style={{
                    borderColor: promo.cd.urgency === 1 && !promo.cd.isPast
                      ? 'rgba(239,68,68,0.2)'
                      : 'var(--glass-border)',
                    background: promo.cd.urgency === 1 && !promo.cd.isPast
                      ? 'rgba(239,68,68,0.04)'
                      : 'transparent',
                  }}>
                  <div className="flex items-start gap-2">
                    <span className={`inline-flex items-center justify-center w-5 h-5 rounded text-[10px] font-bold border shrink-0 mt-0.5 ${getImportanceColor(promo.importance, theme)}`}>{promo.importance}</span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-xs font-semibold leading-tight" style={{ color: 'var(--text-primary)' }}>{promo.platform}</span>
                        <CountdownBadge cd={promo.cd} />
                      </div>
                      <div className="text-[11px] font-medium mt-0.5" style={{ color: 'var(--text-secondary)' }}>{promo.promoName}</div>
                      <div className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>{promo.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DataCard>

        {/* Hot Products */}
        <DataCard title="当下热销" icon={<Flame className="w-5 h-5" />} delay={3}>
          <ScrollArea className="h-[260px] custom-scrollbar pr-2">
            <div className="space-y-2">
              {data.procurement.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-1.5 -mx-1 rounded-md transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.03]">
                  <div className="mt-0.5 shrink-0" style={{ color: 'var(--accent-purple)' }}>{getIcon(item.icon)}</div>
                  <div>
                    <div className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{item.name}</div>
                    <div className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>{item.reason}</div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </DataCard>

        {/* Future Procurement */}
        <DataCard title="选品开发建议" icon={<Clock className="w-5 h-5" />} delay={4}>
          <ScrollArea className="h-[260px] custom-scrollbar pr-2">
            <div className="space-y-2">
              {data.futureProcurement.length === 0 && (
                <div className="flex flex-col items-center gap-1.5 py-4" style={{ color: 'var(--text-tertiary)' }}>
                  <Clock className="w-6 h-6 opacity-30" />
                  <span className="text-xs">暂无建议</span>
                </div>
              )}
              {data.futureProcurement.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-1.5 -mx-1 rounded-md transition-colors hover:bg-black/[0.03] dark:hover:bg-white/[0.03]">
                  <div className="mt-0.5 shrink-0" style={{ color: 'var(--accent-green)' }}>{getIcon(item.icon)}</div>
                  <div>
                    <div className="text-xs font-medium" style={{ color: 'var(--text-primary)' }}>{item.name}</div>
                    <div className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>{item.reason}</div>
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
