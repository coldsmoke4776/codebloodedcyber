// src/components/Layout.tsx
import Link from 'next/link';
import Head from 'next/head';

export default function Layout({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Use the title prop to set the page title */}
      <Head>
        <title>{title || 'CodeBlooded Consulting'}</title>
      </Head>
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">CodeBlooded Consulting</Link>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
            <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
            <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          © {new Date().getFullYear()} CodeBlooded Consulting. All rights reserved.
        </div>
      </footer>
    </div>
  );
}