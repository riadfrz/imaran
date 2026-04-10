"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/8 bg-background/70 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="section-shell flex items-center justify-between py-4">
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-xl font-extrabold tracking-tight text-white"
        >
          Imran<span className="text-accent">.</span>
        </button>

        <div className="hidden items-center gap-7 md:flex">
          {siteData.navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-medium text-white/70 hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          onClick={() => scrollTo(siteData.navCta.id)}
          className="btn-shimmer rounded-full bg-accent px-5 py-3 text-sm font-semibold text-black shadow-[0_0_0_1px_rgba(255,255,255,0.05)] hover:bg-accent-dim"
        >
          {siteData.navCta.label}
        </button>
      </div>
    </motion.nav>
  );
}
