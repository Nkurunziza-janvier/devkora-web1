import type { LucideIcon } from 'lucide-react';
import {
  Code2,
  Globe,
  Smartphone,
  LayoutGrid,
  Server,
  Cloud,
  Megaphone,
  Headset,
} from 'lucide-react';

export interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'custom-software',
    icon: Code2,
    title: 'Custom Software Development',
    description: 'Tailored software systems designed around specific business requirements.',
    features: ['Bespoke architecture', 'Business logic modeling', 'Requirement-driven design'],
  },
  {
    id: 'web-apps',
    icon: Globe,
    title: 'Web Application Development',
    description: 'Modern, responsive, scalable web applications for businesses and organizations.',
    features: ['Responsive UI', 'Scalable architecture', 'Cross-platform compatibility'],
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Mobile Application Development',
    description: 'Android/iOS-ready mobile experiences and business applications.',
    features: ['Native performance', 'Offline capability', 'Business-grade mobile UX'],
  },
  {
    id: 'management-systems',
    icon: LayoutGrid,
    title: 'Management Systems',
    description: 'Digital systems for managing operations, records, users, reports, attendance, libraries, and institutional workflows.',
    features: ['Records & user management', 'Reporting & analytics', 'Institutional workflow automation'],
  },
  {
    id: 'backend-api',
    icon: Server,
    title: 'Backend & API Development',
    description: 'Secure APIs, databases, authentication, business logic, and scalable backend architectures.',
    features: ['Secure authentication', 'Database design', 'RESTful API architecture'],
  },
  {
    id: 'devops',
    icon: Cloud,
    title: 'DevOps & Deployment',
    description: 'Deployment, server configuration, CI/CD, monitoring, maintenance, and production infrastructure.',
    features: ['CI/CD pipelines', 'Server configuration', 'Monitoring & maintenance'],
  },
  {
    id: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Digital growth strategies, online presence, campaign support, and technology-driven marketing solutions.',
    features: ['Growth strategy', 'Online presence optimization', 'Campaign support'],
  },
  {
    id: 'software-ops',
    icon: Headset,
    title: 'Software Operations & Support',
    description: 'System monitoring, operational support, user assistance, maintenance, and continuous improvement.',
    features: ['System monitoring', 'User assistance', 'Continuous improvement'],
  },
];
