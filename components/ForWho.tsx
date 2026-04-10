"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function ForWho() {
  return (
    <section id="for-who" className="py-24 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <span className="section-badge">Pour qui ?</span>
          <h2 className="section-heading text-white">Vous vous reconnaissez ici ?</h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {siteData.personas.map((persona) => (
            <motion.article
              key={persona.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group panel overflow-hidden rounded-[26px]"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={persona.thumbnail}
                  alt={persona.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {persona.category}
                </span>
              </div>
              <div className="border-t border-transparent p-6 group-hover:border-accent/30">
                <h3 className="font-display text-2xl font-bold text-white">{persona.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{persona.description}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
