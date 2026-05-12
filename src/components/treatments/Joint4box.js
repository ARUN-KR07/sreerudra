import { Leaf } from "lucide-react";

export default function Joint4box({ data }) {
    if (!data?.joint4box) return null;

    return (
        <section className="page-container page-spacing">

            <div className="bg-[#E6F4EA] rounded-[35px] p-6 md:p-10 lg:p-14">

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16">

                    {/* LEFT COLUMN */}
                    <div className="xl:pr-10 xl:border-r border-[#17A34A] flex flex-col gap-16">

                        {/* LEFT TOP */}
                        <div className="flex flex-col">

                            {/* Equal Heading Height */}
                            <div className="min-h-[160px] flex items-center justify-center">
                                <h2 className="text-center text-[28px] md:text-[32px] font-bold text-black leading-[1.3]">
                                    {data?.joint4box?.leftTop?.title}
                                </h2>
                            </div>

                            <div className="w-full h-[1px] bg-[#17A34A] my-8" />

                            {/* Equal Content Height */}
                            <div className="min-h-[220px]">
                                <p className="text-[15px] md:text-[16px] leading-[1.9] text-black font-medium">
                                    {data?.joint4box?.leftTop?.description}
                                </p>
                            </div>

                        </div>

                        {/* LEFT BOTTOM */}
                        <div className="flex flex-col">

                            {/* Equal Heading Height */}
                            <div className="min-h-[180px] flex items-center justify-center">
                                <h2 className="text-center text-[28px] md:text-[32px] font-bold text-black leading-[1.3]">
                                    {data?.joint4box?.leftBottom?.title}
                                </h2>
                            </div>

                            <div className="w-full h-[1px] bg-[#17A34A] my-8" />

                            {/* Equal Content Height */}
                            <div className="min-h-[420px] space-y-8">

                                {data?.joint4box?.leftBottom?.points?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
                                    >
                                        <Leaf
                                            className="text-[#17A34A] mt-1 flex-shrink-0"
                                            size={22}
                                        />

                                        <p className="text-[15px] md:text-[16px] leading-[1.9] text-black font-medium">
                                            {item}
                                        </p>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                    {/* RIGHT COLUMN */}
                    <div className="flex flex-col gap-16">

                        {/* RIGHT TOP */}
                        <div className="flex flex-col">

                            {/* Equal Heading Height */}
                            <div className="min-h-[160px] flex items-center justify-center">
                                <h2 className="text-center text-[28px] md:text-[32px] font-bold text-black leading-[1.3]">
                                    {data?.joint4box?.rightTop?.title}
                                </h2>
                            </div>

                            <div className="w-full h-[1px] bg-[#17A34A] my-8" />

                            {/* Equal Content Height */}
                            <div className="min-h-[220px]">
                                <p className="text-[15px] md:text-[16px] leading-[1.9] text-black font-medium">
                                    {data?.joint4box?.rightTop?.description}
                                </p>
                            </div>

                        </div>

                        {/* RIGHT BOTTOM */}
                        <div className="flex flex-col">

                            {/* Equal Heading Height */}
                            <div className="min-h-[180px] flex items-center justify-center">
                                <h2 className="text-center text-[28px] md:text-[32px] font-bold text-black leading-[1.3]">
                                    {data?.joint4box?.rightBottom?.title}
                                </h2>
                            </div>

                            <div className="w-full h-[1px] bg-[#17A34A] my-8" />

                            {/* Equal Content Height */}
                            <div className="min-h-[420px] space-y-8">

                                {data?.joint4box?.rightBottom?.points?.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4"
                                    >
                                        <Leaf
                                            className="text-[#17A34A] mt-1 flex-shrink-0"
                                            size={22}
                                        />

                                        <p className="text-[15px] md:text-[16px] leading-[1.9] text-black font-medium">
                                            {item}
                                        </p>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}