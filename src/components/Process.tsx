import { processSteps } from '@/data/process';

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-cyan2-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-300">
            How We Work
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            From idea to <span className="gradient-text">production</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-base text-slate-400 lg:text-lg">
            A structured process that ensures every project is understood, planned, built,
            deployed, and supported with care.
          </p>
        </div>

        {/* Desktop horizontal timeline */}
        <div className="mt-16 hidden lg:block">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500/20 to-transparent" />

            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step, i) => (
                <div key={step.id} className={`reveal reveal-delay-${i + 1} relative flex flex-col items-center text-center`}>
                  {/* Node */}
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent-500/30 bg-ink-900 text-accent-300 transition-all duration-300 hover:scale-110 hover:border-accent-500/50 hover:bg-accent-500/10">
                    <step.icon className="h-5 w-5" strokeWidth={1.5} />
                  </div>

                  <span className="mt-4 font-mono text-xs font-bold text-accent-400">{step.number}</span>
                  <h3 className="mt-1 text-base font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="mt-12 lg:hidden">
          <div className="relative space-y-6 pl-8">
            {/* Vertical line */}
            <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-accent-500/30 via-accent-500/15 to-transparent" />

            {processSteps.map((step, i) => (
              <div key={step.id} className={`reveal reveal-delay-${i + 1} relative`}>
                {/* Node */}
                <div className="absolute -left-8 flex h-10 w-10 items-center justify-center rounded-full border border-accent-500/30 bg-ink-900 text-accent-300">
                  <step.icon className="h-4 w-4" strokeWidth={1.5} />
                </div>

                <div className="rounded-xl border border-white/8 bg-ink-800/60 p-4 backdrop-blur-sm">
                  <span className="font-mono text-xs font-bold text-accent-400">{step.number}</span>
                  <h3 className="mt-1 text-base font-bold text-white">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
