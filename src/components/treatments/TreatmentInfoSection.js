import Link from "next/link";
import { Leaf } from "lucide-react";

export default function TreatmentInfoSection({
  title,
  subtitle,
  grid=[],
  descriptions = [],
  lists = [],
  cta,
  onCtaClick,
}) {
  if (
    !title &&
    (!descriptions || descriptions.length === 0) &&
    (!grid || grid.length === 0)
  ) {
    return null;
  }

  return (
    <main className="page-spacing">
      <section className="page-container text-center font-[Poppins]">

        {/* Main Title */}
        <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-4 font-serif">
          {title}
        </h2>

        {/* Subtitle */}
        {subtitle && (
          <h3 className="text-[#6D6D6D] text-[18px] md:text-[20px] font-normal underline decoration-solid mb-8">
            {subtitle}
          </h3>
        )}

        {/* Cards */}
        <div className="max-w-7xl mx-auto mb-8">

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">

            {grid.map((item, index) => (
              <div
                key={index}
                className="
                  border border-[#17A34A]
                  rounded-[24px] md:rounded-[28px]
                  px-4 sm:px-6 md:px-8
                  py-5 md:py-6
                  flex items-center justify-center
                  text-center
                  min-h-[90px] md:min-h-[110px]

                  w-full
                  sm:w-[calc(50%-12px)]
                  lg:w-fit
                  max-w-full

                  transition-all duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_10px_30px_rgba(23,163,74,0.15)]
                "
              >
                <p
                  className="
                    text-[14px]
                    sm:text-[15px]
                    md:text-[16px]
                    font-medium
                    text-black
                    leading-[1.6]

                    whitespace-normal
                    break-words
                  "
                >
                  {item}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* Descriptions */}
        {descriptions?.length > 0 && (
          <div className="space-y-8 mb-10">

            {descriptions.map((desc, index) => (
              <p
                key={index}
                className="
                  text-[16px]
                  md:text-[18px]
                  font-normal
                  text-gray-700
                  max-w-7xl
                  mx-auto
                  leading-relaxed
                "
              >
                {desc}
              </p>
            ))}

          </div>
        )}

        {/* Lists */}
        {lists?.length > 0 && (
          <div className="max-w-6xl mx-auto text-left space-y-6 mb-12">

            {lists.map((list, index) => (
              <div key={index} className="space-y-5">

                {Array.isArray(list) &&
                  list.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4"
                    >
                      <Leaf
                        className="text-[#17A34A] mt-1 flex-shrink-0"
                        size={20}
                      />

                      <p className="text-[16px] md:text-[18px] leading-[1.9] text-gray-700">
                        {item}
                      </p>

                    </div>
                  ))}

              </div>
            ))}

          </div>
        )}

        {/* Button */}
        <div className="flex justify-center">

          {onCtaClick ? (
            <button
              onClick={onCtaClick}
              className="
                bg-[#ED8916]
                text-white
                w-[300px]
                h-[60px]
                rounded-tl-[24px]
                rounded-br-[24px]
                rounded-tr-[4px]
                rounded-bl-[4px]
                font-normal
                font-[family-name:var(--font-karla)]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                shadow-md
                text-[22px]
                md:text-[24px]
                leading-[100%]
              "
            >
              {cta || "Book Now"}
            </button>
          ) : (
            <Link
              href="/contact"
              className="
                bg-[#ED8916]
                text-white
                w-[300px]
                h-[60px]
                flex
                items-center
                justify-center
                rounded-tl-[24px]
                rounded-br-[24px]
                rounded-tr-[4px]
                rounded-bl-[4px]
                font-normal
                font-[family-name:var(--font-karla)]
                transition-all
                duration-300
                hover:scale-105
                hover:shadow-lg
                shadow-md
                text-[22px]
                md:text-[24px]
                leading-[100%]
              "
            >
              {cta || "Book your appointment"}
            </Link>
          )}

        </div>

      </section>
    </main>
  );
}