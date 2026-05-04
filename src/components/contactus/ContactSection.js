"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        location: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setSuccess("");

        try {
            const res = await fetch("http://127.0.0.1:8000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    form_type: "basic",
                    name: `${form.first_name || ""} ${form.last_name || ""}`.trim(),
                    email: form.email,
                    phone: form.phone,
                    place: form.location,
                    message: form.message,
                    extra_data: {
                        location: form.location,
                    },
                }),
            });

            if (res.ok) {
                setSuccess("Message sent successfully!");
                setForm({
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    location: "",
                    message: "",
                });
            } else {
                setSuccess("Failed to send message");
            }
        } catch (err) {
            console.error(err);
            setSuccess("Something went wrong");
        }

        setLoading(false);
    };

    return (
        <div className="w-full">

            {/* HERO */}
            <section className="relative w-full h-[320px] md:h-[420px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/treatment.webp')" }}
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
            <section className="w-full py-12 px-4 md:px-10 page-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">

                    {/* LEFT */}
                    <div className="space-y-5">
                        <h2 className="text-3xl font-semibold text-gray-800">
                            Get in Touch
                        </h2>

                        {/* PHONE */}
                        <div className="bg-[#ED8916] text-white p-6 rounded-2xl flex items-center gap-4">
                            <div className="bg-white/20 p-4 rounded-full">
                                <Phone size={22} />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Phone</h3>
                                <p className="font-bold text-[20px]">Alappuzha</p>
                                <p>+91 477 2266778</p>
                                <p>+91 98479 48218</p>

                                <p className="font-bold text-[20px] mt-2">Trivandrum</p>
                                <p>+91 471 2590045</p>
                                <p>+91 95677 48218</p>
                            </div>
                        </div>

                        {/* EMAIL */}
                        <div className="bg-[#ED8916] text-white p-6 rounded-2xl flex items-center gap-4">
                            <div className="bg-white/20 p-4 rounded-full">
                                <Mail size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-[20px]">Email</h3>
                                <p>info@sreerudraayurveda.com</p>
                            </div>
                        </div>

                        {/* ADDRESS */}
                        <div className="bg-[#ED8916] text-white p-6 rounded-2xl flex items-center gap-4">
                            <div className="bg-white/20 p-4 rounded-full">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h3 className="font-bold text-[22px]">Address</h3>

                                <p className="font-bold text-[18px]">Alappuzha</p>
                                <p>
                                    Sreerudra Ayurveda Multi-Speciality Hospital,
                                    Kaithavana, Alappuzha – 688003
                                </p>

                                <p className="font-bold text-[18px] mt-2">Trivandrum</p>
                                <p>
                                    Kallampally, Sreekariyam,
                                    Trivandrum – 695017
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT FORM */}
                    <div className="bg-green-700 p-6 md:p-8 rounded-2xl">
                        <h2 className="text-2xl font-semibold text-white mb-5">
                            Send a Message
                        </h2>

                        <form className="space-y-4" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <input name="first_name" value={form.first_name} onChange={handleChange} placeholder="First Name" className="p-3 rounded-md w-full bg-white" />
                                <input name="last_name" value={form.last_name} onChange={handleChange} placeholder="Last Name" className="p-3 rounded-md w-full bg-white" />
                            </div>

                            <input name="email" value={form.email} onChange={handleChange} placeholder="Email" className="p-3 rounded-md w-full bg-white" />
                            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="p-3 rounded-md w-full bg-white" />
                            <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="p-3 rounded-md w-full bg-white" />

                            <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Message" className="p-3 rounded-md w-full bg-white" />

                            <button type="submit" disabled={loading} className="bg-white text-green-700 px-6 py-2 rounded-full">
                                {loading ? "Sending..." : "Send"}
                            </button>

                            {success && <p className="text-white">{success}</p>}
                        </form>
                    </div>

                </div>
            </section>

            {/* MAP */}
            <section className="w-full">
                <div className="w-full h-[600px]">
                    <iframe
                        src="https://www.google.com/maps?cid=8474395949401189746&output=embed"
                        width="100%"
                        height="100%"
                        className="border-0"
                        loading="lazy"
                    />
                </div>
            </section>

        </div>
    );
}