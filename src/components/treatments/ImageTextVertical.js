import Image from "next/image";

export default function ImageTextVertical({ data }) {
    if (!data?.imagetextvertical?.items?.length) return null;

    return (
        <section className="page-container page-spacing bg-[#E6FAEE]">

            {/* Main Heading */}
            <div className="text-center max-w-5xl mx-auto mb-24">

                <h2 className="text-[32px] md:text-[42px] font-bold text-black leading-[1.3]">
                    {data?.imagetextvertical?.heading}
                </h2>

            </div>

            {/* Items */}
            <div className="space-y-5">

                {data?.imagetextvertical?.items?.map((item, index) => (
                    <div
                        key={index}
                        className="
                            bg-[#E6FAEE]
                            rounded-[32px]
                            p-1 md:p-2
                            flex flex-col lg:flex-row
                            items-center
                            gap-8 md:gap-12
                        "
                    >

                        {/* Left Image */}
                        <div className="flex-shrink-0">

                            <Image
                                src={item?.image}
                                alt={item?.title}
                                width={415}
                                height={288}
                                className="
                                    w-full
                                    max-w-[415px]
                                    h-[288px]
                                    object-cover
                                    rounded-[24px]
                                "
                            />

                        </div>

                        {/* Right Content */}
                        <div className="flex-1 text-center">

                            {/* Small Heading */}
                            <h3 className="text-[22px] md:text-[24px] font-bold text-black mb-2 leading-[1.4]">
                                {item?.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[16px] md:text-[18px] leading-[1.9] font-medium text-[#222]">
                                {item?.description}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </section>
    );
}