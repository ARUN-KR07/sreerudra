export default function AyurvedicTreatmentProtocol({ data }) {
    if (!data?.ayurvedictreatmentprotocol) return null;

    const section = data.ayurvedictreatmentprotocol;

    return (
        <section className="page-container page-spacing">

            {/* Heading */}
            <div className="max-w-6xl mx-auto text-center mb-14">

                <h2 className="text-[32px] md:text-[42px] font-bold text-black mb-6 font-serif leading-tight">
                    {section?.heading}
                </h2>

                <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#333]">
                    {section?.description}
                </p>

            </div>

            {/* Sections */}
            <div className="space-y-14">

                {section?.sections?.map((item, index) => (
                    <div key={index}>

                        {/* Sub Heading */}
                        <h3 className="text-[26px] md:text-[32px] font-bold text-black mb-5 font-serif">
                            {item?.title}
                        </h3>

                        {/* Paragraph */}
                        {item?.text && (
                            <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#333] mb-8">
                                {item?.text}
                            </p>
                        )}

                        {/* Orange Boxes */}
                        {item?.orangeBoxes?.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                                {item?.orangeBoxes?.map((box, i) => (
                                    <div
                                        key={i}
                                        className="
                                            bg-[#ED8916]
                                            rounded-[24px]
                                            px-6
                                            py-8
                                            text-center
                                            min-h-[180px]
                                            flex
                                            flex-col
                                            justify-center
                                        "
                                    >
                                        <h4 className="text-white text-[22px] md:text-[24px] font-bold mb-4">
                                            {box?.title}
                                        </h4>

                                        <p className="text-white text-[15px] md:text-[16px] leading-[1.7]">
                                            {box?.description}
                                        </p>
                                    </div>
                                ))}

                            </div>
                        )}

                        {/* Green Grid */}
                        {item?.greenBoxes?.length > 0 && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

                                {item?.greenBoxes?.map((box, i) => (
                                    <div
                                        key={i}
                                        className="
                                            border
                                            border-[#17A34A]
                                            rounded-[24px]
                                            px-6
                                            py-8
                                            min-h-[120px]
                                            flex
                                            items-center
                                            justify-center
                                            text-center
                                        "
                                    >
                                        <p className="text-[15px] md:text-[16px] leading-[1.8] text-black">
                                            {box}
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