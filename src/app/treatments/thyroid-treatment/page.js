import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import ConsultationForm from "@/components/form/ConsultationForm";
import FaqWrapper from "@/components/treatments/faqwrapper";
import OurTreatments2 from "@/components/home/ourtreatments2";
import Seperate2box from "@/components/treatments/Separate2box";
import Singlebox from "@/components/treatments/singlebox";
import TreatmentInfoSection from "@/components/treatments/TreatmentInfoSection";

export async function generateMetadata() {
  const data = slugData["thyroid-treatment"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function thyroidtreatmentPage() {
  const data = slugData["thyroid-treatment"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />
      <Seperate2box data={data}/>
      <Singlebox data={data}/>

        {data.headparabut1 && (
        <TreatmentInfoSection
            title={data.headparabut1.heading}
            descriptions={Object.keys(data.headparabut1).filter(key => key.startsWith('description')).map(key => data.headparabut1[key]).filter(Boolean)}
        />
        )}

        {data.headparabut2 && (
        <TreatmentInfoSection
            title={data.headparabut2.heading}
            descriptions={Object.keys(data.headparabut2).filter(key => key.startsWith('description')).map(key => data.headparabut2[key]).filter(Boolean)}
        />
        )}


      <FaqWrapper data={data} />
      <OurTreatments2 />
      
      <ConsultationForm />
    </div>
  );
}