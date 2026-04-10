"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-4xl"
        >
          <span className="section-badge">La solution</span>
          <h2 className="section-heading text-white">
            Vous filmez, je monte.
            <br />
            Vous vendez, je gere la com.
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {siteData.features.map((feature) => (
            <motion.article
              key={feature.title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group panel rounded-[26px] p-7 hover:border-accent/30"
            >
              <div className="icon-glow flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-2xl text-accent">
                {feature.icon}
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{feature.description}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
