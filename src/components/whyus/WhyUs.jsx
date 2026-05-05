"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PopupForm from "@/components/form/PopupForm";
import { useState } from "react";

const WhyUs = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide" style={{ color: 'white' }}>Why us</h1>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="page-container page-spacing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Image — always on top for mobile+tablet, left on desktop */}
          <div className="relative w-full aspect-[4/3] rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-xl order-1 lg:order-1">
            <Image
              src="/images/cause6.png"
              alt="Ayurvedic Herbs"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Content — below image on mobile+tablet, right on desktop */}
          <div className="space-y-6 order-2 lg:order-2">
            <p className="text-sm font-semibold text-gray-800 uppercase tracking-wider">Our Facilities</p>
            <h2>Best Ayurveda treatment Facilities in Kerala</h2>
            <div className="space-y-4 text-gray-800 text-[18px]">
              <p>
                The hospital boasts of state of the art facility with a combination of modern and traditional treatment facilities available to make treatments effective.
              </p>
              <p>
                Its located in Alleppey, which is known as the Venice of the east. One of the major tourist attractions of Kerala, India. The surroundings are quite green and provides a very healthy and rejuvenating and great feeling for visitors.
              </p>
              <p>
                All its in-patient wards have latest amenities and facilities. All rooms are fitted with the most modern equipment's and facilities for the present world.
              </p>
              <p>
                This Ayurveda retreat in Kerala provides accommodation, treatment, medicines and prepare different types of food specified by the doctor for all its in-patient based on the treatment category and food specification.
              </p>
            </div>
            <button onClick={() => setOpen(true)} className="bg-[#f59720] hover:bg-[#d8841a] text-white px-8 py-3 rounded-tl-[20px] rounded-br-[20px]  font-medium transition-colors">
              Book an Appointment
            </button>
          </div>

        </div>
      </section>

      {/* Ways of Treatments Section */}
      <section className="page-container page-spacing bg-gray-50/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Image — always on top for mobile+tablet, right on desktop */}
          <div className="relative w-full aspect-[4/3] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-xl order-1 lg:order-2">
            <Image
              src="/images/cause7.png"
              alt="Hospital Corridor"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Content — below image on mobile+tablet, left on desktop */}
          <div className="space-y-6 order-2 lg:order-1">
            <h2>Our ways of Treatments</h2>
            <div className="space-y-4 text-gray-800 text-[18px] leading-snug">
              <p>
                Ayurveda is one of the oldest medical systems in the world. It was derived from its ancient Sanskrit roots - 'ayus' (life) and 'ved' (knowledge) over 5000 years ago. It is India's traditional health care system. The main source of knowledge is the Vedas, more specifically 'Atharvaveda', the fourth of the series which dates back to 1000 B.C. Of all the treatises the famous ones that survived extinction are 'Charaka Samhita' and the Sushruta Samhita' - internal medicine and surgery respectively.
              </p>
              <p>
                Ayurveda spreads to Tibet, China, mongolia, Korea and Sri Lanka carries over by Buddhist Monks. Ayurveda is not solely a health care system but a form of lifestyle espoused to preserve perfect balance and harmony of the three physical energies - Vata, Pita, Kapha and the three mental energies - Satwa, Raja, Tamas.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Ashtanga Hridayam Section — unchanged */}
      <section className="page-container page-spacing">
        <div className="space-y-6 mb-12">
          <p className="text-sm font-semibold text-[#008439] uppercase tracking-wider">Treatments</p>
          <h2>Ashtanga Hridayam</h2>
          <p className="text-gray-800 text-[18px] leading-snug max-w-5xl">
            Ashtanga Hridayam - heart of all the eight branches of Ayurveda is the concise compilation of earlier Ayurvedic texts. AH is written by Vaghbata is in poetic form in Sanskrit. Ashtanga in Sanskrit means Eight components that represent internal medicine, surgery, Gynecology and Pediatrics, rejuvenation therapy, aphrodisiac therapy, toxicology, psychiatry or spiritual healing and ENT. It continues to serve as a root of Ayurvedic philosophy and protocol. Sushruta - one of the earliest surgeons, Charaka a medical genius and Vaghabata are considered to be "the trinity" of Ayurvedic knowledge.
          </p>
        </div>

        {/* 3 Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="relative w-full aspect-[4/3] rounded-tl-[40px] rounded-br-[40px] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/treatment1.png"
              alt="Ayurvedic Massage"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/3] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/treatment2.png"
              alt="Shirodhara"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="relative w-full aspect-[4/3] rounded-tr-[40px] rounded-bl-[40px] overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src="/images/treatment3.png"
              alt="Oil Treatment"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div className="text-gray-800 text-[18px] leading-snug space-y-4">
            <p>
              The science of life as the word meaning denotes is not just a traditional system of healing instead it's a definite way to wellbeing. The science is divided into SWASATHAVRITHA and ATHURAVRITHA. Swasathavritha deals with means and methods to healthy longevity and Athuravritha deals with diseases and its holistic management.
            </p>
            <p>
              All the matters in the universe is made up of five elements such as Earth, Water, Fire, Wind and space or void or ether. Earth represents the solid heavy state; water represents the free-flowing liquid state. Since the body is also an object, it is also made up of five elements. The health is preserved only when these five elements comprising our body are in homogeneous state and equilibrium. Our food and lifestyle has an impact on this delicate balance of five elements. However, these foodstuffs and lifestyles have effects on the body.
            </p>
          </div>
          <Link href="/contact">
            <button className="bg-[#f59720] hover:bg-[#d8841a] text-white px-8 py-3 rounded-tl-[20px] rounded-br-[20px]  font-medium transition-colors">
              Consult Us
            </button>
          </Link>
        </div>
        <PopupForm open={open} setOpen={setOpen} />
      </section>
    </div>
  );
};

export default WhyUs;