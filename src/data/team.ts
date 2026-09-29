export interface TeamMember {
  id: string;
  name: string;
  role: string;
  description: string;
  initials: string;
  gradient: string;
}

export const team: TeamMember[] = [
  {
    id: 'gad',
    name: 'MUNEZERO Gad',
    role: 'Backend Engineer & Project Manager',
    description: 'Responsible for backend engineering, system architecture, project coordination, and helping transform project requirements into reliable software solutions.',
    initials: 'MG',
    gradient: 'from-accent-400 to-cyan2-500',
  },
  {
    id: 'janvier',
    name: 'Nkurunziza Janvier',
    role: 'Lead Full-Stack Developer',
    description: 'Leads full-stack development, connecting frontend experiences with backend systems and helping drive the technical implementation of DEVKORA projects.',
    initials: 'NJ',
    gradient: 'from-cyan2-400 to-accent-500',
  },
  {
    id: 'eric',
    name: 'IGIRIMBABAZI Eric',
    role: 'Full-Stack Developer',
    description: 'Works across frontend and backend development to build functional, responsive, and maintainable digital products.',
    initials: 'IE',
    gradient: 'from-accent-500 to-cyan2-400',
  },
  {
    id: 'luckson',
    name: 'NTWARI Luckson',
    role: 'CEO & Digital Marketing',
    description: 'Leads the company\'s strategic direction and digital marketing activities, helping connect DEVKORA\'s technology solutions with businesses and organizations.',
    initials: 'NL',
    gradient: 'from-cyan2-500 to-accent-400',
  },
  {
    id: 'thierry',
    name: 'RWEMA Thierry',
    role: 'DevOps Engineer',
    description: 'Focuses on deployment, infrastructure, system reliability, development workflows, and keeping software environments running efficiently.',
    initials: 'RT',
    gradient: 'from-accent-400 to-cyan2-500',
  },
  {
    id: 'gerald',
    name: 'Gerald',
    role: 'Software Operator',
    description: 'Supports software operations, system usage, user assistance, and day-to-day digital product operations.',
    initials: 'G',
    gradient: 'from-cyan2-400 to-accent-600',
  },
];
