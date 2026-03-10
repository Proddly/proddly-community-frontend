import { Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleThemeChange = (newTheme: 'light' | 'dark' | 'system') => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="p-2 rounded-lg text-text-secondary hover:text-primary-accent hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle theme"
      >
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute top-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute right-0 mt-2 w-36 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg z-50 overflow-hidden"
          >
            <div className="flex flex-col p-1">
              <button
                onClick={() => handleThemeChange('light')}
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                  theme === 'light'
                    ? 'bg-primary-accent/10 text-primary-accent dark:bg-primary-accent/20 dark:text-secondary-accent'
                    : 'text-text-secondary dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <Sun size={16} />
                <span>Light</span>
              </button>
              <button
                onClick={() => handleThemeChange('dark')}
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                  theme === 'dark'
                    ? 'bg-primary-accent/10 text-primary-accent dark:bg-primary-accent/20 dark:text-secondary-accent'
                    : 'text-text-secondary dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <Moon size={16} />
                <span>Dark</span>
              </button>
              <button
                onClick={() => handleThemeChange('system')}
                className={`flex items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors ${
                  theme === 'system'
                    ? 'bg-primary-accent/10 text-primary-accent dark:bg-primary-accent/20 dark:text-secondary-accent'
                    : 'text-text-secondary dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                <Monitor size={16} />
                <span>System</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
