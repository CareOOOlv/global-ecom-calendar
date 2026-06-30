const FALLBACK_RATES: Record<string, number> = {
  USD: 7.25, EUR: 7.85, GBP: 9.25, JPY: 0.048, KRW: 0.0054,
  THB: 0.21, RUB: 0.083, AED: 1.97, SAR: 1.93, BRL: 1.29,
  AUD: 4.78, MXN: 0.39,
};

export async function fetchRateFor(code: string): Promise<number> {
  try {
    const res = await fetch(`https://open.er-api.com/v6/latest/${code}`, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) return FALLBACK_RATES[code] || 1;
    const data = await res.json();
    return data.rates?.CNY || FALLBACK_RATES[code] || 1;
  } catch {
    return FALLBACK_RATES[code] || 1;
  }
}

export function formatRate(r: number) {
  if (r >= 10) return r.toFixed(2);
  if (r >= 1) return r.toFixed(3);
  return r.toFixed(4);
}

export function formatInverse(r: number) {
  const inv = 1 / r;
  if (inv >= 100) return inv.toFixed(1);
  if (inv >= 10) return inv.toFixed(2);
  return inv.toFixed(3);
}
