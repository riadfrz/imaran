"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 fill-current">
      <path d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 1.8A3.7 3.7 0 0 0 3.8 7.5v9a3.7 3.7 0 0 0 3.7 3.7h9a3.7 3.7 0 0 0 3.7-3.7v-9a3.7 3.7 0 0 0-3.7-3.7h-9Zm9.65 1.35a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.8A3.2 3.2 0 1 0 12 15.2 3.2 3.2 0 0 0 12 8.8Z" />
    </svg>
  );
}

export default function CTASection() {
  return (
    <section id="cta" className="py-24 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="panel rounded-[34px] px-6 py-10 md:px-10 md:py-14"
        >
          <div className="mx-auto max-w-4xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent text-black shadow-[0_0_40px_rgba(34,197,94,0.32)]">
              <InstagramIcon />
            </div>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight text-white md:text-6xl">
              {siteData.ctaSection.heading}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted">
              {siteData.ctaSection.subtext}
            </p>
            <a
              href={siteData.ctaSection.buttonHref}
              target="_blank"
              rel="noreferrer"
              className="btn-shimmer mt-8 inline-flex rounded-full bg-accent px-8 py-4 text-sm font-semibold text-black hover:bg-accent-dim"
            >
              {siteData.ctaSection.buttonLabel}
            </a>
            <p className="mt-5 text-sm leading-6 text-muted">{siteData.ctaSection.socialProof}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
