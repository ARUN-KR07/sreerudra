"use client";

import Image from "next/image";

export default function ServiceSection() {
  return (
    <main className="page-spacing">
      <section className="w-full">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGES */}
          <div className="flex gap-6 items-end justify-center md:justify-start flex-wrap md:flex-nowrap">

            {/* LEFT IMAGE */}
            <div className="relative w-full sm:w-[45%] md:w-[290px] h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden rounded-[60px]
            group transition duration-500 hover:-translate-y-3 hover:shadow-2xl">
              
              <Image
                src="/images/cause1.png"
                alt="chair"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative w-full sm:w-[45%] md:w-[290px] h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden rounded-[60px]
            group transition duration-500 hover:-translate-y-3 hover:shadow-2xl">
              
              <Image
                src="/images/cause1.png"
                alt="table"
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

          </div>

          {/* RIGHT CONTENT */}
          <div className="text-center md:text-left">

            <h2 className="text-[50px] font-bold text-black leading-tight mb-4">
              Service that benefit
            </h2>

            <h2 className="text-[50px] font-bold text-green-700 mb-6">
              Your Cure!
            </h2>

            <p className="text-gray-800 text-[18px] leading-relaxed mb-4">
              When an illness arises, it comes first in thought form, then in sound form, and then light form, which is in the aura. It is only then that the illness manifests in the body. With the practice of Ayurveda, the illness can be nipped in the bud.
            </p>

            <p className="text-gray-800 text-[18px] leading-relaxed">
              Sreerudra Ayurveda is renowned for its state-of-the-art facilities that blend
              modern conveniences with traditional treatment methods, ensuring highly effective care. 
              Located in Alleppey, often called the Venice of the East and a prominent tourist destination in Kerala,
              India, it offers a tranquil and verdant setting that enhances the healing experience. All in-patient wards
              are equipped with cutting-edge amenities and the latest medical equipment, meeting global standards.
              This Ayurvedic retreat in Kerala provides holistic services including accommodation, personalized treatments,
              prescribed medications, and customized dietary plans tailored to each patient’s treatment requirements.
            </p>

          </div>

        </div>
      </section>
    </main>
  );
}