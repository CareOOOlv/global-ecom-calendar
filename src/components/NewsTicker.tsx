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
      const urls = [
        '/news.json',
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

  // 主题色变量（注入到 inline style，跟随 data-theme 切换）
  const styles = {
    container: {
      background: 'var(--glass-bg)',
      borderColor: 'var(--glass-border)',
    } as React.CSSProperties,
    label: {
      background: 'var(--bg-elevated)',
      color: 'var(--accent-purple)',
    } as React.CSSProperties,
    title: {
      color: 'var(--text-secondary)',
    } as React.CSSProperties,
    titleHover: {
      color: 'var(--accent-purple)',
    } as React.CSSProperties,
    source: {
      color: 'var(--text-tertiary)',
    } as React.CSSProperties,
    dot: {
      background: 'var(--accent-purple)',
    } as React.CSSProperties,
    fadeLeft: {
      background: 'linear-gradient(to right, var(--bg-elevated), transparent)',
    } as React.CSSProperties,
    fadeRight: {
      background: 'linear-gradient(to left, var(--bg-elevated), transparent)',
    } as React.CSSProperties,
    loadingText: {
      color: 'var(--text-tertiary)',
    } as React.CSSProperties,
    pausedHint: {
      color: 'var(--text-tertiary)',
    } as React.CSSProperties,
  };

  if (loading) {
    return (
      <div
        className="flex items-center gap-2 px-4 py-2 rounded-lg border backdrop-blur-sm"
        style={styles.container}
      >
        <div className="w-3 h-3 rounded-full animate-pulse" style={{ background: 'var(--accent-purple)' }} />
        <span className="text-xs" style={styles.loadingText}>加载跨境资讯...</span>
      </div>
    );
  }

  if (!news || news.articles.length === 0) return null;

  const items = [...news.articles, ...news.articles];

  return (
    <div
      className="relative overflow-hidden rounded-lg border backdrop-blur-sm news-ticker-container"
      style={styles.container}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 左侧标签 */}
      <div
        className="absolute left-0 top-0 bottom-0 z-10 flex items-center pl-3 pr-4 pointer-events-none"
        style={styles.fadeLeft}
      >
        <span className="text-[11px] font-medium whitespace-nowrap" style={styles.label}>
          🔥 跨境资讯
        </span>
      </div>

      {/* 滚动区域 */}
      <div className="overflow-hidden px-24 py-2">
        <div ref={scrollRef} className="flex items-center gap-5 whitespace-nowrap" style={{ width: 'max-content' }}>
          {items.map((item, i) => (
            <a
              key={`${item.id}-${i}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="news-ticker-item text-xs transition-colors duration-200 flex items-center gap-1.5 shrink-0"
              style={styles.title}
              title={item.title}
            >
              <span className="w-1 h-1 rounded-full shrink-0" style={styles.dot} />
              {item.title}
              <span className="text-[10px] ml-1" style={styles.source}>{item.source}</span>
            </a>
          ))}
        </div>
      </div>

      {/* 右侧渐隐 */}
      <div
        className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none"
        style={styles.fadeRight}
      />

      {/* hover 提示 */}
      {paused && (
        <div
          className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px]"
          style={styles.pausedHint}
        >
          已暂停
        </div>
      )}
    </div>
  );
}
