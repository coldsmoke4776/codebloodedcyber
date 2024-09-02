// src/app/api/blog-posts/route.ts
import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export async function GET() {
  const fileNames = await fs.readdir(postsDirectory);
  const allPostsData = await Promise.all(fileNames
    .filter(fileName => fileName.endsWith('.mdx'))
    .map(async fileName => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = await fs.readFile(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        description: data.description,
        tags: data.tags || [],
      };
    }));

  // Sort posts by date
  allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));

  return NextResponse.json(allPostsData);
}