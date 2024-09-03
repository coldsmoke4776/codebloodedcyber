// src/app/contact/page.tsx
'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    // Reset submitted state after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-purple-700">Contact Me</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
          <AnimatePresence>
            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="mt-4 p-4 bg-green-100 text-green-700 rounded-md"
              >
                Thank you for your message. I will get back to you soon!
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-purple-600">Contact Information</h2>
          <div className="space-y-4">
            <p className="flex items-center">
              <FaEnvelope className="mr-2 text-purple-600" />
              <a href="mailto:contact@example.com" className="hover:text-purple-600">matttwells@codebloodedcyber.com</a>
            </p>
            <p className="flex items-center">
              <FaPhone className="mr-2 text-purple-600" />
              <a href="tel:+1234567890" className="hover:text-purple-600">+1 (541) 666-9661</a>
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-purple-600" />
                Salem, Oregon (USA)
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-purple-600">Follow Me</h2>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/mt4776/" className="text-gray-600 hover:text-purple-600"><FaLinkedin size={24} /></a>
            <a href="https://github.com/coldsmoke4776" className="text-gray-600 hover:text-purple-600"><FaGithub size={24} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}