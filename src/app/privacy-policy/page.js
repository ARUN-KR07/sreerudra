import OurTreatments from "@/components/home/OurTreatments";

export default function PrivacyPolicy() {
    return (
        <div className="w-full bg-white">

            {/* ================= HERO SECTION ================= */}
            <section className="relative w-full h-[400px] flex items-center justify-center text-center">

                {/* Background */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/treatment.webp')"
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <div className="relative z-10 text-white">
                    <h1 className="text-white  font-bold mb-3">
                        Privacy Policy
                    </h1>

                    <p className="text-sm md:text-base">
                        Home <span className="mx-2">→</span> Privacy Policy
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-12 space-y-10 page-container
                          [&_h2]:text-2xl 
                          [&_h2]:md:text-3xl 
                          [&_h2]:font-semibold
                          [&_h2]:text-black
                          [&_p]:text-gray-700
                          [&_p]:text-sm
                          [&_p]:md:text-base
                          [&_p]:leading-relaxed
                          [&_p]:mb-3">

                <div>
                    <h2>Who we are</h2>
                    <p>
                        Suggested text: Our website address is: https://sreerudraayurveda.com.
                    </p>
                </div>

                <div>
                    <h2>Comments</h2>
                    <p>
                        Suggested text: When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                    </p>
                    <p>
                        An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
                    </p>
                </div>

                <div>
                    <h2>Media</h2>
                    <p>
                        Suggested text: If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors can download and extract location data from images.
                    </p>
                </div>

                <div>
                    <h2>Cookies</h2>
                    <p>
                        Suggested text: If you leave a comment you may opt-in to saving your name, email address and website in cookies. These last for one year.
                    </p>
                    <p>
                        If you visit our login page, a temporary cookie is set to check browser compatibility. It contains no personal data.
                    </p>
                    <p>
                        When you log in, cookies store login info and display preferences. Login cookies last two days, screen options last one year.
                    </p>
                    <p>
                        If you edit or publish an article, a cookie will store the post ID and expire after one day.
                    </p>
                </div>

                <div>
                    <h2>Embedded content from other websites</h2>
                    <p>
                        Articles may include embedded content (videos, images, etc.). These behave as if you visited the external website.
                    </p>
                    <p>
                        These websites may collect data, use cookies, and track your interaction if you are logged in to their platform.
                    </p>
                </div>

                <div>
                    <h2>Who we share your data with</h2>
                    <p>
                        Suggested text: If you request a password reset, your IP address will be included in the reset email.
                    </p>
                </div>

                <div>
                    <h2>How long we retain your data</h2>
                    <p>
                        Suggested text: Comments and metadata are retained indefinitely for moderation purposes.
                    </p>
                    <p>
                        Registered users can view, edit, or delete their personal data (except username). Admins can also manage this data.
                    </p>
                </div>

                <div>
                    <h2>What rights you have over your data</h2>
                    <p>
                        Suggested text: You can request an exported file of your data or request deletion of your personal data.
                    </p>
                    <p>
                        This excludes data required for legal, administrative, or security purposes.
                    </p>
                </div>

                <div>
                    <h2>Where your data is sent</h2>
                    <p>
                        Suggested text: Visitor comments may be checked through an automated spam detection service.
                    </p>
                </div>

            </section>

            <OurTreatments />
        </div>
    );
}