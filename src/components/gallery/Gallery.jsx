import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { galleryItems } from '@/lib/galleryData';

const Gallery = () => {
  return (
    <div className="w-full bg-white pb-24">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[400px] flex flex-col items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=2000&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center flex flex-col items-center px-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold tracking-wide mb-4">Gallery</h1>
          <div className="flex items-center space-x-2 text-white text-sm md:text-base font-medium tracking-wider">
            <Link href="/" className="hover:text-orange-500 transition">Home</Link>
            <span>&rarr;</span>
            <span className="opacity-80">Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="page-container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <Link
              key={item.id}
              href={`/gallery/${item.slug}`}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full aspect-[4/3] shrink-0 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-4 flex-grow flex items-center justify-center text-center">
                <h3 className="font-serif text-[#333333] text-[16px] md:text-[18px] font-bold leading-snug line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
