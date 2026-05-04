import Image from "next/image";

export default function TreatmentsTabs({ data, activeTab, setActiveTab }) {
  if (!data.ourTreatments?.tabs?.length) return null;

  return (
    <main className="page-spacing">
      <section className="bg-white px-4 md:px-10 lg:px-20">

        <h2 className="text-center mb-8 md:mb-10 text-2xl md:text-4xl font-bold">
          {data.ourTreatments.heading}
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8 md:mb-12">

          {/* Mobile */}
          <div className="flex md:hidden w-full bg-green-700 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px] rounded-bl-[4px] p-2
            flex-wrap justify-center gap-2">
            {data.ourTreatments.tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-tl-[10px] rounded-br-[10px] rounded-tr-[2px] rounded-bl-[2px] text-[13px] font-medium
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
          <div className="hidden md:flex bg-green-700 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px] px-2 py-2
            flex-wrap justify-center gap-2">
            {data.ourTreatments.tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(tab)}
                className={`px-4 md:px-5 py-2 rounded-tl-[15px] rounded-br-[15px] rounded-tr-[3px] rounded-bl-[3px] text-[18px] md:text-[22px]
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
                rounded-tl-[40px] rounded-br-[40px] rounded-tr-[10px] rounded-bl-[10px] overflow-hidden group shadow-lg"
            >
              <Image
                src={`/images/${item.img}`}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
          <button className="inline-block bg-[#ED8916] text-white px-10 py-4 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px]
            font-normal font-[family-name:var(--font-karla)] transition-all duration-300 hover:scale-105 hover:shadow-lg
            hover:shadow-orange-500/40 text-[24px] leading-[100%] shadow-md">
            View more
          </button>
        </div>

      </section>
    </main>
  );
}
