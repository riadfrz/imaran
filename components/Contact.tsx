"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/data";

type FormState = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Sends via mailto fallback — replace with API route or Resend/Formspree later
    try {
      const subject = encodeURIComponent(`Message de ${form.name}`);
      const body = encodeURIComponent(`Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${siteData.email}?subject=${subject}&body=${body}`;
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border-b border-white/10 py-4 text-[#f5f5f0] placeholder-[#f5f5f0]/25 text-sm tracking-wide focus:outline-none focus:border-[#c8a96e] transition-colors duration-300";

  return (
    <section id="contact" className="py-32 bg-[#0d0d0d]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="text-xs tracking-[0.5em] uppercase text-[#c8a96e] mb-6">Contact</p>
              <h2 className="font-display text-5xl md:text-6xl text-[#f5f5f0] font-light leading-tight mb-6">
                Travaillons <br />
                <em>ensemble.</em>
              </h2>
              <p className="text-[#f5f5f0]/50 leading-relaxed">
                Vous avez un projet en tête ? <br />
                Décrivez-le moi — je vous répondrai sous 48h.
              </p>
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-14 lg:mt-0 flex items-center gap-8"
            >
              {[
                { label: "Instagram", href: siteData.socials.instagram },
                { label: "Vimeo", href: siteData.socials.vimeo },
                { label: "LinkedIn", href: siteData.socials.linkedin },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.4em] uppercase text-[#f5f5f0]/40 hover:text-[#c8a96e] transition-colors duration-300"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col gap-8"
          >
            <div>
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                value={form.name}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                value={form.email}
                onChange={handleChange}
                required
                className={inputClass}
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Parlez-moi de votre projet..."
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="group self-start flex items-center gap-4 bg-[#c8a96e] text-[#0a0a0a] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#d4b87e] disabled:opacity-50 transition-all duration-300"
            >
              <span>
                {status === "sending" ? "Envoi..." : "Envoyer le message"}
              </span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>

            {status === "sent" && (
              <p className="text-xs tracking-widest uppercase text-[#c8a96e]">
                Message envoyé — à bientôt !
              </p>
            )}
            {status === "error" && (
              <p className="text-xs tracking-widest uppercase text-red-400">
                Une erreur est survenue. Réessayez.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
