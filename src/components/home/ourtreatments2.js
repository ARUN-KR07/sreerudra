"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { slugData } from "@/lib/treatmentsData";

export default function OurTreatments2() {
    // Use tabs from a representative entry or define them
    const tabs = slugData["lower-back-pain"]?.ourTreatments?.tabs || [
        "Lifestyle",
        "Pain & Ortho",
        "Neuro",
        "Women & Wellness",
        "Specialized Care",
    ];

    const [activeTab, setActiveTab] = useState(tabs[1]); // Default to Pain & Ortho

    // Map treatments with categories
    const allTreatments = Object.entries(slugData || {})
        .filter(([_, item]) => item?.hero)
        .map(([slug, item]) => {
            let category = "Specialized Care";
            if (slug.includes("pain") || slug.includes("arthritis")) category = "Pain & Ortho";
            if (slug.includes("neuro") || slug.includes("stroke") || slug.includes("alzheimer") || slug.includes("parkinson")) category = "Neuro";

            return {
                slug,
                title: item.hero.title,
                img: item.hero.image,
                category,
            };
        });

    // Filter based on active tab and add dummy tiles for Pain & Ortho
    const getDisplayedCards = () => {
        let cards = allTreatments.filter((t) => t.category === activeTab);

        if (activeTab === "Pain & Ortho") {
            cards = [
                ...cards,
                {
                    slug: "knee-pain-dummy",
                    title: "Ayurvedic Treatment for Knee Pain",
                    img: "/images/spine.jpg",
                },
                {
                    slug: "shoulder-pain-dummy",
                    title: "Shoulder Pain & Frozen Shoulder",
                    img: "/images/spine.jpg",
                },
            ];
        }

        // If no cards for other tabs, show a few from all as fallback
        return cards.length > 0 ? cards : allTreatments.slice(0, 3);
    };

    const displayedCards = getDisplayedCards();

    return (
        <main className="page-spacing py-16">
            <section className="bg-white px-4 md:px-10 lg:px-20">
                <div className="max-w-7xl mx-auto text-center mb-10">
                    <p className="text-green-700 font-semibold mb-2">Our Treatments</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        The Treatments Where We Excel the Most
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        In addition to common disease and general treatments, we specialize
                        in treating and curing a wide range of conditions including cancer,
                        spine-related complaints, and more.
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8 md:mb-12">
                    {/* Mobile */}
                    <div className="flex md:hidden w-full bg-green-700 rounded-2xl p-2 flex-wrap justify-center gap-2">
                        {tabs.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(tab)}
                                className={`px-3 py-1.5 rounded-full text-[13px] font-medium whitespace-nowrap transition
                  ${activeTab === tab
                                        ? "bg-white text-green-800"
                                        : "text-white hover:bg-green-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* Desktop */}
                    <div className="hidden md:flex bg-green-700 rounded-full px-2 py-2 flex-wrap justify-center gap-2">
                        {tabs.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 md:px-5 py-2 rounded-full text-[18px] md:text-[20px] font-medium transition whitespace-nowrap
                  ${activeTab === tab
                                        ? "bg-white text-green-800"
                                        : "text-white hover:bg-green-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {displayedCards.map((item, i) => (
                        <Link
                            href={`/treatments/${item.slug}`}
                            key={item.slug}
                            className="relative w-full h-[220px] md:h-[260px] rounded-2xl overflow-hidden group shadow-lg block"
                        >
                            <Image
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover scale-105 group-hover:scale-110 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                            <h3 className="absolute top-6 left-6 text-white font-bold text-[20px] md:text-[24px] max-w-[80%] leading-tight drop-shadow-md" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {item.title}
                            </h3>
                            <div
                                className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full text-white text-2xl bg-black/50 hover:bg-orange-500 transition-colors"
                            >
                                +
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Link
                        href="/treatments"
                        className="inline-block bg-[#ED8916] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/30 text-[18px] md:text-[20px]"
                    >
                        View more
                    </Link>
                </div>
            </section>
        </main>
    );
}
