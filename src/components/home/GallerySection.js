"use client";

import Image from "next/image";
import Link from "next/link";

export default function GallerySection() {
  const images = [
    "/images/cause1.png",
    "/images/cause2.png",
    "/images/cause3.png",
    "/images/cause4.png",
    "/images/cause5.png",
    "/images/cause6.png",
  ];

  return (
    <main className="page-spacing">
      <section className="w-full px-4">
        <div className="max-w-7xl mx-auto text-center">

          {/* Heading */}
          <h2 className="font-bold">
            Moments of Healing and Renewal
          </h2>

          <p className="mt-4 text-gray-800 text-[20px] max-w-6xl mx-auto leading-relaxed">
            Immerse yourself in our gallery showcasing moments of wellness and rejuvenation.
            From serene treatment settings to holistic care in action, experience the essence
            of Ayurveda and modern healing practices through captivating visuals that tell
            stories of transformation and well-being.
          </p>

          {/* Image Grid */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-tl-[80px] rounded-br-[80px] group shadow-xl"
              >
                <Image
                  src={src}
                  alt={`gallery-${i}`}
                  width={500}
                  height={350}
                  className="w-full h-[300px] object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link
              href="/gallery"
              className="inline-block bg-[#ED8916] text-white px-10 py-4 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px] font-bold transition-all hover:scale-105 hover:bg-[#d97706] shadow-lg"
            >
              Explore Full Gallery
            </Link>
          </div>

        </div>
      </section>
    </main>
  );
}