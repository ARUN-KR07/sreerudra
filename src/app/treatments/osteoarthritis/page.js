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
import Green6box from "@/components/treatments/Green6box";
import Greentabs from "@/components/treatments/Greentabs";
import White2boxnormal from "@/components/treatments/White2boxnormal";

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

        {data.headparabut5 && (
        <TreatmentInfoSection
            title={data.headparabut5.heading}
            descriptions={Object.keys(data.headparabut5).filter(key => key.startsWith('description')).map(key => data.headparabut5[key]).filter(Boolean)}
        />
        )}

        {data.seperate2box2 && (
         <Seperate2box data={data} sectionKey="seperate2box2"

         />
        )}

        {data.headparabut6 && (
        <TreatmentInfoSection
            title={data.headparabut6.heading}
            lists={Object.keys(data.headparabut6).filter((key) => key.startsWith("list")).map((key) => data.headparabut6[key]).filter(Boolean)}
        />
        )}

      <Green6box data={data} />

        {data.headparabut7 && (
        <TreatmentInfoSection
            title={data.headparabut7.heading}
            grid={data.headparabut7.grid}
            descriptions={Object.keys(data.headparabut7).filter(key => key.startsWith('description')).map(key => data.headparabut7[key]).filter(Boolean)}
        />
        )}

        {data.headparabut8 && (
        <TreatmentInfoSection
            title={data.headparabut8.heading}
            descriptions={Object.keys(data.headparabut8).filter(key => key.startsWith('description')).map(key => data.headparabut8[key]).filter(Boolean)}
        />
        )}

      <Greentabs data={data} />

      <White2boxnormal data={data} />

        {data.headparabut9 && (
        <TreatmentInfoSection
            title={data.headparabut9.heading}
            descriptions={Object.keys(data.headparabut9).filter(key => key.startsWith('description')).map(key => data.headparabut9[key]).filter(Boolean)}
        />
        )}
        


      <FaqWrapper data={data} />
      <OurTreatments2 />
      <ConsultationForm />
    </div>
  );
}
