export default function MedicinesSection({ data }) {
  if (!data.medicines) return null;

  return (
    <section className="page-spacing py-16">
      <div className="page-container max-w-[1720px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {data.medicines.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] border border-gray-200 p-8 md:p-12 text-center flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow duration-300 min-h-[280px]"
            >
              <h3 className="font-poppins font-sans text-[18px] md:text-[20px] font-bold text-black mb-6">
                {item.title}
              </h3>
              <p className="text-gray-700 text-[16px] md:text-[18px] leading-relaxed max-w-2xl mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
