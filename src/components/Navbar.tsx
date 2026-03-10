import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { trackEvent } from '../utils/analytics';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Membership', href: '#membership' },
    { name: 'Programs', href: '#programs' },
  ];

  const handleNavClick = (name: string) => {
    trackEvent('nav_click', { link: name });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="w-full px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" onClick={() => handleNavClick('Logo')}>
          <img src="https://lh3.googleusercontent.com/d/1Ii7fXl7uTb7eNPCkyEkZfYZVTB6hfGA8" alt="Proddly Logo" referrerPolicy="no-referrer" className="h-10 w-auto object-contain group-hover:scale-105 transition-transform" />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => handleNavClick(link.name)}
              className="text-sm font-medium text-text-secondary hover:text-primary-accent transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://learn.proddly.com/learn/featured"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleNavClick('Learn with Proddly')}
            className="text-sm font-medium text-text-secondary hover:text-primary-accent transition-colors"
          >
            Learn with Proddly
          </a>
          
          <a
            href="https://forms.gle/SZGY1LFVMTEYLkH2A"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleNavClick('Join CTA')}
            className="bg-primary-accent text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary-accent/90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Join as a Builder
          </a>

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="text-primary-dark p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 overflow-hidden shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-text-dark hover:text-primary-accent py-2 border-b border-gray-50 dark:border-gray-800"
                  onClick={() => handleNavClick(link.name)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://learn.proddly.com/learn/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-text-dark hover:text-primary-accent py-2 border-b border-gray-50 dark:border-gray-800"
                onClick={() => handleNavClick('Learn with Proddly Mobile')}
              >
                Learn with Proddly
              </a>
              <a
                href="https://forms.gle/SZGY1LFVMTEYLkH2A"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-accent text-white px-6 py-3 rounded-lg text-center font-bold hover:bg-primary-accent/90 transition-colors mt-2"
                onClick={() => handleNavClick('Join CTA Mobile')}
              >
                Join as a Builder
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-accent origin-left z-50"
        style={{ scaleX }}
      />
    </nav>
  );
}
