"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import PopupForm from "@/components/form/PopupForm";

export default function DiagnosisSection({ data }) {
  const [open, setOpen] = useState(false);

  if (!data.diagnosis) return null;

  return (
    <main className="page-spacing py-16 bg-[#EAF8F1] font-playfair">
      <section className="page-container max-w-[1720px] mx-auto">
        <h2 className="text-center text-3xl md:text-5xl font-bold mb-12 text-[#004E22]">
          {data.diagnosis.heading}
        </h2>

        {/* Single Unified Box */}
        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-green-50 relative min-h-[500px]">
          <div className="grid grid-cols-1 md:grid-cols-2 relative">

            {/* Center Line (Desktop Only) */}
            <div className="hidden md:block absolute top-[10%] bottom-[10%] left-1/2 w-[1px] bg-black -translate-x-1/2 z-0" />

            {/* Left Column */}
            <div className="p-8 md:p-12 lg:p-16 relative z-10 flex flex-col h-full">
              <h3 className="text-[24px] font-bold text-[#004E22] mb-10 leading-[100%] text-center">
                {data.diagnosis.leftCard.title}
              </h3>
              <ul className="space-y-8 flex-grow">
                {data.diagnosis.leftCard.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <div className="w-6 h-6 rounded-full bg-[#E6F4EA] flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                    </div>
                    <div>
                      {typeof item === "string" ? (
                        <span className="text-[16px] font-normal text-gray-700 leading-[100%]">{item}</span>
                      ) : (
                        <>
                          <h4 className="text-[24px] font-bold text-[#004E22] mb-2 leading-[100%]">
                            {item.title}
                          </h4>
                          <p className="text-gray-900 text-[16px] font-normal leading-[100%] font-playfair">
                            {item.desc}
                          </p>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-[#ED8916] text-white w-[300px] h-[60px] rounded-tl-[24px] rounded-br-[24px] font-normal font-[family-name:var(--font-karla)]
                    transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md text-[24px] leading-[100%]"
                >
                  Book Now
                </button>
              </div>
            </div>

            {/* Right Column */}
            <div className="p-8 md:p-12 lg:p-16 relative z-10 flex flex-col h-full">
              <h3 className="text-[24px] font-bold text-[#004E22] mb-10 leading-[100%] text-center">
                {data.diagnosis.rightCard.title}
              </h3>
              <ul className="space-y-8 flex-grow">
                {data.diagnosis.rightCard.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-5">
                    <div className="w-6 h-6 rounded-full bg-[#E6F4EA] flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-4 h-4 text-green-600 stroke-[3]" />
                    </div>
                    <div>
                      {typeof item === "string" ? (
                        <span className="text-[16px] font-normal text-gray-700 leading-[100%]">{item}</span>
                      ) : (
                        <>
                          <h4 className="text-[24px] font-bold text-[#004E22] mb-2 leading-[100%]">
                            {item.title}
                          </h4>
                          <p className="text-gray-900 text-[16px] font-normal leading-[100%] font-playfair">
                            {item.desc}
                          </p>
                        </>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10 flex justify-center">
                <button
                  onClick={() => setOpen(true)}
                  className="bg-[#ED8916] text-white w-[300px] h-[60px] rounded-tl-[24px] rounded-br-[24px] font-normal font-[family-name:var(--font-karla)]
                    transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md text-[24px] leading-[100%]"
                >
                  Book Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Popup Form */}
      <PopupForm open={open} setOpen={setOpen} />
    </main>
  );
}
