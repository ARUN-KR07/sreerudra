"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import PopupForm from "@/components/form/PopupForm";



export default function HeroSection() {

  const [open, setOpen] = useState(false);


  return (
    <main className="page-spacing -mt-10 lg:-mt-20">
      <section className="page-container">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center text-center md:text-left">

          {/* LEFT CONTENT */}
          <div className="md:-mt-20">
            <p className="mb-3">
              Welcome to
            </p>

            <h1 className=" mb-4">
              SREERUDRA AYURVEDA
            </h1>

            <h2 style={{ fontSize: "24px", fontWeight: "600", color: "#000000", }}>
              WHERE YOUR MIND, BODY & SOUL GETS HEALED
            </h2>

            <p className="text-gray-600 mb-6 text-[20px] leading-relaxed">
              To uphold and propagate the rich tradition of Indian medicine by
              offering authentic treatment to those in need. Additionally, to
              become a center of excellence for studies, research, and treatment
              in the Ayurvedic field, thereby making meaningful contributions to
              global humanity.
            </p>

            {/* BUTTONS */}
            <div className="flex items-center gap-4 mb-8 items-center justify-center md:justify-start">
              <button onClick={() => setOpen(true)} className="bg-green-700 text-white px-8 py-4 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px] hover:bg-green-900 transition font-bold shadow-lg">
                Get Started
              </button>

              <Link href="/contact">
                <button className="border-2 border-gray-400 px-8 py-4 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px] hover:bg-gray-100 transition font-bold">
                  Contact Us
                </button>
              </Link>
            </div>

            {/* USERS */}
            <div className="flex items-center gap-4 justify-center md:justify-start text-center md:text-left">
              <div className="flex -space-x-3">
                <Image
                  src="/images/cause1.png"
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/images/cause1.png"
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
                <Image
                  src="/images/cause1.png"
                  alt="user"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </div>

              <div>
                <p className="font-semibold text-lg">5000+</p>
                <p className="text-green-700 text-sm">
                  Satisfied Customers
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          {/* RIGHT IMAGES - Staggered Leaf Layout */}
          <div className="flex gap-4 md:gap-6 items-start">

            {/* Column 1 */}
            <div className="flex flex-col gap-4 md:gap-6 w-1/2">
              {/* IMAGE 1 (Statue) */}
              <div className="relative rounded-tr-[200px] rounded-bl-[200px] overflow-hidden group cursor-pointer transition duration-300 hover:-translate-y-2 hover:shadow-xl shadow-lg h-[200px] sm:h-[300px] lg:h-[350px]">
                <Image
                  src="/images/h1.webp"
                  alt="statue"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* IMAGE 3 (Corridor) */}
              <div className="relative rounded-tl-[180px] rounded-br-[180px] overflow-hidden group cursor-pointer transition duration-300 hover:-translate-y-2 hover:shadow-xl shadow-lg h-[200px] sm:h-[300px] lg:h-[350px]">
                <Image
                  src="/images/h3.webp"
                  alt="hospital corridor"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </div>

            {/* Column 2 - Staggered Down */}
            <div className="flex flex-col gap-4 md:gap-6 w-1/2 mt-12 md:mt-16">
              {/* IMAGE 2 (Solar) */}
              <div className="relative rounded-tl-[180px] rounded-br-[180px] overflow-hidden group cursor-pointer transition duration-300 hover:-translate-y-2 hover:shadow-xl shadow-lg h-[200px] sm:h-[300px] lg:h-[350px]">
                <Image
                  src="/images/h2.webp"
                  alt="building"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>

              {/* IMAGE 4 (Hut) */}
              <div className="relative rounded-tr-[200px] rounded-bl-[200px] overflow-hidden group cursor-pointer transition duration-300 hover:-translate-y-2 hover:shadow-xl shadow-lg h-[200px] sm:h-[300px] lg:h-[350px]">
                <Image
                  src="/images/h4.webp"
                  alt="hut"
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
              </div>
            </div>

          </div>
        </div>
      </section>
      <PopupForm open={open} setOpen={setOpen} />
    </main>
  );
}