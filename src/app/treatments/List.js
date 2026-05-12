import Image from "next/image";
import Link from "next/link";

export default function List() {
  const treatments = [
    { name: "Spinal Problems", slug: "spinal-problems" },
    { name: "Arthritis Treatment", slug: "arthritis-treatment" },
    { name: "Cancer Treatment", slug: "cancer-treatment" },
    { name: "Autism Treatment", slug: "autism-treatment" },
    { name: "Kidney Disorder", slug: "kidney-disorder" },
    { name: "Skin Complaints", slug: "skin-complaints" },
    { name: "Post Stroke Management", slug: "post-stroke-management" },
    { name: "Gynecological Issues", slug: "gynecological-issues" },
    { name: "Rectal Problems", slug: "rectal-problems" },
    { name: "Thyroid Treatment", slug: "thyroid-treatment" },
    { name: "Obesity and Overweight", slug: "obesity-overweight" },
    { name: "Cholesterol", slug: "cholesterol" },
    { name: "Varicose Vein", slug: "varicose-vein" },
    { name: "Diabetes", slug: "diabetes" },
    { name: "Primary Hypertension", slug: "primary-hypertension" },
    { name: "Lung Disorders", slug: "lung-disorders" },
    { name: "Liver Cirrhosis", slug: "liver-cirrhosis" },
    { name: "Mental Disorders", slug: "mental-disorders" },
    { name: "Sinusitis", slug: "sinusitis" },
    { name: "Constipation", slug: "constipation" },
    { name: "Cervical Spondylosis", slug: "cervical-spondylosis" },
    { name: "Osteoarthritis", slug: "osteoarthritis" },
    { name: "Knee Pain", slug: "knee-pain" },
    { name: "Insomnia", slug: "insomnia" },
    { name: "Ayurvedic Cosmetology", slug: "ayurvedic-cosmetology" },
    { name: "Back Pain", slug: "back-pain" },
    { name: "Post Natal Care", slug: "post-natal-care" },
    { name: "Panchakarma", slug: "panchakarma" },
    { name: "Rejuvenation", slug: "rejuvenation" },
    { name: "Fatty Liver", slug: "fatty-liver" },
    { name: "Parkinson’s", slug: "parkinsons" },
    { name: "Joint Pain", slug: "joint-pain" },
  ];

  return (
    <div className="w-full">

      {/* HERO */}
      <div className="relative w-full h-[220px] md:h-[400px]">
        <Image
          src="/images/treatment.webp"
          alt="Treatments"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="!text-white !text-6xl md:!text-7xl">
            Treatments
          </h1>
        </div>
      </div>

      {/* TILES */}
      <div className="bg-[#2F6B3B] py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {treatments.map((item, index) => (
            <Link
              key={index}
              href={`/treatments/${item.slug}`}
              className="group relative bg-[#F28C18] text-white text-center py-5 px-4 
      rounded-tl-[30px] rounded-br-[30px] rounded-tr-[5px] rounded-bl-[5px] 
      font-semibold text-lg shadow-md flex items-center justify-center min-h-[80px] 
      overflow-hidden transition-all duration-300 
      hover:-translate-y-2"
            >
              {/* Shine left-to-right on hover-in, snaps back instantly on hover-out */}
              <span
                className="absolute inset-0 
        -translate-x-full group-hover:translate-x-full 
        duration-0 group-hover:duration-1000 
        ease-in-out transition-transform
        bg-gradient-to-r from-transparent via-white/40 to-transparent"
              />

              <span className="relative z-10">
                {item.name}
              </span>
            </Link>
          ))}

        </div>
      </div>

    </div>
  );
}