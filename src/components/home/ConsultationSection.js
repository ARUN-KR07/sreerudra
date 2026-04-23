"use client";

import Image from "next/image";

export default function ConsultationSection() {
  return (
    <main className="page-spacing">
      <section className="w-full min-h-screen flex flex-col md:flex-row">

        {/* LEFT SIDE - FORM */}
        <div className="w-full md:w-1/2 bg-[#1f5c3b] text-white px-6 sm:px-10 md:px-16 py-12 flex flex-col justify-center">

          <p className="text-sm mb-3">Get in Touch</p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight mb-8">
            Get A Free <br /> Consultation Now
          </h2>

          {/* FORM */}
          <form className="space-y-4">

            {/* INPUT ROW */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded bg-white text-black outline-none 
                transition duration-300 focus:scale-[1.02] focus:shadow-lg"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded bg-white text-black outline-none 
                transition duration-300 focus:scale-[1.02] focus:shadow-lg"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded bg-white text-black outline-none 
                transition duration-300 focus:scale-[1.02] focus:shadow-lg"
              />
              <input
                type="text"
                placeholder="Phone"
                className="p-3 rounded bg-white text-black outline-none 
                transition duration-300 focus:scale-[1.02] focus:shadow-lg"
              />
            </div>

            <input
              type="text"
              placeholder="Location"
              className="w-full p-3 rounded bg-white text-black outline-none 
              transition duration-300 focus:scale-[1.02] focus:shadow-lg"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full p-3 rounded bg-white text-black outline-none 
              transition duration-300 focus:scale-[1.02] focus:shadow-lg"
            />

            {/* BUTTON */}
            <button
              type="submit"
              className="mt-4 bg-[#f59e0b] px-6 py-3 rounded-full text-white font-medium
              transition-all duration-300 
              hover:bg-[#d97706] hover:scale-105 hover:shadow-xl"
            >
              Get Started
            </button>

          </form>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-auto relative overflow-hidden group">

          <Image
            src="/images/med.webp"
            alt="Ayurveda"
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-500" />

        </div>

      </section>
    </main>
  );
}