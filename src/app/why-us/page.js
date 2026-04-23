import OurTreatments from '@/components/home/OurTreatments';
import WhyUs from '@/components/whyus/WhyUs';

export const metadata = {
  title: 'Why Us - Sreerudra Ayurveda',
  description: 'Learn why Sreerudra Ayurveda is the best choice for authentic Ayurvedic treatments in Kerala.',
};

export default function WhyUsPage() {
  return (
    <main className="min-h-screen bg-white">
      <WhyUs />
      <OurTreatments />
    </main>
  );
}
