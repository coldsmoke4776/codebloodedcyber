// src/components/SkillBar.tsx
'use client'
import { motion } from 'framer-motion'

type SkillBarProps = {
  skill: string;
  level: number;
}

export function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-purple-700 dark:text-white">{skill}</span>
      </div>
      <div 
        className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700" 
        role="progressbar" 
        aria-valuenow={level} 
        aria-valuemin={0} 
        aria-valuemax={100}
      >
        <motion.div 
          className="bg-purple-600 h-2.5 rounded-full" 
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.5, delay: 0.2 }}
        ></motion.div>
      </div>
    </div>
  )
}