"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-[#1a1a1a] relative overflow-hidden">
              {/* Placeholder silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-[#c8a96e]/10 border border-[#c8a96e]/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-[#c8a96e]/40 text-3xl font-display font-light">IT</span>
                  </div>
                  <p className="text-[#f5f5f0]/20 text-xs tracking-widest uppercase">Photo à ajouter</p>
                </div>
              </div>
              {/* Decorative corner */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l border-t border-[#c8a96e]/30" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r border-b border-[#c8a96e]/30" />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
          >
            <p className="text-xs tracking-[0.5em] uppercase text-[#c8a96e] mb-6">À propos</p>
            <h2 className="font-display text-4xl md:text-5xl text-[#f5f5f0] font-light leading-tight mb-8">
              Chaque image <br />
              <em>raconte quelque chose.</em>
            </h2>

            <div className="space-y-4 text-[#f5f5f0]/60 leading-relaxed">
              {siteData.about.bio.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-10 border-t border-white/5">
              {siteData.about.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                >
                  <p className="font-display text-4xl text-[#c8a96e] font-light mb-1">{stat.value}</p>
                  <p className="text-xs text-[#f5f5f0]/40 leading-tight">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
