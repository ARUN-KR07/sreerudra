import { Leaf, Check } from "lucide-react";

export default function White2box({ data }) {
    if (!data?.white2box?.columns?.length) return null;

    return (
        <main className="bg-[#E6FAEE]">
        <section className="page-container page-spacing">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                {data?.white2box?.columns?.map((column, index) => (
                    <div
                        key={index}
                        className="
                            bg-white
                            rounded-[34px]
                            p-8 md:p-12
                            h-full
                        "
                    >

                        <div className="space-y-14">

                            {column?.sections?.map((section, i) => (
                                <div key={i}>

                                    {/* Heading */}
                                    <div className="flex items-start gap-5 mb-8">

                                        <Leaf
                                            className="text-[#19A34A] flex-shrink-0 mt-2"
                                            size={28}
                                        />

                                        <h2
                                            className="
                                                text-[28px]
                                                md:text-[32px]
                                                leading-[1.25]
                                                font-bold
                                                text-black
                                                font-serif
                                            "
                                        >
                                            {section?.title}
                                        </h2>

                                    </div>

                                    {/* Points */}
                                    <div className="space-y-6 pl-12">

                                        {section?.points?.map((point, j) => (
                                            <div
                                                key={j}
                                                className="flex items-start gap-5"
                                            >

                                                <Check
                                                    className="text-[#19A34A] mt-2 flex-shrink-0"
                                                    size={22}
                                                    strokeWidth={3}
                                                />

                                                <p
                                                    className="
                                                        text-[16px]
                                                        md:text-[20px]
                                                        leading-[1.8]
                                                        text-black
                                                        font-medium
                                                    "
                                                >
                                                    {point}
                                                </p>

                                            </div>
                                        ))}

                                    </div>

                                </div>
                            ))}

                        </div>

                    </div>
                ))}

            </div>

        </section>
        </main>
    );
}