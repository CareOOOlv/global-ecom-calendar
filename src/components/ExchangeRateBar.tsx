import { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';
import type { RegionData } from '@/types';
import { fetchRateFor, formatRate, formatInverse } from '@/lib/exchangeRate';
import { getPlatformLogo } from '@/lib/platformLogos';

export default function ExchangeRateBar({ region }: { region: RegionData }) {
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    fetchRateFor(region.info.currencyCode).then(r => {
      if (mounted) { setRate(r); setLoading(false); }
    });
    return () => { mounted = false; };
  }, [region.id, region.info.currencyCode]);

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-0">
      <div className="flex items-center gap-2 md:gap-5 flex-1 min-w-0">
        <div className="w-9 h-9 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-base md:text-2xl font-bold shrink-0" style={{ background: 'var(--accent-purple)', color: '#fff' }}>
          {region.info.currencySymbol}
        </div>
        <div className="flex flex-col md:flex-row md:items-center gap-0.5 md:gap-4">
          <div className="min-w-0">
            <span className="text-[10px] md:text-base font-medium" style={{ color: 'var(--text-tertiary)' }}>
              1 {region.info.currencyCode} ={' '}
            </span>
            <span className="text-base md:text-2xl lg:text-3xl font-bold tabular-nums" style={{ color: 'var(--text-primary)' }}>
              {loading ? '...' : `¥${formatRate(rate || 0)}`}
            </span>
          </div>
          <div className="hidden md:flex flex-col items-center px-1.5 py-1 rounded-lg shrink-0" style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
            <TrendingUp className="w-3.5 h-3.5" style={{ color: 'var(--accent-green)' }} />
            <span className="text-[9px] font-bold my-0.5" style={{ color: 'var(--text-tertiary)' }}>⇄</span>
            <TrendingUp className="w-3.5 h-3.5 rotate-180" style={{ color: 'var(--accent-red)' }} />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] md:text-base font-medium" style={{ color: 'var(--text-tertiary)' }}>
              1 CNY ={' '}
            </span>
            <span className="text-base md:text-2xl lg:text-3xl font-bold tabular-nums" style={{ color: 'var(--text-primary)' }}>
              {loading ? '...' : `${formatInverse(rate || 1)} ${region.info.currencyCode}`}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-3 md:pl-6 md:border-l shrink-0 overflow-x-auto pb-1 md:pb-0" style={{ borderColor: 'var(--glass-border)' }}>
        {region.info.platforms.map(p => {
          const logoPath = getPlatformLogo(p);
          return logoPath ? (
            <div key={p} className="w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-lg md:rounded-2xl flex items-center justify-center p-1.5 md:p-2.5 shrink-0" title={p}
              style={{ background: '#fff', border: '1px solid #E5E7EB' }}>
              <img src={logoPath} alt={p} className="w-full h-full object-contain" loading="lazy"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
