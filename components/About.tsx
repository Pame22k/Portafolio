import { Compass, Target } from "lucide-react";
import { about } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading number="01" eyebrow="Sobre mí" title="Estrategia, análisis y creatividad" />
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="space-y-5 text-lg leading-relaxed text-navy/80">
            {about.paragraphs.map((p) => (<p key={p}>{p}</p>))}
            <div className="pt-2">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">Intereses</p>
              <div className="flex flex-wrap gap-2">
                {about.interests.map((i) => (<span key={i} className="rounded-full bg-sky-100 px-4 py-1.5 text-sm font-medium text-navy">{i}</span>))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="space-y-4">
            <div className="rounded-2xl border border-navy/10 bg-mist p-6">
              <h3 className="flex items-center gap-2 font-display font-semibold"><Compass size={18} className="text-electric" /> Objetivo académico</h3>
              <p className="mt-2 text-navy/75">{about.academicGoals}</p>
            </div>
            <div className="rounded-2xl border border-navy/10 bg-mist p-6">
              <h3 className="flex items-center gap-2 font-display font-semibold"><Target size={18} className="text-electric" /> Metas profesionales</h3>
              <p className="mt-2 text-navy/75">{about.professionalGoals}</p>
            </div>
          </Reveal>
        </div>
        <Reveal className="mt-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-navy/50">Fortalezas</p>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {about.strengths.map((s, i) => (
              <li key={s} className="flex items-center gap-3 rounded-xl border border-navy/10 px-4 py-3 text-sm font-medium transition hover:border-electric hover:shadow-soft">
                <span className="font-mono text-xs text-electric">{String(i + 1).padStart(2, "0")}</span>{s}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
