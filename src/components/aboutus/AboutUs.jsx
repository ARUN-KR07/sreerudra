"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';

/* ── Scroll animation setup ── */
const useScrollAnimation = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .sa { opacity: 0; transition: opacity 0.6s ease, transform 0.6s ease; }
      .sa.fade-up    { transform: translateY(40px); }
      .sa.fade-left  { transform: translateX(-40px); }
      .sa.fade-right { transform: translateX(40px); }
      .sa.fade-in    { transform: none; }
      .sa.visible    { opacity: 1 !important; transform: none !important; }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.sa').forEach((el) => observer.observe(el));
    return () => { observer.disconnect(); document.head.removeChild(style); };
  }, []);
};

const AboutUs = () => {
  useScrollAnimation();

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex flex-col items-center justify-center">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=2000&auto=format&fit=crop")' }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center flex flex-col items-center">
          <h1 className="text-white text-5xl md:text-6xl font-bold tracking-wide mb-4" style={{ color: 'white' }}>About us</h1>
          <div className="flex items-center space-x-2 text-white text-sm font-medium tracking-wider">
            <span className="hover:text-green-300 transition-colors duration-200 cursor-pointer">Home</span>
            <span>&rarr;</span>
            <span className="hover:text-green-300 transition-colors duration-200 cursor-pointer">About us</span>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="page-container page-spacing py-12 md:py-16">
        <div className="space-y-4 text-gray-600 leading-relaxed max-w-7xl mx-auto">
          <p className="sa fade-up" style={{ transitionDelay: '0ms' }}>
            Sreerudra hospital and research centre was established in 2002 in a humble way by Dr.K S Vishnu Nampoothiry, MD (Ayurveda), PGDYT and MSc Yoga (Senior Medical Officer , Alappuzha) member of KUDALMANA Family. Kudlamana family is one of the respectable families in the Nampoothiri community in Kerala, the southern part of India. The Kudalmana family is well known for its traditional expertise and contributions in Vedic practices (Veda is an organised system of science and Knowledge), Ayurveda, Astrology,Tantra and traditional rituals followed from the great Aryan and Brahmin civilisation. The hospital was inaugurated in 2008 by Brahmasri. Prof. K. K Sankaran Nampoothiri, a Vedic scholar and College principal.
          </p>
          <p className="sa fade-up" style={{ transitionDelay: '100ms' }}>
            Though started as a small health care entity in the premises of Alappuzha, Sreerudra has now been reincarnated as a full-fledged hospital and research centre only to propagate and promote authentic Ayurvedic treatments to the needy. Both Mrs. Mayalakshmi, the managing director and Dr. Vishnu Nampoothiri have selflessly worked towards the effective ayurvedic treatment and their expertise has paved way to bring about a significant growth of Sreerudra Ayurvedic Hospital and Research Centre.
          </p>
          <p className="sa fade-up" style={{ transitionDelay: '200ms' }}>
            The committed Chief physician Dr. Rabith K Rajan BAMS, PGDYT including other doctors, staff and a dedicated team of 14 employees including expert physicians and staff makes Sreerudra one of the most acceptable Ayurvedic hospital for genuine treatments in the state is a commendable fact. At Sreerudra, we provide quality treatments through the indigenous Indian Medical stream known as Ayurveda. Ayurveda is the very ancient system of natural & medical healing originated in India.
          </p>
        </div>
      </section>

      {/* Full Width Image Section */}
      <section className="w-full h-[400px] sm:h-[500px] md:h-[600px] relative overflow-hidden sa fade-in">
        <div className="w-full h-full transition-transform duration-700 hover:scale-105">
          <Image
            src="/images/cause1.png"
            alt="Hospital Interior"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
      </section>

      {/* Vision and Mission */}
      <section className="page-container page-spacing py-12 md:py-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="sa fade-left group p-6 rounded-2xl transition-all duration-300 hover:bg-green-50 hover:shadow-md cursor-default">
            <h2 className="mb-4 text-[36px] font-bold transition-colors duration-300 group-hover:text-green-800">Vision</h2>
            <p className="text-gray-600 text-[20px] leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
              To promote Ayurveda globally by adopting authentic practices and to be a premier healthcare provider through excellent patient care and research in Ayurvedic Medicine.
            </p>
          </div>
          <div className="sa fade-right group p-6 rounded-2xl transition-all duration-300 hover:bg-green-50 hover:shadow-md cursor-default" style={{ transitionDelay: '100ms' }}>
            <h2 className="mb-4 text-[36px] font-bold transition-colors duration-300 group-hover:text-green-800">Mission</h2>
            <p className="text-gray-600 text-[20px] leading-relaxed transition-colors duration-300 group-hover:text-gray-800">
              To build a healthy society by adopting ancient health care methods.
            </p>
          </div>
        </div>
      </section>

      {/* Guiding Our Vision Section */}
      <section className="relative w-full py-6 bg-[#3d271d] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="page-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="sa fade-left space-y-4 lg:pr-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">Guiding Our Vision<br />with Expertise and Dedication</h2>
            <div className="space-y-4 text-gray-200 text-[20px]">
              <p>Sreerudra Ayurvedic Hospital & Research Centre is not just a healthcare facility; it is a center of holistic healing and wellness. With a vision to provide authentic Ayurveda to all, Mrs. Mayalakshmi, the Managing Director, leads our team with utmost dedication and expertise. Her leadership has been instrumental in the growth of this institution.</p>
              <p>Her focus is to ensure that every patient who walks into Sreerudra experiences the true essence of Ayurvedic healing. She believes in combining traditional Ayurvedic practices with modern medical knowledge to offer comprehensive care.</p>
              <p>Under her guidance, Sreerudra has evolved into a premier destination for those seeking genuine Ayurvedic treatments. Her commitment to quality and patient satisfaction is the driving force behind our success.</p>
            </div>
          </div>
          <div className="sa fade-right flex justify-center lg:justify-start relative lg:-mr-[50vw]">
            <div className="bg-white rounded-[80px] lg:rounded-l-[150px] lg:rounded-r-none p-6 pb-12 w-[320px] sm:w-[380px] lg:w-[50vw] shadow-2xl relative z-20 flex flex-col items-center lg:pt-12 transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
              <div className="relative w-full max-w-[300px] aspect-[4/5] rounded-t-[100px] rounded-b-[80px] overflow-hidden mb-6 transition-transform duration-500 hover:scale-[1.03]">
                <Image src="/images/d2.webp" alt="Dr. Maya Lakshmi Vishnu Nampoothiry" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
              </div>
              <div className="text-center text-gray-800">
                <h3 className="font-bold text-[24px] mb-1" style={{ fontFamily: 'Playfair Display' }}>Dr. Maya Lakshmi Vishnu Nampoothiry</h3>
                <h4 className="font-bold text-lg mb-1" style={{ fontFamily: 'Playfair Display' }}>M.Sc, M.B.A, B.Ed, Ph.D.</h4>
                <p className="text-[#6D6D6D] text-sm">Managing Director</p>
                <p className="text-[#6D6D6D] text-xs font-semibold mt-2 px-4 lg:px-0">Sreerudra Ayurvedic Hospital & Research Centre</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Visionary Section */}
      <section className="relative w-full py-6 bg-[#1a2318] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="page-container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="sa fade-left flex justify-center lg:justify-end relative lg:-ml-[50vw] order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="bg-white rounded-[80px] lg:rounded-r-[150px] lg:rounded-l-none p-6 pb-12 w-[320px] sm:w-[380px] lg:w-[50vw] shadow-2xl relative z-20 flex flex-col items-center lg:pt-12 transition-shadow duration-300 hover:shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
              <div className="relative w-full max-w-[300px] aspect-[4/5] rounded-t-[100px] rounded-b-[80px] overflow-hidden mb-6 transition-transform duration-500 hover:scale-[1.03]">
                <Image src="/images/d1.webp" alt="Dr. Vishnu Nampoothiry" fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover" />
              </div>
              <div className="text-center text-gray-800">
                <h3 className="font-bold text-[24px] mb-1" style={{ fontFamily: 'Playfair Display' }}>Dr. Vishnu Nampoothiry</h3>
                <p className="text-gray-600 text-lg" style={{ fontFamily: 'Playfair Display' }}>MD (Ayurveda), PGDYT and MSc Yoga</p>
                <p className="text-gray-600 text-lg" style={{ fontFamily: 'Playfair Display' }}>Senior Medical Officer, Alappuzha</p>
              </div>
            </div>
          </div>
          <div className="sa fade-right space-y-4 lg:pl-8 order-1 lg:order-2">
            <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">The Visionary Shaping Our Successful<br />Journey Over The Years</h2>
            <div className="space-y-4 text-gray-200 text-[16px] leading-relaxed">
              <p>Dr. K S Vishnu Nampoothiry, the founder and Chief Physician of Sreerudra Ayurvedic Hospital and Research Centre, is a renowned figure in the field of Ayurveda. He belongs to the Kudalmana family, which is famous for its traditional expertise in Vedic practices, Ayurveda, and Astrology. He holds an MD in Ayurveda and has dedicated his life to propagating authentic Ayurvedic treatments.</p>
              <p>His deep understanding of the ancient texts and his clinical experience have made him a highly sought-after physician. He has successfully treated numerous patients with chronic ailments, restoring their health and well-being. Dr. Nampoothiry is not only a practitioner but also an educator, sharing his knowledge with the next generation of Ayurvedic professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Green Information Boxes Section */}
      <section className="w-full bg-[#1b4332] py-16 md:py-24">
        <div className="page-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Box 1 */}
            <div className="sa fade-up border border-white rounded-2xl p-8 md:p-10 rounded-tr-[60px] transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1" style={{ transitionDelay: '0ms' }}>
              <h3 className="text-white text-xl font-bold mb-6">Posts Holding</h3>
              <ul className="space-y-4">
                {[
                  "Member of Central Council of Indian Medicine (Govt. of India)",
                  "State President of Ayurveda Medical Association of India (AMAI)",
                  "Founder Member of Ayurveda Medical Association of India",
                  "Vice President of Ayurveda Hospital Management Association",
                  "Former Member of Kerala State Medical Council",
                  "Chairman, Quality Control Committee - AMAI",
                  "Director of AMAI Ayurveda Pharmacy"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-green-100 text-[18px] transition-colors duration-200 hover:text-white cursor-default">
                    <span className="mr-3 mt-1 text-green-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2 */}
            <div className="sa fade-up border border-white rounded-2xl p-8 md:p-10 rounded-tr-[60px] transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1" style={{ transitionDelay: '100ms' }}>
              <h3 className="text-white text-xl font-bold mb-6">Awards</h3>
              <ul className="space-y-4">
                {[
                  "Bhishak Ratna Award in 2017 for outstanding contribution in Ayurveda (AMAI)",
                  "Dhanwanthari Award in 2014 for outstanding contribution in Ayurveda (Rotary Club)",
                  "Best Doctor Award in 2011 from the Health Department, Govt. of Kerala",
                  "Award for Outstanding Service by Chengannur Municipality",
                  "Arya Vaidyan P.S. Varier Award for best thesis presentation"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-green-100 text-[18px] transition-colors duration-200 hover:text-white cursor-default">
                    <span className="mr-3 mt-1 text-green-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 3 */}
            <div className="sa fade-up border border-white rounded-2xl p-8 md:p-10 rounded-tr-[60px] transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1" style={{ transitionDelay: '200ms' }}>
              <h3 className="text-white text-xl font-bold mb-6">Activities</h3>
              <ul className="space-y-4">
                {[
                  "Organised more than 100 free medical camps, blood donation camps and health awareness classes",
                  "Delivered speeches in Radio and TV on general public health and Ayurveda",
                  "Prepared TV programs on health, lifestyle and commonly available medicinal plants",
                  "Conducted classes in Ayurveda for foreign students, Ayurveda practitioners from various countries like Germany, Italy, Switzerland, Russia, etc.",
                  "Presented research papers in State, National and International seminars and won the Best Paper Award in many"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-green-100 text-[18px] transition-colors duration-200 hover:text-white cursor-default">
                    <span className="mr-3 mt-1 text-green-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 4 */}
            <div className="sa fade-up border border-white rounded-2xl p-8 md:p-10 rounded-tr-[60px] transition-all duration-300 hover:bg-white/10 hover:shadow-lg hover:-translate-y-1" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-white text-xl font-bold mb-6">Books</h3>
              <ul className="space-y-4">
                {[
                  "Author of 'Ayurveda in Daily Life' (Published by DC Books, India)",
                  "Co-authored several educational texts in Ayurveda"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-green-100 text-[18px] transition-colors duration-200 hover:text-white cursor-default">
                    <span className="mr-3 mt-1 text-green-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* The Backbones Of Our Treatment */}
      <section className="page-container page-spacing text-center">
        <h2 className="mb-12 sa fade-up">The Backbones Of Our Treatment</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Dr. Maya Lakshmi Vishnu Nampoothiry", title: "Managing Director", img: "/images/cause1.png" },
            { name: "Dr. Amritha R S, BAMS", title: "Ayurvedic Physician", img: "/images/cause3.png" },
            { name: "Dr. Reshma Paul", title: "Senior Physician", img: "/images/cause4.png" },
            { name: "Dr. Muhammed Hashim", title: "BAMS, MD (Ayurveda)\nSenior Consultant", img: "/images/cause5.png" }
          ].map((doc, i) => (
            <div key={i} className="sa fade-up flex flex-col items-center text-center group cursor-pointer" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative w-full aspect-square max-w-[280px] rounded-[20px] mb-6 overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                <Image src={doc.img} alt={doc.name} fill sizes="200px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-bold text-[22px] mb-1 transition-colors duration-200 group-hover:text-green-800" style={{ fontFamily: 'Playfair Display' }}>{doc.name}</h3>
              <p className="text-gray-600 text-[16px] whitespace-pre-line leading-relaxed transition-colors duration-200 group-hover:text-gray-800">{doc.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Medical Advisory */}
      <section className="page-container page-spacing text-center bg-gray-50/50">
        <h2 className="mb-12 sa fade-up">Medical Advisory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Dr. Vishnu Nampoothiry", title: "MD (Ayu), PGDYT, MSc Yoga\nSenior Medical Officer", img: "/images/cause2.png" },
            { name: "Dr. Abdul Hameed", title: "BAMS, MD (Ayurveda)\nChief Physician", img: "/images/cause3.png" },
            { name: "Prof. Dr. N N Sankaran Nampoothiry", title: "MD (Ayu), Ph.D", img: "/images/cause6.png" },
            { name: "Dr. Jayakrishnan Nampoothiry", title: "BAMS, MD (Ayu), Professor", img: "/images/cause7.png" }
          ].map((doc, i) => (
            <div key={i} className="sa fade-up flex flex-col items-center text-center group cursor-pointer" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="relative w-full aspect-square max-w-[280px] rounded-[30px] mb-6 overflow-hidden shadow-lg border border-gray-100 transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2">
                <Image src={doc.img} alt={doc.name} fill sizes="250px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="font-bold text-[22px] mb-1 transition-colors duration-200 group-hover:text-green-800" style={{ fontFamily: 'Playfair Display' }}>{doc.name}</h3>
              <p className="text-gray-600 text-[16px] whitespace-pre-line leading-relaxed transition-colors duration-200 group-hover:text-gray-800">{doc.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;