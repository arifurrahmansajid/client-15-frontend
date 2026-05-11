import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function MostRequestedServices() {
  const services = [
    { name: "Electrician", image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80", featured: true },
    { name: "Electrician", image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80" },
    { name: "Fencing", image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&q=80" },
    { name: "Locksmith", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80" },
  ];

  return (
    <section className="bg-[#FFF0E5] py-24 md:py-32">
      <div className="container-app">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Our Most Requested <br /> House Services
          </h2>
          <Link
            to="/list-business"
            className="inline-flex items-center justify-center rounded-full bg-[#4A5568] px-10 py-5 text-sm font-black text-white hover:bg-slate-700 transition-all shadow-xl"
          >
            Post a Job
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Featured Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 relative group overflow-hidden rounded-[2.5rem] aspect-[16/10] lg:aspect-auto lg:h-[600px] shadow-2xl"
          >
            <img
              src={services[0].image}
              alt={services[0].name}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-10 left-10">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/90 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                {services[0].name}
              </span>
            </div>
          </motion.div>

          {/* Side Cards Stack */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {services.slice(1).map((service, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative group overflow-hidden rounded-[2rem] flex-1 min-h-[180px] shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-6 left-6">
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-white">
                    {service.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
