import { slugData } from "@/lib/treatmentsData";

// SERVER COMPONENTS
import HeroSection from "@/components/treatments/HeroSection";
import ConsultationForm from "@/components/form/ConsultationForm";
import DiagnosisSection from "@/components/treatments/DiagnosisSection";

// CLIENT COMPONENT WRAPPER
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";
import FaqWrapper from "@/components/treatments/faqwrapper";
import OurTreatments2 from "@/components/home/ourtreatments2";
import TreatmentInfoSection from "@/components/treatments/TreatmentInfoSection";
import AyurvedicTreatmentProtocol from "@/components/treatments/AyurvedicTreatmentProtocol";

export async function generateMetadata() {
  const data = slugData["fatty-liver"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function fattyliverPage() {
  const data = slugData["fatty-liver"]

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />

        {data.headparabut1 && (
                <TreatmentInfoSection
                    title={data.headparabut1.heading}
                    descriptions={Object.keys(data.headparabut1).filter(key => key.startsWith('description2')).map(key => data.headparabut1[key]).filter(Boolean)}
                    gridsgreen={data.headparabut1.gridsgreen}
                    descriptions2={Object.keys(data.headparabut1).filter(key => key.startsWith('description3')).map(key => data.headparabut1[key]).filter(Boolean)}
                     
                />
        )}

        {data.headparabut2 && (
                <TreatmentInfoSection
                    title={data.headparabut2.heading}
                    descriptions={Object.keys(data.headparabut2).filter(key => key.startsWith('description2')).map(key => data.headparabut2[key]).filter(Boolean)}
                    box2={data.headparabut2.box2}
                    descriptions2={Object.keys(data.headparabut2).filter(key => key.startsWith('description3')).map(key => data.headparabut2[key]).filter(Boolean)}
                     
                />
        )}

        {data.headparabut4 && (
                <TreatmentInfoSection
                    title={data.headparabut4.heading}
                    descriptions={Object.keys(data.headparabut4).filter(key => key.startsWith('description2')).map(key => data.headparabut4[key]).filter(Boolean)}
                    box2={data.headparabut4.box2}
                    descriptions2={Object.keys(data.headparabut4).filter(key => key.startsWith('description3')).map(key => data.headparabut4[key]).filter(Boolean)}
                     
                />
        )}

        {data.headparabut3 && (
                <TreatmentInfoSection
                    title={data.headparabut3.heading}
                    descriptions={Object.keys(data.headparabut3).filter(key => key.startsWith('description2')).map(key => data.headparabut3[key]).filter(Boolean)}
                    grid={data.headparabut3.grid}
                    descriptions2={Object.keys(data.headparabut3).filter(key => key.startsWith('description3')).map(key => data.headparabut3[key]).filter(Boolean)}
                     
                />
        )}

        <AyurvedicTreatmentProtocol data={data} />

        <div className="bg-[#e6faee]">
        {data.headparabut5 && (
                <TreatmentInfoSection
                    title={data.headparabut5.heading}
                    descriptions={Object.keys(data.headparabut5).filter(key => key.startsWith('description')).map(key => data.headparabut5[key]).filter(Boolean)}
                     cta={data.headparabut5.cta}
                />
        )}
        </div>
       
       <FaqWrapper data={data} />

       <OurTreatments2 />

      <ConsultationForm />
    </div>
  );
}
