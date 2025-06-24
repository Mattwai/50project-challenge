export type ProjectStatus = 'completed' | 'in-progress' | 'upcoming';
export type Technology = 'React' | 'TypeScript' | 'Tailwind CSS' | 'Next.js' | 'Node.js' | 'PostgreSQL' | 'MongoDB' | 'Prisma' | 'tRPC' | 'GraphQL';

export interface Project {
  id: number;
  day: number;
  title: string;
  description: string;
  status: ProjectStatus;
  liveUrl?: string;
  technologies: Technology[];
}

// Default technology stack for upcoming projects
const defaultTechnologies: Technology[] = ["React", "TypeScript", "Tailwind CSS", "Next.js"];

export const projects: Project[] = [
  {
    id: 1,
    day: 1,
    title: "Project Management Dashboard",
    description: "A modern B2B project management solution with real-time updates and team collaboration features",
    status: "completed",
    liveUrl: "https://project1.example.com",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js"]
  },
  {
    id: 2,
    day: 2,
    title: "Invoice Generator",
    description: "Automated B2B invoice generation and management system with customizable templates",
    status: "completed",
    liveUrl: "https://project2.example.com",
    technologies: ["React", "TypeScript", "Tailwind CSS"]
  },
  // Days 3-50 are upcoming
  ...Array.from({ length: 48 }, (_, i) => ({
    id: i + 3,
    day: i + 3,
    title: `Project ${i + 3}`,
    description: "Coming soon - exciting B2B SaaS project in development",
    status: "upcoming" as ProjectStatus,
    technologies: defaultTechnologies
  }))
]; 