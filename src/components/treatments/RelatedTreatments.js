export default function RelatedTreatments({ data }) {
  if (!data.treatments?.items?.length) return null;

  return (
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
  );
}
