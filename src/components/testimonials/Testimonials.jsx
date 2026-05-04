"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('video'); // 'video' | 'photo'

  // Using a dummy YouTube short URL for demonstration
  // In a real scenario, you can replace these with actual short IDs
  const dummyShorts = [
    "https://www.youtube.com/embed/7X8II6J-6mU", 
    "https://www.youtube.com/embed/7X8II6J-6mU",
    "https://www.youtube.com/embed/7X8II6J-6mU",
    "https://www.youtube.com/embed/7X8II6J-6mU",
  ];

  const dummyPhotos = [
    "/images/cause1.png",
    "/images/cause2.png",
    "/images/cause3.png",
    "/images/cause4.png",
  ];

  return (
    <div className="w-full bg-white pb-24">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex flex-col items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=2000&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide mb-4" style={{ color: 'white' }}>Testimonials</h1>
          <div className="flex items-center space-x-2 text-white text-sm font-medium tracking-wider">
            <span>Home</span>
            <span>&rarr;</span>
            <span>Testimonials</span>
          </div>
        </div>
      </section>

      {/* Toggle Buttons */}
      <section className="page-container mt-16 flex justify-center">
        <div className="flex rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px] overflow-hidden border-2 border-[#008439]">
          <button 
            onClick={() => setActiveTab('video')}
            className={`px-10 md:px-16 py-3 font-bold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'video' ? 'bg-[#008439] text-white' : 'bg-white text-[#008439] hover:bg-green-50'
            }`}
          >
            Video
          </button>
          <button 
            onClick={() => setActiveTab('photo')}
            className={`px-10 md:px-16 py-3 font-bold text-sm md:text-base transition-all duration-300 ${
              activeTab === 'photo' ? 'bg-[#008439] text-white' : 'bg-white text-[#008439] hover:bg-green-50'
            }`}
          >
            Photo
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="page-container mt-16">
        {activeTab === 'video' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {dummyShorts.map((src, index) => (
              <div 
                key={index} 
                className="w-full max-w-[320px] rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative hover:-translate-y-2 transition-transform duration-300"
                style={{ aspectRatio: '9/16' }}
              >
                <iframe 
                  src={src} 
                  title={`Testimonial Short ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {dummyPhotos.map((src, index) => (
              <div 
                key={index} 
                className="relative w-full rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-transform duration-300 group"
                style={{ aspectRatio: '3/4' }}
              >
                <Image 
                  src={src} 
                  alt={`Testimonial Photo ${index + 1}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Testimonials;
