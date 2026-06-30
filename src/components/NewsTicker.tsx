import { useEffect, useState, useRef } from 'react';

interface NewsItem {
  id: number;
  title: string;
  url: string;
  source: string;
  publishedAt: string | null;
}

interface NewsData {
  updatedAt: string;
  articles: NewsItem[];
}

export default function NewsTicker() {
  const [news, setNews] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  // 自动滚动效果
  useEffect(() => {
    if (!scrollRef.current || paused || !news || news.articles.length === 0) return;
    const el = scrollRef.current;
    let pos = 0;
    const step = () => {
      pos -= 0.5;
      if (Math.abs(pos) >= el.scrollWidth / 2) pos = 0;
      el.style.transform = `translateX(${pos}px)`;
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [paused, news]);

  async function fetchNews() {
    setLoading(true);
    try {
      // 生产环境：直接读 main 分支的最新 news.json（GitHub Action 更新后无需重建即可生效）
      const urls = [
        '/news.json', // 本地开发
        'https://raw.githubusercontent.com/CareOOOlv/global-ecom-calendar/main/public/news.json',
      ];
      let data: NewsData | null = null;
      for (const url of urls) {
        try {
          const res = await fetch(url + '?t=' + Date.now(), { cache: 'no-store' });
          if (res.ok) { data = await res.json(); break; }
        } catch { /* ignore */ }
      }
      if (data) setNews(data);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
        <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse" />
        <span className="text-xs text-white/40">加载跨境资讯...</span>
      </div>
    );
  }

  if (!news || news.articles.length === 0) return null;

  // 滚动内容： articles 重复两遍实现无缝循环
  const items = [...news.articles, ...news.articles];

  return (
    <div
      className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.03] backdrop-blur-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 左侧标签 */}
      <div className="absolute left-0 top-0 bottom-0 z-10 flex items-center pl-3 pr-2 bg-gradient-to-r from-[rgba(15,15,35,0.95)] to-transparent pointer-events-none">
        <span className="text-[11px] font-medium text-purple-300 whitespace-nowrap">🔥 跨境资讯</span>
      </div>

      {/* 滚动区域 */}
      <div className="overflow-hidden px-20 py-2">
        <div ref={scrollRef} className="flex items-center gap-5 whitespace-nowrap" style={{ width: 'max-content' }}>
          {items.map((item, i) => (
            <a
              key={`${item.id}-${i}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/70 hover:text-purple-300 transition-colors duration-200 flex items-center gap-1.5 shrink-0"
              title={item.title}
            >
              <span className="w-1 h-1 rounded-full bg-purple-400/60 shrink-0" />
              {item.title}
              <span className="text-[10px] text-white/30 ml-1">{item.source}</span>
            </a>
          ))}
        </div>
      </div>

      {/* 右侧渐隐 */}
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[rgba(15,15,35,0.95)] to-transparent pointer-events-none" />

      {/* hover 提示 */}
      {paused && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white/30">
          已暂停
        </div>
      )}
    </div>
  );
}
