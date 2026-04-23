import Gallery from '@/components/gallery/Gallery';
import OurTreatments from '@/components/home/OurTreatments';

export const metadata = {
    title: 'Gallery - Sreerudra Ayurveda',
    description: 'View glimpses of Sreerudra Ayurveda, our treatments, events, and facilities.',
};

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-white">
            <Gallery />
            <OurTreatments />
        </main>
    );
}
