"use client";

import React, { useState } from "react";
import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PopupForm from "@/components/form/PopupForm";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-[#008439] transition-all hover:bg-[#008439] hover:text-white group"
    >
      <ChevronRight size={24} />
    </button>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-[#008439] transition-all hover:bg-[#008439] hover:text-white group"
    >
      <ChevronLeft size={24} />
    </button>
  );
}

export default function Slider({ data }) {
  const [open, setOpen] = useState(false);

  if (!data?.therapies) return null;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true, // Enabled arrows for mobile
        },
      },
    ],
  };

  return (
    <main className="page-spacing py-10 md:py-16">
      <section className="page-container px-4 md:px-6 lg:px-10">
        {/* Main Heading */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-[22px] md:text-[42px] font-bold text-black font-serif leading-tight max-w-4xl mx-auto px-2">
            {data.therapies.heading}
          </h2>
        </div>

        {/* Slider Container */}
        <div className="max-w-[1400px] mx-auto therapies-slider relative px-8 md:px-0">
          <SliderSlick {...settings}>
            {data.therapies.items.map((item, index) => (
              <div key={index} className="px-2 pb-10 h-full">
                <div className="bg-[#E6F8EF] rounded-[24px] md:rounded-[32px] p-5 md:p-10 h-full min-h-[420px] md:min-h-[550px] flex flex-col items-center text-center shadow-sm relative overflow-hidden">

                  {/* Title */}
                  <h3 className="text-[16px] md:text-[24px] font-bold text-black mb-3 md:mb-4 font-serif">
                    {item.title}
                  </h3>

                  {/* Green Divider */}
                  <div className="w-full h-[1px] bg-[#008439] mb-6 md:mb-8 opacity-50" />

                  {/* Description */}
                  <p className="text-gray-700 text-[12px] md:text-[18px] leading-snug mb-8 flex-grow font-normal px-1">
                    {item.description}
                  </p>

                  {/* CTA Button */}
                  <div className="w-full pt-4 mt-auto">
                    <button
                      onClick={() => setOpen(true)}
                      className="w-full bg-[#ED8916] text-white py-3 md:py-4 px-4 md:px-6 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px] rounded-bl-[4px] font-bold text-[13px] md:text-[18px] transition-all duration-300 hover:scale-[1.02] hover:shadow-lg shadow-md"
                    >
                      Connect with Our Wellness Team
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </SliderSlick>
        </div>
      </section>

      {/* Popup Form */}
      <PopupForm open={open} setOpen={setOpen} />

      {/* Custom Styles for Slick Dots */}
      <style jsx global>{`
        .therapies-slider .slick-dots {
          bottom: -40px;
        }
        .therapies-slider .slick-dots li button:before {
          font-size: 12px;
          color: #008439;
          opacity: 0.3;
        }
        .therapies-slider .slick-dots li.slick-active button:before {
          color: #008439;
          opacity: 1;
        }
        .therapies-slider .slick-track {
          display: flex !important;
        }
        .therapies-slider .slick-slide {
          height: inherit !important;
        }
        .therapies-slider .slick-slide > div {
          height: 100%;
        }
      `}</style>
    </main>
  );
}
