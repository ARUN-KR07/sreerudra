import Link from "next/link";

export default function NonMedicinal({ data }) {
    const items = data?.nonmedicinal?.items || [];

    if (!items.length) return null;

    return (
        <section className="page-spacing">
            <div className="page-container">

                {/* Heading */}
                <div className="text-center max-w-5xl mx-auto mb-14">
                    <h2 className="text-[32px] md:text-[42px] font-bold text-black leading-tight mb-5">
                        {data?.nonmedicinal?.heading}
                    </h2>

                    <p className="text-black text-[16px] md:text-[18px] leading-relaxed">
                        {data?.nonmedicinal?.description}
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <div
                            key={`nonmedicinal-${index}`}
                            className={`
                                bg-white
                                border border-[#008439]
                                rounded-[30px]
                                px-8
                                py-12
                                flex items-center
                                min-h-[170px]
                                ${index === items.length - 1 ? "md:col-span-2 xl:col-span-2" : ""}
                            `}
                        >
                            <p className="text-[18px] md:text-[20px] leading-[1.7] font-medium text-black">
                                {item}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="flex justify-center mt-14">
                    <Link
                        href="/contact"
                        className="
                            inline-block
                            bg-[#ED8916]
                            text-white
                            px-8
                            py-4
                            rounded-tl-[30px]
                            rounded-br-[30px]
                            rounded-tr-[5px]
                            rounded-bl-[5px]
                            font-bold
                            transition-all
                            duration-300
                            hover:scale-105
                            hover:shadow-lg
                            hover:shadow-orange-500/40
                            text-[18px]
                            md:text-[22px]
                            shadow-md
                        "
                    >
                        Book an appointment
                    </Link>
                </div>

            </div>
        </section>
    );
}