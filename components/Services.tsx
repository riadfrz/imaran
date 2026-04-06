"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-xl"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#c8a96e] mb-4">Services</p>
          <h2 className="font-display text-5xl md:text-6xl text-[#f5f5f0] font-light">
            Ce que je propose
          </h2>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5">
          {siteData.services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#0a0a0a] p-10 group hover:bg-[#111] transition-colors duration-300"
            >
              <span className="text-3xl mb-6 block">{service.icon}</span>
              <h3 className="font-display text-2xl text-[#f5f5f0] font-light mb-3 group-hover:text-[#c8a96e] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#f5f5f0]/50 text-sm leading-relaxed">{service.description}</p>

              {/* Decorative line */}
              <div className="mt-8 w-8 h-px bg-[#c8a96e]/30 group-hover:w-16 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
