// src/components/Testimonial.tsx
'use client'
import { motion } from 'framer-motion'

type TestimonialProps = {
  quote: string;
  author: string;
  position: string;
}

export function Testimonial({ quote, author, position }: TestimonialProps) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-gray-600 dark:text-gray-300 mb-4 italic">"{quote}"</p>
      <p className="text-gray-800 dark:text-gray-100 font-semibold">{author}</p>
      <p className="text-gray-500 dark:text-gray-400 text-sm">{position}</p>
    </motion.div>
  )
}
