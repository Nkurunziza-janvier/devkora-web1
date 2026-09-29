import { Linkedin, Mail } from 'lucide-react';
import { team } from '@/data/team';

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg-fine opacity-20" />
      <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-accent-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-300">
            Meet The Team
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            The people behind <span className="gradient-text">DEVKORA</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-base text-slate-400 lg:text-lg">
            A team of software engineers, project leaders, DevOps specialists, and operators
            working together to deliver reliable digital products.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, i) => (
            <div
              key={member.id}
              className={`reveal reveal-delay-${(i % 3) + 1} card-lift group relative overflow-hidden rounded-2xl border border-white/8 bg-ink-800/60 p-6 backdrop-blur-sm transition-colors hover:border-accent-500/20`}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-500/0 blur-3xl transition-all duration-500 group-hover:bg-accent-500/8" />

              <div className="relative flex flex-col items-center text-center">
                {/* Avatar */}
                <div className="relative">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${member.gradient} blur-md opacity-40 transition-opacity duration-300 group-hover:opacity-60`} />
                  <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient} text-2xl font-extrabold text-ink-950 shadow-lg`}>
                    {member.initials}
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">{member.name}</h3>

                {/* Role badge */}
                <span className="mt-2 inline-block rounded-full border border-accent-500/20 bg-accent-500/5 px-3 py-1 text-xs font-medium text-accent-300">
                  {member.role}
                </span>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">{member.description}</p>

                {/* Social icons */}
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href="#contact"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-accent-500/30 hover:text-accent-300"
                    aria-label={`Contact ${member.name}`}
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-accent-500/30 hover:text-accent-300"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
