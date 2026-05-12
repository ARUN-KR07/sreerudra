"use client";

import { useState } from "react";
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
      {/* Head Para But 1 */}
      {data.headparabut1 && (
        <TreatmentInfoSection
          title={data.headparabut1.heading}
          descriptions={[data.headparabut1.description, data.headparabut1.description2].filter(Boolean)}
          onCtaClick={() => setOpen(true)}
        />
      )}

      {/* Head Para But 2 */}
      {data.headparabut2 && (
        <TreatmentInfoSection
          title={data.headparabut2.heading}
          descriptions={[data.headparabut2.description].filter(Boolean)}
          onCtaClick={() => setOpen(true)}
        />
      )}

      {/* Head Para But 3 */}
      {data.headparabut3 && (
        <TreatmentInfoSection
          title={data.headparabut3.heading}
          subtitle={data.headparabut3.subtitle}
          descriptions={[data.headparabut3.description].filter(Boolean)}
          cta={data.headparabut3.cta}
          onCtaClick={() => setOpen(true)}
        />
      )}

      {/* Head Para But 4 */}
      {data.headparabut4 && (
        <TreatmentInfoSection
          title={data.headparabut4.heading}
          subtitle={data.headparabut4.subtitle || "Get A Free Consultation now"}
          descriptions={[data.headparabut4.description].filter(Boolean)}
          cta={data.headparabut4.cta}
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

      {/* The Popup itself */}
      <PopupForm open={open} setOpen={setOpen} />
    </>
  );
}
