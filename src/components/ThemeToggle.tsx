import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light') {
      setIsDark(false);
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (isDark) {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="neumorphic-toggle relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 rounded-full transition-all duration-500 group-hover:scale-110" />
      <div className="relative z-10 transition-all duration-300">
        {isDark ? (
          <Sun className="w-6 h-6 text-amber-400 transition-transform duration-300 group-hover:rotate-180" />
        ) : (
          <Moon className="w-6 h-6 text-primary transition-transform duration-300 group-hover:-rotate-12" />
        )}
      </div>
    </button>
  );
};
