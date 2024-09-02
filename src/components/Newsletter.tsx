import React, { useState } from 'react'

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your backend or newsletter service
    // For this example, we'll just show a success message
    setMessage('Thanks for subscribing!')
    setEmail('')
  }

  return (
    <section className="newsletter mt-8 p-4 bg-blue-100 rounded-lg">
      <h2 className="text-xl font-bold mb-2">Subscribe to Our Newsletter</h2>
      <p className="mb-4">Stay updated with our latest articles and news.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          className="flex-grow p-2 mb-2 sm:mb-0 sm:mr-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Subscribe
        </button>
      </form>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </section>
  )
}

export default Newsletter