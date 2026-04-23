"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Bone, Activity, TrendingUp, Droplets, Syringe, HeartPlus, CigaretteIcon, } from "lucide-react";
import { useParams } from "next/navigation";

import { slugData } from "@/lib/treatmentsData";

// ─── ICON RESOLVER ────────────────────────────────────────────────────────────
const IconMap = {
  Bone: (props) => <Bone {...props} />,
  Activity: (props) => <Activity {...props} />,
  TrendingUp: (props) => <TrendingUp {...props} />,
  Droplets: (props) => <Droplets {...props} />,
  Syringe: (props) => <Syringe {...props} />,
  HeartPlus: (props) => <HeartPlus {...props} />,
  Cigarette: (props) => <CigaretteIcon {...props} />,
  Sport: (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="5" r="2" />
      <path d="M8 14h8M10 22v-4l2-2 2 4" />
      <path d="M10 8l-2 6h8l-2-6" />
    </svg>
  ),
};

const renderIcon = (name, className = "text-[#0B5D3B] w-6 h-6") => {
  const Comp = IconMap[name];
  return Comp ? <Comp className={className} /> : null;
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function SlugPage() {
  const params = useParams();
  const slug = params?.slug || "lower-back-pain";
  const data = slugData[slug] || slugData["lower-back-pain"];

  const [activeTab, setActiveTab] = useState(data.ourTreatments.tabs[0]);
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFaq = (index) =>
    setActiveIndex(index === activeIndex ? -1 : index);

  return (
    <div>

      {/* ════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ════════════════════════════════════════════════════════ */}
      <main className="page-spacing">
        <section className="page-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">

            {/* Left — text */}
            <div className="flex-1 w-full text-center md:text-left">
              <h1 className="text-[2xl] sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
                {data.hero.title}
              </h1>
              <p className="text-[18px] leading-relaxed mb-6 md:mb-8">
                {data.hero.description}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#ED8916] text-white px-6 py-3 rounded-lg font-medium
                  transition-all duration-300 hover:scale-105 hover:shadow-lg
                  hover:shadow-orange-500/40 text-[18px] md:text-[22px]"
              >
                Book an appointment
              </Link>
            </div>

            {/* Right — image */}
            <div className="flex-1 w-full flex justify-center md:justify-end">
              <Image
                src={data.hero.image}
                alt={data.hero.imageAlt}
                width={700}
                height={380}
                className="rounded-xl object-cover w-full max-w-[340px] sm:max-w-[420px]
                  md:max-w-[500px] lg:max-w-[700px] h-auto"
              />
            </div>

          </div>
        </section>
      </main>

      {/* ════════════════════════════════════════════════════════
          SECTION 2 — CONDITIONS GRID
      ════════════════════════════════════════════════════════ */}
      {data.conditions?.items?.length > 0 && (
        <main className="page-spacing">
          <section className="page-container bg-white px-4 md:px-6">

            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-[42px] font-semibold">
                {data.conditions.heading}
              </h2>
            </div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {data.conditions.items.map((item, index) => (
                <div
                  key={index}
                  className="w-full h-[60px] md:h-[70px] bg-[#C0F2D6] text-[#004E22]
                  rounded-[12px] flex items-center justify-center px-3 md:px-4
                  text-sm md:text-lg lg:text-[20px] font-medium text-center
                  break-words leading-tight transition duration-300
                  hover:bg-[#8FC9A9] hover:-translate-y-1"
                >
                  {item}
                </div>
              ))}
            </div>

          </section>
        </main>
      )}


      {/* ════════════════════════════════════════════════════════
          SECTION 3 — RISK FACTORS + VIDEO
      ════════════════════════════════════════════════════════ */}
      <main className="page-spacing">
        <div className="w-full flex flex-col lg:flex-row overflow-hidden">

          {/* LEFT — risk wheel */}
          <div className="w-full lg:w-5/6 bg-[#DDE9E2] flex flex-col items-center
            justify-center pt-10 pb-10 md:pt-14 md:pb-16 lg:pt-16 lg:pb-40
            relative overflow-hidden">

            <h2 className="text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px]
              font-bold text-[#004e22] pb-6 sm:pb-10 lg:pb-32 text-center font-serif">
              {data.risks.heading}
            </h2>

            {/* Mobile grid */}
            <div className="w-full px-5 lg:hidden">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {data.risks.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-[#004e22] p-4 rounded-xl shadow-md"
                  >
                    <div className="w-[60px] h-[60px] relative shrink-0">
                      <Image
                        src={item.img}
                        alt={item.text}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <span className="text-white font-semibold text-sm md:text-base leading-tight">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop radial layout */}
            <div className="hidden lg:block scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-100 origin-center">
              <div className="relative flex items-center justify-center">

                {/* Centre bubble */}
                <div className="w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] lg:w-[180px] lg:h-[180px]
                  rounded-full border-[6px] border-[#008439] overflow-hidden relative
                  flex items-center justify-center text-white text-center font-semibold
                  text-sm sm:text-base lg:text-lg">
                  <Image src="/images/center.png" alt="Risk" fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="relative z-10">Risk <br /> Factors</div>
                </div>

                {/* Left 3 items */}
                {data.risks.items.slice(0, 3).map((item, i) => {
                  const pos = [
                    "absolute top-[-80px] left-[-230px] flex items-center",
                    "absolute left-[-300px] flex items-center",
                    "absolute bottom-[-80px] left-[-230px] flex items-center",
                  ];
                  return (
                    <div key={i} className={pos[i]}>
                      <span className="bg-[#008439] text-white px-4 py-2 rounded-lg
                        text-[20px] w-[200px] min-h-[50px] flex items-center">
                        {item.text}
                      </span>
                      <div className="w-[90px] h-[90px] relative">
                        <Image
                          src={item.img}
                          alt=""
                          width={137}
                          height={137}
                          className="absolute -left-6 rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}

                {/* Right 3 items */}
                {data.risks.items.slice(3, 6).map((item, i) => {
                  const pos = [
                    "absolute top-[-80px] right-[-230px] flex items-center",
                    "absolute right-[-300px] flex items-center",
                    "absolute bottom-[-80px] right-[-230px] flex items-center",
                  ];
                  return (
                    <div key={i} className={pos[i]}>
                      <div className="w-[90px] h-[90px] relative">
                        <Image
                          src={item.img}
                          alt=""
                          width={137}
                          height={137}
                          className="absolute -right-6 rounded-full"
                        />
                      </div>
                      <span className="bg-[#008439] text-white px-4 py-2 rounded-lg
                        text-[20px] w-[200px] min-h-[50px] flex items-center justify-end text-right">
                        {item.text}
                      </span>
                    </div>
                  );
                })}

              </div>
            </div>
          </div>

          {/* RIGHT — video */}
          <div className="w-full lg:w-1/2 bg-[#004e22] text-white flex flex-col
            items-center lg:items-start text-center lg:text-left
            px-6 sm:px-10 md:px-16 py-10 sm:py-14 lg:py-20">

            <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold mb-2 font-serif">
              {data.risks.videoSection.heading}
            </h2>
            <p className="text-sm sm:text-[18px] text-gray-200 mb-6 md:mb-8
              max-w-md mx-auto lg:mx-0 font-serif">
              {data.risks.videoSection.subtext}
            </p>

            <div className="relative w-full max-w-[420px] h-[200px] sm:h-[260px] rounded-2xl overflow-hidden">
              <Image
                src={data.risks.videoSection.image}
                alt="doctor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-500 rounded-full
                  flex items-center justify-center shadow-lg">
                  ▶
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ════════════════════════════════════════════════════════
          SECTION 4 — CONDITION DETAIL (image + text)
      ════════════════════════════════════════════════════════ */}
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
                className="rounded-xl object-cover w-full max-w-[340px] sm:max-w-[420px]
                  md:max-w-[500px] lg:max-w-[700px] h-auto"
              />
            </div>

            {/* Right — text */}
            <div className="flex-1 w-full text-center md:text-left">
              <h1 className="text-[42px] font-bold
                text-gray-800 leading-tight mb-4">
                {data.conditionDetail.heading}
              </h1>
              <p className="text-gray-600 text-[18px] leading-relaxed mb-8">
                {data.conditionDetail.description}
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#ED8916] text-white px-6 py-3 rounded-lg
                  font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg
                  hover:shadow-orange-500/40 text-[18px] md:text-[22px]"
              >
                Book an appointment
              </Link>
            </div>

          </div>
        </section>
      </main>

      {/* ════════════════════════════════════════════════════════
          SECTION 5 — CAUSES
      ════════════════════════════════════════════════════════ */}
      <main className="page-spacing">
        <section className="w-full bg-white page-container">

          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-center page-container mt-[10px] mb-[10px]">
              {data.causes.heading}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.causes.items.map((item, i) => (
              <div
                key={i}
                className="bg-[#CFE3D8] rounded-2xl p-6 md:p-8 transition-all duration-300
                  ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl
                  hover:shadow-[#0B5D3B]/20 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-4">
                  {renderIcon(item.icon)}
                  <h3 className="text-[22px] font-semibold text-[#0B5D3B]">{item.title}</h3>
                </div>
                <p className="text-gray-700 text-[18px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </section>
      </main>

      {/* ════════════════════════════════════════════════════════
          SECTION 6 — MEDICAL ATTENTION + PREVENTION + CAUSE CARDS
      ════════════════════════════════════════════════════════ */}
      <main className="page-spacing">

        {/* Medical Attention */}
        <section className="page-container relative w-full overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/bg.jpg" alt="bg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/80" />
          </div>

          <div className="relative z-10">

            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-center page-container mt-[30px] mb-[20px]">
                {data.medicalAttention.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
              {data.medicalAttention.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 md:p-8 shadow-[-6px_6px_0px_rgba(0,0,0,0.1)]
                    transition-all duration-300 ease-in-out hover:-translate-y-2
                    hover:shadow-xl hover:shadow-black/20"
                >
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    {renderIcon(item.icon)}
                    <h3 className="text-[20px] md:text-[22px] font-semibold text-[#0B5D3B]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-[16px] md:text-[18px] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Prevention */}
            <div className="text-center page-container mt-[30px] mb-[20px]">
              <h2 className="text-center page-container mt-[20px] mb-[20px]">
                {data.prevention.heading}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {data.prevention.items.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-5 md:p-8 shadow-[-6px_6px_rgba(0,0,0,0.1)]
                    transition-all duration-300 ease-in-out hover:-translate-y-2
                    hover:shadow-xl hover:shadow-black/20"
                >
                  <div className="flex items-center gap-3 mb-3 md:mb-4">
                    {renderIcon(item.icon)}
                    <h3 className="text-[20px] md:text-[22px] font-semibold text-[#0B5D3B]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-[16px] md:text-[18px]">{item.text}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Cause cards */}
        <section className="page-container relative w-full overflow-hidden">

          <div className="absolute inset-0">
            <img src="/images/bg.jpg" alt="bg" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-white/80" />
          </div>

          <div className="relative z-10">
            <h2 className="text-center page-container mt-[30px] mb-[20px]">
              {data.causeCards.heading}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {data.causeCards.items.map((item, i) => (
                <div
                  key={i}
                  className="relative w-full aspect-[16/12] rounded-2xl overflow-hidden
                    group transition-all duration-300 hover:-translate-y-1"
                >
                  <Image
                    src={`/images/cause${i + 1}.png`}
                    alt=""
                    fill
                    className="object-cover scale-105 group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-5 text-white">
                    <h3 className="text-[16px] sm:text-[20px] md:text-[24px] font-bold leading-tight">
                      {item.label}
                    </h3>
                    {item.subtext && (
                      <p className="text-[13px] sm:text-[15px] text-gray-200 mt-1">
                        {item.subtext}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </section>

        {/* CTA */}
        <div className="flex justify-center mt-6 md:mt-10">
          <Link
            href="/contact"
            className="inline-block bg-[#ED8916] text-white px-6 py-3 rounded-lg
              font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg
              hover:shadow-orange-500/40 text-[18px] md:text-[22px]"
          >
            Book an appointment
          </Link>
        </div>

      </main>

      {/* ════════════════════════════════════════════════════════
          SECTION 7 — TREATMENTS GRID
      ════════════════════════════════════════════════════════ */}
      <main className="page-spacing">
        <section className="page-container bg-white">

          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold
            mb-8 md:mb-10 font-serif">
            {data.treatments.heading}
          </h2>

          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {data.treatments.items.map((item, i) => (
              <div
                key={i}
                className="bg-[#C0F2D6] rounded-[12px] px-4 py-4 flex flex-col
                  justify-center items-center text-center min-h-[80px]
                  transition-all duration-300 ease-in-out hover:-translate-y-1
                  hover:shadow-lg hover:shadow-black/20 hover:scale-[1.02]"
              >
                <h3 className="text-[22px] md:text-[26px] text-[#004E22] leading-tight">
                  {item.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#2f5f4f] leading-tight mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </section>
      </main>

      {/* ════════════════════════════════════════════════════════
          SECTION 8 — OUR TREATMENTS (tabbed cards)
      ════════════════════════════════════════════════════════ */}
      <main className="page-spacing">
        <section className="bg-white px-4 md:px-10 lg:px-20">

          <h2 className="text-center mb-8 md:mb-10 text-2xl md:text-4xl font-bold">
            {data.ourTreatments.heading}
          </h2>

          {/* Tabs */}
          <div className="flex justify-center mb-8 md:mb-12">

            {/* Mobile */}
            <div className="flex md:hidden w-full bg-green-700 rounded-2xl p-2
              flex-wrap justify-center gap-2">
              {data.ourTreatments.tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 py-1.5 rounded-full text-[13px] font-medium
                    whitespace-nowrap transition
                    ${activeTab === tab
                      ? "bg-white text-green-800"
                      : "text-white hover:bg-green-600"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Desktop */}
            <div className="hidden md:flex bg-green-700 rounded-full px-2 py-2
              flex-wrap justify-center gap-2">
              {data.ourTreatments.tabs.map((tab, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 md:px-5 py-2 rounded-full text-[18px] md:text-[22px]
                    font-medium transition whitespace-nowrap
                    ${activeTab === tab
                      ? "bg-white text-green-800"
                      : "text-white hover:bg-green-600"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {data.ourTreatments.cards.map((item, i) => (
              <div
                key={i}
                className="relative w-full h-[200px] sm:h-[220px] md:h-[240px]
                  rounded-2xl overflow-hidden group"
              >
                <Image
                  src={`/images/${item.img}`}
                  alt={item.title}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black/40" />
                <h3 className="absolute top-4 left-4 text-white font-semibold
                  text-[18px] sm:text-[20px] md:text-[22px]">
                  {item.title}
                </h3>
                <div
                  className={`absolute bottom-4 right-4 w-9 h-9 md:w-10 md:h-10
                    flex items-center justify-center rounded-full text-white
                    text-lg md:text-xl
                    ${i === 0 ? "bg-orange-500" : "bg-black/70"}`}
                >
                  +
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 md:mt-12">
            <button className="inline-block bg-[#ED8916] text-white px-6 py-3 rounded-lg
              font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg
              hover:shadow-orange-500/40 text-[18px] md:text-[22px]">
              View more
            </button>
          </div>

        </section>
      </main>

      {/* ════════════════════════════════════════════════════════
          SECTION 9 — FAQ
      ════════════════════════════════════════════════════════ */}
      <main className="page-spacing">
        <section className="bg-[#0B7A3B] w-full px-4 md:px-0">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2
            gap-8 md:gap-10 items-center pt-10 md:pt-20">

            {/* Left — image */}
            <div className="w-full flex justify-center lg:block">
              <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-none
                h-[260px] sm:h-[320px] md:h-[500px] rounded-[12px]
                border-[2px] border-white overflow-hidden">
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
            <div className="text-center lg:text-left px-0 md:pl-10 pb-10 md:pb-20">
              <h2 className="text-white text-[26px] sm:text-[32px] md:text-[42px]
                font-bold mb-6">
                {data.faqs.heading}
              </h2>

              <div className="space-y-4">
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

      {/* ════════════════════════════════════════════════════════
          SECTION 10 — GET IN TOUCH
          ✅ PERMANENT — completely static, no slug data used
      ════════════════════════════════════════════════════════ */}
      <main className="page-spacing">
        <section className="page-container bg-white text-black px-4 md:px-32 font-[Karla]">

          <div className="text-center mb-10">
            <h2>Get in Touch</h2>
            <h3 className="text-[#6D6D6D] text-[20px]">
              Get A Free Consultation now
            </h3>
          </div>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">

            {/* Left — static image */}
            <div className="w-full h-full">
              <div className="h-full rounded-2xl overflow-hidden border border-green-500">
                <Image
                  src="/images/contact.png"
                  alt="Consultation"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right — static form */}
            <div className="w-full flex">
              <div className="space-y-5 w-full h-full flex flex-col justify-between">

                <div className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="bg-transparent border border-[#004e22] px-4 py-3
                        rounded-md outline-none placeholder:text-[18px]
                        placeholder:text-[#004e22]"
                    />
                    <input
                      type="text"
                      placeholder="First Name"
                      className="bg-transparent border border-[#004e22] px-4 py-3
                        rounded-md outline-none placeholder:text-[18px]
                        placeholder:text-[#004e22]"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border border-[#004e22] px-4 py-3
                      rounded-md outline-none placeholder:text-[18px]
                      placeholder:text-[#004e22]"
                  />
                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="w-full bg-transparent border border-[#004e22] px-4 py-3
                      rounded-md outline-none placeholder:text-[18px]
                      placeholder:text-[#004e22]"
                  />
                  <textarea
                    rows="4"
                    placeholder="Message"
                    className="w-full bg-transparent border border-[#004e22] px-4 py-3
                      rounded-md outline-none placeholder:text-[18px]
                      placeholder:text-[#004e22]"
                  />
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    type="button"
                    className="inline-block bg-[#ED8916] text-white px-6 py-3 rounded-lg
                      font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg
                      hover:shadow-orange-500/40 text-[18px] md:text-[22px]"
                  >
                    Get started
                  </button>
                </div>

              </div>
            </div>

          </div>
        </section>
      </main>

    </div>
  );
}