import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import ConditionsGrid from "@/components/treatments/Grids";
import RiskSection from "@/components/treatments/RiskSection";
import CausesSection from "@/components/treatments/CausesSection";
import Greentabs from "@/components/treatments/Greentabs";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";
import Cause2 from "@/components/treatments/Separate2box";
import OurTreatments2 from "@/components/home/ourtreatments2";
import AyurvedicAspect from "@/components/treatments/AyurvedicAspect";
import TabsOrange from "@/components/treatments/TabsOrange";
import Panchakarma from "@/components/treatments/Panchakarma";
import YogaDiet from "@/components/treatments/YogaDiet";
import FaqWrapper from "@/components/treatments/faqwrapper";

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
      <Greentabs data={data} />
      <Cause2 data={data} />
      <AyurvedicAspect data={data} />
      <TreatmentClientWrapper data={data} />
      <TabsOrange data={data} />
      <Panchakarma data={data} />
      <YogaDiet data={data} />
      <FaqWrapper data={data} />
      <OurTreatments2 />
      <ConsultationForm />
    </div>
  );
}
