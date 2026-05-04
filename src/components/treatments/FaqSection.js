import Image from "next/image";

export default function FaqSection({ data, activeIndex, toggleFaq }) {
  return (
    <main className="page-spacing">
      <section className="bg-[#0B7A3B] w-full px-4 md:px-0 rounded-[32px] overflow-hidden font-[family-name:var(--font-karla)]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2
          gap-8 md:gap-16 items-start pt-16 md:pt-24 pb-16 md:pb-24">

          {/* Left — image */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[586px] h-[500px] rounded-[12px]
              border-[2px] border-white overflow-hidden shadow-2xl">
              <Image
                src={data.faqs.image}
                alt="faq"
                width={586}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right — accordion */}
          <div className="text-left px-0 md:pl-4">
            <h2 className="text-white text-[32px] md:text-[42px]
              font-bold mb-8 leading-tight">
              {data.faqs.heading}
            </h2>

            <div className="space-y-6">
              {data.faqs.items.map((item, index) => {
                const isActive = index === activeIndex;
                return (
                  <div
                    key={index}
                    className="border-b border-white/30 pb-4 cursor-pointer text-left"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-white text-[16px] sm:text-[18px]
                        md:text-[22px] font-medium">
                        {item.question}
                      </h3>
                      <span className="text-white text-[22px] md:text-[24px] ml-4 shrink-0">
                        {isActive ? "×" : "+"}
                      </span>
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300
                        ${isActive ? "max-h-[200px] mt-2" : "max-h-0"}`}
                    >
                      <p className="text-white/80 text-[14px] sm:text-[16px]
                        md:text-[18px] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
