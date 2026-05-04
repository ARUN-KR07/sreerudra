import Image from "next/image";
import Link from "next/link";

export default function ConditionDetail({ data }) {
  return (
    <main className="page-spacing">
      <section className="page-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          {/* Left — image */}
          <div className="flex-1 w-full flex justify-center md:justify-start">
            <Image
              src={data.conditionDetail.image}
              alt={data.conditionDetail.heading}
              width={700}
              height={380}
              className="rounded-tl-[80px] rounded-br-[80px] rounded-tr-[10px] rounded-bl-[10px] object-cover w-full max-w-[340px] sm:max-w-[420px]
                md:max-w-[500px] lg:max-w-[700px] h-auto shadow-2xl"
            />
          </div>

          {/* Right — text */}
          <div className="flex-1 w-full text-center md:text-left">
            <h1 className="text-[42px] font-bold text-gray-800 leading-tight mb-4">
              {data.conditionDetail.heading}
            </h1>
            <p className="text-gray-600 text-[18px] leading-relaxed mb-8">
              {data.conditionDetail.description}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#ED8916] text-white px-8 py-4 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px]
                font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg
                hover:shadow-orange-500/40 text-[18px] md:text-[22px] shadow-md"
            >
              Book an appointment
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
