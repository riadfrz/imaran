"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Work() {
  const carouselRef = useRef<HTMLDivElement>(null);

  return (
    <section id="work" className="py-24 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <span className="section-badge">Le resultat</span>
          <h2 className="section-heading text-white">Le resultat parle d&apos;lui-meme</h2>
          <p className="section-copy mt-4">
            Des formats verticaux concus pour stopper le scroll, montrer le bien rapidement et
            garder une signature visuelle nette.
          </p>
        </motion.div>

        <motion.div ref={carouselRef} className="overflow-hidden">
          <motion.div
            className="carousel-track flex gap-4 pl-1"
            drag="x"
            dragConstraints={carouselRef}
            dragElastic={0.1}
          >
            {siteData.work.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.videoUrl}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="panel group relative flex w-[260px] flex-shrink-0 overflow-hidden rounded-[24px]"
              >
                <div className="relative aspect-[9/16] w-full">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    sizes="260px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10" />
                  <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/35 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    {item.category}
                  </div>
                  <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg text-black shadow-[0_0_32px_rgba(34,197,94,0.35)]">
                    ▶
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">{item.client}</p>
                    <h3 className="mt-2 font-display text-2xl font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
