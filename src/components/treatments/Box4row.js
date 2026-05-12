export default function Box4row({ data }) {
    if (!data?.Box4row?.cards?.length) return null;

    return (
        <section className="page-container page-spacing">

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                {data?.Box4row?.cards?.map((card, index) => (
                    <div
                        key={index}
                        className="
                            bg-[#E6FAEE]
                            border border-[#17A34A]
                            rounded-[30px]
                            px-6 md:px-8
                            py-10
                            min-h-[280px]
                            flex flex-col
                            transition-all duration-300
                            hover:-translate-y-2
                            hover:shadow-[0_15px_35px_rgba(23,163,74,0.12)]
                        "
                    >

                        {/* Title */}
                        <h3 className="
                            text-center
                            text-[20px]
                            md:text-[24px]
                            font-bold
                            text-black
                            leading-[1.4]
                            mb-8
                            min-h-[70px]
                            flex items-center justify-center
                        ">
                            {card?.title}
                        </h3>

                        {/* Divider */}
                        <div className="w-full h-[1px] bg-[#17A34A] mb-8" />

                        {/* Paragraph */}
                        <p className="
                            text-[14px]
                            md:text-[16px]
                            leading-[1.9]
                            font-medium
                            text-black
                            text-center
                        ">
                            {card?.description}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    );
}