// src/components/ArticleLayout.tsx
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';

type ArticleLayoutProps = {
  meta: {
    title: string;
    description: string;
    date: string;
    author: string;
    tags?: string[];
    featuredImage?: string;
  };
  children: React.ReactNode;
};

const TableOfContents = ({ headings }: { headings: { id: string; text: string; level: number }[] }) => (
  <nav className="toc mb-8 p-4 bg-gray-100 rounded-lg">
    <h2 className="text-xl font-semibold mb-2">Table of Contents</h2>
    <ul>
      {headings.map((heading) => (
        <li key={heading.id} className={`ml-${(heading.level - 2) * 4}`}>
          <a href={`#${heading.id}`} className="text-blue-600 hover:underline">
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

const SocialShare = ({ url, title }: { url: string; title: string }) => (
  <div className="flex space-x-4 mb-8">
    <a href={`https://twitter.com/intent/tweet?url=${url}&text=${title}`} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
      <FaTwitter size={24} />
    </a>
    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}`} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
      <FaLinkedin size={24} />
    </a>
    <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
      <FaFacebook size={24} />
    </a>
  </div>
);

const AuthorBio = ({ author }: { author: string }) => (
  <div className="mt-12 p-6 bg-gray-100 rounded-lg">
    <h2 className="text-2xl font-semibold mb-4">About the Author</h2>
    <div className="flex items-center">
      <Image src="/path-to-author-image.jpg" alt={author} width={80} height={80} className="rounded-full mr-4" />
      <div>
        <h3 className="text-xl font-semibold">{author}</h3>
        <p className="text-gray-600">
          {author} is a passionate writer and expert in [field]. With years of experience in [relevant areas],
          they bring insightful and practical knowledge to their articles.
        </p>
      </div>
    </div>
  </div>
);

export function ArticleLayout({ meta, children }: ArticleLayoutProps) {
  const [headings, setHeadings] = React.useState<{ id: string; text: string; level: number }[]>([]);

  React.useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3, h4'));
    const headingData = elements.map((element) => ({
      id: element.id,
      text: element.textContent || '',
      level: parseInt(element.tagName[1]),
    }));
    setHeadings(headingData);
  }, []);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>

      {meta.featuredImage && (
        <div className="mb-8">
          <Image src={meta.featuredImage} alt={meta.title} width={1200} height={630} layout="responsive" className="rounded-lg" />
        </div>
      )}

      <header className="mb-8">
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">{meta.title}</h1>
        <p className="text-gray-600 mb-2">
          By {meta.author} • {new Date(meta.date).toLocaleDateString()}
        </p>
        {meta.tags && (
          <div className="flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <SocialShare url={typeof window !== 'undefined' ? window.location.href : ''} title={meta.title} />

      {headings.length > 0 && <TableOfContents headings={headings} />}

      <div className="prose prose-lg max-w-none">
        {children}
      </div>

      <AuthorBio author={meta.author} />
    </article>
  );
}