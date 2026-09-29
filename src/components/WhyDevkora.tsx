import { whyItems } from '@/data/why';

export default function WhyDevkora() {
  return (
    <section id="why" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg-fine opacity-20" />
      <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-accent-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-300">
            Why DEVKORA
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            An approach built on <span className="gradient-text">real problem-solving</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyItems.map((item, i) => (
            <div
              key={item.id}
              className={`reveal reveal-delay-${(i % 3) + 1} card-lift group relative overflow-hidden rounded-2xl border border-white/8 bg-ink-800/60 p-6 backdrop-blur-sm transition-colors hover:border-accent-500/20 ${
                i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-500/0 blur-3xl transition-all duration-500 group-hover:bg-accent-500/8" />

              <div className="relative">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/15 to-cyan2-500/15 text-accent-300 transition-all duration-300 group-hover:scale-110">
                  <item.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
