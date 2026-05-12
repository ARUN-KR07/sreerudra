import { slugData } from "@/lib/treatmentsData";
import HeroSection from "@/components/treatments/HeroSection";
import ConsultationForm from "@/components/form/ConsultationForm";
import FaqWrapper from "@/components/treatments/faqwrapper";
import OurTreatments2 from "@/components/home/ourtreatments2";
import HeroMirror from "@/components/treatments/HeroMirror";

export async function generateMetadata() {
  const data = slugData["rejuvenation"];
  return {
    title: data.hero.title,
    description: data.hero.description,
  };
}

export default function RejuvenationPage() {
  const data = slugData["rejuvenation"];

  return (
    <div className="flex flex-col gap-[120px] mb-[120px]">
      <HeroSection data={data} />
      <HeroMirror data={data} />
      <FaqWrapper data={data} />
      <OurTreatments2 />
      
      <ConsultationForm />
    </div>
  );
}