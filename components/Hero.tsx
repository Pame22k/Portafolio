"use client";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import { profile } from "@/data/content";

function DataLines() {
  const pts: [number, number][] = [[0, 150], [60, 130], [120, 140], [180, 90], [240, 100], [300, 50], [360, 60]];
  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"}${p[0]},${p[1]}`).join(" ");
  return (
    <svg viewBox="0 0 360 180" className="absolute -bottom-2 -left-10 w-72 sm:-left-16 sm:w-96" aria-hidden="true">
      <motion.path d={d} fill="none" stroke="#8EC9FF" strokeWidth="2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, ease: "easeInOut" }} />
      {pts.map((p, i) => (
        <motion.circle key={i} cx={p[0]} cy={p[1]} r="4" fill="#1F6BFF" stroke="#fff" strokeWidth="1.5" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 + i * 0.25 }} />
      ))}
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-navy-900 pt-16 text-white">
      <div className="bg-grid absolute inset-0 -z-10" aria-hidden="true" />
      <div className="absolute -right-32 -top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-electric/30 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-20 md:grid-cols-[1.25fr_1fr] md:py-28">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full border border-sky/30 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-sky">
            <span className="h-1.5 w-1.5 rounded-full bg-electric" /> Portafolio profesional
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Pamela Raquel <span className="text-sky">Ortiz Cruz</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-4 font-display text-lg text-sky-200">{profile.role}</motion.p>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
            {profile.tagline}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#proyectos" className="focus-ring group inline-flex items-center gap-2 rounded-full bg-electric px-6 py-3 font-medium text-white shadow-glow transition hover:bg-electric-600">
              Ver proyectos <ArrowRight size={18} className="transition group-hover:translate-x-1" />
            </a>
            <a href="#contacto" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-medium text-white transition hover:bg-white/10"><Mail size={18} /> Contacto</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-medium text-white transition hover:bg-white/10"><Github size={18} /> GitHub</a>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.25, duration: 0.7 }} className="relative mx-auto w-64 sm:w-80">
          <div className="absolute -inset-4 rounded-full border border-sky/30" aria-hidden="true" />
          <div className="absolute -inset-10 rounded-full border border-dashed border-sky/15" aria-hidden="true" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/foto-pamela.png" alt="Fotografía de Pamela Raquel Ortiz Cruz" className="relative aspect-square w-full rounded-full object-cover shadow-glow ring-4 ring-electric/60" />
          <DataLines />
        </motion.div>
      </div>
    </section>
  );
}
