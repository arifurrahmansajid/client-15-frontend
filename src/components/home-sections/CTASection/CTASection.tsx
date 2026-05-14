import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import tradie1Img from "@/assets/tradie-1.png";
import tradie2Img from "@/assets/tradie-2.png";

export function CTASection() {
  return (
    <section className="py-[70px] md:py-[100px] bg-white">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-navy-gradient p-10 md:p-16 lg:p-20 shadow-[0_20px_60px_rgb(10,24,48,0.12)]"
        >
          {/* Glow blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#097DDD]/15 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#097DDD]/10 rounded-full blur-[80px] pointer-events-none" />

          {/* Dot grid */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, #E4EAF1 1.5px, transparent 1.5px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-16 lg:gap-10">
            {/* Left Content */}
            <div className="flex-1 max-w-xl space-y-6">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Are You a Skilled <br />
                <span className="text-[#097DDD]">Tradie?</span>
              </h2>
              <div className="space-y-4">
                <p className="text-[#E4EAF1]/70 text-sm md:text-base leading-relaxed font-medium">
                  Join Trusted Tradie Network today to connect with clients searching for reliable professionals. Get started now and showcase your expertise to those who need your services.
                </p>
                <p className="text-[#E4EAF1]/70 text-sm md:text-base leading-relaxed font-medium">
                  With our platform, you can unlock steady work, increase your visibility, and grow your business effortlessly. Get started now and be the go-to tradie in your area.
                </p>
              </div>
              
              <div className="pt-4">
                <Link
                  to="/list-business"
                  className="shine-btn inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#097DDD] px-8 py-4 text-[11px] font-black uppercase tracking-[0.18em] text-white shadow-[0_8px_32px_rgb(9,125,221,0.4)] hover:shadow-[0_12px_40px_rgb(9,125,221,0.55)] hover:bg-[#0a8ef0] hover:-translate-y-1 transition-all duration-300 group"
                >
                  <Briefcase className="h-4 w-4" />
                  Find Jobs
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Overlapping Images */}
            <div className="flex-1 relative w-full h-[350px] sm:h-[450px] lg:h-[500px] max-w-lg mx-auto lg:ml-auto lg:mr-0 mt-8 lg:mt-0">
              <motion.div
                initial={{ opacity: 0, x: -20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute top-0 left-0 w-[65%] h-[65%] rounded-[2rem] overflow-hidden border-[6px] border-[#0A1830] shadow-2xl z-10 bg-[#0A1830]"
              >
                <img 
                  src={tradie1Img} 
                  alt="Tradie working" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="absolute bottom-0 right-0 w-[70%] h-[70%] rounded-[2rem] overflow-hidden border-[6px] border-[#0A1830] shadow-2xl z-20 bg-[#0A1830]"
              >
                <img 
                  src={tradie2Img} 
                  alt="Tradie construction" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" 
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
