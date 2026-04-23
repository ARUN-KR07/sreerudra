import React from 'react';
import Image from 'next/image';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "/images/cause1.png",
      title: "Inauguration Glimpses : Sreerudra Ayurveda Trivandrum",
    },
    {
      id: 2,
      image: "/images/cause2.png",
      title: "Programs",
    },
    {
      id: 3,
      image: "/images/cause3.png",
      title: "Celebrations and Achievements",
    },
    {
      id: 4,
      image: "/images/cause4.png",
      title: "Sreerudra Ayurveda Alappuzha",
    },
    {
      id: 5,
      image: "/images/cause5.png",
      title: "New Beginning",
    }
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
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide mb-4" style={{ color: 'white' }}>Gallery</h1>
          <div className="flex items-center space-x-2 text-white text-sm font-medium tracking-wider">
            <span>Home</span>
            <span>&rarr;</span>
            <span>Gallery</span>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="page-container page-spacing py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="relative w-full h-[250px] shrink-0 overflow-hidden" style={{ minHeight: '250px' }}>
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6 md:p-8 flex-grow flex items-center justify-center text-center">
                <h3 className="font-serif text-[#333333] text-[20px] md:text-[22px] font-bold leading-snug">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
