export interface Project {
  id: string;
  name: string;
  url?: string;
  category: string;
  filterCategory: 'web' | 'management' | 'mobile' | 'business';
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  features: string[];
  technologies: string[];
  status: 'live' | 'development';
  gradient: string;
  icon: string;
}

export const projects: Project[] = [
  {
    id: 'xander-ride',
    name: 'Xander Ride',
    url: 'http://xanderride.com/',
    category: 'Transport System',
    filterCategory: 'web',
    description: 'A digital transport platform designed to support transportation-related operations and user interactions.',
    longDescription: 'Xander Ride is a digital transport platform that connects riders and drivers through a streamlined web interface, supporting transportation operations and user interactions.',
    problem: 'Transportation operations needed a centralized digital platform to manage interactions between riders and drivers efficiently.',
    solution: 'A web-based transport platform that streamlines user interactions and supports core transportation workflows.',
    features: ['Ride management', 'User interactions', 'Transport operations dashboard'],
    technologies: ['Web Application'],
    status: 'live',
    gradient: 'from-cyan2-500/20 to-accent-500/20',
    icon: 'transport',
  },
  {
    id: 'kass-library',
    name: 'KASS Library Management System',
    url: 'http://kass.gurd.org/',
    category: 'Management System / Library',
    filterCategory: 'management',
    description: 'A management platform supporting library operations and digital checking/management workflows.',
    longDescription: 'KASS Library Management System provides institutions with a digital platform to manage library operations, book circulation, and digital checking workflows.',
    problem: 'Library operations relied on manual processes, making book tracking, circulation, and management inefficient.',
    solution: 'A comprehensive digital library management system that automates circulation, cataloging, and checking workflows.',
    features: ['Book cataloging', 'Digital checking system', 'Circulation management', 'Library operations dashboard'],
    technologies: ['Web Application', 'Management System'],
    status: 'live',
    gradient: 'from-accent-500/20 to-cyan2-400/20',
    icon: 'library',
  },
  {
    id: 'monti-mall',
    name: 'Monti Mall',
    url: 'http://montimall.gurd.org/',
    category: 'Digital Commerce / Business Platform',
    filterCategory: 'business',
    description: 'A digital commerce platform supporting business operations and online commercial activities.',
    longDescription: 'Monti Mall is a digital commerce platform that enables businesses to operate online, supporting commercial activities and business operations through a web interface.',
    problem: 'Businesses needed a digital commerce platform to expand their operations online and reach customers through the web.',
    solution: 'A business-focused digital commerce platform that supports online commercial activities and business operations.',
    features: ['Commerce operations', 'Business platform', 'Digital storefront'],
    technologies: ['Web Application', 'E-Commerce'],
    status: 'live',
    gradient: 'from-cyan2-400/20 to-accent-600/20',
    icon: 'commerce',
  },
  {
    id: 'kass-mis',
    name: 'KASS MIS',
    url: 'http://mis.kass.co.rw/',
    category: 'Management Information System',
    filterCategory: 'management',
    description: 'A digital management information platform for institutional operations and information management.',
    longDescription: 'KASS MIS is a Management Information System designed to handle institutional operations, data management, and information flow within an organization.',
    problem: 'Institutions needed a centralized system to manage information flow, operations data, and institutional processes.',
    solution: 'A management information system that centralizes institutional data, operations, and information management into a single platform.',
    features: ['Institutional data management', 'Operations tracking', 'Information flow management', 'Reporting system'],
    technologies: ['Web Application', 'Management System'],
    status: 'live',
    gradient: 'from-accent-400/20 to-cyan2-500/20',
    icon: 'mis',
  },
  {
    id: 'kass-admission',
    name: 'KASS Admission System',
    url: 'http://kass.co.rw/admission/index.php',
    category: 'Admission Management',
    filterCategory: 'management',
    description: 'A digital admission platform designed to support application and admission-related processes.',
    longDescription: 'KASS Admission System is a digital platform that streamlines the application and admission process for institutions, managing applicant data and admission workflows.',
    problem: 'Admission processes were manual and paper-based, creating bottlenecks during application periods.',
    solution: 'A digital admission platform that automates application submission, review, and admission workflows.',
    features: ['Online application management', 'Admission workflow', 'Applicant tracking', 'Digital submission'],
    technologies: ['Web Application', 'Management System'],
    status: 'live',
    gradient: 'from-accent-500/20 to-cyan2-400/20',
    icon: 'admission',
  },
  {
    id: 'kass-attendance',
    name: 'KASS Attendance Mobile App',
    category: 'Mobile Application',
    filterCategory: 'mobile',
    description: 'A mobile attendance solution being developed to simplify attendance tracking and management.',
    longDescription: 'KASS Attendance is a mobile application currently in development, designed to simplify attendance tracking through a mobile interface for institutions and organizations.',
    problem: 'Attendance tracking needed a mobile-first solution to simplify the process and make it accessible on the go.',
    solution: 'A mobile attendance application that enables quick, reliable attendance tracking from mobile devices.',
    features: ['Mobile attendance tracking', 'Real-time recording', 'Institution attendance management'],
    technologies: ['Mobile Application'],
    status: 'development',
    gradient: 'from-cyan2-500/20 to-accent-400/20',
    icon: 'mobile',
  },
];

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'management', label: 'Management Systems' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'business', label: 'Business' },
] as const;
