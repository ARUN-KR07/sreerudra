export default function ConditionsGrid({ data }) {
  if (!data.conditions?.items?.length) return null;

  return (
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
              hover:bg-[#8FC9A9] hover:-translate-y-1 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
