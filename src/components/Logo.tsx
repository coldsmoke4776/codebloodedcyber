// src/components/Logo.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/codebloodedlogo.jpeg"  // Update this path to where you store the logo
        alt="Codeblooded Consulting Logo"
        width={40}  // Adjust size as needed
        height={40} // Adjust size as needed
        className="mr-2"
      />
      <span className="text-xl font-bold text-purple-700">Codeblooded Consulting</span>
    </Link>
  );
}