// src/components/Header.tsx
import Link from 'next/link';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/" className="text-purple-700 hover:text-purple-900 font-bold">Home</Link></li>
            <li><Link href="/about" className="text-purple-700 hover:text-purple-900 font-bold">About</Link></li>
            <li><Link href="/projects" className="text-purple-700 hover:text-purple-900 font-bold">Projects</Link></li>
            <li><Link href="/blog" className="text-purple-700 hover:text-purple-900 font-bold">Blog</Link></li>
            <li><Link href="/services" className="text-purple-700 hover:text-purple-900 font-bold">Services</Link></li>
            <li><Link href="/contact" className="text-purple-700 hover:text-purple-900 font-bold">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}