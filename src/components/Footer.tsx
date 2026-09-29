import { navLinks } from '@/data/nav';
import { services } from '@/data/services';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-ink-950">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Building Digital Solutions That Move Businesses Forward.
            </p>
            <div className="mt-5 flex gap-2.5">
              {['LinkedIn', 'Twitter', 'GitHub', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#contact"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-xs font-medium text-slate-400 transition-all hover:border-accent-500/30 hover:text-accent-300"
                  aria-label={social}
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-accent-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a
                    href="#services"
                    className="text-sm text-slate-400 transition-colors hover:text-accent-300"
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
              <li>[your-email@devkora.com]</li>
              <li>[+xxx xxx xxx xxx]</li>
              <li>[Your Location]</li>
            </ul>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-accent-500/20 bg-accent-500/5 px-4 py-2 text-sm font-medium text-accent-300 transition-all hover:bg-accent-500/10"
            >
              Start a Project
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">© 2026 DEVKORA. All rights reserved.</p>
          <p className="text-xs text-slate-600">Software. Systems. Digital Solutions.</p>
        </div>
      </div>
    </footer>
  );
}
