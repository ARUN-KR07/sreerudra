"use client";

import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="w-full">

            {/* HERO */}
            <section className="relative w-full h-[320px] md:h-[420px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/treatment.webp')", // replace
                    }}
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center">
                    <h1 className="text-white font-semibold">
                        Contact Us
                    </h1>
                    <p className="mt-2 text-sm opacity-90">
                        Home / Contact Us
                    </p>
                </div>
            </section>

            {/* CONTACT */}
            <section className="w-full py-12 px-4 md:px-10 page-container ">
                <div className="grid md:grid-cols-2 gap-8">

                    {/* LEFT */}
                    <div className="space-y-5">
                        <h2 className="text-3xl font-semibold text-gray-800">
                            Get in Touch
                        </h2>

                        {/* PHONE */}
                        <div className="bg-[#ED8916] text-white p-6 rounded-2xl flex items-center gap-4">
                            <div className="bg-white/20 p-4 rounded-full flex items-center justify-center">
                                <Phone size={22} />
                            </div>

                            <div>
                                <h3 className="font-semibold mb-1">Phone</h3>

                                <p className="font-bold text-[20px]">Alappuzha</p>
                                <p>+91 477 2266778</p>
                                <p>+91 98479 48218</p>

                                <div className="mt-2">
                                    <p className="font-bold text-[20px]">Trivandrum</p>
                                    <p>+91 471 2590045</p>
                                    <p>+91 95677 48218</p>
                                </div>
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="bg-[#ED8916] text-white p-6 rounded-2xl flex items-center gap-4">
                            <div className="bg-white/20 p-4 rounded-full flex items-center justify-center">
                                <Mail size={22} />
                            </div>

                            <div>
                                <h3 className="font-bold text-[20px]">Email</h3>
                                <p>info@sreerudraayurveda.com</p>
                            </div>
                        </div>

                        {/* ADDRESS */}
                        <div className="bg-[#ED8916] text-white p-6 rounded-2xl flex items-center gap-4">
                            <div className="bg-white/20 p-4 rounded-full flex items-center justify-center">
                                <MapPin size={22} />
                            </div>

                            <div>
                                <h3 className="font-bold text-[28px]">Address</h3>

                                <p className="font-bold text-[20px]">Alappuzha</p>
                                <p>
                                    Sreerudra Ayurveda Multi-Speciality Hospital,
                                    Kaithavana, Alappuzha – 688003
                                </p>

                                <div className="mt-2">
                                    <p className="font-bold text-[20px]">Trivandrum</p>
                                    <p>
                                        Kallampally, Sreekariyam,
                                        Trivandrum – 695017
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT - FORM */}
                    <div className="bg-green-700 p-6 md:p-8 rounded-2xl">
                        <h2 className="text-2xl font-semibold text-white mb-5">
                            Send a Message
                        </h2>

                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    placeholder="First Name"
                                    className="p-3 rounded-md w-full bg-white text-gray-800 border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                                />
                                <input
                                    placeholder="Last Name"
                                    className="p-3 rounded-md w-full bg-white text-gray-800 border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                                />
                            </div>

                            <input
                                placeholder="Email"
                                className="p-3 rounded-md w-full bg-white text-gray-800 border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                            />

                            <input
                                placeholder="Phone"
                                className="p-3 rounded-md w-full bg-white text-gray-800 border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                            />

                            <input
                                placeholder="Location"
                                className="p-3 rounded-md w-full bg-white text-gray-800 border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                            />

                            <textarea
                                rows={4}
                                placeholder="Message"
                                className="p-3 rounded-md w-full bg-white text-gray-800 border border-gray-200 focus:ring-2 focus:ring-green-500 outline-none"
                            />

                            <button className="bg-white text-green-700 px-6 py-2 rounded-full hover:bg-gray-200 transition">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* MAP */}
            <section className="w-full">
                <div className="w-full h-[600px] md:h-[700px]">
                    <iframe
                        src="https://www.google.com/maps?cid=8474395949401189746&output=embed"
                        width="100%"
                        height="100%"
                        className="border-0"
                        loading="lazy"
                        allowFullScreen
                    />
                </div>
            </section>

        </div>
    );
}