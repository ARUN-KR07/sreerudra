// components/treatments/White2boxnormal.jsx

import { Check } from "lucide-react";

export default function White2boxnormal({ data }) {
    if (!data?.white2boxnormal) return null;

    return (
        <section className="page-container page-spacing">

            {/* Main Wrapper */}
            <div className="
                bg-white
                rounded-[40px]
                p-6
                md:p-10
                lg:p-14
            ">

                {/* Heading */}
                <div className="text-center max-w-5xl mx-auto mb-14">

                    <h2 className="
                        text-[22px]
                        md:text-[32px]
                        font-bold
                        text-black
                        mb-6
                    ">
                        {data?.white2boxnormal?.heading}
                    </h2>

                    {data?.white2boxnormal?.description && (
                        <p className="
                            text-[16px]
                            md:text-[18px]
                            leading-[1.9]
                            text-[#333]
                        ">
                            {data?.white2boxnormal?.description}
                        </p>
                    )}

                </div>

                {/* 2 Columns */}
                <div className="
                    grid
                    grid-cols-1
                    lg:grid-cols-2
                    gap-10
                    lg:gap-16
                ">

                    {/* Left */}
                    <div className="space-y-8">

                        {data?.white2boxnormal?.leftItems?.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4"
                            >

                                <Check
                                    size={22}
                                    className="text-[#22C55E] mt-1 flex-shrink-0"
                                />

                                <p className="
                                    text-[14px]
                                    md:text-[16px]
                                    leading-[1.9]
                                    text-black
                                ">
                                    {item}
                                </p>

                            </div>
                        ))}

                    </div>

                    {/* Right */}
                    <div className="space-y-8">

                        {data?.white2boxnormal?.rightItems?.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4"
                            >

                                <Check
                                    size={22}
                                    className="text-[#22C55E] mt-1 flex-shrink-0"
                                />

                                <p className="
                                    text-[14px]
                                    md:text-[16px]
                                    leading-[1.9]
                                    text-black
                                ">
                                    {item}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}