import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import ConsultationForm from "@/components/form/ConsultationForm";
import FaqWrapper from "@/components/treatments/faqwrapper";
import OurTreatments2 from "@/components/home/ourtreatments2";
import HeroMirror from "@/components/treatments/HeroMirror";
import SymptomsAndTypes from "@/components/treatments/SymptomsAndTypes";
import TreatmentInfoSection from "@/components/treatments/TreatmentInfoSection";
import Panchakarma2 from "@/components/treatments/Panchakarma2";
import Box4row from "@/components/treatments/Box4row";
import TabsOrange from "@/components/treatments/TabsOrange";

export async function generateMetadata() {
  const data = slugData["skin-complaints"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function Skincomplaints() {
  const data = slugData["skin-complaints"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />
      <SymptomsAndTypes data={data}/>

      {data.headparabut1 && (
        <TreatmentInfoSection
            title={data.headparabut1.heading}
            descriptions={Object.keys(data.headparabut1).filter(key => key.startsWith('description')).map(key => data.headparabut1[key]).filter(Boolean)}
        />
      )}

      <Panchakarma2 data={data}/>
      <Box4row data={data}/>


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

      <TabsOrange data={data}/>

      <div className="bg-[#E6FAEE]">
        {data.headparabut4 && (
        <TreatmentInfoSection
            title={data.headparabut4.heading}
            descriptions={Object.keys(data.headparabut4).filter(key => key.startsWith('description')).map(key => data.headparabut4[key]).filter(Boolean)}
        />
      )}
      </div>

      <FaqWrapper data={data} />
      <OurTreatments2 />
      <ConsultationForm />
    </div>
  );
}