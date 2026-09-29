import { Code2 } from 'lucide-react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <a href="#home" className={`flex items-center gap-2.5 group ${className}`} aria-label="DEVKORA home">
      <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent-400 to-cyan2-500 shadow-lg shadow-accent-500/20 transition-transform duration-300 group-hover:scale-105">
        <Code2 className="h-5 w-5 text-ink-950" strokeWidth={2.5} />
        <div className="absolute inset-0 rounded-xl bg-accent-400/30 blur-md -z-10" />
      </div>
      {showText && (
        <span className="text-xl font-extrabold tracking-tight text-white">
          DEV<span className="gradient-text">KORA</span>
        </span>
      )}
    </a>
  );
}
