// src/components/ProjectCard.tsx
import Link from 'next/link'

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  className?: string;
}

export default function ProjectCard({ title, description, technologies, link, className = '' }: ProjectCardProps) {
  return (
    <div className={`border rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ${className}`}>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">Technologies used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map(tech => (
            <span key={tech} className="bg-gray-200 text-gray-700 px-2 py-1 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <Link href={link} className="text-blue-500 hover:underline">
        Learn more →
      </Link>
    </div>
  )
}