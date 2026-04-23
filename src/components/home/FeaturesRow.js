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
      icon: <HeartHandshake size={52} strokeWidth={1.5} />,
      text: "100% Ayurvedic and Authentic",
    },
    {
      icon: <HeartPulse size={52} strokeWidth={1.5} />,
      text: "Experienced Medical Team",
    },
    {
      icon: <User size={52} strokeWidth={1.5} />,
      text: "Zero Side Effects on the body",
    },
    {
      icon: <Leaf size={52} strokeWidth={1.5} />,
      text: "Unique System of Healing",
    },
    {
      icon: <Sprout size={52} strokeWidth={1.5} />,
      text: "Usage of Pure Ayurvedic Herbs",
    },
  ];

  return (
    <main className="page-spacing">
      <section className="page-container">
        <div className="max-w-6xl mx-auto flex flex-wrap md:flex-nowrap items-center justify-between">

          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-center flex-1 group"
            >
              
              {/* ITEM */}
              <div className="flex flex-col items-center text-center px-6 w-full 
              transition duration-300 group-hover:-translate-y-2">
                
                {/* ICON */}
                <div className="text-orange-500 mb-6 
                transition duration-300 group-hover:scale-110 group-hover:text-orange-600">
                  {item.icon}
                </div>

                {/* TEXT */}
                <p className="text-gray-800 font-medium leading-relaxed text-[20px] max-w-[170px]
                transition duration-300 group-hover:text-black">
                  {item.text}
                </p>
              </div>

              {/* ✨ SOFT DIVIDER */}
              {index !== features.length - 1 && (
                <div className="hidden md:block h-16 w-[1px] bg-gray-300 mx-2"></div>
              )}

            </div>
          ))}

        </div>
      </section>
    </main>
  );
}