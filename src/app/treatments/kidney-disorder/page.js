import { slugData } from "@/lib/treatmentsData";

// SERVER COMPONENTS
import HeroSection from "@/components/treatments/HeroSection";
import RiskSection from "@/components/treatments/RiskSection";
import CausesSection from "@/components/treatments/CausesSection";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";
import DiagnosisSection from "@/components/treatments/DiagnosisSection";
import FaqWrapper from "@/components/treatments/faqwrapper";
import OurTreatments2 from "@/components/home/ourtreatments2";

// CLIENT COMPONENT (Wrapper for interactive sections)
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";

export async function generateMetadata() {
    const data = slugData["kidney-disorder"];
    return {
        title: data.hero.title,
        description: data.hero.description,
    };
}

export default function KidneyDisorderPage() {
    const data = slugData["kidney-disorder"];

    return (
        <div className="flex flex-col gap-[120px] mb-[120px]">
            <HeroSection data={data} />

            <RiskSection data={data} />

            <CausesSection data={data} />

            <TreatmentClientWrapper data={data} />

            <DiagnosisSection data={data} />

            <RelatedTreatments data={data} />
            <FaqWrapper data={data} />

            <OurTreatments2 />

            <ConsultationForm />
        </div>
    );
}
