import { motion } from "framer-motion";
import logoImg from "@/assets/WhatsApp Image 2026-05-14 at 11.37.20 AM (1).jpeg";

/**
 * Shown by TanStack Router as the defaultPendingComponent
 * while navigating between pages. Replaces the default orange spinner.
 */
export function NavLoader() {
  return (
    <div className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#0A1830]">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[400px] h-[400px] rounded-full bg-[#097DDD]/10 blur-[90px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #E4EAF1 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Logo + bar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 flex flex-col items-center gap-6"
      >
        <img
          src={logoImg}
          alt="MyLocalPro"
          className="h-20 w-auto object-contain drop-shadow-2xl"
        />

        {/* Pulsing loading bar */}
        <div className="w-40 h-[3px] rounded-full bg-white/10 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              repeat: Infinity,
              duration: 0.9,
              ease: "easeInOut",
            }}
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-[#097DDD] to-transparent"
          />
        </div>
      </motion.div>
    </div>
  );
}
