import Link from "next/link";

export default function OutcomeSection({ title, description, cta }) {
  if (!description) return null;

  return (
    <main className="page-spacing">
      <section className="page-container text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          {title}
        </h2>
        <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto mb-10 leading-relaxed">
          {description}
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#ED8916] text-white px-10 py-4 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px] font-bold
            transition-all duration-300 hover:scale-105 hover:shadow-lg
            hover:shadow-orange-500/40 text-[18px] md:text-[22px] shadow-md"
        >
          {cta || "Book an appointment"}
        </Link>
      </section>
    </main>
  );
}
