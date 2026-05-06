import { slugData } from "@/lib/treatmentsData";

// SERVER COMPONENTS (Static Content)
import HeroSection from "@/components/treatments/HeroSection";
import RiskSection from "@/components/treatments/RiskSection";
import CausesSection from "@/components/treatments/CausesSection";
import InfoGrids from "@/components/treatments/InfoGrids";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";

// CLIENT COMPONENT (Interactive Content)
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";

export async function generateMetadata() {
  const data = slugData["arthritis-treatment"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function ArthritisPage() {
  const data = slugData["arthritis-treatment"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      {/* 1. Hero (Server Rendered) */}
      <HeroSection data={data} />

      {/* 2. Risks (Server Rendered) */}
      <RiskSection data={data} />

      {/* 3. Causes (Server Rendered) */}
      <CausesSection data={data} />

      {/* 4. Interactive Wrapper (Handles state for Popups, FAQs, and Tabs) */}
      <TreatmentClientWrapper data={data} />

      {/* 5. Info Grids (Server Rendered) */}
      <InfoGrids data={data} />

      {/* 6. Related Treatments (Server Rendered) */}
      <RelatedTreatments data={data} />

      {/* 7. Footer Form (Server Rendered) */}
      <ConsultationForm />
    </div>
  );
}
