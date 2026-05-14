import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText, ArrowLeft } from "lucide-react";
import heroImg from "@/assets/hero-tradie.jpg";

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
      {/* ── Banner ── */}
      <section className="relative bg-navy-gradient pt-32 pb-32 overflow-hidden">
        {/* Background image with dark overlay */}
        <img
          src={heroImg}
          alt="Tasmanian tradie at work"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A1830] via-[#0A1830]/95 to-[#0A1830]/80" />
        
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, #E4EAF1 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#097DDD]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-app relative z-10 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="h-10 w-10 rounded-full bg-[#097DDD]/20 flex items-center justify-center border border-[#097DDD]/30">
              <FileText className="h-5 w-5 text-[#097DDD]" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-5"
          >
            Terms & <span className="text-[#097DDD]">Conditions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-[#E4EAF1]/60 max-w-2xl mx-auto text-sm md:text-base font-medium tracking-wide"
          >
            Effective Date: 1 June 2026<br/>
            Operated by MyLocalPro, ABN 39 494 930 909
          </motion.p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="container-app relative z-20 pb-24 -mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-[2rem] bg-white border border-[#cdd6e3] shadow-[0_20px_60px_rgb(10,24,48,0.08)] p-8 md:p-14 lg:p-20">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#097DDD] hover:text-[#0a8ef0] mb-10 group"
            >
              <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>

            <div className="space-y-12">
              {[
                { title: "1. About MyLocalPro", content: "MyLocalPro is an online platform designed to connect customers with independent local service providers throughout Tasmania. MyLocalPro allows businesses to advertise their services and allows customers to search for and contact providers directly. MyLocalPro is not a contractor, employer, agent, or partner of any listed business. All work arrangements, pricing, communication, disputes, payments, warranties, and agreements are solely between the customer and the service provider." },
                { title: "2. Eligibility", content: "To use MyLocalPro, users must be at least 18 years of age, provide accurate and truthful information, use the Platform lawfully and respectfully, and not impersonate another person or business. MyLocalPro reserves the right to suspend or remove any account that breaches these Terms and Conditions." },
                { title: "3. Service Areas", content: "MyLocalPro currently operates within the following Tasmanian locations: Hobart, Launceston, Devonport and Burnie. Additional locations may be added at the discretion of MyLocalPro." },
                { title: "4. Business Categories", content: "MyLocalPro currently offers listings within the following 19 categories: Dog Walking, Babysitting, Ironing Services, Handyman Services, Lawn Mowing and Gardening, Domestic Cleaning, Car Detailing, Pressure Washing, Carpet Cleaning, Plumbers, Electricians, Builders, Painters, Roofers, Concreters, Plasterers, Landscapers, Photographers and Fencing Contractors. MyLocalPro reserves the right to add, remove, rename, or modify categories at any time." },
                { title: "5. Subscription Structure", content: (
                  <div className="space-y-4">
                    <p><strong className="text-[#0A1830]">5.1 Free Access During 2026:</strong> All approved businesses listed on MyLocalPro will receive free access to the platform from launch until 31 December 2026. No subscription fees will apply during this promotional period. Businesses may cancel their listing at any time during the free period.</p>
                    <p><strong className="text-[#0A1830]">5.2 Paid Subscriptions From 1 January 2027:</strong> Beginning 1 January 2027, businesses wishing to remain active on the platform will transition to a paid monthly subscription model. Subscription pricing is based on business category tiers.</p>
                  </div>
                )},
                { title: "6. Subscription Tiers", content: (
                  <div className="space-y-6">
                    <div className="bg-[#E4EAF1]/30 p-5 rounded-xl border border-[#cdd6e3]">
                      <h4 className="font-bold text-[#0A1830] text-base mb-2">Tier 1 — $10 Per Month</h4>
                      <p className="text-sm">Dog Walking, Babysitting, Ironing Services.</p>
                    </div>
                    <div className="bg-[#E4EAF1]/30 p-5 rounded-xl border border-[#cdd6e3]">
                      <h4 className="font-bold text-[#0A1830] text-base mb-2">Tier 2 — $20 Per Month</h4>
                      <p className="text-sm">Handyman Services, Lawn Mowing and Gardening, Domestic Cleaning, Car Detailing, Pressure Washing, Carpet Cleaning.</p>
                    </div>
                    <div className="bg-[#E4EAF1]/30 p-5 rounded-xl border border-[#cdd6e3]">
                      <h4 className="font-bold text-[#0A1830] text-base mb-2">Tier 3 — $40 Per Month</h4>
                      <p className="text-sm">Plumbers, Electricians, Builders, Painters, Roofers, Concreters, Plasterers, Landscapers, Photographers, Fencing Contractors.</p>
                    </div>
                  </div>
                )},
                { title: "7. Payments and Billing", content: "Subscription fees are billed monthly in advance. Failure to make payment may result in suspension or removal of the business listing. Subscription fees are non-refundable except where required under Australian Consumer Law. MyLocalPro reserves the right to alter pricing with a minimum of 30 days written notice." },
                { title: "8. Business Listings", content: "Businesses agree that all information provided must be accurate and up to date, they are legally permitted to operate their business, any licences, insurance, registrations, or certifications required by law are their responsibility, and listings must not contain misleading, false, offensive, or unlawful content. MyLocalPro reserves the right to edit, reject, suspend, or remove listings at its discretion." },
                { title: "9. Customer Responsibilities", content: "Customers using the Platform acknowledge that MyLocalPro does not guarantee the quality, reliability, licensing, or performance of any listed business; customers must conduct their own checks before engaging a provider; and any agreements entered into are solely between the customer and the provider." },
                { title: "10. Limitation of Liability", content: "To the maximum extent permitted by law, MyLocalPro is not liable for any loss, damage, injury, dispute, delay, poor workmanship, or financial loss arising from services provided by businesses listed on the Platform. MyLocalPro does not guarantee uninterrupted or error-free access to the Platform. Users use the Platform at their own risk. Nothing in these Terms excludes rights under Australian Consumer Law that cannot legally be excluded." },
                { title: "11. Intellectual Property", content: "All website content including branding, logos, graphics, text, design elements, and platform functionality remain the intellectual property of MyLocalPro unless otherwise stated. Users must not reproduce, copy, distribute, or use content without written permission." },
                { title: "12. Privacy", content: "MyLocalPro may collect personal and business information required to operate the Platform. Information may include name, phone number, email address, business information, and service locations. Information will not be sold to third parties. By using the Platform, users consent to the collection and use of information for operational and marketing purposes." },
                { title: "13. Promotional Use", content: "Businesses agree that MyLocalPro may use business names, logos, listing images, reviews, and promotional material for marketing and advertising purposes relating to the Platform." },
                { title: "14. Suspension or Termination", content: "MyLocalPro may suspend or terminate access to the Platform at any time where a user breaches these Terms, payments remain unpaid, fraudulent or misleading conduct occurs, or a business damages the reputation of the Platform." },
                { title: "15. Changes to Terms", content: "MyLocalPro reserves the right to modify these Terms and Conditions at any time. Updated versions will be published on the website and become effective immediately upon publication." },
                { title: "16. Governing Law", content: "These Terms and Conditions are governed by the laws of Tasmania, Australia. Any disputes arising from the use of the Platform will be subject to the jurisdiction of Tasmanian courts." },
                { title: "17. Contact Information", content: "For all enquiries relating to these Terms and Conditions, please contact: MyLocalPro, ABN 39 494 930 909, Email: contactmylocalpro@gmail.com." },
              ].map((section, idx) => (
                <div key={idx} className="group">
                  <h2 className="text-xl md:text-2xl font-black text-[#0A1830] mb-4 group-hover:text-[#097DDD] transition-colors duration-300">
                    {section.title}
                  </h2>
                  {typeof section.content === 'string' ? (
                    <p className="text-sm md:text-base text-[#5a7089] leading-relaxed">
                      {section.content}
                    </p>
                  ) : (
                    <div className="text-sm md:text-base text-[#5a7089] leading-relaxed">
                      {section.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
