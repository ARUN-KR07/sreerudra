import Link from "next/link";

export default function TreatmentInfoSection({ title, subtitle, description, description2, cta, onCtaClick }) {
  if (!description) return null;

  return (
    <main className="page-spacing">
      <section className="page-container text-center font-[Poppins]">
        {/* Main Title */}
        <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-4 font-serif">
          {title}
        </h2>

        {/* Subtitle with underline and specific color */}
        {subtitle && (
          <h3 className="text-[#6D6D6D] text-[18px] md:text-[20px] font-normal underline decoration-solid mb-6">
            {subtitle}
          </h3>
        )}

        {/* Description */}
        <p className="text-[16px] md:text-[18px] font-normal text-gray-700 max-w-7xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>

        {/* Secondary Description */}
        {description2 && (
          <p className="text-[16px] md:text-[18px] font-normal text-gray-700 max-w-67xl mx-auto mb-10 leading-relaxed">
            {description2}
          </p>
        )}

        {/* Button */}
        <div className="flex justify-center">
          {onCtaClick ? (
            <button
              onClick={onCtaClick}
              className="bg-[#ED8916] text-white w-[300px] h-[60px] rounded-tl-[24px] rounded-br-[24px] font-normal font-[family-name:var(--font-karla)]
                transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md text-[24px] leading-[100%]"
            >
              {cta || "Book Now"}
            </button>
          ) : (
            <Link
              href="/contact"
              className="bg-[#ED8916] text-white w-[300px] h-[60px] flex items-center justify-center rounded-tl-[24px] rounded-br-[24px] font-normal font-[family-name:var(--font-karla)]
                transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md text-[24px] leading-[100%]"
            >
              {cta || "Consult Our Ayurvedic Specialists"}
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}
