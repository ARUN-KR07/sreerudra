import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturesRow from "@/components/home/FeaturesRow";
import DoctorSection from "@/components/home/DoctorSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import OurTreatments from "@/components/home/OurTreatments";
import AyurvedaSection from "@/components/home/AyurvedaSection";
import ServiceSection from "@/components/home/ServiceSection";
import ConsultationSection from "@/components/home/ConsultationSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import TreatmentsSection from "@/components/home/TreatmentsSection";
import GallerySection from "@/components/home/GallerySection";
import LatestUpdates from "@/components/home/LatestUpdates";
import OurTreatments2 from "@/components/home/ourtreatments2";


export default function Home() {
  return (
    <main className="page-spacing">
      <HeroSection />
      <AboutSection />
      <FeaturesRow />
      <DoctorSection />
      <ExperienceSection />
      <OurTreatments />
      <OurTreatments2 />
      <AyurvedaSection />
      <ServiceSection />
      <ConsultationSection />
      <TestimonialSection />
      <TreatmentsSection />
      <GallerySection />
      <LatestUpdates />
    </main>
  );
}