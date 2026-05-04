"use client";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";



export default function Footer() {
  return (
    <footer className="relative bg-white text-[#004e22] pt-10 pb-20 px-4 sm:px-6 md:px-10 lg:px-16 font-[Karla]">

      {/* GRID */}
      <div
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-[1.2fr_1.5fr_1.2fr_0.9fr] gap-8 md:gap-10 border-b border-[#004e22]/30 pb-10 md:pb-12"
      >

        {/* COLUMN 1 */}
        <div className="space-y-4 lg:border-r border-[#004e22]/30 flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* LOGOS */}
          <div className="flex items-center justify-center lg:justify-start gap-2">
            <img
              src="/images/logo3.png"
              alt="logo"
              className="w-[130px] sm:w-[160px] lg:w-[160px] h-auto object-contain"
            />
            <img
              src="/images/logo1.png"
              alt="logo"
              className="w-[70px] sm:w-[80px] lg:w-[103px] h-auto object-contain"
            />
          </div>

          {/* DESCRIPTION */}
          <p className="text-[14px] sm:text-[16px] lg:text-[20px] leading-6 sm:leading-7 max-w-xs sm:max-w-sm">
            There is nothing ayurveda couldn’t offer you. From minor disease
            treatments to entire body rejuvenation, ayurveda has everything
            in it to keep your wellbeing.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 pt-2 flex-wrap justify-center lg:justify-start">
            {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0a7a33] flex items-center justify-center text-white text-sm sm:text-lg cursor-pointer hover:bg-black transition"
              >
                <Icon />
              </div>
            ))}
          </div>
        </div>

        {/* COLUMN 2 */}
        <div className="space-y-4 lg:border-r border-[#004e22]/30 lg:px-4 text-center lg:text-left">

          <h2 className="text-[20px] sm:text-[22px] lg:text-[30px] font-semibold text-black">
            Contact us
          </h2>

          <div className="space-y-2 text-[14px] sm:text-[16px] lg:text-[24px] leading-6 sm:leading-7 text-black">
            <p className="font-bold">Alappuzha</p>
            <p>Kaithavana,</p>
            <p>Alappuzha – 688003</p>
            <p className="underline mt-1 hover:text-[#ED8916] cursor-pointer">+91 477 2266778</p>
            <p className="underline hover:text-[#ED8916] cursor-pointer">+91 98479 48218</p>
          </div>

          <div className="space-y-2 text-[14px] sm:text-[16px] lg:text-[24px] leading-6 sm:leading-7 text-black">
            <p className="font-bold">Trivandrum</p>
            <p>Kallampally, Sreekariyam,</p>
            <p>Trivandrum – 695017</p>
            <p className="underline mt-1 hover:text-[#ED8916] cursor-pointer">+91 471 2590045</p>
            <p className="underline hover:text-[#ED8916] cursor-pointer">+91 95677 48218</p>
          </div>

          {/* EMAIL */}
          <p className="underline text-[14px] sm:text-[16px] lg:text-[22px] pt-2 break-all">
            info@sreerudraayurveda.com
          </p>
        </div>

        {/* COLUMN 3 */}
        <div className="space-y-4 lg:border-r border-[#004e22]/30 lg:px-4 text-center lg:text-left">

          <h2 className="text-[20px] sm:text-[22px] lg:text-[30px] font-semibold text-black">
            Quick Links
          </h2>

          <div className="flex flex-col gap-2 text-[16px] sm:text-[18px] lg:text-[20px] font-[poppins]">

            <Link href="/panchakarma" className="text-black transition-all duration-300 hover:text-[#ED8916] hover:drop-shadow-[0_0_8px_rgba(237,137,22,0.1)]">
              <p>Panchakarma</p>
            </Link>

            <Link href="/testimonials" className="text-black transition-all duration-300 hover:text-[#ED8916] hover:drop-shadow-[0_0_8px_rgba(237,137,22,0.1)]">
              <p>Testimonials</p>
            </Link>

            <Link href="/gallery" className="text-black transition-all duration-300 hover:text-[#ED8916] hover:drop-shadow-[0_0_8px_rgba(237,137,22,0.1)]">
              <p>Gallery</p>
            </Link>

            <Link href="/blog" className="text-black transition-all duration-300 hover:text-[#ED8916] hover:drop-shadow-[0_0_8px_rgba(237,137,22,0.1)]">
              <p>Blogs</p>
            </Link>

            <Link href="/faq" className="text-black transition-all duration-300 hover:text-[#ED8916] hover:drop-shadow-[0_0_8px_rgba(237,137,22,0.1)]">
              <p>FAQs</p>
            </Link>

            <Link href="/terms-conditions" className="text-black transition-all duration-300 hover:text-[#ED8916] hover:drop-shadow-[0_0_8px_rgba(237,137,22,0.1)]">
              <p>Terms & Conditions</p>
            </Link>

            <Link href="/return-refund-policy" className="text-black transition-all duration-300 hover:text-[#ED8916] hover:drop-shadow-[0_0_8px_rgba(237,137,22,0.1)]">
              <p>Return & Refund Policy</p>
            </Link>

            <Link href="/privacy-policy" className="text-black transition-all duration-300 hover:text-[#ED8916] hover:drop-shadow-[0_0_8px_rgba(237,137,22,0.1)]">
              <p>Privacy Policy</p>
            </Link>
          </div>
        </div>


        {/* COLUMN 4 */}
        <div className="space-y-4 lg:px-4 text-center lg:text-left">

          <h2 className="text-[20px] sm:text-[22px] lg:text-[30px] font-semibold text-black">
            Gallery
          </h2>

          <div className="grid grid-cols-3 gap-2 max-w-[240px] mx-auto lg:mx-0">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square relative rounded-md overflow-hidden hover:scale-110 transition duration-300">
                <Image
                  src={`/images/cause${i}.png`}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-[#004e22]/20 py-4 text-center text-[12px] sm:text-[14px] text-[#004e22]/60">
        © 2024 Sreerudra Ayurveda. All rights reserved.
      </div>

    </footer>
  );
}