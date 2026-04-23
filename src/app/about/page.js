import AboutUs from '@/components/aboutus/AboutUs';
import OurTreatments from '@/components/home/OurTreatments';

export const metadata = {
    title: 'About Us - Sreerudra Ayurveda',
    description: 'Learn about the history and expertise behind Sreerudra Ayurveda hospital and research centre.',
};

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutUs />
            <OurTreatments />
        </main>
    );
}
