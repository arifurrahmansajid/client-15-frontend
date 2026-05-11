import { motion } from "framer-motion";
import { MapPin, Search, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      title: "Enter your location and find skilled experts near you.",
      icon: <MapPin className="h-10 w-10 text-orange-500" />,
      color: "bg-[#FFF8F0]",
      rotation: "-rotate-2"
    },
    {
      title: "Browse verified profiles, read reviews, and compare options.",
      icon: <Search className="h-10 w-10 text-blue-500" />,
      color: "bg-[#F0F7FF]",
      rotation: "rotate-2",
      offset: "mt-12"
    },
    {
      title: "Connect directly and get the job done with confidence.",
      icon: <CheckCircle2 className="h-10 w-10 text-emerald-500" />,
      color: "bg-[#F0FFF4]",
      rotation: "-rotate-1"
    },
  ];

  return (
    <section className="relative pb-24 md:pb-32 overflow-hidden bg-white">
      <div className="container-app relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">How It Works</h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
            Trusted Tradie Network connects users with skilled trades in Australia, making it easy to find a tradie,
            book a tradie, or hire tradies for any job. For tradies, it's a platform to secure quality tradie
            jobs and grow their business. Simple, reliable, and efficient!
          </p>
        </div>

        {/* Dashed Path (Desktop only) */}
        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-40 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1000 200" fill="none">
            <path
              d="M0,100 C150,100 250,180 400,180 C550,180 650,20 800,20 C900,20 1000,100 1000,100"
              stroke="#CBD5E1"
              strokeWidth="2"
              strokeDasharray="8 8"
              className="animate-[dash_20s_linear_infinite]"
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`flex flex-col items-center text-center ${step.offset || ''}`}
            >
              <div className={`relative w-full max-w-[320px] p-10 rounded-[2.5rem] ${step.color} ${step.rotation} border border-slate-100 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group cursor-default`}>
                <div className="mb-8 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="relative h-20 w-20 bg-white rounded-3xl shadow-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                      {step.icon}
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-800 leading-snug">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -1000;
          }
        }
      `}</style>
    </section>
  );
}
