import Image from "next/image";
import Link from "next/link";

export default function MentalWellness({ data }) {
    if (!data?.mentalwellness) return null;

    return (
        <section className="page-container page-spacing">

            <div className="rounded-[30px] p-2 md:p-4 lg:p-8">

                {/* Top Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[25%_75%] gap-8 items-center mb-4">

                    {/* Left Image */}
                    <div className="flex justify-center lg:justify-start">
                        <Image
                            src={data?.mentalwellness?.topImage}
                            alt="Mental Wellness"
                            width={560}
                            height={400}
                            className="
                                w-full
                                max-w-[420px]
                                h-[320px]
                                object-cover
                                rounded-[28px]
                            "
                        />
                    </div>

                    {/* Right Content */}
                    <div className="space-y-8">

                        {data?.mentalwellness?.topDescriptions?.map((item, index) => (
                            <p
                                key={index}
                                className="
                                    text-[15px]
                                    md:text-[18px]
                                    leading-[1.9]
                                    text-[#222]
                                "
                            >
                                {item}
                            </p>
                        ))}

                    </div>

                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-4 order-2 lg:order-1">

                        {data?.mentalwellness?.bottomDescriptions?.map((item, index) => (
                            <p
                                key={index}
                                className="
                                    text-[15px]
                                    md:text-[18px]
                                    leading-[1.9]
                                    text-[#222]
                                "
                            >
                                {item}
                            </p>
                        ))}

                        {/* Button */}
                        <div className="pt-4">

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
                                    rounded-tl-[26px]
                                    rounded-br-[26px]
                                    rounded-tr-[4px]
                                    rounded-bl-[4px]
                                    text-[18px]
                                    md:text-[22px]
                                    font-medium
                                    transition-all
                                    duration-300
                                    hover:scale-105
                                    hover:shadow-lg
                                "
                            >
                                {data?.mentalwellness?.buttonText}
                            </Link>

                        </div>

                    </div>

                    {/* Right Image */}
                    <div className="order-1 lg:order-2 flex justify-center lg:justify-end">

                        <Image
                            src={data?.mentalwellness?.bottomImage}
                            alt="Mental Health Ayurveda"
                            width={560}
                            height={400}
                            className="
                                w-full
                                max-w-[420px]
                                h-[320px]
                                object-cover
                                rounded-[28px]
                            "
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}