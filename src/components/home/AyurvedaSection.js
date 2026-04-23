"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useEffect } from "react";

export default function AyurvedaSection() {

  // 🔥 Scroll Animation
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="page-spacing">
    <section className="w-full pt-16  flex items-center bg-[#ffffff]">
      <div className="w-full px-6 relative">

        {/* SVG CURVES */}
        <svg className="hidden md:block absolute inset-0 w-full h-[70%] pointer-events-none z-0" viewBox="0 0 100 100" preserveAspectRatio="none"
>
          <path
            d="M 34 0 Q 22 50 34 100"
            stroke="#f97316"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="2 3"
          />
          <path
            d="M 66 0 Q 78 50 66 100"
            stroke="#f97316"
            strokeWidth="0.5"
            fill="none"
            strokeDasharray="2 3"
          />
        </svg>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center relative z-10">

          {/* LEFT SIDE */}
          <div className="relative h-[600px] hidden md:block">

            <div className="absolute flex gap-4 items-center fade-up" style={{ top: "-50px", right: "-10px" }}>
              <div className="text-right max-w-xs">
                <h3 className="font-semibold text-lg">Arthritis</h3>
                <p className="text-lg text-gray-600 mt-2">
                  Arthritis typically refers to joint disease or joint pains, and it is more commonly observed in women.
                </p>
              </div>
              <Icon />
            </div>

            <div className="absolute flex gap-4 items-center fade-up" style={{ top: "150px", right: "60px" }}>
              <div className="text-right max-w-xs">
                <h3 className="font-semibold text-lg">Gynecological Issues</h3>
                <p className="text-lg text-gray-600 mt-2">
                  PCOS is widely recognized as a leading cause of infertility among women.
                </p>
              </div>
              <Icon />
            </div>

            <div className="absolute flex gap-4 items-center fade-up" style={{ bottom: "140px", right: "-10px" }}>
              <div className="text-right max-w-xs">
                <h3 className="font-semibold text-lg">Primary Hypertension</h3>
                <p className="text-lg text-gray-600 mt-2">
                  High blood pressure without a secondary cause.
                </p>
              </div>
              <Icon />
            </div>

          </div>

          {/* CENTER */}
          <div className="flex items-start justify-center fade-up">
            <div className="relative w-[500px] h-[500px] flex items-start justify-center">
              <div className="absolute rounded-full bg-[#e9dccd]"style={{width: "500px",height: "500px",top: "35%",left: "50%",transform: "translate(-50%, -50%)",}}/>

              <div className="w-[360px] h-[360px] bg-orange-500 rounded-full flex items-start justify-center z-10">
                <Image
                  src="/images/med.webp"
                  alt="Ayurveda"
                  width={300}
                  height={300}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative h-[600px] hidden md:block">

            <div className="absolute flex gap-4 items-center fade-up" style={{ top: "-50px", left: "-10px" }}>
              <Icon />
              <div className="max-w-xs">
                <h3 className="font-semibold text-lg">Spinal Problems</h3>
                <p className="text-lg text-gray-600 mt-2">
                  The spinal cord and nerves pass through vertebrae which protect and support them.
                </p>
              </div>
            </div>

            <div className="absolute flex gap-4 items-center fade-up" style={{ top: "150px", left: "60px" }}>
              <Icon />
              <div className="max-w-xs">
                <h3 className="font-semibold text-lg">Thyroid Problems</h3>
                <p className="text-lg text-gray-600 mt-2">
                  Thyroid gland dysfunction affects metabolism.
                </p>
              </div>
            </div>

            <div className="absolute flex gap-4 items-center fade-up" style={{ bottom: "140px", left: "-10px" }}>
              <Icon />
              <div className="max-w-xs">
                <h3 className="font-semibold text-lg">Obesity & Overweight</h3>
                <p className="text-lg text-gray-600 mt-2">
                  Excess fat accumulation affecting health.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* 📱 MOBILE VIEW */}
        <div className="md:hidden flex flex-col gap-8 mt-10">

          {[
            { title: "Arthritis", text: "Joint pain disease commonly in women." },
            { title: "Gynecological Issues", text: "PCOS affects fertility." },
            { title: "Primary Hypertension", text: "High BP without cause." },
            { title: "Spinal Problems", text: "Spine supports nerves." },
            { title: "Thyroid Problems", text: "Hormonal imbalance issues." },
            { title: "Obesity & Overweight", text: "Excess fat affects health." },
          ].map((item, i) => (
            <div key={i} className="flex gap-4 items-center fade-up">
              <Icon />
              <div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
    </main>
  );
}

/* 🔹 ICON */
function Icon() {
  return (
    <div
      className="bg-orange-500 rounded-full flex items-center justify-center shrink-0"
      style={{ width: "56px", height: "56px" }}
    >
      <Check
        className="text-white"
        style={{ width: "28px", height: "28px" }}
      />
    </div>
  );
}