import type { LucideIcon } from 'lucide-react';
import { Search, PenTool, Hammer, Rocket, LifeBuoy } from 'lucide-react';

export interface ProcessStep {
  id: string;
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'discover',
    number: '01',
    icon: Search,
    title: 'Discover',
    description: "Understand the organization's problem and requirements.",
  },
  {
    id: 'plan',
    number: '02',
    icon: PenTool,
    title: 'Plan',
    description: 'Define the solution, architecture, features, and development roadmap.',
  },
  {
    id: 'build',
    number: '03',
    icon: Hammer,
    title: 'Build',
    description: 'Design and develop the product using appropriate technologies.',
  },
  {
    id: 'test-deploy',
    number: '04',
    icon: Rocket,
    title: 'Test & Deploy',
    description: 'Test the solution, fix issues, and deploy it to a production environment.',
  },
  {
    id: 'support',
    number: '05',
    icon: LifeBuoy,
    title: 'Support & Improve',
    description: 'Monitor, maintain, improve, and evolve the product.',
  },
];
