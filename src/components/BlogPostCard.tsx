import Link from 'next/link';
import { BlogPost } from '@/data/blogPosts';

type BlogPostCardProps = {
  post: BlogPost;
};

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <div className="border rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-2">
        <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline">
          {post.title}
        </Link>
      </h2>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <p className="mb-4">{post.description}</p>
      <div className="flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span key={tag} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}