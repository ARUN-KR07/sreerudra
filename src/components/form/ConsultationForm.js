"use client";

import { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast"; // 👈 ADD

export default function ConsultationForm() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    place: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        body: JSON.stringify({
          form_type: "consultation",
          name: `${form.first_name || ""} ${form.last_name || ""}`.trim(),
          email: form.email || null,
          phone: form.phone || null,
          message: form.message || null,
          place: form.place || null,
          extra_data: {
            source: "consultation_form",
          },
        }),
      });

      if (res.ok) {
        toast.success("Consultation request sent!");

        setForm({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          place: "",
          message: "",
        });
      } else {
        toast.error("Failed to send request");
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong ⚠️");
    }

    setLoading(false);
  };

  return (
    <main className="page-spacing">
      <section className="page-container bg-white text-black px-4 md:px-32 font-[Karla]">

        <div className="text-center mb-10">
          <h2>Get in Touch</h2>
          <h3 className="text-[#6D6D6D] text-[20px]">
            Get A Free Consultation now
          </h3>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">

          {/* Left Image */}
          <div className="w-full h-full">
            <div className="h-full rounded-2xl overflow-hidden border border-green-500">
              <Image
                src="/images/contact.png"
                alt="Consultation"
                width={600}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="w-full flex">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 w-full h-full flex flex-col justify-between"
            >

              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    name="first_name"
                    value={form.first_name}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="border border-[#004e22] px-4 py-3 rounded-md"
                  />
                  <input
                    name="last_name"
                    value={form.last_name}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="border border-[#004e22] px-4 py-3 rounded-md"
                  />
                </div>

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border border-[#004e22] px-4 py-3 rounded-md"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full border border-[#004e22] px-4 py-3 rounded-md"
                />

                <input
                  name="place"
                  value={form.place}
                  onChange={handleChange}
                  placeholder="Your Location / Place"
                  className="w-full border border-[#004e22] px-4 py-3 rounded-md"
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Message"
                  className="w-full border border-[#004e22] px-4 py-3 rounded-md"
                />
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#ED8916] text-white px-10 py-4 rounded-tl-[30px] rounded-br-[30px]"
                >
                  {loading ? "Sending..." : "Get started"}
                </button>
              </div>

            </form>
          </div>

        </div>
      </section>
    </main>
  );
}