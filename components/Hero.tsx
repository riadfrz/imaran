"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="section-shell relative z-10 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <span className="section-badge">{siteData.heroBadge}</span>
          <h1 className="font-display text-5xl font-extrabold leading-[0.95] text-balance text-white md:text-7xl lg:text-8xl">
            {siteData.heroHeadline.line1}
            <span className="mt-4 block text-accent">{siteData.heroHeadline.highlighted}</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            {siteData.heroSubheadline}
          </p>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row">
            <button
              onClick={() => scrollTo("pricing")}
              className="btn-shimmer rounded-full bg-accent px-7 py-4 text-sm font-semibold text-black hover:bg-accent-dim"
            >
              Voir les offres
            </button>
            <button
              onClick={() => scrollTo("work")}
              className="rounded-full border border-white/10 px-7 py-4 text-sm font-semibold text-white hover:border-accent/40 hover:bg-white/4"
            >
              Voir les resultats
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="panel relative mx-auto max-w-xl overflow-hidden rounded-[28px] p-4"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.18),transparent_35%)]" />
            <div className="relative overflow-hidden rounded-[22px] border border-white/8 bg-black/20">
              <div className="relative aspect-video">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1400&q=80"
                  alt="Apercu d'une video immobiliere"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <span className="rounded-full border border-white/12 bg-black/35 px-3 py-1 text-xs font-medium text-white/80">
                    Reel immobilier
                  </span>
                  <span className="rounded-full border border-accent/20 bg-accent/12 px-3 py-1 text-xs font-semibold text-accent">
                    00:42
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent text-2xl text-black shadow-[0_0_40px_rgba(34,197,94,0.35)]">
                    ▶
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/55">
                    Visite verticale / Paris
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold text-white">
                    Un montage qui vend l&apos;atmosphere avant la visite.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={() => scrollTo("cta")}
              className="btn-shimmer relative mt-5 w-full rounded-2xl bg-accent px-6 py-4 text-sm font-semibold text-black hover:bg-accent-dim"
            >
              Discuter du prochain bien
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
