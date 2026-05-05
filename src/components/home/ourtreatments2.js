"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { slugData } from "@/lib/treatmentsData";

// Slug mapping
const SLUG_CATEGORY = {
    "lower-back-pain": "Pain & Ortho",
    "neck-pain": "Pain & Ortho",
    "arthritis-treatment": "Pain & Ortho",
    "kidney-disorder": "Lifestyle",
};

const TABS = [
    "Lifestyle",
    "Pain & Ortho",
    "Neuro",
    "Women & Wellness",
    "Specialized Care",
];

export default function OurTreatments2() {
    const [activeTab, setActiveTab] = useState("Lifestyle");
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState("right");

    // 🔥 Handle smooth tab change
    const handleTabChange = (tab) => {
        if (tab === activeTab) return;

        const currentIndex = TABS.indexOf(activeTab);
        const nextIndex = TABS.indexOf(tab);

        setDirection(nextIndex > currentIndex ? "right" : "left");
        setAnimating(true);

        setTimeout(() => {
            setActiveTab(tab);
            setAnimating(false);
        }, 180);
    };

    // Build data
    const allTreatments = Object.entries(slugData || {})
        .filter(([_, item]) => item?.hero)
        .map(([slug, item]) => ({
            slug,
            title: item.hero.title,
            img: item.hero.image,
            category: SLUG_CATEGORY[slug] ?? "Specialized Care",
        }));

    const displayedCards = allTreatments.filter(
        (t) => t.category === activeTab
    );

    return (
        <main className="page-spacing py-16">
            <section className="bg-white px-4 md:px-10 lg:px-20">
                {/* HEADER */}
                <div className="max-w-7xl mx-auto text-center mb-10">
                    <p className="text-green-700 font-semibold mb-2">
                        Our Treatments
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        The Treatments Where We Excel the Most
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                        In addition to common disease and general treatments, we specialize
                        in treating and curing a wide range of conditions.
                    </p>
                </div>

                {/* ✅ MOBILE TABS (clean, no overflow) */}
                <div className="flex justify-center mb-8 md:mb-12">
                    <div className="md:hidden w-full bg-green-700 rounded-2xl p-2 flex flex-wrap gap-2 justify-center">
                        {TABS.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => handleTabChange(tab)}
                                className={`px-3 py-2 rounded-full text-[11px] sm:text-[13px] font-medium transition-all duration-300 whitespace-nowrap
                ${activeTab === tab
                                        ? "bg-white text-green-800 shadow-sm scale-105"
                                        : "text-white hover:bg-green-600"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* DESKTOP TABS */}
                    <div className="hidden md:flex bg-green-700 rounded-full px-2 py-2 flex-wrap justify-center gap-2">
                        {TABS.map((tab, i) => (
                            <button
                                key={i}
                                onClick={() => handleTabChange(tab)}
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

                {/* ✅ CARDS WITH SMOOTH ANIMATION */}
                <div
                    className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto transition-all duration-300
          ${animating
                            ? direction === "right"
                                ? "opacity-0 translate-x-10"
                                : "opacity-0 -translate-x-10"
                            : "opacity-100 translate-x-0"
                        }`}
                >
                    {displayedCards.length > 0 ? (
                        displayedCards.map((item) => (
                            <Link
                                href={`/treatments/${item.slug}`}
                                key={item.slug}
                                className="relative w-full h-[220px] md:h-[260px] rounded-2xl overflow-hidden group shadow-lg block"
                            >
                                <Image
                                    src={item.img}
                                    alt={item.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover scale-105 group-hover:scale-110 transition duration-500"
                                />

                                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />

                                <h3 className="absolute top-6 left-6 text-white font-bold text-[20px] md:text-[24px] max-w-[80%] leading-tight drop-shadow-md">
                                    {item.title}
                                </h3>

                                <div className="absolute bottom-6 right-6 w-10 h-10 flex items-center justify-center rounded-full text-white text-2xl bg-black/50 hover:bg-orange-500 transition-colors">
                                    +
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16 text-gray-400 text-lg">
                            Treatments coming soon for this category.
                        </div>
                    )}
                </div>

                {/* CTA */}
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