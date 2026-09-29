import type { LucideIcon } from 'lucide-react';
import { Monitor, Server, Database, Smartphone, Cloud, Plug } from 'lucide-react';

export interface TechCategory {
  id: string;
  icon: LucideIcon;
  name: string;
  description: string;
}

export const techCategories: TechCategory[] = [
  { id: 'frontend', icon: Monitor, name: 'Frontend', description: 'Modern UI frameworks, responsive design, and component-driven interfaces.' },
  { id: 'backend', icon: Server, name: 'Backend', description: 'Server-side engineering, business logic, and scalable application architecture.' },
  { id: 'databases', icon: Database, name: 'Databases', description: 'Relational and document-based data storage, modeling, and management.' },
  { id: 'mobile', icon: Smartphone, name: 'Mobile', description: 'Cross-platform and native mobile application development.' },
  { id: 'devops', icon: Cloud, name: 'DevOps', description: 'CI/CD pipelines, containerization, and production infrastructure management.' },
  { id: 'apis', icon: Plug, name: 'APIs', description: 'RESTful API design, integration, and secure service communication.' },
  { id: 'cloud', icon: Cloud, name: 'Cloud & Deployment', description: 'Cloud hosting, server configuration, and deployment automation.' },
];
