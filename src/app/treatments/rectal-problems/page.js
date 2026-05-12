import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import SymptomsSection from "@/components/treatments/SymptomsSection";
import InterventionsSection from "@/components/treatments/InterventionsSection";
import MedicinesSection from "@/components/treatments/MedicinesSection";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";
import FaqWrapper from "@/components/treatments/faqwrapper";
import OurTreatments2 from "@/components/home/ourtreatments2";

export async function generateMetadata() {
  const data = slugData["rectal-problems"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function RectalProblemsPage() {
  const data = slugData["rectal-problems"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />

      {/* New Symptoms Section */}
      <SymptomsSection data={data} />

      {/* Handles Detail, FAQs, Tabs, Popup */}
      <TreatmentClientWrapper data={data} />

      {/* New Interventions Section */}
      <InterventionsSection data={data} />

      {/* New Medicines Section */}
      <MedicinesSection data={data} />

      <FaqWrapper data={data} />

      <OurTreatments2 />

      <RelatedTreatments data={data} />

      <ConsultationForm />
    </div>
  );
}
