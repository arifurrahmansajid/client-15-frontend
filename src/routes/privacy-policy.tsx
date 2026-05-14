import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Shield, ArrowLeft } from "lucide-react";
import heroImg from "@/assets/hero-tradie.jpg";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — MyLocalPro Australia" },
      { name: "description", content: "Read the MyLocalPro privacy policy for customers, businesses and website visitors." },
    ],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
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
              <Shield className="h-5 w-5 text-[#097DDD]" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight mb-5"
          >
            Privacy <span className="text-[#097DDD]">Policy</span>
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

            <p className="text-base md:text-lg text-[#5a7089] leading-relaxed mb-10 font-medium">
              This Privacy Policy explains how MyLocalPro (“MyLocalPro”, “we”, “our”, or “us”) collects, stores, uses, and protects your personal information when you use our website and services. By accessing or using the MyLocalPro platform, you agree to the terms outlined in this Privacy Policy.
            </p>
            <div className="space-y-12">
              {[
                {
                  title: "1. About MyLocalPro",
                  content: "MyLocalPro is a Tasmanian owned and operated online platform that connects customers with local businesses and service providers across Tasmania. This Privacy Policy applies to all users of the platform, including customers, business owners, website visitors, advertisers and enquiry submitters."
                },
                {
                  title: "2. Information We Collect",
                  content: (
                    <div className="space-y-6">
                      <p>We may collect personal information that is reasonably necessary for the operation of our platform and services.</p>
                      
                      <div>
                        <h4 className="font-bold text-[#0A1830] text-base mb-3 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#097DDD]"></span>
                          2.1 Information Collected From Customers
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2 text-[#5a7089] ml-4">
                          <li>• Full name</li><li>• Email address</li><li>• Phone number</li><li>• Suburb or location</li><li>• Service enquiry details</li><li>• Messages submitted through contact forms</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#0A1830] text-base mb-3 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#097DDD]"></span>
                          2.2 Information Collected From Businesses
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2 text-[#5a7089] ml-4">
                          <li>• Business name</li><li>• Owner or representative name</li><li>• Phone number</li><li>• Email address</li><li>• Business address</li><li>• Service locations</li><li>• Business descriptions</li><li>• Logos and photographs</li><li>• ABN details</li><li>• Social media links</li><li>• Website details</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-bold text-[#0A1830] text-base mb-3 flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-[#097DDD]"></span>
                          2.3 Automatically Collected Information
                        </h4>
                        <ul className="grid sm:grid-cols-2 gap-2 text-[#5a7089] ml-4">
                          <li>• IP address</li><li>• Browser type</li><li>• Device information</li><li>• Website usage data</li><li>• Pages visited</li><li>• Date and time of visits</li><li>• Cookies and tracking information</li>
                        </ul>
                      </div>
                    </div>
                  )
                },
                { title: "3. How We Collect Information", content: "Information may be collected when users register an account, submit a business listing, contact us through forms or email, submit enquiries, subscribe to updates, interact with the website, or participate in promotions or surveys." },
                { title: "4. How We Use Information", content: "We use collected information to operate and improve the platform, connect customers with businesses, respond to enquiries, process subscriptions and billing, display business listings, send service updates, improve user experience, conduct marketing and promotional activities, prevent fraud or misuse, and comply with legal obligations." },
                { title: "5. Business Listing Information", content: "Information submitted by businesses for public listings may be displayed publicly on the MyLocalPro website. This may include business name, contact information, business descriptions, images and logos, service areas and social media links. Businesses are responsible for ensuring the information they provide is accurate and lawful." },
                { title: "6. Sharing of Information", content: "MyLocalPro does not sell personal information to third parties. We may share information with customers and businesses for the purpose of connecting services, with trusted service providers assisting with website hosting, payment processing, analytics, or marketing, where required by law, or to protect the legal rights or safety of MyLocalPro or its users." },
                { title: "7. Cookies and Tracking Technologies", content: "MyLocalPro may use cookies and similar technologies to improve website functionality and user experience. Cookies may be used to remember preferences, analyse website traffic, improve performance, and support advertising and marketing campaigns. Users may disable cookies through their browser settings, however some website features may not function correctly." },
                { title: "8. Marketing Communications", content: "Users may receive emails, SMS messages, or promotional communications from MyLocalPro relating to platform updates, new features, business promotions, marketing campaigns, or service announcements. Users may opt out of marketing communications at any time by contacting us or using unsubscribe functions where available." },
                { title: "9. Data Security", content: "We take reasonable steps to protect personal information from unauthorised access, misuse, loss, interference, disclosure, alteration or destruction. However, no online platform or electronic transmission can be guaranteed as completely secure. Users provide information at their own risk." },
                { title: "10. Third-Party Services and Links", content: "The MyLocalPro website may contain links to third-party websites, services, or social media platforms. We are not responsible for the privacy practices, content, or security of third-party websites. Users should review the privacy policies of external websites separately." },
                { title: "11. Access and Correction of Information", content: "Users may request access to personal information held by MyLocalPro and request corrections to inaccurate or outdated information. Requests can be made by contacting contactmylocalpro@gmail.com. We may require verification of identity before processing requests." },
                { title: "12. Retention of Information", content: "We retain personal information only for as long as reasonably necessary to operate the platform, meet legal obligations, resolve disputes, and enforce agreements. Information may be securely deleted when no longer required." },
                { title: "13. Children's Privacy", content: "MyLocalPro is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that information has been collected from a minor without appropriate consent, we may remove that information." },
                { title: "14. Australian Privacy Principles", content: "MyLocalPro aims to comply with the Australian Privacy Principles contained within the Privacy Act 1988 (Cth)." },
                { title: "15. Changes to This Privacy Policy", content: "MyLocalPro may update this Privacy Policy at any time. Updated versions will be published on the website and become effective immediately upon publication. Users are encouraged to review this Privacy Policy periodically." },
                { title: "16. Contact Information", content: "For questions, concerns, or requests relating to this Privacy Policy, please contact: MyLocalPro, ABN 39 494 930 909, Email: contactmylocalpro@gmail.com." },
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
