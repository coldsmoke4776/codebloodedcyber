// src/data/projects.ts
export type Project = {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  featured: boolean;
  amazonLink?: string;
  additionalDetails?: string;
  screenshots: string[];  // New field for screenshots
  projectType: string;
  tags: string[];   // New field for project type (for enhanced filtering)
}

export const projects: Project[] = [
  {
    slug: "cyber-field-manual",
    title: "Cyber Field Manual",
    description: "A comprehensive guide to cybersecurity fundamentals.",
    technologies: ["Writing", "Publishing"],
    featured: true,
    amazonLink: "https://www.amazon.com/your-book-link",
    additionalDetails: "The Cyber Field Manual is a comprehensive guide designed to equip readers with essential cybersecurity knowledge.",
    screenshots: ["/vercel.svg", "/next.svg"],
    projectType: "Book",
    tags: ["Cybersecurity", "Fundamentals", "Book"]
  },
  // Add more projects here
  {
    slug: "networking-basics-hackers",
    title: "Networking Basics For Hackers",
    description: "The first networking book you'll actually WANT to read.",
    technologies: ["Writing", "Publishing"],
    featured: true,
    additionalDetails: "The Cyber Field Manual is a comprehensive guide designed to equip readers with essential cybersecurity knowledge.",
    screenshots: ["/vercel.svg", "/next.svg"],
    projectType: "Book",
    tags: ["Networking", "Hacking", "Book"]
  },
];