import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

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
            Privacy Policy
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-white leading-tight mb-4"
          >
            MyLocalPro Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-[#E4EAF1]/60 max-w-2xl text-base"
          >
            Effective Date: 1 June 2026. Operated by MyLocalPro, ABN 39 494 930 909.
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
            <p className="text-sm text-[#5a7089] leading-relaxed mb-6">
              This Privacy Policy explains how MyLocalPro (“MyLocalPro”, “we”, “our”, or “us”) collects, stores, uses, and protects your personal information when you use our website and services. By accessing or using the MyLocalPro platform, you agree to the terms outlined in this Privacy Policy.
            </p>
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">1. About MyLocalPro</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  MyLocalPro is a Tasmanian owned and operated online platform that connects customers with local businesses and service providers across Tasmania. This Privacy Policy applies to all users of the platform, including customers, business owners, website visitors, advertisers and enquiry submitters.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">2. Information We Collect</h2>
                <div className="space-y-3 text-sm text-[#5a7089] leading-relaxed">
                  <p>We may collect personal information that is reasonably necessary for the operation of our platform and services.</p>
                  <p className="font-bold text-[#0A1830]">2.1 Information Collected From Customers</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Suburb or location</li>
                    <li>Service enquiry details</li>
                    <li>Messages submitted through contact forms</li>
                  </ul>
                  <p className="font-bold text-[#0A1830]">2.2 Information Collected From Businesses</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Business name</li>
                    <li>Owner or representative name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Business address</li>
                    <li>Service locations</li>
                    <li>Business descriptions</li>
                    <li>Logos and photographs</li>
                    <li>ABN details</li>
                    <li>Social media links</li>
                    <li>Website details</li>
                  </ul>
                  <p className="font-bold text-[#0A1830]">2.3 Automatically Collected Information</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>IP address</li>
                    <li>Browser type</li>
                    <li>Device information</li>
                    <li>Website usage data</li>
                    <li>Pages visited</li>
                    <li>Date and time of visits</li>
                    <li>Cookies and tracking information</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">3. How We Collect Information</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  Information may be collected when users register an account, submit a business listing, contact us through forms or email, submit enquiries, subscribe to updates, interact with the website, or participate in promotions or surveys.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">4. How We Use Information</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  We use collected information to operate and improve the platform, connect customers with businesses, respond to enquiries, process subscriptions and billing, display business listings, send service updates, improve user experience, conduct marketing and promotional activities, prevent fraud or misuse, and comply with legal obligations.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">5. Business Listing Information</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  Information submitted by businesses for public listings may be displayed publicly on the MyLocalPro website. This may include business name, contact information, business descriptions, images and logos, service areas and social media links. Businesses are responsible for ensuring the information they provide is accurate and lawful.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">6. Sharing of Information</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  MyLocalPro does not sell personal information to third parties. We may share information with customers and businesses for the purpose of connecting services, with trusted service providers assisting with website hosting, payment processing, analytics, or marketing, where required by law, or to protect the legal rights or safety of MyLocalPro or its users.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">7. Cookies and Tracking Technologies</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  MyLocalPro may use cookies and similar technologies to improve website functionality and user experience. Cookies may be used to remember preferences, analyse website traffic, improve performance, and support advertising and marketing campaigns. Users may disable cookies through their browser settings, however some website features may not function correctly.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">8. Marketing Communications</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  Users may receive emails, SMS messages, or promotional communications from MyLocalPro relating to platform updates, new features, business promotions, marketing campaigns, or service announcements. Users may opt out of marketing communications at any time by contacting us or using unsubscribe functions where available.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">9. Data Security</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  We take reasonable steps to protect personal information from unauthorised access, misuse, loss, interference, disclosure, alteration or destruction. However, no online platform or electronic transmission can be guaranteed as completely secure. Users provide information at their own risk.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">10. Third-Party Services and Links</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  The MyLocalPro website may contain links to third-party websites, services, or social media platforms. We are not responsible for the privacy practices, content, or security of third-party websites. Users should review the privacy policies of external websites separately.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">11. Access and Correction of Information</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  Users may request access to personal information held by MyLocalPro and request corrections to inaccurate or outdated information. Requests can be made by contacting contactmylocalpro@gmail.com. We may require verification of identity before processing requests.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">12. Retention of Information</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  We retain personal information only for as long as reasonably necessary to operate the platform, meet legal obligations, resolve disputes, and enforce agreements. Information may be securely deleted when no longer required.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">13. Children's Privacy</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  MyLocalPro is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that information has been collected from a minor without appropriate consent, we may remove that information.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">14. Australian Privacy Principles</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  MyLocalPro aims to comply with the Australian Privacy Principles contained within the Privacy Act 1988 (Cth).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">15. Changes to This Privacy Policy</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  MyLocalPro may update this Privacy Policy at any time. Updated versions will be published on the website and become effective immediately upon publication. Users are encouraged to review this Privacy Policy periodically.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-black text-[#0A1830] mb-3">16. Contact Information</h2>
                <p className="text-sm text-[#5a7089] leading-relaxed">
                  For questions, concerns, or requests relating to this Privacy Policy, please contact: MyLocalPro, ABN 39 494 930 909, Email: contactmylocalpro@gmail.com.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
