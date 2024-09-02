// src/app/projects/[slug]/page.tsx
'use client'
import { useState } from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug);
  const [currentImage, setCurrentImage] = useState(0);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="text-xl mb-4">{project.description}</p>
      
      {project.screenshots && project.screenshots.length > 0 && (
        <div className="mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative w-full h-[400px]"
            >
              <Image 
                src={project.screenshots[currentImage]} 
                alt={`Screenshot ${currentImage + 1} of ${project.title}`} 
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-4">
            {project.screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-3 h-3 rounded-full mx-1 ${index === currentImage ? 'bg-blue-500' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      )}
      
      {project.additionalDetails && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Additional Details:</h2>
          <p>{project.additionalDetails}</p>
        </div>
      )}
      
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Technologies Used:</h2>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            View Project
          </a>
        )}
        {project.amazonLink && (
          <a href={project.amazonLink} target="_blank" rel="noopener noreferrer" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded">
            Buy on Amazon
          </a>
        )}
      </div>
      
      <div className="mt-8">
        <Link href="/projects" className="text-blue-500 hover:underline">
          ← Back to All Projects
        </Link>
      </div>
    </div>
  );
}