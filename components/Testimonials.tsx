"use client";

import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-28">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <span className="section-badge">Temoignages</span>
          <h2 className="section-heading text-white">Les retours parlent autant du rendu que du confort de collaboration.</h2>
        </motion.div>

        <div className="grid gap-5 xl:grid-cols-3">
          {siteData.testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="panel rounded-[26px] p-7"
            >
              <div className="flex gap-1 text-lg text-amber-300">
                {Array.from({ length: testimonial.stars }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-white/88">{testimonial.quote}</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/15 font-semibold text-accent">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-muted">{testimonial.title}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
