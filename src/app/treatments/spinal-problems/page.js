import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import Grids from "@/components/treatments/Grids";
import RiskSection from "@/components/treatments/RiskSection";
import CausesSection from "@/components/treatments/CausesSection";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";
import InfoGrids from "@/components/treatments/InfoGrids";
import FaqWrapper from "@/components/treatments/faqwrapper";
import OurTreatments2 from "@/components/home/ourtreatments2";  

export async function generateMetadata() {
  const data = slugData["spinal-problems"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function SpinalProblemsPage() {
  const data = slugData["spinal-problems"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />
      <Grids data={data} />
      <RiskSection data={data} />
      <CausesSection data={data} />
      <TreatmentClientWrapper data={data} />
      <InfoGrids data={data} />
      <RelatedTreatments data={data} />
      <FaqWrapper data={data} />
      <OurTreatments2 />
      <ConsultationForm />
    </div>
  );
}
