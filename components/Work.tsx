"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteData } from "@/lib/data";

type Project = (typeof siteData.work)[0];

function VideoModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-4xl aspect-video bg-black"
        >
          <iframe
            src={project.videoUrl + "?autoplay=1"}
            className="w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
          <button
            onClick={onClose}
            className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm tracking-widest uppercase transition-colors"
          >
            ✕ Fermer
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
        className="relative aspect-video cursor-pointer overflow-hidden group"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setModalOpen(true)}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${
            hovered ? "scale-105" : "scale-100"
          }`}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-[#0a0a0a] transition-opacity duration-500 ${
            hovered ? "opacity-60" : "opacity-20"
          }`}
        />

        {/* Content */}
        <div
          className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-400 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-xs tracking-[0.4em] uppercase text-[#c8a96e] mb-1">{project.category}</p>
          <h3 className="font-display text-2xl text-[#f5f5f0] font-light mb-1">{project.title}</h3>
          <p className="text-sm text-[#f5f5f0]/50">{project.client}</p>
        </div>

        {/* Play button */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-400 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-14 h-14 rounded-full border border-[#c8a96e]/70 flex items-center justify-center">
            <span className="text-[#c8a96e] text-lg ml-1">▶</span>
          </div>
        </div>
      </motion.div>

      {modalOpen && <VideoModal project={project} onClose={() => setModalOpen(false)} />}
    </>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-28 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="text-xs tracking-[0.5em] uppercase text-[#c8a96e] mb-4">Travaux</p>
          <h2 className="font-display text-5xl md:text-6xl text-[#f5f5f0] font-light">
            Sélection de projets
          </h2>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {siteData.work.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
