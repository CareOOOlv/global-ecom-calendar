import { WEATHER_CITIES, WEATHER_ICONS, type WeatherCity } from '../data/weatherCities';

const HOST = 'https://n73jphyg4c.re.qweatherapi.com';
const KEY = '495fa5bbe04144b9b755c4336963f447';

export interface WeatherNow {
  temp: string;
  text: string;
  icon: string;
  windDir: string;
  windScale: string;
  humidity: string;
  feelsLike: string;
}

export interface CityWeather {
  city: WeatherCity;
  weather: WeatherNow | null;
  error?: string;
}

// Global cache (valid for 30 min)
const cache = new Map<string, { data: WeatherNow; ts: number }>();
const CACHE_TTL = 30 * 60 * 1000; // 30 min

export async function fetchWeatherForCity(city: WeatherCity): Promise<CityWeather> {
  const cacheKey = city.locationId;
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.ts < CACHE_TTL) {
    return { city, weather: cached.data };
  }

  try {
    const resp = await fetch(`${HOST}/v7/weather/now?location=${city.locationId}&key=${KEY}`);
    const data = await resp.json();
    if (data.code !== '200') {
      return { city, weather: null, error: data.code || 'unknown' };
    }
    const now: WeatherNow = {
      temp: data.now.temp,
      text: data.now.text,
      icon: WEATHER_ICONS[data.now.icon] || '🌤️',
      windDir: data.now.windDir,
      windScale: data.now.windScale,
      humidity: data.now.humidity,
      feelsLike: data.now.feelsLike,
    };
    cache.set(cacheKey, { data: now, ts: Date.now() });
    return { city, weather: now };
  } catch (e) {
    return { city, weather: null, error: String(e) };
  }
}

/** Fetch weather for all cities in a region */
export async function fetchWeatherForRegion(regionId: string): Promise<CityWeather[]> {
  const cities = WEATHER_CITIES[regionId];
  if (!cities) return [];
  const results = await Promise.all(cities.map(fetchWeatherForCity));
  return results;
}

/** Fetch weather for all cities across all regions (used for pre-warming) */
let allWeatherCache: CityWeather[] | null = null;
let allWeatherCacheTs = 0;

export async function fetchAllWeather(): Promise<Record<string, CityWeather>> {
  if (allWeatherCache && Date.now() - allWeatherCacheTs < CACHE_TTL) {
    const map: Record<string, CityWeather> = {};
    for (const c of allWeatherCache) map[c.city.locationId] = c;
    return map;
  }

  const allCities: WeatherCity[] = [];
  for (const cities of Object.values(WEATHER_CITIES)) {
    for (const c of cities) {
      // deduplicate by locationId
      if (!allCities.find(x => x.locationId === c.locationId)) {
        allCities.push(c);
      }
    }
  }

  const results = await Promise.all(allCities.map(fetchWeatherForCity));
  allWeatherCache = results;
  allWeatherCacheTs = Date.now();

  const map: Record<string, CityWeather> = {};
  for (const c of results) map[c.city.locationId] = c;
  return map;
}
