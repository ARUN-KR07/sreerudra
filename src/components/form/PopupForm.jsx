"use client";

export default function PopupForm({ open, setOpen }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md">

            {/* POPUP */}
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
                <form className="space-y-4">

                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <input
                        type="text"
                        placeholder="Place"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
                    />

                    <textarea
                        placeholder="Message"
                        rows="3"
                        className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-900 transition"
                    >
                        Submit
                    </button>

                </form>
            </div>
        </div>
    );
}