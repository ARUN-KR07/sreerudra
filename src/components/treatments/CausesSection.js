import { renderIcon } from "./IconResolver";

export default function CausesSection({ data }) {
  if (!data?.causes) return null;

  return (
    <main className="page-spacing py-16">
      <section className="w-full max-w-[1720px] mx-auto px-10">
        <div className="text-center mb-12">
          <h2 className="text-[36px] md:text-[42px] font-bold text-black font-serif">
            {data.causes.heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-4 justify-items-center">
          {data.causes.items.map((item, i) => (
            <div
              key={i}
              className="bg-[#E6FAEE] rounded-[12px] p-8 md:p-10 w-full max-w-[794px] min-h-[250px]
                flex flex-col justify-center transition-all duration-300
                ease-in-out hover:-translate-y-2 hover:shadow-xl
                hover:shadow-green-900/10 cursor-pointer shadow-sm border border-green-50"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white rounded-full shadow-sm text-[#004E22] shrink-0">
                  {renderIcon(item.icon)}
                </div>
                <h3 className="text-[20px] md:text-[24px] font-bold text-[#004E22] font-serif leading-tight">{item.title}</h3>
              </div>
              <p className="text-gray-700 text-[16px] leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
