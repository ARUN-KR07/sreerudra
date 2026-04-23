"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Treatments", path: "/treatments" },
    { name: "Why Us", path: "/why-us" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <nav className="w-auto bg-white sticky top-0 z-50 overflow-x-hidden">

      <div className="max-w-[1400px] mx-auto px-4 md:px-10 flex items-center justify-between">

        {/* 🌿 Logos */}
        <div className="flex items-center h-[102px] shrink-0">
          <img
            src="/images/logo2.png"
            className="w-[140px] lg:w-[166px] h-[102px] object-contain"
            alt="Logo 2"
          />
          <img
            src="/images/logo1.png"
            className="w-[80px] lg:w-[102px] h-[102px] object-contain -ml-6 lg:-ml-10"
            alt="Logo 1"
          />
        </div>

        {/* 📌 Desktop Menu */}
        <div className="hidden xl:flex items-center gap-6 2xl:gap-10 font-Poppins">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="relative text-[18px] 2xl:text-[20px] font-normal text-black hover:text-orange-500 transition group whitespace-nowrap"
            >
              {item.name}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* 🔘 Right Section */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="hidden xl:block bg-[#ED8916] text-[18px] 2xl:text-[24px] text-white px-4 2xl:px-5  py-2 rounded-lg shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] active:scale-95 font-Poppins whitespace-nowrap">

            Contact Us
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="xl:hidden bg-white px-4 pb-4 shadow-md">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => setOpen(false)}
              className="block py-2 text-black hover:text-green-600"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/contact"
            className="block mt-3 text-center bg-[#ED8916] text-white px-5 py-2 rounded-lg"
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
}