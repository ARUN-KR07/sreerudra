import React from "react";

export default function SusceptibleSection({ data }) {
  if (!data?.susceptible) return null;

  return (
    <main className="page-spacing">
      <section className="page-container px-4 md:px-6 lg:px-10">
        {/* Main Heading */}
        <div className="mb-10">
          <h2 className="text-[32px] md:text-[42px] font-bold text-black font-serif leading-tight">
            {data.susceptible.heading}
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {data.susceptible.items.map((item, index) => (
            <div
              key={index}
              className="bg-[#004E22] rounded-[16px] md:rounded-[20px] p-6 md:p-8 flex items-center min-h-[140px] md:min-h-[160px] shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#004E22]/30"
            >
              <p className="text-white text-[16px] md:text-[20px] font-semibold leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
