import Image from "next/image";

export default function SymptomsSection({ data }) {
  if (!data.symptoms) return null;

  return (
    <section className="page-spacing">
      <div className="page-container max-w-[1718px] mx-auto">
        {/* Section Heading */}
        <h2 className="text-center text-[36px] md:text-[48px] font-bold text-[#004E22] mb-12 font-serif">
          {data.symptoms.heading}
        </h2>

        {/* Symptoms Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          {data.symptoms.cards.map((card, index) => (
            <div 
              key={index} 
              className="bg-[#004E22] rounded-[24px] overflow-hidden p-6 md:p-8 flex flex-col h-full shadow-2xl transition-transform duration-300 hover:-translate-y-2"
            >
              {/* Card Image */}
              <div className="relative w-full aspect-[16/10] mb-8 rounded-[24px] overflow-hidden border-4 border-[#003818]">
                <Image
                  src={card.image || "/images/spine.jpg"}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="flex-grow flex flex-col">
                <h3 className="text-white text-[24px] md:text-[28px] font-bold mb-6 font-serif leading-tight">
                  {card.title}
                </h3>
                
                {card.description && (
                  <p className="text-gray-200 text-[16px] md:text-[18px] leading-relaxed">
                    {card.description}
                  </p>
                )}

                {card.list && (
                  <ul className="space-y-4">
                    {card.list.map((item, i) => (
                      <li key={i} className="text-gray-200 text-[16px] md:text-[18px] flex items-start gap-3">
                        <span className="text-white mt-1.5 w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
