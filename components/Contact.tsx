"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-[#0d0d0d]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#c8a96e] mb-6">Contact</p>
          <h2 className="font-display text-5xl md:text-7xl text-[#f5f5f0] font-light leading-tight mb-6">
            Travaillons <br />
            <em>ensemble.</em>
          </h2>
          <p className="text-[#f5f5f0]/50 text-lg mb-12 max-w-md mx-auto">
            Vous avez un projet ? Discutons-en.
          </p>

          {/* Email CTA */}
          <motion.a
            href={`mailto:${siteData.email}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-4 bg-[#c8a96e] text-[#0a0a0a] px-10 py-5 text-sm tracking-widest uppercase font-medium hover:bg-[#d4b87e] transition-all duration-300 group"
          >
            <span>Envoyer un message</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </motion.a>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-14 flex items-center justify-center gap-8"
          >
            {[
              { label: "Instagram", href: siteData.socials.instagram },
              { label: "Vimeo", href: siteData.socials.vimeo },
              { label: "LinkedIn", href: siteData.socials.linkedin },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.4em] uppercase text-[#f5f5f0]/40 hover:text-[#c8a96e] transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
