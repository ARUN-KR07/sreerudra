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
import Seperate2box from "@/components/treatments/Separate2box";
import TreatmentInfoSection from "@/components/treatments/TreatmentInfoSection";
import White2box from "@/components/treatments/white2box";

export async function generateMetadata() {
  const data = slugData["osteoarthritis"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function OsteoarthritisPage() {
  const data = slugData["osteoarthritis"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />
      <RiskSection data={data} />
      <Seperate2box data={data}/>

        {data.headparabut1 && (
        <TreatmentInfoSection
            title={data.headparabut1.heading}
            subtitle={data.headparabut1.subtitle}
            descriptions={Object.keys(data.headparabut1).filter(key => key.startsWith('description')).map(key => data.headparabut1[key]).filter(Boolean)}
        />
        )}

        {data.headparabut2 && (
        <TreatmentInfoSection
            title={data.headparabut2.heading}
            grid={data.headparabut2.grid}
            descriptions={Object.keys(data.headparabut2).filter(key => key.startsWith('description')).map(key => data.headparabut2[key]).filter(Boolean)}
        />
        )}


      <White2box data={data} />

        {data.headparabut4 && (
        <TreatmentInfoSection
            title={data.headparabut4.heading}
            grid={data.headparabut4.grid}
            descriptions={Object.keys(data.headparabut2).filter(key => key.startsWith('description')).map(key => data.headparabut4[key]).filter(Boolean)}
        />
        )}


      <FaqWrapper data={data} />
      <OurTreatments2 />
      <ConsultationForm />
    </div>
  );
}
