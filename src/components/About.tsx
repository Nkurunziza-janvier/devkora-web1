import { TrendingUp, Users, Layers, GitBranch } from 'lucide-react';

const stats = [
  { value: '6+', label: 'Projects & Digital Products', icon: TrendingUp },
  { value: '6', label: 'Technology Specialists', icon: Users },
  { value: 'Multiple', label: 'Solution Categories', icon: Layers },
  { value: 'End-to-End', label: 'Development Approach', icon: GitBranch },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg-fine opacity-30" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-accent-500/5 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: heading */}
          <div>
            <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-300">
              About DEVKORA
            </div>
            <h2 className="reveal reveal-delay-1 mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Transforming real-world problems into <span className="gradient-text">practical digital solutions</span>.
            </h2>
            <p className="reveal reveal-delay-2 mt-6 text-base leading-relaxed text-slate-400 lg:text-lg">
              DEVKORA brings together software engineers, project leadership, DevOps, digital
              marketing, and software operations to design and deliver digital products that
              organizations can actually use.
            </p>
            <p className="reveal reveal-delay-3 mt-4 text-base leading-relaxed text-slate-500">
              We focus on understanding the real problem before choosing the technology — building
              systems that fit organizational workflows rather than forcing workflows to fit the
              software.
            </p>
          </div>

          {/* Right: stats grid */}
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`reveal reveal-delay-${i + 1} card-lift group glass rounded-2xl border border-white/8 p-6 lg:p-7`}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/15 to-cyan2-500/15 text-accent-300 transition-colors group-hover:from-accent-500/25 group-hover:to-cyan2-500/25">
                  <stat.icon className="h-5 w-5" />
                </div>
                <p className="text-3xl font-extrabold text-white lg:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm leading-snug text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
