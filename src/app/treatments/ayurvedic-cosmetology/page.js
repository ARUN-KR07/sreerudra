import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";
import TreatmentInfoSection from "@/components/treatments/TreatmentInfoSection";
import TreatmentGroupsWrapper from "@/components/treatments/TreatmentGroupsWrapper";
import Joint2box from "@/components/treatments/Joint2box";
import BeautyWellnessGrid from "@/components/treatments/BeautyWellnessGrid";
import FaqWrapper from "@/components/treatments/faqwrapper";
import OurTreatments2 from "@/components/home/ourtreatments2";

export async function generateMetadata() {
  const data = slugData["ayurvedic-cosmetology"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function AyurvedicCosmetologyPage() {
  const data = slugData["ayurvedic-cosmetology"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />

            {data.headparabut1 && (
              <TreatmentInfoSection
                title={data.headparabut1.heading}
                descriptions={Object.keys(data.headparabut1).filter(key => key.startsWith('description')).map(key => data.headparabut1[key]).filter(Boolean)}
              />
            )}

            <div className="bg-[#E6FAEE]">
            {data.headparabut2 && (
              <TreatmentInfoSection
                title={data.headparabut2.heading}
                descriptions={Object.keys(data.headparabut2).filter(key => key.startsWith('description')).map(key => data.headparabut2[key]).filter(Boolean)}
              />
              
            )}
            </div>

            {data.headparabut3 && (
              <TreatmentInfoSection
                title={data.headparabut3.heading}
                descriptions={Object.keys(data.headparabut3).filter(key => key.startsWith('description')).map(key => data.headparabut3[key]).filter(Boolean)}
              />
            )}

            <div className="bg-[#E6FAEE]">
            {data.headparabut4 && (
              <TreatmentInfoSection
                title={data.headparabut4.heading}
                descriptions={Object.keys(data.headparabut4).filter(key => key.startsWith('description')).map(key => data.headparabut4[key]).filter(Boolean)}
              />  
            )}

            {data.headparabut5 && (
              <TreatmentInfoSection
                title={data.headparabut5.heading}
                descriptions={Object.keys(data.headparabut5).filter(key => key.startsWith('description')).map(key => data.headparabut5[key]).filter(Boolean)}
              />
            )}
            </div>

            {data.headparabut6 && (
              <TreatmentInfoSection
                title={data.headparabut6.heading}
                descriptions={Object.keys(data.headparabut6).filter(key => key.startsWith('description')).map(key => data.headparabut6[key]).filter(Boolean)}
              />
            )}

            <div className="bg-[#E6FAEE]">
            {data.headparabut7 && (
              <TreatmentInfoSection
                title={data.headparabut7.heading}
                descriptions={Object.keys(data.headparabut7).filter(key => key.startsWith('description')).map(key => data.headparabut7[key]).filter(Boolean)}
              />
            )}
            </div>

            {data.treatmentGroups && <TreatmentGroupsWrapper data={data} />}

            {data.Joint2box && <Joint2box data={data} />}







            {data.headparabut8 && (
              <TreatmentInfoSection
                title={data.headparabut8.heading}
                descriptions={Object.keys(data.headparabut8).filter(key => key.startsWith('description')).map(key => data.headparabut8[key]).filter(Boolean)}
              />
            )}

            {data.headparabut9 && (
              <TreatmentInfoSection
                title={data.headparabut9.heading}
                descriptions={Object.keys(data.headparabut9).filter(key => key.startsWith('description')).map(key => data.headparabut9[key]).filter(Boolean)}
              />
            )}

            {data.beautyWellness && <BeautyWellnessGrid data={data} />}






            {data.headparabut10 && (
              <TreatmentInfoSection
                title={data.headparabut10.heading}
                descriptions={Object.keys(data.headparabut10).filter(key => key.startsWith('description')).map(key => data.headparabut10[key]).filter(Boolean)}
              />
            )}
      <FaqWrapper data={data} />
      <OurTreatments2 />




      <ConsultationForm />
    </div>
  );
}
