import { ArrowUpRight, ArrowRight, X, AlertCircle, CheckCircle2, Wrench, Lightbulb, ListChecks } from 'lucide-react';
import { useState, useMemo } from 'react';
import { projects, projectFilters, type Project } from '@/data/projects';

const iconMap: Record<string, string> = {
  transport: '🚌',
  library: '📚',
  commerce: '🛒',
  mis: '📊',
  admission: '📝',
  mobile: '📱',
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projects;
    return projects.filter((p) => p.filterCategory === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative overflow-hidden bg-ink-900 py-24 lg:py-32">
      <div className="absolute inset-0 grid-bg-fine opacity-20" />
      <div className="absolute left-0 bottom-1/4 h-96 w-96 rounded-full bg-accent-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-accent-500/20 bg-accent-500/5 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-accent-300">
            Selected Projects
          </div>
          <h2 className="reveal reveal-delay-1 mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Digital products we've <span className="gradient-text">designed and built</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-5 text-base text-slate-400 lg:text-lg">
            A selection of web platforms, management systems, and mobile applications
            developed by the DEVKORA team.
          </p>
        </div>

        {/* Filters */}
        <div className="reveal reveal-delay-2 mt-10 flex flex-wrap justify-center gap-2.5">
          {projectFilters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-accent-500 to-cyan2-500 text-ink-950 shadow-lg shadow-accent-500/20'
                  : 'border border-white/10 bg-white/5 text-slate-300 hover:border-accent-500/20 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Case study modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </section>
  );
}

function ProjectCard({ project, index, onClick }: { project: Project; index: number; onClick: () => void }) {
  return (
    <div
      className={`reveal reveal-delay-${(index % 3) + 1} card-lift group cursor-pointer overflow-hidden rounded-2xl border border-white/8 bg-ink-800/60 backdrop-blur-sm transition-colors hover:border-accent-500/20`}
      onClick={onClick}
    >
      {/* Visual */}
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        <div className="absolute inset-0 grid-bg-fine opacity-30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="absolute inset-0 animate-pulse-ring rounded-2xl bg-accent-400/20" />
            <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl glass-strong border border-white/10 text-4xl">
              {iconMap[project.icon] || '💻'}
            </div>
          </div>
        </div>

        {project.status === 'development' && (
          <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-3 py-1 text-xs font-medium text-yellow-300 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-yellow-400" />
            In Development
          </div>
        )}
        {project.status === 'live' && (
          <div className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full border border-green-400/30 bg-green-400/10 px-3 py-1 text-xs font-medium text-green-300 backdrop-blur-sm">
            <CheckCircle2 className="h-3 w-3" />
            Live
          </div>
        )}

        <div className="absolute bottom-3 left-3 rounded-lg bg-ink-950/70 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-accent-300">
          {project.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-400 line-clamp-2">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span key={tech} className="rounded-md bg-white/5 px-2 py-1 text-xs text-slate-400">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <button className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-300 transition-all duration-300 hover:gap-2.5 hover:text-accent-200">
            View Project
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all hover:border-accent-500/30 hover:text-accent-300"
              aria-label={`Visit ${project.name}`}
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-ink-950/80 p-4 backdrop-blur-md sm:p-6 lg:items-center"
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-ink-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header visual */}
        <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient} sm:h-56`}>
          <div className="absolute inset-0 grid-bg-fine opacity-30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl glass-strong border border-white/10 text-5xl">
              {iconMap[project.icon] || '💻'}
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-ink-950/60 text-white backdrop-blur-sm transition-colors hover:bg-ink-950/80"
            aria-label="Close project details"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-5 flex items-center gap-2">
            <span className="rounded-lg bg-ink-950/70 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm">
              {project.category}
            </span>
            {project.status === 'development' && (
              <span className="flex items-center gap-1.5 rounded-lg bg-yellow-400/15 px-3 py-1 text-xs font-medium text-yellow-300 backdrop-blur-sm">
                <AlertCircle className="h-3 w-3" /> In Development
              </span>
            )}
            {project.status === 'live' && (
              <span className="flex items-center gap-1.5 rounded-lg bg-green-400/15 px-3 py-1 text-xs font-medium text-green-300 backdrop-blur-sm">
                <CheckCircle2 className="h-3 w-3" /> Live
              </span>
            )}
          </div>
        </div>

        {/* Body */}
        <div className="max-h-[calc(100vh-20rem)] overflow-y-auto p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-white">{project.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">{project.longDescription}</p>

          {/* Problem & Solution */}
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-white/8 bg-ink-900/50 p-5">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-400/15">
                  <AlertCircle className="h-4 w-4 text-orange-400" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Problem</h4>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">{project.problem}</p>
            </div>
            <div className="rounded-xl border border-white/8 bg-ink-900/50 p-5">
              <div className="mb-3 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-500/15">
                  <Lightbulb className="h-4 w-4 text-accent-300" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Solution</h4>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">{project.solution}</p>
            </div>
          </div>

          {/* Key features */}
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2">
              <ListChecks className="h-4 w-4 text-cyan2-400" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Key Features</h4>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {project.features.map((feat) => (
                <div key={feat} className="flex items-center gap-2 rounded-lg border border-white/5 bg-ink-900/40 px-4 py-2.5 text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-accent-400" />
                  {feat}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-6">
            <div className="mb-3 flex items-center gap-2">
              <Wrench className="h-4 w-4 text-cyan2-400" />
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-300">Technology / Architecture</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-lg border border-accent-500/20 bg-accent-500/5 px-3 py-1.5 text-sm font-medium text-accent-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-500 to-cyan2-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:shadow-lg hover:shadow-accent-500/30"
            >
              Visit Project
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
          {project.status === 'development' && (
            <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-yellow-400/20 bg-yellow-400/5 px-6 py-3 text-sm font-medium text-yellow-300">
              <AlertCircle className="h-4 w-4" />
              This project is currently in development
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
