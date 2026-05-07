export default function AyurvedicAspect({ data }) {
    if (!data?.ayurvedicAspect?.cards?.length) return null;

    return (
        <section className="page-container page-spacing">

            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center mb-14">
                <h2 className="text-[30px] md:text-[42px] font-bold text-black mb-6">
                    {data?.ayurvedicAspect?.heading}
                </h2>

                <p className="text-[16px] md:text-[20px] leading-[1.9] text-[#333] font-medium">
                    {data?.ayurvedicAspect?.description}
                </p>
            </div>

            {/* 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {data?.ayurvedicAspect?.cards?.map((card, index) => (
                    <div
                        key={index}
                        className="bg-[#E6FAEE] rounded-[30px] px-6 md:px-8 py-10"
                    >
                        {/* Title */}
                        <h3 className="text-center text-[20px] md:text-[24px] font-bold text-black mb-8">
                            {card?.title}
                        </h3>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-[#008439] mb-8" />

                        {/* Paragraph */}
                        <p className="text-[13px] md:text-[15px] leading-[1.9] font-medium text-black">
                            {card?.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}