import React from 'react'
import Link from 'next/link'

type Article = {
  title: string
  url: string
}

type RelatedArticlesProps = {
  articles: Article[]
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  return (
    <section className="related-articles mt-8 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Related Articles</h2>
      <ul className="space-y-2">
        {articles.map((article, index) => (
          <li key={index}>
            <Link href={article.url}>
              <a className="text-blue-600 hover:underline">{article.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RelatedArticles