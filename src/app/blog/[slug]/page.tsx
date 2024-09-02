// src/app/blog/[slug]/page.tsx
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import { getBlogPostBySlug } from '@/data/blogPosts';

const CustomImage = (props: any) => {
  const { src, alt, width, height } = props;
  const imageSrc = src.startsWith('/images/blog/') ? src : `/images/blog/${src}`;
  
  // Calculate new dimensions (80% of original size)
  const newWidth = Math.round((width || 800) * 0.8);
  const newHeight = Math.round((height || 600) * 0.8);

  return (
    <div className="flex justify-center">
      <Image 
        src={imageSrc} 
        alt={alt} 
        width={newWidth}
        height={newHeight}
        layout="intrinsic"
      />
    </div>
  );
};

const components = {
  Image: CustomImage,
};

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/blog" className="text-blue-600 hover:underline mb-4 inline-block">
        &larr; Back to Blog
      </Link>
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <div className="prose max-w-none">
        <MDXRemote 
          source={post.content}
          components={components}
        />
      </div>
    </div>
  );
}