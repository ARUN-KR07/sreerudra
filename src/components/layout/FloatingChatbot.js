"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Home, MessageSquare } from "lucide-react";

export default function FloatingChatbot() {
    const [open, setOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("home");
    const [showBooking, setShowBooking] = useState(false);

    return (
        <>
            {/* Chat Window */}
            <div
                className={`fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 transition-all duration-300 ${open
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10 pointer-events-none"
                    }`}
            >
                {/* Header */}
                <div className="bg-green-600 text-white p-4 rounded-t-2xl flex items-center justify-between">

                    {/* Left: Image + Title */}
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden bg-white">
                            <Image
                                src="/images/bot.png"
                                alt="chatbot"
                                width={40}
                                height={40}
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-sm font-semibold leading-none">
                                Sreerudra Ayurveda
                            </h2>
                            <p className="text-xs opacity-80">
                                We’re here to help!
                            </p>
                        </div>
                    </div>

                    <button onClick={() => setOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 text-sm text-gray-700 min-h-[260px]">

                    {/* HOME TAB */}
                    {activeTab === "home" && (
                        <>
                            <p className="mb-3 font-medium">
                                Please fill out the form below:
                            </p>

                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full mb-2 p-2 border rounded-lg text-sm"
                            />

                            <div className="flex gap-2 mb-2">
                                <select className="w-24 p-2 border rounded-lg text-sm">
                                    <option>+91</option>
                                    <option>+1</option>
                                    <option>+44</option>
                                </select>
                                <input
                                    type="tel"
                                    placeholder="Mobile Number"
                                    className="flex-1 p-2 border rounded-lg text-sm"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Your Place"
                                className="w-full mb-2 p-2 border rounded-lg text-sm"
                            />

                            <textarea
                                placeholder="Your Message"
                                rows={3}
                                className="w-full mb-2 p-2 border rounded-lg text-sm"
                            />

                            <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                                Submit
                            </button>
                        </>
                    )}

                    {/* CHAT TAB */}
                    {activeTab === "chat" && (
                        <>
                            {!showBooking ? (
                                <>
                                    <div className="flex items-start gap-2 mb-3">
                                        <Image
                                            src="/images/bot.png"
                                            alt="bot"
                                            width={30}
                                            height={30}
                                            className="rounded-full"
                                        />
                                        <div className="bg-gray-100 p-3 rounded-lg text-sm">
                                            👋 Welcome to Sreerudra Ayurveda 🌿 <br />
                                            How can we assist you today?
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => setShowBooking(true)}
                                        className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition"
                                    >
                                        Book Online Consultation
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p className="mb-2 font-semibold text-gray-800">
                                        Book Consultation
                                    </p>

                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full mb-2 p-2 border rounded-lg text-sm"
                                    />

                                    <input
                                        type="tel"
                                        placeholder="Mobile Number"
                                        className="w-full mb-2 p-2 border rounded-lg text-sm"
                                    />

                                    <input
                                        type="date"
                                        className="w-full mb-2 p-2 border rounded-lg text-sm"
                                    />

                                    <textarea
                                        placeholder="Describe your concern"
                                        rows={2}
                                        className="w-full mb-2 p-2 border rounded-lg text-sm"
                                    />

                                    <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
                                        Confirm Booking
                                    </button>

                                    <button
                                        onClick={() => setShowBooking(false)}
                                        className="w-full mt-2 text-sm text-gray-500 hover:text-black"
                                    >
                                        ← Back
                                    </button>
                                </>
                            )}
                        </>
                    )}
                </div>

                {/* Bottom Tabs */}
                <div className="flex border-t">
                    <button
                        onClick={() => {
                            setActiveTab("home");
                            setShowBooking(false);
                        }}
                        className={`flex-1 py-3 flex flex-col items-center text-xs ${activeTab === "home"
                            ? "text-green-600 font-semibold"
                            : "text-gray-500"
                            }`}
                    >
                        <Home size={18} />
                        Home
                    </button>

                    <button
                        onClick={() => setActiveTab("chat")}
                        className={`flex-1 py-3 flex flex-col items-center text-xs ${activeTab === "chat"
                            ? "text-green-600 font-semibold"
                            : "text-gray-500"
                            }`}
                    >
                        <MessageSquare size={18} />
                        Chat
                    </button>
                </div>
            </div>

            {/* Floating Button (WITH IMAGE) */}
            {/* Floating Button (Improved Visibility) */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-6 right-6 w-20 h-20 rounded-full bg-white 
             flex items-center justify-center 
             border-4 border-black 
             shadow-xl hover:scale-110 transition-all duration-300"
            >
                <Image
                    src="/images/bot.png"
                    alt="chatbot"
                    width={52}
                    height={52}
                    className="rounded-full"
                />
            </button>
        </>
    );
}