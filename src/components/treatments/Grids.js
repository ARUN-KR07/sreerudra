export default function Grids({ data }) {
  if (!data?.grids?.items?.length) return null;

  return (
    <main className="page-spacing">
      <section className="page-container bg-white px-4 md:px-6">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-[32px] md:text-[42px] font-semibold text-black">
            {data.grids.heading}
          </h2>
        </div>

        {/* Flexible Grid */}
        <div className="max-w-8xl mx-auto flex flex-wrap justify-center gap-4 md:gap-6">

          {data.grids.items.map((item, index) => (
            <div
              key={index}
              className="
                bg-[#C0F2D6]
                text-[#004E22]
                rounded-[14px]
                px-5 md:px-7
                py-4
                text-sm md:text-lg lg:text-[20px]
                font-medium
                text-center

                whitespace-normal
                break-words
                w-full

                sm:w-auto
                sm:whitespace-nowrap

                transition-all duration-300
                hover:bg-[#8FC9A9]
                hover:-translate-y-1
                shadow-sm
              "
            >
              {item}
            </div>
          ))}

        </div>

      </section>
    </main>
  );
}