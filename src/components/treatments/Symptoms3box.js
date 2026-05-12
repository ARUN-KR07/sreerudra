import { Leaf } from "lucide-react";

export default function Symptoms3box({ data }) {
    if (!data?.Symptoms3box?.cards?.length) return null;

    return (
        <section className="page-container page-spacing">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {data?.Symptoms3box?.cards?.map((card, index) => (
                    <div
                        key={index}
                        className="bg-[#E6FAEE] rounded-[30px] px-6 md:px-8 py-10"
                    >
                        {/* Title */}
                        <h3 className="text-center text-[20px] md:text-[24px] font-bold text-black mb-8">
                            {card?.title}
                        </h3>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-[#008439] mb-8" />

                        {/* Paragraph */}
                        {card?.description && (
                            <p className="text-[13px] md:text-[15px] leading-[1.9] font-medium text-black">
                                {card?.description}
                            </p>
                        )}

                        {/* Bullet Points */}
                        {card?.points?.length > 0 && (
                            <div className="space-y-5">

                                {card?.points?.map((point, i) => (
                                    <div key={i} className="flex items-start gap-3">

                                        <Leaf
                                            className="text-[#008439] mt-1 flex-shrink-0"
                                            size={18}
                                        />

                                        <p className="text-[13px] md:text-[15px] leading-[1.9] font-medium text-black">
                                            {point}
                                        </p>

                                    </div>
                                ))}

                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}