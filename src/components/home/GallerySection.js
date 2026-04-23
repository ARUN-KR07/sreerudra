"use client";

import Image from "next/image";

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
    <section className="w-full  px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
            <h2 style={{ fontSize: "36px" }} className="font-bold">
            Moments of Healing and Renewal
            </h2>

        <p className="mt-4 text-gray-800 text-[20px] max-w-6xl mx-auto leading-relaxed">
          Immerse yourself in our gallery showcasing moments of wellness and rejuvenation.
          From serene treatment settings to holistic care in action, experience the essence
          of Ayurveda and modern healing practices through captivating visuals that tell
          stories of transformation and well-being.
        </p>

        {/* Image Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-[30px] group"
            >
              <Image
                src={src}
                alt={`gallery-${i}`}
                width={500}
                height={350}
                className="w-full h-[260px] object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
    </main>
  );
}