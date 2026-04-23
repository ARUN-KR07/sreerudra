"use client";

import Slider from "react-slick";

export default function TestimonialSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const testimonials = [
    {
      text: "Sreerudra ayurveda multispeciality hospital is one of a kind. It has a fabulous bunch of doctors who are very up to date, informative, intelligent and very aware of modern technological applications of Ayurveda. The hospital infrastructure was modern and hygienic. The staff were very helpful, kind, generous and supportive. I had a wonderful experience and am happy with the hospital management. Having experienced a lot of treatments from different ayurveda hospitals... I must say Sreerudra is one of the best in Kerala.",
      name: "Karthikeyan Krishnan",
      role: "Happy client",
    },
    {
      text: "My husband jibin was admitted in sreerudra hospital for disc prolapse, after the treatment he is perfectly alright. We thank Dr Vishnu namboodiri and team for the same. The treatment modality and the care is appreciable. We got the result what doctor told before beginning the treatment We express our sincere gratitude and thanks to each and every staff of sreerudra.",
      name: "Shela Tressa Joseph",
      role: "Happy client",
    },
  ];

  return (
    <section className="w-full  py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">

        {/* QUOTE ICON */}
        <div className="text-[150px] text-[#9fb4aa] leading-none ">
          “
        </div>

        {/* SLIDER */}
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index}>
              <p className="text-gray-900 text-lg leading-relaxed px-4 md:px-10">
                {item.text}
              </p>

              <h3 className="mt-8 text-[40px] font-semibold text-black">
                {item.name}
              </h3>

              <p className="text-black">{item.role}</p>
            </div>
          ))}
        </Slider>

      </div>
    </section>
  );
}