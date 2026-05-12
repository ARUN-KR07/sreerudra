export default function TabsOrange({ data }) {
    if (!data?.tabsorange?.items?.length) return null;

    return (
        <section className="page-container page-spacing">

            {/* Heading */}
            <div className="text-center max-w-6xl mx-auto mb-14">

                <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-5">
                    {data?.tabsorange?.heading}
                </h2>

                {/* Paragraph */}
                {data?.tabsorange?.description && (
                    <p className="text-[15px] md:text-[18px] leading-[1.9] text-[#333] font-medium">
                        {data?.tabsorange?.description}
                    </p>
                )}

            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                {data?.tabsorange?.items?.map((item, index) => (
                    <div
                        key={index}
                        className="
                            bg-[#ed8916]
                            rounded-tl-[30px]
                            rounded-br-[30px]
                            rounded-tr-[3px]
                            rounded-bl-[3px]
                            min-h-[170px]
                            flex flex-col
                            items-center
                            justify-center
                            text-center
                            px-6 py-8
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-[0_15px_40px_rgba(242,140,19,0.35)]
                        "
                    >
                        {/* Main Text */}
                        <h3
                            className="text-white font-bold uppercase leading-[1.4] text-[22px] md:text-[26px]"
                            style={{ fontFamily: "Karla, sans-serif" }}
                        >
                            {item?.title}
                        </h3>

                        {/* Span Text */}
                        {item?.span && (
                            <span className="text-white/90 text-[14px] md:text-[16px] mt-3 font-medium leading-[1.6]">
                                {item?.span}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}