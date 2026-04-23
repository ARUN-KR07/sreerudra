"use client";

import { useState } from "react";
import PopupForm from "@/components/form/PopupForm";

export default function TreatmentsSection() {

  const [open, setOpen] = useState(false);

  const data = [
    {
      title: "Individualised Ayurveda Program",
      desc: `An individualized Ayurveda program offers a personalized and holistic approach to health and well-being, rooted in the principles of Ayurvedic medicine. This ancient healing system acknowledges the uniqueness of each individual, considering their specific mind-body constitution (Prakriti) and unique imbalances (Vikriti).`,
    },
    {
      title: "Rejuvenation & Detox Program",
      desc: `The Rejuvenation & Detox Program is a holistic wellness retreat meticulously crafted to rejuvenate the body, mind, and spirit. Rooted in Ayurvedic principles and other holistic healing practices, this transformative program focuses on cleansing and revitalizing the body while fostering inner balance and vitality.`,
    },
    {
      title: "Lifestyle/Weight Management",
      desc: `Lifestyle/Weight Management involves a comprehensive approach to achieving and maintaining a healthy weight through sustainable lifestyle changes. This approach moves beyond short-term diets and quick fixes, emphasizing the development of long-term habits that support overall well-being.`,
    },
  ];

  return (
    <main className="page-spacing">
      <section className="w-full px-4">
        <div className="max-w-7xl mx-auto text-center">

          {/* Heading */}
          <h1
            style={{ color: "#000000" }}
            className="text-4xl md:text-5xl font-semibold leading-tight"
          >
            Transform Your Body,{" "}
            <span>Mind And Life</span>
          </h1>

          <p className="mt-4 text-green-900 max-w-2xl mx-auto text-[18px]">
            Indulge in the transformative rejuvenation of Ayurveda today and feel
            the profound benefits for your mind and body.
          </p>

          {/* Cards */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((item, i) => (
              <div
                key={i}
                className="relative bg-white border border-green-600 rounded-[40px] p-8 flex flex-col justify-between min-h-[420px]
                transition-all duration-500 
                hover:-translate-y-3 hover:shadow-2xl hover:border-green-700 group"
              >
                <div>
                  <h3
                    style={{ fontFamily: "Playfair Display" }}
                    className="text-[28px] font-semibold mb-4 
                    transition duration-300 group-hover:text-green-700"
                  >
                    {item.title}
                  </h3>

                  <p
                    className="text-black text-[18px] leading-relaxed 
                    transition duration-300 group-hover:text-gray-700"
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Button */}
                <div className="mt-6 flex justify-center">
                  <button onClick={() => setOpen(true)}
                    className="bg-green-700 text-white px-6 py-2 rounded-full 
                    transition-all duration-300 
                    hover:bg-green-800 hover:scale-105 hover:shadow-lg"
                  >
                    Book Now
                  </button>
                </div>

                {/* Subtle Glow */}
                <div className="absolute inset-0 rounded-[40px] opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none 
                bg-gradient-to-b from-green-100/30 to-transparent" />
              </div>
            ))}
          </div>

        </div>
      </section>
      <PopupForm open={open} setOpen={setOpen} />
    </main>
  );
}