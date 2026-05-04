import Image from "next/image";
import Link from "next/link";
import { renderIcon } from "./IconResolver";

export default function InfoGrids({ data }) {
  const hasMedical = data.medicalAttention?.items?.length > 0;
  const hasPrevention = data.prevention?.items?.length > 0;
  const hasCauseCards = data.causeCards?.items?.length > 0;

  if (!hasMedical && !hasPrevention && !hasCauseCards) return null;

  return (
    <main className="page-spacing">
      {/* Medical Attention & Prevention */}
      {(hasMedical || hasPrevention) && (
        <section className="page-container relative w-full overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/bg.jpg" alt="bg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/80" />
          </div>

          <div className="relative z-10">
            {hasMedical && (
              <>
                <div className="text-center mb-8 md:mb-10">
                  <h2 className="text-center page-container mt-[30px] mb-[20px]">
                    {data.medicalAttention.heading}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 mb-16">
                  {data.medicalAttention.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px] p-5 md:p-8 shadow-[-6px_6px_0px_rgba(0,0,0,0.1)]
                        transition-all duration-300 ease-in-out hover:-translate-y-2
                        hover:shadow-xl hover:shadow-black/20"
                    >
                      <div className="flex items-center gap-3 mb-3 md:mb-4">
                        {renderIcon(item.icon)}
                        <h3 className="text-[20px] md:text-[22px] font-semibold text-[#0B5D3B]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {hasPrevention && (
              <>
                <div className="text-center page-container mt-[30px] mb-[20px]">
                  <h2 className="text-center page-container mt-[20px] mb-[20px]">
                    {data.prevention.heading}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {data.prevention.items.map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px] p-5 md:p-8 shadow-[-6px_6px_rgba(0,0,0,0.1)]
                        transition-all duration-300 ease-in-out hover:-translate-y-2
                        hover:shadow-xl hover:shadow-black/20"
                    >
                      <div className="flex items-center gap-3 mb-3 md:mb-4">
                        {renderIcon(item.icon)}
                        <h3 className="text-[20px] md:text-[22px] font-semibold text-[#0B5D3B]">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-[16px] md:text-[18px]">{item.text}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* Cause cards */}
      {hasCauseCards && (
        <section className="page-container relative w-full overflow-hidden mt-10">
          <div className="absolute inset-0">
            <img src="/images/bg.jpg" alt="bg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/80" />
          </div>

          <div className="relative z-10">
            <h2 className="text-center page-container mt-[30px] mb-[20px]">
              {data.causeCards.heading}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {data.causeCards.items.map((item, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-[16/12] rounded-tl-[40px] rounded-br-[40px] rounded-tr-[10px] rounded-bl-[10px] overflow-hidden
                    group transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <Image
                    src={`/images/cause${i + 1}.png`}
                    alt=""
                    fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover scale-105 group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5 text-white">
                    <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold leading-tight">
                      {item.label}
                    </h3>
                    {item.subtext && (
                      <p className="text-[13px] sm:text-[15px] text-gray-200 mt-1">
                        {item.subtext}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <div className="flex justify-center mt-6 md:mt-10">
        <Link
          href="/contact"
          className="inline-block bg-[#ED8916] text-white px-8 py-4 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px]
            font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg
            hover:shadow-orange-500/40 text-[18px] md:text-[22px] shadow-md"
        >
          Book an appointment
        </Link>
      </div>
    </main>
  );
}
