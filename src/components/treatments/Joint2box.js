import { Leaf } from "lucide-react";

export default function Joint2box({ data }) {
  if (
    !data?.Joint2box?.leftItems?.length &&
    !data?.Joint2box?.rightItems?.length
  )
    return null;

  return (
    <section className="page-container page-spacing">
      {/* Main Box */}
      <div className="bg-[#E6FAEE] rounded-[30px] px-5 sm:px-8 md:px-14 lg:px-24 py-10 md:py-14 max-w-[1800px] mx-auto">

        {/* Heading */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2">

          {/* Desktop Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-[calc(100%+45px)] bg-[#008439]" />

          {/* Left Heading */}
          <div className="pb-5 text-center lg:text-left">
            <h2 className="text-[24px] sm:text-[30px] md:text-[42px] font-bold text-black leading-tight">
              Haircare
            </h2>
          </div>

          {/* Right Heading */}
          <div className="pt-5 lg:pt-0 pb-5 lg:pl-6 text-center lg:text-left border-t lg:border-t-0 border-[#008439]">
            <h2 className="text-[24px] sm:text-[30px] md:text-[42px] font-bold text-black leading-tight">
              Ayurvedic Cosmetic
            </h2>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8 md:mb-12 hidden lg:block">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-[#008439]" />

          <div className="grid grid-cols-2">
            <div className="h-[1px] bg-[#008439]" />
            <div className="h-[1px] bg-[#008439]" />
          </div>
        </div>

        {/* Content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">

          {/* Desktop Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-[#008439]" />

          {/* Left Side */}
          <div className="space-y-6 md:space-y-8 lg:pr-10 max-w-[650px] w-full mx-auto">
            {data?.Joint2box?.leftItems?.map((item, index) => (
              <div key={index} className="flex items-start gap-4">

                {/* Icon */}
                <div className="pt-1 shrink-0">
                  <Leaf className="w-4 h-4 md:w-5 md:h-5 text-[#008439]" />
                </div>

                {/* Text */}
                <p className="text-[14px] sm:text-[15px] md:text-[18px] leading-[1.8] font-medium text-black">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Right Side */}
          <div className="space-y-6 md:space-y-8 lg:pl-10 max-w-[650px] w-full mx-auto border-t lg:border-t-0 pt-8 lg:pt-0 border-[#008439]">
            {data?.Joint2box?.rightItems?.map((item, index) => (
              <div key={index} className="flex items-start gap-4">

                {/* Icon */}
                <div className="pt-1 shrink-0">
                  <Leaf className="w-4 h-4 md:w-5 md:h-5 text-[#008439]" />
                </div>

                {/* Text */}
                <p className="text-[14px] sm:text-[15px] md:text-[18px] leading-[1.8] font-medium text-black">
                  {item}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}