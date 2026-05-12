"use client";

export default function TreatmentGroupsWrapper({ data }) {
  if (!data?.treatmentGroups?.length) return null;

  return (
    <main className="page-spacing">
      <section className="page-container">
        {data.treatmentGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-16">
            {/* Group Title */}
            <h2 className="text-[20px] md:text-[42px] font-bold text-center mb-8 font-serif">
              {group.title}
            </h2>

            {/* Group Subtitle */}
            {group.subtitle && (
              <h3 className="text-[20px] md:text-[32px] font-semibold text-center text-black mb-10">
                {group.subtitle}
              </h3>
            )}

            {/* Items Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {group.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="w-full bg-white border-2 border-[#004E22] text-black
                  rounded-[30px] px-4 py-3 md:px-16 md:py-4 
                  text-14 md:text-[18px] lg:text-[20px] font-semibold text-center
                  hover:bg-[#C0F2D6] hover:-translate-y-1 shadow-sm min-h-[100px]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
