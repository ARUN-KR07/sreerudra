import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import ConsultationForm from "@/components/form/ConsultationForm";
import FaqWrapper from "@/components/treatments/faqwrapper";
import OurTreatments2 from "@/components/home/ourtreatments2";
import ImageTextVertical from "@/components/treatments/ImageTextVertical";
import Grids from "@/components/treatments/Grids";
import Seperate2box from "@/components/treatments/Separate2box";
import TreatmentInfoSection from "@/components/treatments/TreatmentInfoSection";

export async function generateMetadata() {
  const data = slugData["diabetes"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function DiabetesPage() {
  const data = slugData["diabetes"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />
      <ImageTextVertical data={data} />

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

      <Grids data={data} />


        {data.headparabut3 && (
            <TreatmentInfoSection
            title={data.headparabut3.heading}
            descriptions={Object.keys(data.headparabut3).filter(key => key.startsWith('description')).map(key => data.headparabut3[key]).filter(Boolean)}
            />
        )}

        {data.headparabut4 && (
            <TreatmentInfoSection
            title={data.headparabut4.heading}
            descriptions={Object.keys(data.headparabut4).filter(key => key.startsWith('description')).map(key => data.headparabut4[key]).filter(Boolean)}
            />
        )}

      <Seperate2box data={data} />

        {data.headparabut5 && (
            <TreatmentInfoSection
            title={data.headparabut5.heading}
            descriptions={Object.keys(data.headparabut5).filter(key => key.startsWith('description')).map(key => data.headparabut5[key]).filter(Boolean)}
            lists={Object.keys(data.headparabut5).filter((key) => key.startsWith("list")).map((key) => data.headparabut5[key]).filter(Boolean)}
            />
        )}

        {data.headparabut6 && (
            <TreatmentInfoSection
            title={data.headparabut6.heading}
            descriptions={Object.keys(data.headparabut6).filter(key => key.startsWith('description')).map(key => data.headparabut6[key]).filter(Boolean)}
            />
        )}

        {data.headparabut7 && (
            <TreatmentInfoSection
            title={data.headparabut7.heading}
            descriptions={Object.keys(data.headparabut7).filter(key => key.startsWith('description')).map(key => data.headparabut7[key]).filter(Boolean)}
            />
        )}

        {data.headparabut8 && (
            <TreatmentInfoSection
            title={data.headparabut8.heading}
            descriptions={Object.keys(data.headparabut8).filter(key => key.startsWith('description')).map(key => data.headparabut8[key]).filter(Boolean)}
            />
        )}

      <FaqWrapper data={data} />
      <OurTreatments2 />
      
      <ConsultationForm />
    </div>
  );
}