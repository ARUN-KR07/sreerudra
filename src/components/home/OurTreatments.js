"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Link from "next/link";
import Slider from "react-slick";
import { slugData } from "@/lib/treatmentsData";

export default function OurTreatments() {
  const items = Object.entries(slugData || {}).filter(
    ([_, item]) => item?.hero
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1, centerMode: false },
      },
    ],
  };

  return (
    <div
      style={{ backgroundColor: "#055226" }}
      className="py-16 w-full min-h-screen"
    >
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-white text-[16px]">Our Treatments</p>

        <h2 className="text-white font-bold mt-4 text-3xl md:text-4xl lg:text-[50px] leading-tight">
          The Treatments Where We Excel the Most
        </h2>

        <p className="mt-6 mb-10 text-white text-[20px] mx-auto">
          In addition to common disease and general treatments, we specialize in treating
          and curing a wide range of conditions including cancer, spine-related complaints,
          knee problems, rheumatic complaints, Alzheimer’s disease, Parkinsonism, obesity,
          muscular dystrophy, autism spectrum disorders, and skin diseases.
        </p>
      </div>

      {/* SLIDER */}
      <div className="max-w-7xl mx-auto px-6 mt-14">
        <Slider {...settings}>
          {items.map(([slug, item]) => (
            <div key={slug} className="px-5">
              <div className="flex flex-col items-left">
                <Link
                  href={`/treatments/${slug}`}
                  className="w-full block rounded-3xl overflow-hidden shadow-2xl bg-white transform hover:scale-105 transition duration-300"
                >
                  {/* BIGGER CARD */}
                  <div className="h-[300px] sm:h-[420px] w-full">
                    <img
                      src={item.hero.image}
                      alt={item.hero.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>

                <h3 className="mt-5 text-white text-2xl font-semibold text-left">
                  {item.hero.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* CUSTOM ARROWS */}
      <style jsx global>{`
        .slick-prev,
        .slick-next {
          width: 60px !important;
          height: 60px !important;
          z-index: 40;
        }

        .slick-prev:before,
        .slick-next:before {
          font-size: 50px !important;
          color: white !important;
          opacity: 1;
        }

        .slick-prev {
          left: -40px !important;
        }

        .slick-next {
          right: -40px !important;
        }

        /* Hide arrows on mobile to prevent horizontal overflow */
        @media (max-width: 767px) {
          .slick-prev,
          .slick-next {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}