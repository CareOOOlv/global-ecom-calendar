export interface Holiday {
  name: string;
  date: string;
  importance: 'S' | 'A' | 'B';
}

export interface Activity {
  name: string;
  type: string;
  description: string;
}

export interface ProcurementItem {
  name: string;
  icon: string;
  reason: string;
}

export interface PlatformPromo {
  platform: string;
  promoName: string;
  date: string;
  importance: 'S' | 'A' | 'B';
}

export interface MonthlyData {
  month: number;
  monthName: string;
  climate: string;
  temperature: string;
  climateIcon: string;
  weatherDetail: string;
  humidity: string;
  precipitation: string;
  wind: string;
  daylight: string;
  holidays: Holiday[];
  activities: Activity[];
  promos: PlatformPromo[];
  procurement: ProcurementItem[];
  futureProcurement: ProcurementItem[];
}

export interface RegionInfo {
  currency: string;
  currencyCode: string;
  currencySymbol: string;
  platforms: string[];
}

export interface RegionData {
  id: string;
  name: string;
  flag: string;
  info: RegionInfo;
  data: Record<number, MonthlyData>;
}

export type RegionId = 'us' | 'europe' | 'russia' | 'middle-east' | 'southeast-asia' | 'australia' | 'japan' | 'korea' | 'latin-america';
