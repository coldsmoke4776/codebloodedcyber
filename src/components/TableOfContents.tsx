import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

type Heading = {
  id: string
  text: string
  level: number
}

const TableOfContents: React.FC = () => {
  const [headings, setHeadings] = useState<Heading[]>([])
  const router = useRouter()

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll('h2, h3, h4'))
    const headingElements = elements.map((element) => ({
      id: element.id,
      text: element.textContent ?? '',
      level: Number(element.tagName.charAt(1)),
    }))
    setHeadings(headingElements)
  }, [router.asPath])

  return (
    <nav className="toc mb-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
      <ul className="space-y-2">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`${
              heading.level === 2 ? 'ml-0' : heading.level === 3 ? 'ml-4' : 'ml-8'
            }`}
          >
            <a
              href={`#${heading.id}`}
              className="text-blue-600 hover:underline"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TableOfContents