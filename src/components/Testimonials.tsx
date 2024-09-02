// src/components/Testimonials.tsx
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type Testimonial = {
  id: number;
  text: string;
  author: string;
  position: string;
};

// Export testimonials data so it can be imported and used elsewhere if needed
export const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "I cannot recommend Matt Twells enough. With 7+ years of cybersecurity experience and keen attention to detail, having Matt in your corner is invaluable. His expertise is wide-ranging and tactically useful, along with hands-on experience in a range of areas. I would recommend Matt to anyone in a heartbeat if they were looking for a no-nonsense, hands-on security expert.",
    author: "Justin O'Dea",
    position: "Marketing Customer Experience Manager, Western CPE"
  },
  {
    id: 2,
    text: "When I was considering leaving the Army, Matt's advice to pursue IT certifications starting with CompTIA Network+, and to plan a step-by-step career path, was the guiding light I needed. His continuous job advice and mentorship helped me navigate my career transition smoothly, and I can confidently say that I wouldn't be where I am today without him. Matt's natural ability to lead, mentor, and inspire is truly exceptional. I wholeheartedly recommend him to any team or individual fortunate enough to work with him - he is, without a doubt, an invaluable asset, an amazing gym buddy, and truly one of my greatest friends.",
    author: "Liam David Hughes",
    position: "Senior Manager & AWS Solutions Architect, Reapit"
  },
  {
    id: 3,
    text: "Matt remains one of my oldest friends, and I've watched him grow into one of the most insightful, dedicated and educated people in his field. Matt is a fantastic writer at both a technical and personal level, a key advocate for mental health and a solid friend and manager. I'm not an expert in the cybersecurity field, but I am in recognising human nature and a work ethic at its best.",
    author: "Lauren Scott",
    position: "E-Commerce Managing Editor, Network N"
  },
  // Add more testimonials as needed
  {
    id: 4,
    text: "Matt is a good friend of mine, and a fantastic study partner. His communication and technical writing skills are fantastic, and his ability to take on new tasks is amazing. He can, and has, picked a cyber topic that he is weak in, and then go research it to the point that he can teach it back. He would be a fantastic hire in any security field with the ability to teach and to lead.",
    author: "Matthew Lashner",
    position: "Senior Security Consultant, NetSPI"
  },
  {
    id: 5,
    text: "Matt is driven, smart, and charismatic. He takes his knowledge learned in the trenches and helps companies protect themselves against modern threats. He also focuses heavily on building, facilitating and growing others. He is always willing to offer the hand to help someone achieve their next level.",
    author: "Peter Van Splunder",
    position: "DFIR Engineer II, Northwestern Mutual"
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800, // Increased from 500 to slow down by about 30%
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000, // Increased from 5000 to allow more reading time
    pauseOnHover: true
  };

  return (
    <div className="bg-purple-100 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">What People Say</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600 italic mb-4">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-purple-700 font-bold text-xl mr-4">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-purple-700">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}