"use client";
import { useState } from "react";

export default function PopupForm({ open, setOpen }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        place: "",
        message: ""
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("http://127.0.0.1:8000/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                alert("Submitted successfully ✅");
                setOpen(false);

                // reset form
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    place: "",
                    message: ""
                });
            } else {
                alert("Failed to submit ❌");
            }
        } catch (error) {
            console.error(error);
            alert("Server error ❌");
        }

        setLoading(false);
    };

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/40 backdrop-blur-md">

            <div className="bg-white w-full max-w-md rounded-2xl p-6 relative shadow-lg">

                {/* CLOSE */}
                <button
                    onClick={() => setOpen(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-semibold mb-4 text-black text-center">
                    Book A Consultation
                </h2>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-4">

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
                        required
                    />

                    <input
                        type="text"
                        name="place"
                        value={formData.place}
                        onChange={handleChange}
                        placeholder="Place"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message"
                        rows="3"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-green-700 text-white py-3 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px] rounded-bl-[4px] hover:bg-green-900 transition font-bold"
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>

                </form>
            </div>
        </div>
    );
}