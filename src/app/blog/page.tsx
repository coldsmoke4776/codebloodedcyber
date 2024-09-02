// src/app/blog/page.tsx
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import TagFilter from '@/components/TagFilter';

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  description: string;
  tags: string[];
};

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>([]);
  const [allTags, setAllTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/blog-posts');
      const fetchedPosts: BlogPost[] = await response.json();
      setPosts(fetchedPosts);
      setFilteredPosts(fetchedPosts);

      // Extract all unique tags
      const tags = Array.from(new Set(fetchedPosts.flatMap((post: BlogPost) => post.tags)));
      setAllTags(tags);
    };

    fetchPosts();
  }, []);

  const handleFilterChange = (selectedTags: string[]) => {
    if (selectedTags.length === 0) {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter(post =>
        selectedTags.some(tag => post.tags.includes(tag))
      );
      setFilteredPosts(filtered);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-purple-700">Blog</h1>
      
      <TagFilter tags={allTags} onFilterChange={handleFilterChange} />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <div key={post.slug} className="border rounded-lg p-6 shadow-md">
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-bold mb-2 text-purple-700 hover:text-purple-900">{post.title}</h2>
            </Link>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p className="mb-4">{post.description}</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}