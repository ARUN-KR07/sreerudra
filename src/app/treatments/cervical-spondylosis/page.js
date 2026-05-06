import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import ConditionsGrid from "@/components/treatments/ConditionsGrid";
import RiskSection from "@/components/treatments/RiskSection";
import CausesSection from "@/components/treatments/CausesSection";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";

export async function generateMetadata() {
  const data = slugData["cervical-spondylosis"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function CervicalSpondylosisPage() {
  const data = slugData["cervical-spondylosis"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />
      <ConditionsGrid data={data} />
      <RiskSection data={data} />
      <CausesSection data={data} />
      <TreatmentClientWrapper data={data} />
      <RelatedTreatments data={data} />
      <ConsultationForm />
    </div>
  );
}
