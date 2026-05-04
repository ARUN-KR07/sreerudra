"use client";

import {
  HeartHandshake,
  HeartPulse,
  User,
  Leaf,
  Sprout,
} from "lucide-react";

export default function FeaturesRow() {
  const features = [
    {
      icon: <HeartHandshake size={48} strokeWidth={1.5} />,
      text: "100% Ayurvedic and Authentic",
    },
    {
      icon: <HeartPulse size={48} strokeWidth={1.5} />,
      text: "Experienced Medical Team",
    },
    {
      icon: <User size={48} strokeWidth={1.5} />,
      text: "Zero Side Effects on the body",
    },
    {
      icon: <Leaf size={48} strokeWidth={1.5} />,
      text: "Unique System of Healing",
    },
    {
      icon: <Sprout size={48} strokeWidth={1.5} />,
      text: "Usage of Pure Ayurvedic Herbs",
    },
  ];

  return (
    <main className="page-spacing">
      <section className="page-container">

        <div className="max-w-6xl mx-auto grid 
            grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 
            gap-8 text-center">

          {features.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center transition duration-300 hover:-translate-y-2"
            >
              {/* ICON */}
              <div className="text-orange-500 mb-4 transition duration-300 group-hover:scale-110 group-hover:text-orange-600">
                {item.icon}
              </div>

              {/* TEXT */}
              <p className="text-gray-800 font-medium text-[16px] sm:text-[18px] leading-relaxed max-w-[200px] group-hover:text-black">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}