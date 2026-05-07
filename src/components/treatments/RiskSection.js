import Image from "next/image";

// Shrinks font size so long text fits inside the fixed 80px-tall label box
function getFontSize(text) {
  if (text.length > 25) return "20px";
  return "20px";
}

export default function RiskSection({ data }) {
  if (!data?.risks?.items?.length) return null;

  return (
    <main className="page-spacing">
      <div className="w-full max-w-[1720px] mx-auto flex flex-col md:flex-row overflow-hidden rounded-[32px] shadow-xl min-h-[794px]
      transition-all duration-500 ">

        {/* LEFT — risk wheel */}
        <div className="w-full md:w-[40%] lg:flex-1 bg-[#E6FAEE] flex flex-col items-center
          justify-start py-10 lg:py-24 md:h-[794px]
          relative overflow-hidden">

          <h2 className="text-[32px] sm:text-[36px] md:text-[32px] lg:text-[48px]
            font-bold text-[#004e22] mb-24 lg:mb-38 text-center font-serif leading-tight px-4">
            {data.risks.heading}
          </h2>

          {/* Mobile grid */}
          <div className="w-full px-5 lg:hidden mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {data.risks.items.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-[#004e22] p-4 rounded-xl shadow-md
                  transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:bg-[#006c30]"
                >
                  <div className="w-[60px] h-[60px] relative shrink-0">
                    <Image
                      src={item.img}
                      alt={item.text}
                      fill
                      sizes="60px"
                      className="rounded-full object-cover border-2 border-white shadow-sm
                      transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <span className="text-white font-semibold text-sm md:text-base leading-tight">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet radial layout */}
          <div className="hidden md:block scale-[0.45] lg:scale-[0.6] xl:scale-[0.8] 2xl:scale-100 origin-center mt-10 ">
            <div className="relative flex items-center justify-center">

              {/* Centre bubble */}
              <div className="w-[200px] h-[200px]
                rounded-full border-[6px] border-[#008439] overflow-hidden relative
                flex items-center justify-center text-white text-center font-semibold
                text-sm sm:text-base lg:text-lg
                transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <Image src="/images/center.png" alt="Risk" fill sizes="200px" className="object-cover" />
                <div className="absolute inset-0 bg-black/40" />
                <div className="relative z-10 text-[24px]">Risk <br /> Factors</div>
              </div>

              {/* Left 3 items */}
              {data.risks.items.slice(0, 3).map((item, i) => {
                const pos = [
                  "absolute top-[-140px] left-[-240px] flex items-center",
                  "absolute left-[-340px] flex items-center",
                  "absolute bottom-[-140px] left-[-240px] flex items-center",
                ];
                return (
                  <div key={i} className={`${pos[i]} group`}>
                    <span
                      style={{ fontSize: getFontSize(item.text) }}
                      className="bg-[#008439] text-white px-6 py-2 rounded-bl-[30px]
                        w-[220px] h-[80px] flex items-center leading-tight overflow-hidden
                        transition-all duration-300 group-hover:bg-[#00a94b] group-hover:shadow-lg">
                      {item.text}
                    </span>
                    <div className="w-[137px] h-[137px] relative">
                      <Image
                        src={item.img}
                        alt=""
                        width={137}
                        height={137}
                        className="absolute -left-10 rounded-full border-[4px] border-white shadow-md z-20
                        transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>
                );
              })}

              {/* Right 3 items */}
              {data.risks.items.slice(3, 6).map((item, i) => {
                const pos = [
                  "absolute top-[-140px] right-[-240px] flex items-center",
                  "absolute right-[-340px] flex items-center",
                  "absolute bottom-[-140px] right-[-240px] flex items-center",
                ];
                return (
                  <div key={i} className={`${pos[i]} group`}>
                    <div className="w-[137px] h-[137px] relative">
                      <Image
                        src={item.img}
                        alt=""
                        width={137}
                        height={137}
                        className="absolute -right-10 rounded-full border-[4px] border-white shadow-md z-20
                        transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <span
                      style={{ fontSize: getFontSize(item.text) }}
                      className="bg-[#008439] text-white px-6 py-2 rounded-br-[30px]
                        w-[220px] h-[80px] flex items-center justify-end text-right leading-tight overflow-hidden
                        transition-all duration-300 group-hover:bg-[#00a94b] group-hover:shadow-lg">
                      {item.text}
                    </span>
                  </div>
                );
              })}

            </div>
          </div>
        </div>

        {/* RIGHT — video */}
        <div className="w-full md:w-[60%] lg:w-[600px] md:h-[794px] bg-[#004e22] text-white flex flex-col
          items-center justify-start text-center md:text-left
          px-6 sm:px-10 md:px-10 lg:px-24 py-10 sm:py-14 md:py-24">

          <h2 className="text-[28px] sm:text-[36px] lg:text-[42px] font-bold mb-6 font-serif leading-tight">
            {data.risks.videoSection.heading}
          </h2>

          <p className="text-sm sm:text-[18px] text-gray-200 mb-8 md:mb-10
            max-w-md mx-auto lg:mx-0 font-serif leading-relaxed">
            {data.risks.videoSection.subtext}
          </p>

          <div className="relative w-full max-w-[500px] h-[250px] sm:h-[300px] md:h-[340px] rounded-2xl overflow-hidden shadow-2xl
          transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
            <Image
              src={data.risks.videoSection.image}
              alt="doctor"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 500px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 backdrop-blur-md border border-white/30 rounded-full
                flex items-center justify-center shadow-2xl cursor-pointer
                transition-all duration-300 hover:scale-125 hover:bg-white/30 active:scale-95">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}