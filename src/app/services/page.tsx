// src/app/services/page.tsx
import Link from 'next/link';
import Image from 'next/image';

type Service = {
  title: string;
  description: string;
  price: string;
  gumroadLink: string;
  image: string;
};

const services: Service[] = [
  {
    title: "1-Hour Cybersecurity Consultation",
    description: "Get personalized advice on your cybersecurity needs from an experienced professional.",
    price: "$150",
    gumroadLink: "https://gumroad.com/l/your-consultation-link",
    image: "/images/consultation.jpg",
  },
  {
    title: "The Cybersecurity Field Manual (E-book)",
    description: "A comprehensive guide to essential cybersecurity knowledge for beginners and professionals alike.",
    price: "$29.99",
    gumroadLink: "https://gumroad.com/l/your-ebook-link",
    image: "/images/ebook-cover.jpg",
  },
  // Add more services/products as needed
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-purple-700">Services & Products</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-md flex flex-col">
            <Image 
              src={service.image} 
              alt={service.title} 
              width={300} 
              height={200} 
              className="rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
            <p className="text-xl font-bold text-purple-700 mb-4">{service.price}</p>
            <a 
              href={service.gumroadLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition duration-300 text-center"
            >
              Purchase
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}