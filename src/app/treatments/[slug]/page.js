import { slugData } from "@/lib/treatmentsData";

// SERVER COMPONENTS
import HeroSection from "@/components/treatments/HeroSection";
import ConditionsGrid from "@/components/treatments/ConditionsGrid";
import RiskSection from "@/components/treatments/RiskSection";
import CausesSection from "@/components/treatments/CausesSection";
import InfoGrids from "@/components/treatments/InfoGrids";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";
import DiagnosisSection from "@/components/treatments/DiagnosisSection";

// CLIENT COMPONENT WRAPPER
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const data = slugData[slug] || slugData["spinal-problems"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function SlugPage({ params }) {
  const { slug } = params;
  const data = slugData[slug] || slugData["spinal-problems"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />

      {data.conditions && <ConditionsGrid data={data} />}

      {data.risks && <RiskSection data={data} />}

      {data.causes && <CausesSection data={data} />}

      {/* Handles state-dependent sections: Detail, Outcomes, FAQs, Tabs, Popup */}
      <TreatmentClientWrapper data={data} />

      {data.diagnosis && <DiagnosisSection data={data} />}

      {(data.medicalAttention || data.prevention || data.causeCards) && (
        <InfoGrids data={data} />
      )}

      <RelatedTreatments data={data} />

      <ConsultationForm />
    </div>
  );
}