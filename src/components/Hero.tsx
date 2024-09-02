// src/components/Hero.tsx
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const technologies = ['Cybersecurity', 'Risk Management', 'Training & Development', 'Leadership', 'Content Generation', 'Technical Writing', 'Technical Sales', 'Solutions Selling', 'Solutions Architecture'];

export default function Hero() {
  const [techIndex, setTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTechIndex((prevIndex) => (prevIndex + 1) % technologies.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-purple-600 to-indigo-800 text-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm Matthew Twells!
          </h1>
          <h2 className="text-2xl md:text-4xl mb-6">
            I'm a <span className="text-purple-200">Senior Pre-Sales Solutions Architect</span>
          </h2>
          <p className="text-xl mb-8">
            Specializing in{' '}
            <motion.span
              key={technologies[techIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2 }}
              className="inline-block font-semibold text-purple-200"
            >
              {technologies[techIndex]}
            </motion.span>
          </p>
          <div className="flex justify-center space-x-4">
          </div>
        </motion.div>
      </div>
    </div>
  );
}