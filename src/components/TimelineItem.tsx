// src/components/TimelineItem.tsx
'use client'
import { motion } from 'framer-motion'

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
}

export function TimelineItem({ year, title, description }: TimelineItemProps) {
  return (
    <motion.li 
      className="mb-10 ml-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute w-3 h-3 bg-purple-600 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-purple-700" aria-hidden="true"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{year}</time>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{description}</p>
    </motion.li>
  )
}