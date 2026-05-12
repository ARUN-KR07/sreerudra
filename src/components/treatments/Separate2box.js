import { Leaf } from "lucide-react";

export default function Seperate2box({ data }) {
    if (!data?.seperate2box?.leftItems?.length) return null;

    return (
        <section className="page-container page-spacing">

            {/* Heading */}
            <div className="max-w-7xl mx-auto text-center mb-14">

                <h2 className="text-[30px] md:text-[42px] font-bold text-black mb-6">
                    {data?.seperate2box?.heading}
                </h2>

                <p className="text-[14px] md:text-[16px] leading-[1.9] text-[#333] font-medium">
                    {data?.seperate2box?.description}
                </p>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Left */}
                <div className="bg-[#E6FAEE] rounded-[30px] px-6 md:px-10 py-10">

                    <h3 className="text-center text-[20px] md:text-[32px] font-bold text-black mb-8">
                        {data?.seperate2box?.leftTitle}
                    </h3>

                    <div className="w-full h-[1px] bg-[#008439] mb-10" />

                    <div className="space-y-10">

                        {data?.seperate2box?.leftItems?.map((item, index) => (
                            <div key={index} className="flex gap-5">

                                <Leaf
                                    className="text-[#008439] mt-1 flex-shrink-0"
                                    size={20}
                                />

                                <p className="text-[14px] md:text-[18px] leading-[1.8] font-medium text-black">
                                    {item}
                                </p>

                            </div>
                        ))}

                    </div>

                </div>

                {/* Right */}
                <div className="bg-[#E6FAEE] rounded-[30px] px-6 md:px-10 py-10">

                    <h3 className="text-center text-[20px] md:text-[32px] font-bold text-black mb-8">
                        {data?.seperate2box?.rightTitle}
                    </h3>

                    <div className="w-full h-[1px] bg-[#008439] mb-10" />

                    <div className="space-y-10">

                        {data?.seperate2box?.rightItems?.map((item, index) => (
                            <div key={index} className="flex gap-5">

                                <Leaf
                                    className="text-[#008439] mt-1 flex-shrink-0"
                                    size={20}
                                />

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