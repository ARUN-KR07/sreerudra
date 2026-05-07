import Image from "next/image";
import Link from "next/link";

export default function HeroSection({ data }) {
  return (
    <main className="page-spacing ">
      <section className="page-container ">
        <div className="max-w-7xl mx-auto bg-[#EBEBEB6E] rounded-[40px] px-4 md:px-10 py-8 md:py-12
        transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">

          <div className="flex flex-col md:flex-row items-stretch justify-between gap-8 md:gap-10">

            {/* Left — text */}
            <div className="flex-1 w-full text-center md:text-left flex flex-col justify-center">

              <h1 className="text-[2xl] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4
              transition-all duration-300 ">
                {data.hero.title}
              </h1>

              <p className="text-[18px] leading-relaxed mb-6 md:mb-8 text-[#6D6D6D]">
                {data.hero.description}
              </p>

              <div>
                <Link
                  href="/contact"
                  className="inline-block bg-[#ED8916] text-white px-8 py-4 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px] font-bold
                  transition-all duration-300 hover:scale-105 hover:shadow-lg
                  hover:shadow-black/20 text-[18px] md:text-[22px] shadow-md
                  hover:-translate-y-1 active:scale-95"
                >
                  Book an appointment
                </Link>
              </div>
            </div>

            {/* Right — image */}
            <div className="flex-1 w-full flex justify-center md:justify-end
            transition-all duration-500">

              <Image
                src={data.hero.image}
                alt={data.hero.imageAlt}
                width={700}
                height={380}
                className="rounded-[30px] object-cover w-full h-full max-w-[340px] sm:max-w-[420px]
                md:max-w-[500px] lg:max-w-[700px] shadow-2xl
                transition-all duration-500 hover:scale-102"
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}