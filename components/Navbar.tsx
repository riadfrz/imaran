"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Monogram */}
        <button
          onClick={() => scrollTo("hero")}
          className="font-display text-xl font-light tracking-[0.3em] text-[#c8a96e] hover:opacity-70 transition-opacity"
        >
          IT
        </button>

        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-10">
          {[
            { label: "Travaux", id: "work" },
            { label: "À propos", id: "about" },
            { label: "Services", id: "services" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className="text-sm tracking-widest text-[#f5f5f0]/60 hover:text-[#f5f5f0] transition-colors uppercase"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => scrollTo("contact")}
          className="text-sm tracking-widest uppercase border border-[#c8a96e]/50 text-[#c8a96e] px-5 py-2 hover:bg-[#c8a96e] hover:text-[#0a0a0a] transition-all duration-300"
        >
          Contact
        </button>
      </div>
    </motion.nav>
  );
}
