import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/nav';
import { useScrolled } from '@/hooks/useScrollReveal';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled(40);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = () => setIsOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Logo />

          {/* Desktop nav */}
          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="btn-shine inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-cyan2-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30"
            >
              Start a Project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-ink-950/95 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-sm overflow-y-auto border-l border-white/10 bg-ink-900 px-6 py-24 transition-transform duration-500 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <ul className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <li
                key={link.href}
                style={{ transitionDelay: `${i * 60 + 100}ms` }}
                className={`transform transition-all duration-500 ${
                  isOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
              >
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="flex items-center justify-between rounded-xl px-4 py-3.5 text-lg font-medium text-slate-200 transition-all duration-300 hover:bg-white/5 hover:text-accent-300"
                >
                  {link.label}
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-cyan2-500 px-5 py-3.5 text-base font-semibold text-ink-950"
          >
            Start a Project
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
}
