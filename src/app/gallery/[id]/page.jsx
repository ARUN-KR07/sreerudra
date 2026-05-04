"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { galleryItems } from '@/lib/galleryData';
import OurTreatments from '@/components/home/OurTreatments';

export default function GalleryDetailPage() {
  const params = useParams();
  const slug = params.id;
  const [activeTab, setActiveTab] = React.useState('photo'); // 'photo' | 'video'
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);

  const item = galleryItems.find((i) => i.slug === slug);

  const openLightbox = (index) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);
  const nextImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev + 1) % item.album.length);
  };
  const prevImage = (e) => {
    e.stopPropagation();
    setSelectedImageIndex((prev) => (prev - 1 + item.album.length) % item.album.length);
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'ArrowRight') nextImage(e);
      if (e.key === 'ArrowLeft') prevImage(e);
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex]);

  if (!item) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
        <h1 className="text-3xl font-bold mb-4">Gallery Item Not Found</h1>
        <Link href="/gallery" className="bg-[#ED8916] text-white px-6 py-2 rounded-lg">
          Back to Gallery
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] md:h-[450px] flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${item.image})` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 text-center flex flex-col items-center px-4 max-w-4xl">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide mb-6 leading-tight">
            {item.title}
          </h1>
          <div className="flex items-center space-x-2 text-white text-sm md:text-base font-medium tracking-wider">
            <Link href="/" className="hover:text-orange-500 transition">Home</Link>
            <span>&rarr;</span>
            <Link href="/gallery" className="hover:text-orange-500 transition">Gallery</Link>
            <span>&rarr;</span>
            <span className="opacity-80 line-clamp-1">{item.title}</span>
          </div>
        </div>
      </section>

      {/* Toggle Buttons */}
      <section className="page-container mt-16 flex justify-center">
        <div className="flex rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px] overflow-hidden border-2 border-[#008439]">
          <button
            onClick={() => setActiveTab('photo')}
            className={`px-10 md:px-16 py-3 font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'photo' ? 'bg-[#008439] text-white' : 'bg-white text-[#008439] hover:bg-green-50'
              }`}
          >
            Photos
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-10 md:px-16 py-3 font-bold text-sm md:text-base transition-all duration-300 ${activeTab === 'video' ? 'bg-[#008439] text-white' : 'bg-white text-[#008439] hover:bg-green-50'
              }`}
          >
            Videos
          </button>
        </div>
      </section>

      {/* Content Section */}
      <section className="page-container py-12 md:py-16">

        {activeTab === 'photo' ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {item.album.map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="relative overflow-hidden rounded-2xl shadow-lg group h-[200px] sm:h-[250px] cursor-pointer"
              >
                <Image
                  src={img}
                  alt={`${item.title} ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {item.videos?.map((video) => (
              <div
                key={video.id}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative w-full aspect-video shrink-0 overflow-hidden bg-black">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="absolute top-0 left-0 w-full h-full border-none"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-serif text-[#333333] text-[16px] md:text-[18px] font-bold leading-snug">
                    {video.title}
                  </h3>
                </div>
              </div>
            ))}
            {(!item.videos || item.videos.length === 0) && (
              <div className="col-span-full py-20 text-center text-gray-500 italic">
                No videos available for this category.
              </div>
            )}
          </div>
        )}

        <div className="mt-20 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 bg-[#ED8916] text-white px-10 py-4 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px] font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 shadow-lg"
          >
            ← Back to Gallery
          </Link>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 z-[3000] bg-black/50 flex items-center justify-center animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-5xl hover:text-orange-500 transition z-50"
            onClick={closeLightbox}
          >
            &times;
          </button>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 text-white text-5xl md:text-7xl hover:text-orange-500 transition z-50 p-4"
            onClick={prevImage}
          >
            &#8249;
          </button>

          <button
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 text-white text-5xl md:text-7xl hover:text-orange-500 transition z-50 p-4"
            onClick={nextImage}
          >
            &#8250;
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full p-10 flex items-center justify-center">
            <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
              <img
                src={item.album[selectedImageIndex]}
                alt="Full View"
                className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300"
              />
            </div>
          </div>

          {/* Counter */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white bg-black/50 px-6 py-2 rounded-full font-medium tracking-widest">
            {selectedImageIndex + 1} / {item.album.length}
          </div>
        </div>
      )}

      <OurTreatments />
    </main>
  );
}
