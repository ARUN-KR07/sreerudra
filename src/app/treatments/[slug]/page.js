"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { slugData } from "@/lib/treatmentsData";

// ─── COMPONENTS ──────────────────────────────────────────────────────────────
import HeroSection from "@/components/treatments/HeroSection";
import ConditionsGrid from "@/components/treatments/ConditionsGrid";
import RiskSection from "@/components/treatments/RiskSection";
import CausesSection from "@/components/treatments/CausesSection";
import InfoGrids from "@/components/treatments/InfoGrids";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import TreatmentsTabs from "@/components/treatments/TreatmentsTabs";
import FaqSection from "@/components/treatments/FaqSection";
import ConsultationForm from "@/components/form/ConsultationForm";
import TreatmentInfoSection from "@/components/treatments/TreatmentInfoSection";
import DiagnosisSection from "@/components/treatments/DiagnosisSection";
import PopupForm from "@/components/form/PopupForm";

export default function SlugPage() {
  const params = useParams();
  const slug = params?.slug || "lower-back-pain";
  const data = slugData[slug] || slugData["lower-back-pain"];

  const [activeTab, setActiveTab] = useState(data.ourTreatments?.tabs?.[0] || "");
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const toggleFaq = (index) =>
    setActiveIndex(index === activeIndex ? -1 : index);

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />

      <ConditionsGrid data={data} />

      <RiskSection data={data} />

      <CausesSection data={data} />

      {/* 1. Condition Detail (Unified) */}
      <TreatmentInfoSection
        title={data.conditionDetail.heading}
        description={data.conditionDetail.description}
        onCtaClick={() => setOpen(true)}
      />

      {/* 2. Outcomes (Unified) */}
      {data.outcomes && (
        <TreatmentInfoSection
          title={data.outcomes.heading}
          subtitle={data.outcomes.subtitle}
          description={data.outcomes.description}
          cta={data.outcomes.cta}
          onCtaClick={() => setOpen(true)}
        />
      )}

      {data.diagnosis && <DiagnosisSection data={data} />}

      {/* 3. Final Outcome (Unified) */}
      {data.finalOutcomes && (
        <TreatmentInfoSection
          title={data.finalOutcomes.heading}
          subtitle={data.finalOutcomes.subtitle || "Get A Free Consultation now"}
          description={data.finalOutcomes.description}
          cta={data.finalOutcomes.cta}
          onCtaClick={() => setOpen(true)}
        />
      )}

      <InfoGrids data={data} />

      <RelatedTreatments data={data} />

      <FaqSection
        data={data}
        activeIndex={activeIndex}
        toggleFaq={toggleFaq}
      />

      <TreatmentsTabs
        data={data}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />


      <ConsultationForm />

      {/* Popup Form */}
      <PopupForm open={open} setOpen={setOpen} />
    </div>
  );
}