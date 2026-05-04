"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

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
    <nav className="w-full bg-white sticky top-0 z-[9999] shadow-sm">

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
        <div className="hidden lg:flex items-center gap-5 xl:gap-8 font-Poppins">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              className="relative text-[16px] xl:text-[18px] 2xl:text-[20px] font-normal text-black hover:text-orange-500 transition group whitespace-nowrap"
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
            className="hidden lg:block bg-[#ED8916] text-[16px] xl:text-[18px] 2xl:text-[24px] text-white px-4 2xl:px-5 py-2 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px] rounded-bl-[4px] shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 hover:scale-[1.03] active:scale-95 font-Poppins whitespace-nowrap">

            Contact Us
          </Link>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-4 -mr-2 text-3xl text-black relative z-[10000]"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white fixed top-[102px] left-0 w-full px-4 pb-6 shadow-lg z-[9999] border-t border-gray-100 animate-in fade-in slide-in-from-top-5 duration-300">
          <div className="flex flex-col space-y-2 mt-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                onClick={() => setOpen(false)}
                className="block py-3 px-4 text-black font-medium hover:text-orange-500 hover:bg-gray-50 rounded-lg transition-colors"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block mt-4 text-center bg-[#ED8916] text-white px-5 py-3 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px] rounded-bl-[4px] font-semibold shadow-md active:scale-95 transition-transform"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}