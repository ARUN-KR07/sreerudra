import Link from "next/link";

export default function Panchakarma({ data }) {
    if (!data?.panchakarma?.modalities?.length) return null;

    return (
        <section className="bg-[#E6F4EA] page-spacing">
            <div className="page-container">

                {/* Top Content */}
                <div className="max-w-6xl mx-auto text-center">

                    <h2 className="text-[34px] md:text-[42px] font-bold text-black mb-8">
                        {data?.panchakarma?.heading}
                    </h2>

                    <div className="space-y-6">
                        {data?.panchakarma?.descriptions?.map((text, index) => (
                            <p
                                key={index}
                                className="text-[16px] md:text-[20px] leading-[1.8] text-[#1e1e1e] font-medium"
                            >
                                {text}
                            </p>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="mt-10">
                        <Link
                            href="/contact"
                            className="
                                inline-flex
                                items-center
                                justify-center
                                bg-[#F28C13]
                                text-white
                                px-8
                                md:px-12
                                py-4
                                rounded-tl-[28px]
                                rounded-br-[28px]
                                rounded-tr-[6px]
                                rounded-bl-[6px]
                                text-[18px]
                                md:text-[24px]
                                font-semibold
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:shadow-[0_15px_35px_rgba(242,140,19,0.35)]
                            "
                        >
                            Connect with Our Team
                        </Link>
                    </div>
                </div>

                {/* Modalities Heading */}
                <div className="text-center mt-20 mb-14">
                    <h3 className="text-[32px] md:text-[42px] font-bold text-black">
                        {data?.panchakarma?.modalitiesHeading}
                    </h3>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    {data?.panchakarma?.modalities?.map((item, index) => (
                        <div
                            key={index}
                            className="
                                bg-[#F8F8F8]
                                border
                                border-[#17A34A]
                                rounded-[28px]
                                px-7
                                py-10
                                min-h-[170px]
                                flex
                                items-center
                                transition-all
                                duration-300
                                hover:-translate-y-2
                                hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]
                            "
                        >
                            <p className="text-[14px] md:text-[16px] leading-[1.8] text-[#222] font-medium">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}