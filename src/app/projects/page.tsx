// src/app/projects/page.tsx
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import TagFilter from '@/components/TagFilter';

type Project = {
  slug: string;
  title: string;
  description: string;
  tags?: string[]; // Make tags optional
};

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const fetchedProjects = await response.json();
        setProjects(fetchedProjects);
        setFilteredProjects(fetchedProjects);

        // Extract all unique tags, handling projects without tags
        const tags = Array.from(new Set(fetchedProjects.flatMap((project: Project) => project.tags || []))) as string[];
        setAllTags(tags);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        // Handle the error appropriately
      }
    };

    fetchProjects();
  }, []);

  const handleFilterChange = (selectedTags: string[]) => {
    if (selectedTags.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.tags && selectedTags.some(tag => (project.tags ?? []).includes(tag))
      );
      setFilteredProjects(filtered);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-purple-700">My Projects</h1>
      
      <TagFilter tags={allTags} onFilterChange={handleFilterChange} />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div key={project.slug} className="border rounded-lg p-6 shadow-md">
            <Link href={`/projects/${project.slug}`}>
              <h2 className="text-2xl font-bold mb-2 text-purple-700 hover:text-purple-900">{project.title}</h2>
            </Link>
            <p className="mb-4 text-gray-600">{project.description}</p>
            {project.tags && project.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}