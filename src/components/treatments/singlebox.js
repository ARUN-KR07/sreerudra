import { Leaf } from "lucide-react";

export default function Singlebox({ data }) {
    if (
        !data?.singlebox?.rightItems?.length
    )
        return null;

    return (
        <section className="page-container page-spacing">
            {/* Single Combined Box */}
            <div className="bg-[#E6FAEE] rounded-[30px] px-6 md:px-10 py-10">

                {/* Common Heading */}
                <h2 className="text-center text-[24px] md:text-[32px] font-bold text-black mb-8">
                    {data?.singlebox?.heading}
                </h2>

                {/* Top Divider */}
                <div className="w-full h-[1px] bg-[#008439] mb-10" />

                {/* Content */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10">

                    {/* Center Vertical Divider */}
                    <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-[#008439]" />

                    {/* Left Side */}
                    <div className="space-y-8">
                        {data?.singlebox?.leftItems?.map((item, index) => (
                            <div key={index} className="flex gap-5">
                                
                                {/* Leaf Icon */}
                                <div className="pt-1 shrink-0">
                                    <Leaf className="w-5 h-5 text-[#008439]" />
                                </div>

                                {/* Text */}
                                <p className="text-[14px] md:text-[18px] leading-[1.8] font-medium text-black">
                                    {item}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Side */}
                    <div className="space-y-8">
                        {data?.singlebox?.rightItems?.map((item, index) => (
                            <div key={index} className="flex gap-5">

                                {/* Leaf Icon */}
                                <div className="pt-1 shrink-0">
                                    <Leaf className="w-5 h-5 text-[#008439]" />
                                </div>

                                {/* Text */}
                                <p className="text-[14px] md:text-[18px] leading-[1.8] font-medium text-black">
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