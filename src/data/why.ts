import type { LucideIcon } from 'lucide-react';
import { Target, Layers, Workflow, RefreshCw, Users } from 'lucide-react';

export interface WhyItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyItems: WhyItem[] = [
  {
    id: 'problem-first',
    icon: Target,
    title: 'Problem-First Development',
    description: 'We focus on the real problem before choosing the technology.',
  },
  {
    id: 'custom-solutions',
    icon: Layers,
    title: 'Custom Solutions',
    description: 'We build solutions around specific organizational workflows.',
  },
  {
    id: 'end-to-end',
    icon: Workflow,
    title: 'End-to-End Development',
    description: 'From interface to backend, deployment, and operations.',
  },
  {
    id: 'continuous',
    icon: RefreshCw,
    title: 'Continuous Improvement',
    description: 'We use feedback and real usage to improve products.',
  },
  {
    id: 'team-expertise',
    icon: Users,
    title: 'Team-Based Expertise',
    description: 'Our team combines software engineering, project management, DevOps, marketing, and operations.',
  },
];
