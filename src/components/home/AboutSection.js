"use client";

export default function AboutSection() {
  return (
    <main className="page-spacing">
      <section className="page-container">
        <div className="mx-auto text-center">

          {/* Small Heading */}
          <p style={{ color: "#004e22 ", fontWeight: "800", marginBottom: "12px" }}>
            About Sreerudra Ayurveda
          </p>

          {/* Main Heading */}
          <h2 className=" mb-4">
            Rooted in Tradition, Guided by Expertise
          </h2>

          {/* Highlight Heading */}
          <h3 className="text-[#004e22] text-[36px] font-serif font-semibold mb-6">
            Experience Authentic Ayurvedic Care
          </h3>

          {/* Paragraph */}
          <p className="text-gray-600 max-w-5xl leading-relaxed text-[20px]  mx-auto mb-8">
            Sreerudra Multi Speciality Hospital and Research Centre, established in
            2002 by Dr. K S Vishnu Nampoothiry of the renowned Kudalmanna family,
            has evolved into a premier destination for genuine Ayurvedic
            treatments. Our dedicated team, led by seasoned physicians, offers
            holistic healthcare grounded in ancient wisdom. At Sreerudra, we
            seamlessly blend tradition with modern expertise to ensure the
            well-being of our patients through natural, personalized care.
          </p>

          {/* Button */}
          <button className="border border-gray-900 px-6 py-3 rounded-tl-[20px] rounded-br-[20px]  hover:bg-gray-100 transition">
            Discover More
          </button>
        </div>
      </section>
    </main>
  );
}