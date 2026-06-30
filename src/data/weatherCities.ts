// 和风天气城市映射 - sub-region label → city name + Location ID
export interface WeatherCity {
  /** subRegion name (as in regionData.ts) */
  region: string;
  /** Display city name */
  city: string;
  /** QWeather Location ID */
  locationId: string;
}

export const WEATHER_CITIES: Record<string, WeatherCity[]> = {
  'north-america': [
    { region: '美国', city: '纽约', locationId: '1E98E' },
    { region: '加拿大', city: '多伦多', locationId: '23CA3' },
  ],
  europe: [
    { region: '英国', city: '伦敦', locationId: 'BA333' },
    { region: '法国', city: '巴黎', locationId: '7FA1' },
    { region: '德国', city: '柏林', locationId: '52271' },
    { region: '西班牙', city: '马德里', locationId: 'B1F97' },
    { region: '葡萄牙', city: '里斯本', locationId: 'A7E44' },
  ],
  'middle-east': [
    { region: '沙特', city: '利雅得', locationId: 'D03F' },
    { region: '阿联酋', city: '迪拜', locationId: '693C2' },
    { region: '卡塔尔', city: '多哈', locationId: '4FA12' },
    { region: '土耳其', city: '伊斯坦布尔', locationId: '6BCF4' },
    { region: '以色列', city: '特拉维夫', locationId: 'D9459' },
  ],
  'southeast-asia': [
    { region: '新加坡', city: '新加坡', locationId: '646E3' },
    { region: '马来西亚', city: '吉隆坡', locationId: '64C48' },
    { region: '泰国', city: '曼谷', locationId: 'EDF82' },
    { region: '越南', city: '河内', locationId: '7EADA' },
    { region: '印尼', city: '雅加达', locationId: '3482C' },
    { region: '菲律宾', city: '马尼拉', locationId: '52A85' },
  ],
  japan: [
    { region: '本州(东京)', city: '东京', locationId: '65E77' },
    { region: '北海道', city: '札幌', locationId: 'AC16C' },
    { region: '九州', city: '福冈', locationId: 'CECC7' },
  ],
  korea: [
    { region: '首尔', city: '首尔', locationId: '485B3' },
    { region: '釜山', city: '釜山', locationId: 'E4617' },
  ],
  'latin-america': [
    { region: '墨西哥', city: '墨西哥城', locationId: 'C5CFA' },
    { region: '巴西', city: '圣保罗', locationId: '46943' },
    { region: '阿根廷', city: '布宜诺斯艾利斯', locationId: '97E5D' },
    { region: '智利', city: '圣地亚哥', locationId: '85436' },
    { region: '哥伦比亚', city: '波哥大', locationId: 'B6B8B' },
  ],
  australia: [
    { region: '澳大利亚', city: '悉尼', locationId: '1BABF' },
    { region: '新西兰', city: '奥克兰', locationId: '1831B' },
  ],
  russia: [
    { region: '俄罗斯西部', city: '莫斯科', locationId: '554F' },
    { region: '乌克兰', city: '基辅', locationId: '9C492' },
    { region: '波兰', city: '华沙', locationId: '6EB9E' },
  ],
  japan: [
    { region: '本州(东京)', city: '东京', locationId: '65E77' },
    { region: '北海道', city: '札幌', locationId: '8C328' },
    { region: '九州', city: '福冈', locationId: '8EFDB' },
  ],
};

// Also map by individual sub-region name for quick lookup
export const WEATHER_BY_REGION: Record<string, WeatherCity> = {};
for (const cities of Object.values(WEATHER_CITIES)) {
  for (const c of cities) {
    WEATHER_BY_REGION[c.region] = c;
  }
}

// Weather icon mapping: QWeather icon code → simple description
export const WEATHER_ICONS: Record<string, string> = {
  '100': '☀️', '101': '⛅', '102': '⛅', '103': '⛅', '104': '☁️',
  '150': '🌙', '151': '🌙', '152': '🌙', '153': '🌙', '154': '☁️',
  '300': '🌦️', '301': '🌧️', '302': '⛈️', '303': '⛈️', '304': '🌨️',
  '305': '🌦️', '306': '🌧️', '307': '🌧️', '308': '🌧️', '309': '🌧️',
  '310': '🌧️', '311': '🌧️', '312': '🌧️', '313': '🌨️', '314': '🌧️',
  '315': '🌧️', '316': '🌧️', '317': '🌧️', '318': '🌧️',
  '400': '🌨️', '401': '❄️', '402': '❄️', '403': '🌨️', '404': '🌧️',
  '405': '🌧️', '406': '🌧️', '407': '🌨️',
  '500': '🌫️', '501': '🌫️', '502': '🌫️', '503': '💨', '504': '💨',
  '507': '💨', '508': '💨',
  '900': '🔥', '901': '❄️',
};
