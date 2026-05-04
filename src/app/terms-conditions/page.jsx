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
            <section className="py-12 space-y-10 page-container 
                [&_h2]:text-xl [&_h2]:md:text-2xl [&_h2]:font-semibold [&_h2]:mt-6
                [&_p]:text-gray-700 [&_p]:leading-relaxed [&_p]:mb-3">

                {/* INTRO */}
                <div>
                    <p>Welcome to Sreerudra Ayurveda!</p>

                    <p>
                        These terms and conditions outline the rules and regulations for the use of
                        Sreerudra Ayurveda Multi Speciality Hospital & Research Centre’s Website,
                        located at www.sreerudraayurveda.com.
                    </p>

                    <p>
                        By accessing this website we assume you accept these terms and conditions.
                        Do not continue to use Sreerudra Ayurveda if you do not agree to take all
                        of the terms and conditions stated on this page.
                    </p>

                    <p>
                        The following terminology applies to these Terms and Conditions, Privacy Statement
                        and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you.
                        “The Company”, “We”, “Our” refers to Sreerudra Ayurveda Multi Speciality Hospital &
                        Research Centre. “Party” refers to both the Client and the Company.
                    </p>
                </div>

                {/* COOKIES */}
                <div>
                    <h2>Cookies</h2>

                    <p>
                        We employ the use of cookies. By accessing Sreerudra Ayurveda, you agreed
                        to use cookies in agreement with our Privacy Policy.
                    </p>

                    <p>
                        Cookies are used to enable website functionality and improve user experience.
                        Some of our affiliate/advertising partners may also use cookies.
                    </p>
                </div>

                {/* LICENSE */}
                <div>
                    <h2>License</h2>

                    <p>
                        Unless otherwise stated, Sreerudra Ayurveda Multi Speciality Hospital &
                        Research Centre and/or its licensors own the intellectual property rights
                        for all material on this website. All rights are reserved.
                    </p>

                    <p>You must not:</p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Republish material</li>
                        <li>Sell, rent or sub-license material</li>
                        <li>Reproduce, duplicate or copy material</li>
                        <li>Redistribute content</li>
                    </ul>
                </div>

                {/* COMMENTS */}
                <div>
                    <h2>Comments</h2>

                    <p>
                        Parts of this website may allow users to post comments. Comments do not reflect
                        the views of Sreerudra Ayurveda.
                    </p>

                    <p>
                        We reserve the right to monitor and remove any comments which are inappropriate,
                        offensive or violate these Terms.
                    </p>

                    <p>You warrant that:</p>

                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>You have rights to post the content</li>
                        <li>It does not infringe intellectual property rights</li>
                        <li>It is not unlawful, offensive, or defamatory</li>
                        <li>It will not be used for spam or illegal activities</li>
                    </ul>
                </div>

                {/* HYPERLINKING */}
                <div>
                    <h2>Hyperlinking to our Content</h2>

                    <p>
                        The following organizations may link to our Website without prior approval:
                    </p>

                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Government agencies</li>
                        <li>Search engines</li>
                        <li>News organizations</li>
                        <li>Online directory distributors</li>
                    </ul>

                    <p>
                        Links must not be deceptive or falsely imply sponsorship or endorsement.
                    </p>
                </div>

                {/* IFRAMES */}
                <div>
                    <h2>iFrames</h2>

                    <p>
                        Without prior approval and written permission, you may not create frames
                        around our Webpages that alter the visual presentation of our Website.
                    </p>
                </div>

                {/* CONTENT LIABILITY */}
                <div>
                    <h2>Content Liability</h2>

                    <p>
                        We shall not be held responsible for any content that appears on your Website.
                        You agree to protect and defend us against all claims arising from your Website.
                    </p>
                </div>

                {/* PRIVACY */}
                <div>
                    <h2>Your Privacy</h2>

                    <p>Please read our Privacy Policy.</p>
                </div>

                {/* RIGHTS */}
                <div>
                    <h2>Reservation of Rights</h2>

                    <p>
                        We reserve the right to request removal of any links to our Website and to
                        amend these terms at any time.
                    </p>
                </div>

                {/* REMOVAL */}
                <div>
                    <h2>Removal of Links</h2>

                    <p>
                        If you find any link on our Website that is offensive, you may contact us.
                        We are not obligated to remove content immediately.
                    </p>
                </div>

                {/* DISCLAIMER */}
                <div>
                    <h2>Disclaimer</h2>

                    <p>
                        To the maximum extent permitted by applicable law, we exclude all
                        representations, warranties and conditions relating to our website.
                    </p>

                    <p>
                        Nothing in this disclaimer will limit liability for death, personal injury,
                        fraud, or anything not permitted under applicable law.
                    </p>

                    <p>
                        As long as the website and services are provided free of charge, we are not
                        liable for any loss or damage.
                    </p>
                </div>

            </section>

            <OurTreatments />
        </div>
    );
}