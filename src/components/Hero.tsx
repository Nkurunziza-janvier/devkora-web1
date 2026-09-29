import { ArrowRight, Play, Code2, Database, Server, Cloud, Terminal, Activity } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-ink-950 pt-28 pb-16 lg:pt-32">
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-950/95 to-ink-900" />
      <div className="absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-cyan2-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Left content */}
        <div className="text-center lg:text-left">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/5 px-4 py-1.5 text-xs font-medium text-accent-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-400" />
            </span>
            Software. Systems. Digital Solutions.
          </div>

          <h1 className="reveal reveal-delay-1 mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4.2rem]">
            WE BUILD <span className="gradient-text">DIGITAL PRODUCTS</span> THAT SOLVE REAL PROBLEMS.
          </h1>

          <p className="reveal reveal-delay-2 mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-400 lg:mx-0 lg:text-lg">
            DEVKORA is a software development and digital solutions company building reliable
            websites, management systems, mobile applications, and business platforms for
            organizations ready to grow through technology.
          </p>

          <div className="reveal reveal-delay-3 mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="#contact"
              className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-cyan2-500 px-7 py-3.5 text-base font-semibold text-ink-950 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/30 sm:w-auto"
            >
              Start a Project
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-accent-500/30 hover:bg-white/10 sm:w-auto"
            >
              <Play className="h-4 w-4 text-accent-300" />
              View Our Work
            </a>
          </div>

          <p className="reveal reveal-delay-4 mt-10 text-xs font-medium uppercase tracking-wider text-slate-500 lg:text-sm">
            Software Development • Web Applications • Mobile Apps • Management Systems • DevOps • Digital Solutions
          </p>
        </div>

        {/* Right visual */}
        <div className="reveal reveal-delay-2 relative hidden lg:block">
          <HeroVisual />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-900 to-transparent" />
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-[480px] w-full">
      {/* Central glow */}
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/15 blur-[80px]" />

      {/* Orbit rings */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-spin-slow rounded-full border border-accent-500/10" />
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan2-500/5" />

      {/* Main dashboard panel */}
      <div className="absolute left-1/2 top-1/2 w-[340px] -translate-x-1/2 -translate-y-1/2 animate-float">
        <div className="glass-strong rounded-2xl border border-white/10 p-5 shadow-2xl shadow-black/40">
          <div className="flex items-center gap-1.5 border-b border-white/5 pb-3">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-2 font-mono text-xs text-slate-500">devkora — deploy.sh</span>
          </div>
          <div className="space-y-2 py-4 font-mono text-xs leading-relaxed">
            <p className="text-accent-300">$ <span className="text-slate-300">npm run build</span></p>
            <p className="text-slate-500">Building production bundle...</p>
            <p className="text-green-400">✓ Compiled successfully</p>
            <p className="text-slate-300">$ <span className="text-accent-300">docker build</span> -t devkora-app .</p>
            <p className="text-green-400">✓ Image built — 248MB</p>
            <p className="text-slate-300">$ <span className="text-accent-300">deploy</span> --prod</p>
            <p className="text-cyan2-400">→ Deploying to production...</p>
            <p className="text-green-400 flex items-center gap-1.5">
              <Activity className="h-3 w-3" /> Live & monitoring
            </p>
          </div>
        </div>
      </div>

      {/* Floating UI cards */}
      <div className="absolute left-0 top-8 w-40 animate-float-slow">
        <div className="glass rounded-xl border border-white/10 p-3 shadow-xl">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15">
              <Code2 className="h-4 w-4 text-accent-300" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Frontend</p>
              <p className="text-[10px] text-slate-500">React / TS</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-2 top-16 w-40 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="glass rounded-xl border border-white/10 p-3 shadow-xl">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan2-500/15">
              <Server className="h-4 w-4 text-cyan2-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Backend</p>
              <p className="text-[10px] text-slate-500">API / Auth</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 left-4 w-36 animate-float-slow" style={{ animationDelay: '0.8s' }}>
        <div className="glass rounded-xl border border-white/10 p-3 shadow-xl">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15">
              <Database className="h-4 w-4 text-accent-300" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Database</p>
              <p className="text-[10px] text-slate-500">PostgreSQL</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-6 w-36 animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass rounded-xl border border-white/10 p-3 shadow-xl">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan2-500/15">
              <Cloud className="h-4 w-4 text-cyan2-400" />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">DevOps</p>
              <p className="text-[10px] text-slate-500">CI/CD</p>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal badge */}
      <div className="absolute right-0 bottom-24 flex items-center gap-1.5 rounded-lg border border-accent-500/20 bg-accent-500/10 px-3 py-1.5 font-mono text-xs text-accent-300 animate-float-slow">
        <Terminal className="h-3.5 w-3.5" />
        <span>build: passing</span>
      </div>
    </div>
  );
}
