import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms and Conditions — MyLocalPro Australia" },
      { name: "description", content: "Review the terms and conditions for using MyLocalPro Australia." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <section className="relative bg-navy-gradient pt-28 pb-16 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, #E4EAF1 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#097DDD]/15 rounded-full blur-[90px] pointer-events-none" />

        <div className="container-app relative z-10 max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-label-dark mb-4 block"
          >
            Terms and Conditions
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white leading-tight mb-4"
          >
            MyLocalPro Terms and Conditions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-[#E4EAF1]/60 max-w-2xl text-base"
          >
            Effective Date: 1 June 2026. Operated by MyLocalPro, ABN 39 494 930 909. Contact Email: contactmylocalpro@gmail.com.
          </motion.p>
          <div className="mt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-[#097DDD] hover:text-[#0a8ef0]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <section className="container-app py-16">
        <div className="max-w-4xl mx-auto space-y-12 text-[#0A1830]">
          <div className="rounded-3xl bg-white border border-[#cdd6e3] shadow-[0_12px_40px_rgb(10,24,48,0.08)] p-10">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">1. About MyLocalPro</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  MyLocalPro is an online platform designed to connect customers with independent local service providers throughout Tasmania. MyLocalPro allows businesses to advertise their services and allows customers to search for and contact providers directly. MyLocalPro is not a contractor, employer, agent, or partner of any listed business. All work arrangements, pricing, communication, disputes, payments, warranties, and agreements are solely between the customer and the service provider.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">2. Eligibility</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  To use MyLocalPro, users must be at least 18 years of age, provide accurate and truthful information, use the Platform lawfully and respectfully, and not impersonate another person or business. MyLocalPro reserves the right to suspend or remove any account that breaches these Terms and Conditions.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">3. Service Areas</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  MyLocalPro currently operates within the following Tasmanian locations: Hobart, Launceston, Devonport and Burnie. Additional locations may be added at the discretion of MyLocalPro.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">4. Business Categories</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  MyLocalPro currently offers listings within the following 19 categories: Dog Walking, Babysitting, Ironing Services, Handyman Services, Lawn Mowing and Gardening, Domestic Cleaning, Car Detailing, Pressure Washing, Carpet Cleaning, Plumbers, Electricians, Builders, Painters, Roofers, Concreters, Plasterers, Landscapers, Photographers and Fencing Contractors. MyLocalPro reserves the right to add, remove, rename, or modify categories at any time.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">5. Subscription Structure</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  5.1 Free Access During 2026: All approved businesses listed on MyLocalPro will receive free access to the platform from launch until 31 December 2026. No subscription fees will apply during this promotional period. Businesses may cancel their listing at any time during the free period.
                </p>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  5.2 Paid Subscriptions From 1 January 2027: Beginning 1 January 2027, businesses wishing to remain active on the platform will transition to a paid monthly subscription model. Subscription pricing is based on business category tiers.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">6. Subscription Tiers</h2>
                <div className="text-sm text-[#5a7089] leading-relaxed space-y-3">
                  <p className="font-bold text-[#0A1830]">Tier 1 — $10 Per Month</p>
                  <p>Dog Walking, Babysitting, Ironing Services.</p>
                  <p className="font-bold text-[#0A1830]">Tier 2 — $20 Per Month</p>
                  <p>Handyman Services, Lawn Mowing and Gardening, Domestic Cleaning, Car Detailing, Pressure Washing, Carpet Cleaning.</p>
                  <p className="font-bold text-[#0A1830]">Tier 3 — $40 Per Month</p>
                  <p>Plumbers, Electricians, Builders, Painters, Roofers, Concreters, Plasterers, Landscapers, Photographers, Fencing Contractors.</p>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">7. Payments and Billing</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  Subscription fees are billed monthly in advance. Failure to make payment may result in suspension or removal of the business listing. Subscription fees are non-refundable except where required under Australian Consumer Law. MyLocalPro reserves the right to alter pricing with a minimum of 30 days written notice.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">8. Business Listings</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  Businesses agree that all information provided must be accurate and up to date, they are legally permitted to operate their business, any licences, insurance, registrations, or certifications required by law are their responsibility, and listings must not contain misleading, false, offensive, or unlawful content. MyLocalPro reserves the right to edit, reject, suspend, or remove listings at its discretion.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">9. Customer Responsibilities</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  Customers using the Platform acknowledge that MyLocalPro does not guarantee the quality, reliability, licensing, or performance of any listed business; customers must conduct their own checks before engaging a provider; and any agreements entered into are solely between the customer and the provider.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">10. Limitation of Liability</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  To the maximum extent permitted by law, MyLocalPro is not liable for any loss, damage, injury, dispute, delay, poor workmanship, or financial loss arising from services provided by businesses listed on the Platform. MyLocalPro does not guarantee uninterrupted or error-free access to the Platform. Users use the Platform at their own risk. Nothing in these Terms excludes rights under Australian Consumer Law that cannot legally be excluded.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">11. Intellectual Property</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  All website content including branding, logos, graphics, text, design elements, and platform functionality remain the intellectual property of MyLocalPro unless otherwise stated. Users must not reproduce, copy, distribute, or use content without written permission.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">12. Privacy</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  MyLocalPro may collect personal and business information required to operate the Platform. Information may include name, phone number, email address, business information, and service locations. Information will not be sold to third parties. By using the Platform, users consent to the collection and use of information for operational and marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">13. Promotional Use</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  Businesses agree that MyLocalPro may use business names, logos, listing images, reviews, and promotional material for marketing and advertising purposes relating to the Platform.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">14. Suspension or Termination</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  MyLocalPro may suspend or terminate access to the Platform at any time where a user breaches these Terms, payments remain unpaid, fraudulent or misleading conduct occurs, or a business damages the reputation of the Platform.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">15. Changes to Terms</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  MyLocalPro reserves the right to modify these Terms and Conditions at any time. Updated versions will be published on the website and become effective immediately upon publication.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">16. Governing Law</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  These Terms and Conditions are governed by the laws of Tasmania, Australia. Any disputes arising from the use of the Platform will be subject to the jurisdiction of Tasmanian courts.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">17. Contact Information</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  For all enquiries relating to these Terms and Conditions, please contact: MyLocalPro, ABN 39 494 930 909, Email: contactmylocalpro@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
