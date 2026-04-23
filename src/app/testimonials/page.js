import Testimonials from '@/components/testimonials/Testimonials';
import OurTreatments from '@/components/home/OurTreatments';


export const metadata = {
    title: 'Testimonials - Sreerudra Ayurveda',
    description: 'See what our patients say about their treatments at Sreerudra Ayurveda.',
};

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-white">
            <Testimonials />
            <OurTreatments />
        </main>
    );
}
