import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="pt-10 pb-4 px-6 text-center relative">
      <div className="absolute top-5 right-6">
        <button onClick={onToggleTheme}
          className="glass-pill rounded-full p-3 flex items-center gap-2 transition-all duration-300"
          title={theme === 'dark' ? '切换到白天模式' : '切换到夜晚模式'}>
          {theme === 'dark' ? (
            <><Sun className="w-4 h-4 text-amber-400" /><span className="text-xs text-white/60 hidden sm:inline">白天</span></>
          ) : (
            <><Moon className="w-4 h-4 text-indigo-500" /><span className="text-xs hidden sm:inline" style={{ color: 'var(--text-secondary)' }}>夜晚</span></>
          )}
        </button>
      </div>
      <div className="flex items-center justify-center gap-2 md:gap-3 mb-2">
        <img src="./logo.png" alt="全球电商日历" className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl shadow-lg" style={{ objectFit: 'cover' }} />
        <h1 className="text-xl md:text-4xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
          全球跨境电商运营日历
        </h1>
      </div>
      <p className="text-[10px] md:text-sm max-w-md mx-auto" style={{ color: 'var(--text-secondary)' }}>
        探索全球市场节日、活动与商品机会
      </p>
    </header>
  );
}
