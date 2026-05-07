"use client";

import { useState } from "react";
import FaqSection from "@/components/treatments/FaqSection";
import TreatmentsTabs from "@/components/treatments/TreatmentsTabs";
import PopupForm from "@/components/form/PopupForm";
import TreatmentInfoSection from "@/components/treatments/TreatmentInfoSection";
import NonMedicinal from "@/components/treatments/NonMedicinal";

export default function TreatmentClientWrapper({ data }) {
  const [activeTab, setActiveTab] = useState(data?.ourTreatments?.tabs?.[0] || "");
  const [activeIndex, setActiveIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const toggleFaq = (index) =>
    setActiveIndex(index === activeIndex ? -1 : index);

  return (
    <>
      {/* Condition Detail (Needs state for the Popup) */}
      {data.conditionDetail && (
        <TreatmentInfoSection
          title={data.conditionDetail.heading}
          description={data.conditionDetail.description}
          description2={data.conditionDetail.description2}
          onCtaClick={() => setOpen(true)}
        />
      )}

      {/* Condition Detail (Needs state for the Popup) */}
      {data.conditionDetail2 && (
        <TreatmentInfoSection
          title={data.conditionDetail2.heading}
          description={data.conditionDetail2.description}
          onCtaClick={() => setOpen(true)}
        />
      )}

      {/* Outcomes (Optional) */}
      {data.outcomes && (
        <TreatmentInfoSection
          title={data.outcomes.heading}
          subtitle={data.outcomes.subtitle}
          description={data.outcomes.description}
          cta={data.outcomes.cta}
          onCtaClick={() => setOpen(true)}
        />
      )}

      {/* Final Outcomes (Optional) */}
      {data.finalOutcomes && (
        <TreatmentInfoSection
          title={data.finalOutcomes.heading}
          subtitle={data.finalOutcomes.subtitle || "Get A Free Consultation now"}
          description={data.finalOutcomes.description}
          cta={data.finalOutcomes.cta}
          onCtaClick={() => setOpen(true)}
        />
      )}

      {/* Non Medicinal Treatment (Optional) */}
      {data.nonmedicinal && !data.hideNonMedicinal && (
        <NonMedicinal
          data={data}
          onCtaClick={() => setOpen(true)}
        />
      )}

      {/* FAQs */}
      {data.faqs && !data.hideFaqs && (
        <FaqSection
          data={data}
          activeIndex={activeIndex}
          toggleFaq={toggleFaq}
        />
      )}

      {/* Tabs */}
      {data.ourTreatments && !data.hideTabs && (
        <TreatmentsTabs
          data={data}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      )}

      {/* The Popup itself */}
      <PopupForm open={open} setOpen={setOpen} />
    </>
  );
}
