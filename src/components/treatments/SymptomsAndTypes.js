import { Leaf } from "lucide-react";
import Link from "next/link";

export default function SymptomsAndTypes({ data }) {
    if (!data?.symptomsandtypes) return null;

    return (
        <section className="page-container page-spacing">

            <div className="bg-[#E6F4EA] rounded-[35px] p-6 md:p-10 lg:p-14">

                {/* TOP MAIN BOX */}
                <div className="max-w-5xl mx-auto bg-[#F7F7F7] rounded-[30px] p-6 md:p-10 mb-20">

                    {/* Heading */}
                    <div className="text-center mb-10">

                        <h2 className="text-[28px] md:text-[32px] font-bold text-black mb-5">
                            {data?.symptomsandtypes?.mainTitle}
                        </h2>

                        <div className="w-[180px] h-[1px] bg-[#17A34A] mx-auto" />

                    </div>

                    {/* Intro */}
                    <div className="flex items-start gap-4 mb-8">

                        <Leaf
                            className="text-[#17A34A] mt-1 flex-shrink-0"
                            size={22}
                        />

                        <p className="text-[18px] md:text-[24px] font-semibold text-black leading-[1.8]">
                            {data?.symptomsandtypes?.intro}
                        </p>

                    </div>

                    {/* Main Points */}
                    <div className="space-y-5 pl-2 md:pl-8">

                        {data?.symptomsandtypes?.mainPoints?.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4"
                            >
                                <Leaf
                                    className="text-[#17A34A] mt-1 flex-shrink-0"
                                    size={18}
                                />

                                <p className="text-[14px] md:text-[18px] leading-[1.9] text-black font-medium">
                                    {item}
                                </p>

                            </div>
                        ))}

                    </div>

                    {/* Note */}
                    <p className="text-[13px] md:text-[17px] leading-[1.9] text-black font-medium mt-10">
                        {data?.symptomsandtypes?.note}
                    </p>

                    {/* Button */}
                    <div className="mt-10">

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
                                rounded-tl-[24px]
                                rounded-br-[24px]
                                rounded-tr-[4px]
                                rounded-bl-[4px]
                                text-[16px]
                                md:text-[18px]
                                font-semibold
                                transition-all
                                duration-300
                                hover:scale-105
                                hover:shadow-[0_15px_35px_rgba(237,137,22,0.35)]
                            "
                        >
                            Book Your Appointment Now
                        </Link>

                    </div>

                </div>

                {/* TYPES HEADING */}
                <div className="text-center max-w-5xl mx-auto mb-14">

                    <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-5">
                        {data?.symptomsandtypes?.typesHeading}
                    </h2>

                    <p className="text-[14px] md:text-[16px] leading-[1.9] text-black font-medium">
                        {data?.symptomsandtypes?.typesDescription}
                    </p>

                </div>

                {/* TYPES GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                    {data?.symptomsandtypes?.types?.map((item, index) => (
                        <div
                            key={index}
                            className="
                                bg-[#F7F7F7]
                                rounded-[28px]
                                p-6 md:p-8
                                border border-[#D9D9D9]
                            "
                        >

                            {/* Card Title */}
                            <div className="flex items-center gap-3 mb-8">

                                <Leaf
                                    className="text-[#17A34A] flex-shrink-0"
                                    size={20}
                                />

                                <h3 className="text-[20px] md:text-[24px] font-bold text-black">
                                    {item?.title}
                                </h3>

                            </div>

                            {/* Points */}
                            <div className="space-y-5">

                                {item?.points?.map((point, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-4"
                                    >
                                        <Leaf
                                            className="text-[#17A34A] mt-1 flex-shrink-0"
                                            size={16}
                                        />

                                        <p className="text-[14px] md:text-[16px] leading-[1.8] text-black font-medium">
                                            {point}
                                        </p>

                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}