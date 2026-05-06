import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";

export async function generateMetadata() {
  const data = slugData["autism-treatment"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function AutismTreatmentPage() {
  const data = slugData["autism-treatment"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />
      <TreatmentClientWrapper data={data} />
      <RelatedTreatments data={data} />
      <ConsultationForm />
    </div>
  );
}
