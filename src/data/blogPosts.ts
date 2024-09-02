import 'server-only';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
  content: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/blog');

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  
  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      description: data.description,
      tags: data.tags || [],
      content: content,
    };
  } catch (error) {
    console.error(`Error reading file ${fullPath}:`, error);
    return undefined;
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
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
        content: content,
      };
    }));

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getAllBlogSlugs(): Promise<string[]> {
  const fileNames = await fs.readdir(postsDirectory);
  return fileNames.map(fileName => fileName.replace(/\.mdx$/, ''));
}