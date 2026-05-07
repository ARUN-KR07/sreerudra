import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import ConditionsGrid from "@/components/treatments/ConditionsGrid";
import RiskSection from "@/components/treatments/RiskSection";
import CausesSection from "@/components/treatments/CausesSection";
import SusceptibleSection from "@/components/treatments/SusceptibleSection";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";
import Cause2 from "@/components/treatments/Cause2";
import OurTreatments2 from "@/components/home/ourtreatments2";
import AyurvedicAspect from "@/components/treatments/AyurvedicAspect";

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
      <SusceptibleSection data={data} />
      <Cause2 data={data} />
      <AyurvedicAspect data={data} />
      <TreatmentClientWrapper data={data} />
      <OurTreatments2 />
      <ConsultationForm />
    </div>
  );
}
