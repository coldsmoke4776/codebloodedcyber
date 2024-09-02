// src/app/api/projects/route.ts
import { NextResponse } from 'next/server';

const projects = [
  {
    slug: "project-1",
    title: "Project One",
    description: "This is a description of Project One. It's a web application built with React and Node.js.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    slug: "project-2",
    title: "Project Two",
    description: "Project Two is a mobile app developed using React Native and Firebase.",
    tags: ["React Native", "Firebase", "Mobile Development"],
  },
  {
    slug: "project-3",
    title: "Project Three",
    description: "Project Three is a machine learning model for image recognition using TensorFlow.",
    tags: ["Machine Learning", "TensorFlow", "Python"],
  },
  // Example of a project without tags
  {
    slug: "project-4",
    title: "Project Four",
    description: "Project Four is a work in progress.",
    tags: [], // Empty array instead of undefined
  },
  // Add more projects as needed
];

export async function GET() {
  return NextResponse.json(projects);
}