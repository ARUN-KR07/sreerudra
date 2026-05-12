import { slugData } from "@/lib/treatmentsData";

// SERVER COMPONENTS
import HeroSection from "@/components/treatments/HeroSection";
import ConsultationForm from "@/components/form/ConsultationForm";
import DiagnosisSection from "@/components/treatments/DiagnosisSection";

// CLIENT COMPONENT WRAPPER
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";
import FaqWrapper from "@/components/treatments/faqwrapper";
import OurTreatments2 from "@/components/home/ourtreatments2";
import Singlebox from "@/components/treatments/singlebox";

export async function generateMetadata() {
  const data = slugData["liver-cirrhosis"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function LiverCirrhosiPage() {
  const data = slugData["liver-cirrhosis"] || slugData["spinal-problems"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />

      {/* Handles state-dependent sections: Detail, Outcomes, FAQs, Tabs, Popup */}
      <TreatmentClientWrapper data={data} />

      <Singlebox data={data} />
       
       <FaqWrapper data={data} />

       <OurTreatments2 />

      <ConsultationForm />
    </div>
  );
}
