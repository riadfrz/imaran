"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function PainPoints() {
  return (
    <section id="pain-points" className="py-24 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <span className="section-badge">Le probleme</span>
          <h2 className="section-heading text-white">
            Quand la post-prod traine, votre com finit toujours par ralentir.
          </h2>
          <p className="section-copy mt-4">
            Les meilleurs biens meritent mieux qu&apos;un montage reporte au week-end ou publie trop
            tard pour garder l&apos;elan.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {siteData.painPoints.map((point, index) => (
            <motion.article
              key={point.quote}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="panel rounded-[26px] p-7"
            >
              <p className="font-display text-2xl font-bold leading-tight text-white">{point.quote}</p>
              <p className="mt-4 text-sm leading-7 text-muted">{point.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
