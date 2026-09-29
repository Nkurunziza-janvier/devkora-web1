import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-ink-950 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-cyan2-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-300">
            What We Do
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Services that cover the <span className="gradient-text">full development lifecycle</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-base text-slate-400 lg:text-lg">
            From custom software to deployment and ongoing operations — DEVKORA delivers
            end-to-end digital solutions built around your organization's needs.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <div
              key={service.id}
              className={`reveal reveal-delay-${(i % 4) + 1} card-lift group relative overflow-hidden rounded-2xl border border-white/8 bg-ink-800/60 p-6 backdrop-blur-sm transition-colors hover:border-accent-500/20`}
            >
              {/* Hover glow */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-accent-500/0 blur-3xl transition-all duration-500 group-hover:bg-accent-500/10" />

              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/15 to-cyan2-500/15 text-accent-300 transition-all duration-300 group-hover:scale-110 group-hover:from-accent-500/25 group-hover:to-cyan2-500/25">
                  <service.icon className="h-6 w-6" strokeWidth={1.5} />
                </div>

                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.description}</p>

                <ul className="mt-4 space-y-1.5">
                  {service.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2 text-xs text-slate-500">
                      <span className="h-1 w-1 rounded-full bg-accent-400" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent-300 transition-all duration-300 hover:gap-2.5 hover:text-accent-200"
                >
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
