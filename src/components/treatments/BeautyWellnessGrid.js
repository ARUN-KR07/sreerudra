"use client";

export default function BeautyWellnessGrid({ data }) {
    if (!data?.beautyWellness?.length) return null;

    return (
        <section className="page-container page-spacing">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {data.beautyWellness.map((item, index) => (
                    <div
                        key={index}
                        className="bg-[#E3EFE7] rounded-[28px] px-6 md:px-10 py-8 min-h-[420px] transition-all duration-300 hover:shadow-lg"
                    >
                        {/* Heading */}
                        <h2 className="text-center text-[18px] md:text-[24px] leading-tight font-semibold text-black font-serif">
                            {item.title}
                        </h2>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-[#18A558] mt-5 mb-7" />

                        {/* Content */}
                        <p className="text-[15px] md:text-[18px] leading-[1.8] text-black font-medium">
                            {item.description}
                        </p>
                    </div>
                ))}

            </div>
        </section>
    );
}