"use client";

import { useState } from "react";
import Image from "next/image";
import OurTreatments2 from "@/components/home/ourtreatments2";

const faqData = [
    {
        question: "Which cancer is completely curable?",
        answer: (
            <>
                <p className="mb-3">
                    When it comes to cancer, doctors prefer the term remission over cure as the chances of recurrence cannot be ruled out. Even so, post-diagnosis if a person stays 5-years cancer-free, they have better chances of recovery. Five Cancers with better chances of recovery
                </p>
                <p className="mb-2">Five cancers with better chances of recovery:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Prostate Cancer</li>
                    <li>Thyroid Cancer</li>
                    <li>Testicular Cancer</li>
                    <li>Melanoma</li>
                    <li>Early Stages of Breast Cancer</li>
                </ul>
            </>
        ),
    },
    {
        question: "Is there any treatment for Autism in Ayurveda?",
        answer: (
            <>
                <p className="mb-3">
                    Autism being a neurodevelopmental disorder, can be treated by continuous evaluations, therapies – for body and mind, along with medications that help ease symptoms. Ayurveda puts emphasis on a proper diet plan for the mother during pregnancy that can trigger tridoshas.
                </p>
                <p className="mb-2">Five cancers with better chances of recovery:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Internal therapy: Medha Rasayana, Ghritas etc.</li>
                    <li>External therapy: Nasya, Shirodhara, Dhoomapana etc.</li>
                    <li>Mind Therapy : Yoga & Prranayama</li>
                </ul>
            </>
        ),
    },
    {
        question: "Which is the best treatment for varicose veins?",
        answer: (
            <>
                <p className="mb-3">
                    Varicose Veins are notifiers of Vata Dosha in one’s body. The five best therapies to treat those are:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Ayurveda Massage / Abhyanga By stimulating pressure points, massages help improve the internal balance of the body.</li>
                    <li>Vasti / Herbal Enema Medicated liquid oils are used with which toxins are flushed out from the body, thereby reducing swelling and pain.</li>
                    <li>Proper Diet and Exercises Improved physical activity along with a proper diet helps in balancing the overall functioning of one’s body.</li>
                    <li>Yoga Stretches in Yoga helps relieve soreness and swelling of the legs and improves blood circulation.</li>
                    <li>Herbal Remedy Ashwagandha, Brahi, Guggulu, Manjisha etc are a few herbs that are used in varicose vein treatment.</li>
                </ul>
            </>
        ),

    },
    {
        question: "How can I improve my kidney function in Ayurveda?",
        answer: (
            <>
                <p className="mb-2">Kidneys are responsible for the removal of toxins and waste from the blood. A few Herbal remedies that have detoxifying quality are listed below:</p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>Ajmoda / Celery : Naturally diuretic. Helps toxin removal resulting in increased urination.</li>
                    <li>Sailin / Parsley: A potent diuretic.Helps flush out bacteria and germs from kidneys. Mix with a dash of lemon juice for better results.</li>
                    <li>Ginger: A known remedy for digestive problems. Helps cleanse the kidney and liver.</li>
                    <li>Turmeric: Anti-inflammatory property of turmeric prevents kidney inflammations/infections. Its cleansing property help purifies the kidneys.</li>
                </ul>
            </>
        ),
    },
    {
        question: "Can Ayurveda cure diseases?",
        answer:
            "Rather than a cure to any disease, Ayurveda is a holistic system of medicine that focuses on the entire lifestyle and wellbeing of a person by balancing Tridoshas. Ayurveda can yield effective results when followed as directed by the practitioner. As the ayurvedic practice focuses on the physical, mental, and spiritual level of cure, it might take longer to get a visible change in the status of illness as compared to traditional medicines that focus on curing symptoms.",
    },
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="w-full bg-white">
            {/* HERO */}
            <div className="relative w-full h-[320px] md:h-[480px]">
                <Image
                    src="/images/treatment.webp"
                    alt="faq"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                    <h1 className="text-white font-serif font-semibold">
                        FAQ
                    </h1>
                    <p className="mt-2 text-sm opacity-90">
                        Home <span className="mx-2">→</span> FAQ
                    </p>
                </div>
            </div>

            {/* FAQ */}
            <div className="page-container page-spacing">
                <div className="space-y-5">
                    {faqData.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="rounded-xl border border-gray-200 overflow-hidden transition-all duration-300"
                            >
                                {/* QUESTION */}
                                <button
                                    onClick={() => toggle(index)}
                                    className={`w-full flex items-center gap-4 px-5 py-5 text-left transition ${isOpen
                                        ? "bg-green-50"
                                        : "bg-white hover:bg-gray-50"
                                        }`}
                                >
                                    {/* ICON */}
                                    <div
                                        className={`min-w-[38px] h-10 flex items-center justify-center rounded-full border text-lg font-semibold transition-all duration-300 ${isOpen
                                            ? "bg-black text-white rotate-45 border-black"
                                            : "bg-gray-100 text-gray-700"
                                            }`}
                                    >
                                        +
                                    </div>

                                    {/* TEXT */}
                                    <span className="text-gray-800 font-medium text-[22px]">
                                        {item.question}
                                    </span>
                                </button>

                                {/* ANSWER */}
                                <div
                                    className={`grid transition-all duration-500 ease-in-out ${isOpen
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        {/* Divider */}
                                        <div className="border-t border-gray-200" />

                                        {/* Answer Content */}
                                        <div className="bg-white pl-16 pr-6 py-6">
                                            <div className="text-gray-600 text-[20px] leading-relaxed space-y-4">
                                                {item.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <OurTreatments2 />
        </div>
    );
}