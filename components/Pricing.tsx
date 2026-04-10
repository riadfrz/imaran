"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <span className="section-badge">Offres</span>
          <h2 className="section-heading text-white">Des formats simples a acheter et faciles a activer.</h2>
        </motion.div>

        <div className="grid gap-5 xl:grid-cols-3">
          {siteData.pricing.map((tier, index) => (
            <motion.article
              key={tier.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className={`panel rounded-[28px] p-7 ${
                tier.recommended ? "border-accent ring-1 ring-accent/30" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                    {tier.name}
                  </p>
                  <p className="mt-4 font-display text-5xl font-extrabold text-white">{tier.price}</p>
                </div>
                {tier.recommended ? (
                  <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-black">
                    Recommande
                  </span>
                ) : null}
              </div>

              <ul className="mt-8 space-y-3 text-sm leading-6 text-muted">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-accent">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.ctaHref}
                className={`btn-shimmer mt-8 inline-flex rounded-full px-6 py-4 text-sm font-semibold ${
                  tier.recommended
                    ? "bg-accent text-black hover:bg-accent-dim"
                    : "border border-white/10 text-white hover:border-accent/40 hover:bg-white/4"
                }`}
              >
                {tier.cta}
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
