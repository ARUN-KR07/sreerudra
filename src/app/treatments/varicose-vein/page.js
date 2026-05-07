import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import ConditionsGrid from "@/components/treatments/ConditionsGrid";
import RiskSection from "@/components/treatments/RiskSection";
import CausesSection from "@/components/treatments/CausesSection";
import RelatedTreatments from "@/components/treatments/RelatedTreatments";
import ConsultationForm from "@/components/form/ConsultationForm";
import TreatmentClientWrapper from "@/components/treatments/TreatmentClientWrapper";
import InfoGrids from "@/components/treatments/InfoGrids";
import OurTreatments2 from "@/components/home/ourtreatments2";
import Slider from "@/components/treatments/Slider";

export async function generateMetadata() {
    const data = slugData["varicose-vein"];
    return {
        title: data.hero.title,
        description: data.hero.description,
    };
}

export default function VaricoseVeinPage() {
    const data = slugData["varicose-vein"];

    return (
        <div className="flex flex-col gap-[120px] mb-[120px]">
            <HeroSection data={data} />
            <RiskSection data={data} />
            <Slider data={data} />
            <TreatmentClientWrapper data={data} />
            <OurTreatments2 />
            <ConsultationForm />
        </div>
    );
}
