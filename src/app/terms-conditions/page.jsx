import OurTreatments from "@/components/home/OurTreatments";

export default function TermsConditions() {
    return (
        <div className="w-full bg-white">

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full h-[400px] flex items-center justify-center text-center">

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/treatment.webp')"
                    }}
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 text-white">
                    <h1 className="text-white font-bold mb-3">
                        Terms & Conditions
                    </h1>

                    <p className="text-sm md:text-base">
                        Home <span className="mx-2">→</span> Terms & Conditions
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-12 space-y-8 page-container [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-semibold [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-3">

                <div>
                    <p>
                        Welcome to Sreerudra Ayurveda!
                    </p>
                    <p>
                        These terms and conditions outline the rules and regulations for the use of Sreerudra Ayurveda Multi Speciality Hospital & Research Centre’s Website, located at www.sreerudraayurveda.com.
                    </p>
                    <p>
                        By accessing this website we assume you accept these terms and conditions. Do not continue to use Sreerudra Ayurveda if you do not agree to all of the terms stated on this page.
                    </p>
                </div>

                <div>
                    <h2>Terminology</h2>
                    <p>
                        “Client”, “You” and “Your” refers to you, the person using this website. “The Company”, “We”, “Our” refers to Sreerudra Ayurveda Multi Speciality Hospital & Research Centre. “Party” refers to both the Client and the Company.
                    </p>
                </div>

                <div>
                    <h2>Cookies</h2>
                    <p>
                        We employ the use of cookies. By accessing Sreerudra Ayurveda, you agree to use cookies in agreement with our Privacy Policy.
                    </p>
                    <p>
                        Cookies are used to enable functionality and improve user experience. Some affiliate/advertising partners may also use cookies.
                    </p>
                </div>

                <div>
                    <h2>License</h2>
                    <p>
                        Unless otherwise stated, Sreerudra Ayurveda Multi Speciality Hospital & Research Centre owns the intellectual property rights for all material on this website.
                    </p>
                    <p>You must not:</p>
                    <p>Republish material</p>
                    <p>Sell, rent or sub-license material</p>
                    <p>Reproduce or copy material</p>
                    <p>Redistribute content</p>
                </div>

                <div>
                    <h2>Comments</h2>
                    <p>
                        Parts of this website allow users to post comments. Comments do not reflect the views of Sreerudra Ayurveda.
                    </p>
                    <p>
                        We reserve the right to monitor and remove inappropriate or offensive comments.
                    </p>
                    <p>
                        You warrant that your comments do not violate any intellectual property rights or laws.
                    </p>
                </div>

                <div>
                    <h2>Hyperlinking to our Content</h2>
                    <p>
                        Certain organizations may link to our website without prior approval such as government agencies, search engines, and news organizations.
                    </p>
                    <p>
                        Links must not be deceptive or falsely imply sponsorship.
                    </p>
                </div>

                <div>
                    <h2>iFrames</h2>
                    <p>
                        Without prior approval, you may not create frames around our webpages that alter the visual presentation of our website.
                    </p>
                </div>

                <div>
                    <h2>Content Liability</h2>
                    <p>
                        We are not responsible for content appearing on your website. You agree to protect us against claims arising from your website.
                    </p>
                </div>

                <div>
                    <h2>Your Privacy</h2>
                    <p>
                        Please read our Privacy Policy.
                    </p>
                </div>

                <div>
                    <h2>Reservation of Rights</h2>
                    <p>
                        We reserve the right to request removal of any links to our website and to amend these terms at any time.
                    </p>
                </div>

                <div>
                    <h2>Removal of links</h2>
                    <p>
                        If you find any link offensive, you may contact us. We are not obligated to respond or remove content immediately.
                    </p>
                </div>

                <div>
                    <h2>Disclaimer</h2>
                    <p>
                        We do not guarantee completeness or accuracy of information on this website.
                    </p>
                    <p>
                        We are not liable for any loss or damage arising from use of this website.
                    </p>
                    <p>
                        Nothing in this disclaimer limits liability where not permitted by law.
                    </p>
                </div>

            </section>

            <OurTreatments />
        </div>
    );
}