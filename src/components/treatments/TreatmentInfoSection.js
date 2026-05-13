import Link from "next/link";
import { Leaf } from "lucide-react";

export default function TreatmentInfoSection({
  title,
  subtitle,

  // existing
  grid = [],
  gridsgreen = [],

  descriptions = [],
  descriptions2 = [],

  lists = [],

  // new
  box2,

  cta,
  onCtaClick,
}) {

  // Safe checks
  const hasDescriptions =
    Array.isArray(descriptions) && descriptions.length > 0;

  const hasDescriptions2 =
    Array.isArray(descriptions2) && descriptions2.length > 0;

  const hasGrid =
    Array.isArray(grid) && grid.length > 0;

  const hasGreenGrid =
    Array.isArray(gridsgreen) && gridsgreen.length > 0;

  const hasLists =
    Array.isArray(lists) && lists.length > 0;

  if (
    !title &&
    !hasDescriptions &&
    !hasDescriptions2 &&
    !hasGrid &&
    !hasGreenGrid &&
    !hasLists &&
    !box2
  ) {
    return null;
  }

  return (
    <main className="page-spacing">
      <section className="page-container text-center font-[Poppins]">

        {/* ================= TITLE ================= */}
        {title && (
          <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-4 font-serif">
            {title}
          </h2>
        )}

        {/* ================= SUBTITLE ================= */}
        {subtitle && (
          <h3 className="text-[#6D6D6D] text-[18px] md:text-[20px] font-normal underline decoration-solid mb-8">
            {subtitle}
          </h3>
        )}

        {/* ================= GRID ================= */}
        {hasGrid && (
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
        )}

        {/* ================= DESCRIPTIONS ================= */}
        {hasDescriptions && (
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

          {/* ================= GREEN GRID ================= */}
        {hasGreenGrid && (
          <div className="max-w-7xl mx-auto mb-12">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {gridsgreen.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-[#004E22]
                    rounded-[28px]
                    px-6 md:px-8
                    py-8
                    flex items-center justify-center
                    text-center
                    min-h-[120px]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_10px_30px_rgba(23,163,74,0.12)]
                  "
                >
                  <p className="text-[16px] md:text-[20px] font-semibold text-white leading-[1.7]">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>
        )}

        {/* ================= BOX2 ================= */}
        {box2 && (
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">

            {/* LEFT */}
            <div className="bg-[#E6FAEE] rounded-[30px] px-6 md:px-10 py-10 text-left">

              {box2?.leftTitle && (
                <h3 className="text-[24px] md:text-[30px] font-bold text-black mb-8 text-center">
                  {box2.leftTitle}
                </h3>
              )}

              <div className="space-y-6">

                {box2?.leftItems?.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">

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

            </div>

            {/* RIGHT */}
            <div className="bg-[#E6FAEE] rounded-[30px] px-6 md:px-10 py-10 text-left">

              {box2?.rightTitle && (
                <h3 className="text-[24px] md:text-[30px] font-bold text-black mb-8 text-center">
                  {box2.rightTitle}
                </h3>
              )}

              <div className="space-y-6">

                {box2?.rightItems?.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">

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

            </div>

          </div>
        )}

        {/* ================= DESCRIPTIONS 2 ================= */}
        {hasDescriptions2 && (
          <div className="space-y-8 mb-10">

            {descriptions2.map((desc, index) => (
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

        {/* ================= LISTS ================= */}
        {hasLists && (
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

        {/* ================= BUTTON ================= */}
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
                flex items-center justify-center
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