import Image from "next/image";
import Link from "next/link";

export default function YogaDiet({ data }) {
    if (!data?.yogaDiet) return null;

    return (
        <section className="bg-[#F7F7F7] page-spacing">
            <div className="page-container">

                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div>

                        <h2 className="text-[34px] md:text-[42px] font-bold text-black mb-6">
                            {data?.yogaDiet?.heading}
                        </h2>

                        <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#222] font-medium">
                            {data?.yogaDiet?.description}
                        </p>

                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <Image
                            src={data?.yogaDiet?.image}
                            alt={data?.yogaDiet?.heading}
                            width={700}
                            height={420}
                            className="
                                w-full
                                max-w-[520px]
                                h-auto
                                rounded-[30px]
                                object-cover
                                shadow-lg
                            "
                        />
                    </div>

                </div>

                {/* Tips */}
                <div className="mt-14 flex flex-wrap gap-6">

                    {data?.yogaDiet?.tips?.map((tip, index) => (
                        <div
                            key={index}
                            className="
                                border
                                border-[#17A34A]
                                rounded-[22px]
                                px-8
                                py-5
                                bg-white
                                min-w-[280px]
                                flex-1
                            "
                        >
                            <p className="text-[16px] md:text-[18px] font-medium text-[#222] text-center leading-[1.6]">
                                {tip}
                            </p>
                        </div>
                    ))}

                </div>

                {/* Button */}
                <div className="mt-14">
                    <Link
                        href="/contact"
                        className="
                            inline-flex
                            items-center
                            justify-center
                            bg-[#F28C13]
                            text-white
                            px-8
                            md:px-10
                            py-4
                            rounded-tl-[28px]
                            rounded-br-[28px]
                            rounded-tr-[6px]
                            rounded-bl-[6px]
                            text-[18px]
                            md:text-[22px]
                            font-semibold
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-[0_15px_35px_rgba(242,140,19,0.35)]
                        "
                    >
                        Get Your Personalized Ayurveda Plan
                    </Link>
                </div>

            </div>
        </section>
    );
}