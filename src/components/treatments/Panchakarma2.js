import Link from "next/link";

export default function Panchakarma2({ data }) {
    if (!data?.panchakarma2?.items?.length) return null;

    return (
        <section className="page-container page-spacing">

            {/* Heading */}
            <div className="text-center max-w-6xl mx-auto mb-14">

                <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-6">
                    {data?.panchakarma2?.heading}
                </h2>

                <p className="text-[15px] md:text-[20px] leading-[1.9] text-black font-medium">
                    {data?.panchakarma2?.description}
                </p>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">

                {data?.panchakarma2?.items?.map((item, index) => (
                    <div
                        key={index}
                        className={`
                            bg-[#F7F7F7]
                            border border-[#17A34A]
                            rounded-[28px]
                            px-6 md:px-8
                            py-6
                            flex items-center justify-center
                            text-center
                            min-h-[110px]
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_10px_30px_rgba(23,163,74,0.15)]

                            ${index === 3 ? "xl:col-span-2" : ""}
                        `}
                    >
                        <p className="text-[15px] md:text-[20px] leading-[1.7] font-medium text-black">
                            {item}
                        </p>
                    </div>
                ))}

            </div>

            {/* Last Wide Box */}
            {data?.panchakarma2?.lastItem && (
                <div className="max-w-[560px] mb-14">

                    <div
                        className="
                            bg-[#F7F7F7]
                            border border-[#17A34A]
                            rounded-[28px]
                            px-6 md:px-8
                            py-6
                            min-h-[110px]
                            flex items-center
                        "
                    >
                        <p className="text-[15px] md:text-[18px] leading-[1.7] font-medium text-black">
                            {data?.panchakarma2?.lastItem}
                        </p>
                    </div>

                </div>
            )}

            {/* Bottom Content */}
            <div className="text-center max-w-5xl mx-auto">

                <p className="text-[16px] md:text-[22px] leading-[1.8] font-medium text-black mb-10">
                    {data?.panchakarma2?.bottomText}
                </p>

                <Link
                    href="/contact"
                    className="
                        inline-flex
                        items-center
                        justify-center
                        bg-[#ED8916]
                        text-white
                        px-8
                        py-4
                        rounded-tl-[28px]
                        rounded-br-[28px]
                        rounded-tr-[4px]
                        rounded-bl-[4px]
                        text-[16px]
                        md:text-[20px]
                        font-semibold
                        transition-all duration-300
                        hover:scale-105
                        hover:shadow-[0_15px_35px_rgba(237,137,22,0.35)]
                    "
                >
                    Get Personalized Care Today
                </Link>

            </div>

        </section>
    );
}