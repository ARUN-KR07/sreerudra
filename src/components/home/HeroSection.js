"use client";

import Image from "next/image";
import { useState } from "react";
import PopupForm from "@/components/form/PopupForm";



export default function HeroSection() {

  const [open, setOpen] = useState(false);


  return (
    <main className="page-spacing">
      <section className="page-container">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center text-center md:text-left">

          {/* LEFT CONTENT */}
          <div>
            <p className="mb-3">
              Welcome to
            </p>

            <h1 className=" mb-4">
              SREERUDRA AYURVEDA
            </h1>

            <h2 style={{ fontSize: "36px", fontWeight: "600", color: "#000000", }}>
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
            <div className="flex items-center gap-4 mb-8 itrms-center justify-center md:justify-start">
              <button onClick={() => setOpen(true)} className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-900 transition">
                Get Started
              </button>

              <button className="border border-gray-400 px-6 py-3 rounded-full hover:bg-gray-100 transition">
                Contact Us
              </button>
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
          <div className="grid grid-cols-2 gap-6">

            {/* IMAGE 1 */}
            <div className="relative rounded-[40px] overflow-hidden group cursor-pointer transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Image
                src="/images/cause1.png"
                alt="statue"
                width={300}
                height={300}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            {/* IMAGE 2 */}
            <div className="relative rounded-[40px] overflow-hidden group cursor-pointer transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Image
                src="/images/cause1.png"
                alt="building"
                width={300}
                height={300}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            {/* IMAGE 3 */}
            <div className="relative rounded-[40px] overflow-hidden group cursor-pointer transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Image
                src="/images/cause1.png"
                alt="hospital corridor"
                width={300}
                height={300}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

            {/* IMAGE 4 */}
            <div className="relative rounded-[40px] overflow-hidden group cursor-pointer transition duration-300 hover:-translate-y-2 hover:shadow-xl">
              <Image
                src="/images/cause1.png"
                alt="hut"
                width={300}
                height={300}
                className="object-cover w-full h-full transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />
            </div>

          </div>
        </div>
      </section>
      <PopupForm open={open} setOpen={setOpen} />
    </main>
  );
}