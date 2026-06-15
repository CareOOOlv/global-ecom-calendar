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

export interface MonthlyData {
  month: number;
  monthName: string;
  climate: string;
  temperature: string;
  climateIcon: string;
  holidays: Holiday[];
  activities: Activity[];
  procurement: ProcurementItem[];
}

export interface RegionData {
  id: string;
  name: string;
  flag: string;
  data: Record<number, MonthlyData>;
}

export type RegionId = 'us' | 'europe' | 'russia' | 'middle-east' | 'southeast-asia' | 'australia' | 'japan' | 'korea' | 'latin-america';
