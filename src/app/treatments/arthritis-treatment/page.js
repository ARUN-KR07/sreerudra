import { slugData } from "@/lib/treatmentsData";

// SERVER COMPONENTS (Static Content)
import HeroSection from "@/components/treatments/HeroSection";
import RiskSection from "@/components/treatments/RiskSection";
import CausesSection from "@/components/treatments/CausesSection";
import InfoGrids from "@/components/treatments/InfoGrids";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";

// CLIENT COMPONENT (Interactive Content)
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";
import OurTreatments2 from "@/components/home/ourtreatments2";
import FaqWrapper from "@/components/treatments/faqwrapper";
import TreatmentInfoSection from "@/components/treatments/TreatmentInfoSection";
import Symptoms3box from "@/components/treatments/Symptoms3box";
import Joint2box from "@/components/treatments/Joint2box";
import TabsOrange from "@/components/treatments/TabsOrange";
import Joint4box from "@/components/treatments/Joint4box";

export async function generateMetadata() {
  const data = slugData["arthritis-treatment"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function ArthritisPage() {
  const data = slugData["arthritis-treatment"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      {/* 1. Hero (Server Rendered) */}
      <HeroSection data={data} />

      {data.headparabut1 && (
        <TreatmentInfoSection
          title={data.headparabut1.heading}
          descriptions={Object.keys(data.headparabut1).filter(key => key.startsWith('description')).map(key => data.headparabut1[key]).filter(Boolean)}
        />
      )}

    <Symptoms3box data={data}/>


      {data.headparabut2 && (
        <TreatmentInfoSection
          title={data.headparabut2.heading}
          descriptions={Object.keys(data.headparabut2).filter(key => key.startsWith('description')).map(key => data.headparabut2[key]).filter(Boolean)}
        />
      )}

      {data.headparabut3 && (
        <TreatmentInfoSection
          title={data.headparabut3.heading}
          descriptions={Object.keys(data.headparabut3).filter(key => key.startsWith('description')).map(key => data.headparabut3[key]).filter(Boolean)}
        />
      )}

      <Joint2box data={data}/>

      <TabsOrange data={data}/>
      <Joint4box data={data}/>
      <FaqWrapper data={data} />
      <OurTreatments2 />
      <ConsultationForm />
    </div>
  );
}
