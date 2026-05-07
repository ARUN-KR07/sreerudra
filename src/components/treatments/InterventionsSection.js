import Image from "next/image";

export default function InterventionsSection({ data }) {
  if (!data.interventions) return null;

  return (
    <section className="page-spacing bg-[#EAF8F1] py-16">
      <div className="page-container max-w-[1720px] mx-auto">
        {/* Top Card - Horizontal Layout */}
        <div className="bg-[#EAF8F1] rounded-[24px] border border-[#008439] p-6 md:p-10 mb-10 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-10 items-center ">
            {/* Image */}
            <div className="w-full lg:w-[45%] shrink-0">
              <div className="relative aspect-[16/11] rounded-[24px] overflow-hidden shadow-md">
                <Image
                  src={data.interventions.image || "/images/spine.jpg"}
                  alt={data.interventions.heading}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full ">
              <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-6 font-serif leading-tight">
                {data.interventions.heading}
              </h2>
              <p className="font-poppins text-gray-700 text-[16px] md:text-[18px] leading-relaxed whitespace-pre-line">
                {data.interventions.description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Cards - 2 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {data.interventions.bottomCards.map((card, index) => (
            <div
              key={index}
              className="bg-[#EAF8F1] rounded-[24px] border border-[#008439] p-6 md:p-8 flex flex-col shadow-sm h-full"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/9] mb-8 rounded-[16px] overflow-hidden shadow-sm">
                <Image
                  src={card.image || "/images/cause1.png"}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <h3 className="text-[22px] md:text-[24px] font-bold text-black mb-6 font-serif leading-tight">
                {card.title}
              </h3>
              <p className="text-gray-700 text-[16px] md:text-[18px] leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
