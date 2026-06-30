const PLATFORM_LOGO_MAP: Record<string, string> = {
  'Amazon': './logos/amazon.png', 'Amazon EU': './logos/amazon.png', 'Amazon.ae': './logos/amazon.png',
  'Amazon.au': './logos/amazon.png', 'Amazon.co.jp': './logos/amazon.png', 'Amazon.br': './logos/amazon.png',
  'Temu': './logos/temu.png', 'TikTok Shop': './logos/tiktokshop.png', 'eBay': './logos/ebay.png',
  'Shein': './logos/shein.png', 'Ozon': './logos/ozon.png', 'Wildberries': './logos/wildberries.png',
  'Noon': './logos/noon.png', 'Shopee': './logos/shopee.png', 'Lazada': './logos/lazada.png',
  'Mercado Libre': './logos/mercadolibre.png', 'Coupang': './logos/coupang.png',
  'AliExpress': './logos/aliexpress.png', 'Jumia': './logos/jumia.png', 'Daraz': './logos/daraz.png',
  'Wayfair': './logos/wayfair.png',
};

export function getPlatformLogo(name: string): string | null {
  if (PLATFORM_LOGO_MAP[name]) return PLATFORM_LOGO_MAP[name];
  const lowerName = name.toLowerCase();
  for (const [key, val] of Object.entries(PLATFORM_LOGO_MAP)) {
    if (key.toLowerCase() === lowerName) return val;
  }
  if (lowerName.startsWith('amazon')) return './logos/amazon.png';
  return null;
}
