// app/components/DoctorSection.jsx
import Image from "next/image";

export default function DoctorSection() {
  return (
    <main className="page-spacing">
      {/* The Visionary Section */}
      <section className="relative w-full py-6 bg-[#1a2318] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="page-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center lg:justify-end relative lg:-ml-[50vw] order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="bg-white rounded-[80px] lg:rounded-r-[150px] lg:rounded-l-none p-6 pb-12 w-[320px] sm:w-[380px] lg:w-[50vw] shadow-2xl relative z-20 flex flex-col items-center lg:pt-12">
              <div className="relative w-full max-w-[360px] aspect-[4/5] rounded-t-[100px] rounded-b-[80px] overflow-hidden mb-6">
                <Image src="/images/d1.webp" alt="Dr. Vishnu Nampoothiry" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
              </div>
              <div className="text-center text-gray-800">
                <p className="font-bold text-xl mb-1 text-gray-800">Dr. Vishnu Nampoothiry</p>
                <p className="text-[#6D6D6D] text-sm">MD (Ayurveda), PGDYT and MSc Yoga</p>
                <p className="text-[#6D6D6D] text-xs font-semibold mt-2">Senior Medical Officer, Alappuzha</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 lg:pl-8 order-1 lg:order-2">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">The Visionary Shaping Our Successful<br />Journey Over The Years</h2>
            <div className="space-y-4 text-gray-200 text-[16px] leading-relaxed">
              <p>Dr. K S Vishnu Nampoothiry, the founder and Chief Physician of Sreerudra Ayurvedic Hospital and Research Centre, is a renowned figure in the field of Ayurveda. He belongs to the Kudalmana family, which is famous for its traditional expertise in Vedic practices, Ayurveda, and Astrology. He holds an MD in Ayurveda and has dedicated his life to propagating authentic Ayurvedic treatments.</p>
              <p>His deep understanding of the ancient texts and his clinical experience have made him a highly sought-after physician. He has successfully treated numerous patients with chronic ailments, restoring their health and well-being. Dr. Nampoothiry is not only a practitioner but also an educator, sharing his knowledge with the next generation of Ayurvedic professionals.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}