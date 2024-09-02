// src/app/page.tsx
import Hero from '@/components/Hero';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero />
      
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <p className="text-lg text-gray-600 mb-8">
            I'm a Senior Pre-Sales Solutions Architect with a deep expertise in cybersecurity, focusing on pentesting, red teaming, and consulting.
            With a strong background in both technical and business aspects of cybersecurity, I excel in training sales teams on technical skills, serving as a subject matter expert, and driving strategic partnerships with commercial partners. 
          </p>
          <p className="text-lg text-gray-600 mb-8">
            My passion for investing and the business side of the industry complements my technical skills, making me a well-rounded professional. 
            I am also the founder of Codeblooded Consulting, where I bring my extensive experience and unique insights to help clients secure and grow their digital landscapes.
          </p>
          <div className="flex justify-center">
            <Link href="/about" className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">The Cybersecurity Field Manual</h3>
              <p className="text-gray-600 mb-4">The Cybersecurity Field Manual is a comprehensive guide designed to equip readers with essential cybersecurity knowledge.</p>
              <Link href="/projects/project-1" className="text-purple-600 hover:text-purple-800">Learn More →</Link>
            </div>
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Networking Basics For Hackers</h3>
              <p className="text-gray-600 mb-4">Written for No Starch Press, this book is designed to provide a solid foundation in networking concepts for those new to the field.</p>
              <Link href="/projects/project-2" className="text-purple-600 hover:text-purple-800">Learn More →</Link>
            </div>
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-purple-600 mb-2">Hacking The Hiring Process</h3>
              <p className="text-gray-600 mb-4">A series of in-depth articles (soon to be an e-book) designed to help you get your dream job through the labyrinthine hiring process.</p>
              <Link href="/blog" className="text-purple-600 hover:text-purple-800">Learn More →</Link>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-purple-700 mb-6">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-8">
            I'm always open to new opportunities and exciting projects. If you have an idea or need a developer, let's chat!
          </p>
          <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition duration-300">
            Get In Touch
          </Link>
        </div>
      </section>
    </main>
  );
}