import OurTreatments from "@/components/home/OurTreatments";

export default function ReturnRefundPolicy() {
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
                        Return & Refund Policy
                    </h1>

                    <p className="text-sm md:text-base">
                        Home <span className="mx-2">→</span> Return & Refund Policy
                    </p>
                </div>
            </section>

            {/* ================= CONTENT ================= */}
            <section className="py-12 space-y-8 page-container 
                          [&_h2]:text-xl 
                          [&_h2]:md:text-2xl 
                          [&_h2]:font-semibold 
                          [&_p]:text-gray-700 
                          [&_p]:leading-relaxed 
                          [&_p]:mb-3">

                <div>
                    <p><strong>Last updated:</strong> March 08, 2021</p>
                </div>

                <div>
                    <p>
                        Thank you for shopping at Sreerudraayurveda.
                    </p>
                    <p>
                        If, for any reason, You are not completely satisfied with a purchase We invite You to review our policy on refunds and returns.
                    </p>
                    <p>
                        The following terms are applicable for any products that You purchased with Us.
                    </p>
                </div>

                <div>
                    <h2>Interpretation and Definitions</h2>
                    <p>
                        The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                    </p>
                </div>

                <div>
                    <h2>Definitions</h2>
                    <p>
                        Company (referred to as either “the Company”, “We”, “Us” or “Our”) refers to Sreerudra Ayurveda Multi Speciality Hospital & Research Centre, Kaithavana Alappuzha – 688003.
                    </p>
                    <p>Goods refer to the items offered for sale on the Service.</p>
                    <p>Orders mean a request by You to purchase Goods from Us.</p>
                    <p>Service refers to the Website.</p>
                    <p>Website refers to Sreerudraayurveda, accessible from www.sreerudraayurveda.com</p>
                    <p>
                        You means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service.
                    </p>
                </div>

                <div>
                    <h2>Your Order Cancellation Rights</h2>
                    <p>
                        You are entitled to cancel Your Order within 7 days without giving any reason for doing so.
                    </p>
                    <p>
                        The deadline for cancelling an Order is 7 days from the date on which You received the Goods.
                    </p>
                    <p>
                        To exercise your cancellation right, inform us via email:
                    </p>
                    <p>info@sreerudraayurveda.com</p>
                    <p>
                        We will reimburse You within 14 days from the day we receive the returned Goods.
                    </p>
                </div>

                <div>
                    <h2>Conditions for Returns</h2>
                    <p>
                        In order for the Goods to be eligible for a return, please ensure:
                    </p>
                    <p>The Goods were purchased in the last 7 days.</p>

                    <p><strong>Non-returnable items:</strong></p>
                    <p>Goods made to your specifications or personalized.</p>
                    <p>Perishable goods or expired items.</p>
                    <p>Opened items not suitable for hygiene reasons.</p>
                    <p>Items mixed inseparably with other products.</p>

                    <p>
                        We reserve the right to refuse returns that do not meet these conditions.
                    </p>

                    <p>
                        Only regular priced Goods may be refunded. Sale items cannot be refunded.
                    </p>
                </div>

                <div>
                    <h2>Returning Goods</h2>
                    <p>
                        You are responsible for return shipping costs and risks.
                    </p>

                    <p>
                        Return address:
                    </p>
                    <p>
                        Sreerudra Ayurveda <br />
                        Multi Speciality Hospital <br />
                        Kaithavana Alappuzha – 688003
                    </p>

                    <p>
                        We recommend using insured and trackable shipping. Refunds require proof of receipt.
                    </p>
                </div>

                <div>
                    <h2>Gifts</h2>
                    <p>
                        If marked as a gift, you will receive a gift credit after return.
                    </p>
                    <p>
                        If not marked as a gift, the refund will be sent to the original purchaser.
                    </p>
                </div>

                <div>
                    <h2>Contact Us</h2>
                    <p>
                        If you have any questions about our Returns and Refunds Policy:
                    </p>
                    <p>info@sreerudraayurveda.com</p>
                </div>

            </section>

            <OurTreatments />
        </div>
    );
}