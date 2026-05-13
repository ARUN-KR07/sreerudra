import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";
import FaqWrapper from "@/components/treatments/faqwrapper";
import OurTreatments2 from "@/components/home/ourtreatments2";
import TreatmentInfoSection from "@/components/treatments/TreatmentInfoSection";
import ImageTextVertical from "@/components/treatments/ImageTextVertical";
import Seperate2box from "@/components/treatments/Separate2box";

export async function generateMetadata() {
  const data = slugData["back-pain"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function BackpainPage() {
  const data = slugData["back-pain"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />

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

      <ImageTextVertical data={data} />

        {data.headparabut3 && (
               <TreatmentInfoSection
                   title={data.headparabut3.heading}
                   descriptions={Object.keys(data.headparabut3).filter(key => key.startsWith('description')).map(key => data.headparabut3[key]).filter(Boolean)}
               />
        )}



        <Seperate2box data={data} />

        {data.headparabut4 && (
               <TreatmentInfoSection
                   title={data.headparabut4.heading}
                   descriptions={Object.keys(data.headparabut4).filter(key => key.startsWith('description')).map(key => data.headparabut4[key]).filter(Boolean)}
               />
        )}

      <FaqWrapper data={data} />
      <OurTreatments2 />
      <ConsultationForm />
    </div>
  );
}
