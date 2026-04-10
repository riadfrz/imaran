"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <span className="section-badge">Processus</span>
          <h2 className="section-heading text-white">Une collaboration legere, meme quand vos journees sont deja pleines.</h2>
        </motion.div>

        <div className="relative grid gap-5 border-t border-white/7 pt-8 xl:grid-cols-4">
          {siteData.processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="panel rounded-[26px] p-7"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/12 font-display text-2xl font-extrabold text-accent">
                {step.emoji}
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                Etape {index + 1}
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
