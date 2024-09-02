// src/components/TagFilter.tsx
'use client'
import { useState } from 'react';

type TagFilterProps = {
  tags: string[];
  onFilterChange: (selectedTags: string[]) => void;
};

export default function TagFilter({ tags, onFilterChange }: TagFilterProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    const newSelectedTags = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    
    setSelectedTags(newSelectedTags);
    onFilterChange(newSelectedTags);
  };

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-purple-700">Filter by Tags:</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors duration-200 ${
              selectedTags.includes(tag)
                ? 'bg-purple-600 text-white'
                : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}