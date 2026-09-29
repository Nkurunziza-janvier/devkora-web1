import { ArrowRight, MessageCircle } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Glow orbs */}
      <div className="absolute left-1/4 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent-500/10 blur-[120px]" />
      <div className="absolute right-1/4 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-cyan2-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-5 lg:px-8">
        <div className="reveal relative overflow-hidden rounded-3xl border border-accent-500/20 bg-gradient-to-br from-ink-800/80 to-ink-900/80 p-10 text-center backdrop-blur-xl lg:p-16">
          {/* Inner glow */}
          <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-accent-500/10 blur-[80px]" />

          <div className="relative">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Have a Problem <span className="gradient-text">Worth Solving?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400 lg:text-lg">
              Tell us what you are trying to build, improve, or automate. Our team can help turn
              the idea into a practical digital solution.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="btn-shine group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-cyan2-500 px-7 py-3.5 text-base font-semibold text-ink-950 transition-all duration-300 hover:shadow-xl hover:shadow-accent-500/30 sm:w-auto"
              >
                Start a Project
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-accent-500/30 hover:bg-white/10 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 text-accent-300" />
                Contact DEVKORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
