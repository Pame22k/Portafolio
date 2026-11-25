import { Award, BookOpen, GraduationCap } from "lucide-react";
import { education } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="formacion" className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading number="05" eyebrow="Formación académica" title="Mi trayectoria" />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <ol className="relative space-y-8 border-l-2 border-electric/30 pl-8">
            {education.timeline.map((e, i) => (
              <Reveal key={e.place} delay={i * 0.1}>
                <li className="relative">
                  <span className={`absolute -left-[2.6rem] top-1 grid h-5 w-5 place-items-center rounded-full ring-4 ring-mist ${e.status === "Finalizado" ? "bg-electric" : "bg-white ring-offset-0 border-2 border-electric"}`} />
                  <span className="text-xs font-semibold uppercase tracking-wider text-electric">{e.status} · {e.period}</span>
                  <h3 className="mt-1 flex items-center gap-2 font-display text-xl font-semibold"><GraduationCap size={20} className="text-navy/60" />{e.place}</h3>
                  <p className="mt-1 text-navy/70">{e.degree}</p>
                </li>
              </Reveal>
            ))}
          </ol>
          <div className="space-y-5">
            <Reveal>
              <div className="rounded-2xl border border-navy/10 bg-white p-6">
                <h3 className="flex items-center gap-2 font-display font-semibold"><Award size={18} className="text-electric" /> Certificaciones</h3>
                <ul className="mt-3 space-y-2 text-sm text-navy/80">
                  {education.certifications.map((c) => (<li key={c} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />{c}</li>))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-navy/10 bg-white p-6">
                <h3 className="flex items-center gap-2 font-display font-semibold"><BookOpen size={18} className="text-electric" /> Cursos y formación complementaria</h3>
                <ul className="mt-3 space-y-2 text-sm text-navy/80">
                  {education.courses.map((c) => (<li key={c} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />{c}</li>))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
