import { techCategories } from '@/data/tech';

export default function Technology() {
  return (
    <section id="technology" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute right-1/4 top-0 h-96 w-96 rounded-full bg-cyan2-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-300">
            Technology Stack
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technology that powers <span className="gradient-text">our solutions</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-base text-slate-400 lg:text-lg">
            We select technologies based on project requirements — not trends. Here are the
            categories we work across.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {techCategories.map((cat, i) => (
            <div
              key={cat.id}
              className={`reveal reveal-delay-${(i % 4) + 1} card-lift group glass rounded-2xl border border-white/8 p-6`}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/15 to-cyan2-500/15 text-accent-300 transition-all duration-300 group-hover:scale-110">
                <cat.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-bold text-white">{cat.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{cat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
