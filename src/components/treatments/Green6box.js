// components/treatments/Green6box.jsx

export default function Green6box({ data }) {
    if (!data?.green6box?.items?.length) return null;

    return (
        <section className="page-container page-spacing">

            {/* Heading */}
            <div className="text-center max-w-5xl mx-auto mb-14">
                <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-5">
                    {data?.green6box?.heading}
                </h2>

                {data?.green6box?.description && (
                    <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#333]">
                        {data?.green6box?.description}
                    </p>
                )}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                {data?.green6box?.items?.map((item, index) => (
                    <div
                        key={index}
                        className="
                            bg-[#E6FAEE]
                            rounded-[30px]
                            px-8
                            py-10
                            min-h-[330px]
                            flex
                            flex-col
                        "
                    >

                        {/* Title */}
                        <div className="text-center mb-8">
                            <h3 className="
                                text-[22px]
                                sm:text-[24px]
                                md:text-[32px]
                                font-bold
                                text-black
                                font-serif
                                leading-tight
                                break-words
                                hyphens-auto
                            ">
                                {item?.title}
                            </h3>

                            <div className="w-full h-[1px] bg-[#008439] mt-4" />
                        </div>

                        {/* Description */}
                        <p className="
                            text-[14px]
                            md:text-[16px]
                            leading-[1.9]
                            text-black
                        ">
                            {item?.description}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    );
}