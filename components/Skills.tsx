import { BarChart3, BrainCircuit, Code2, Globe, Wrench, Sparkles, type LucideIcon } from "lucide-react";
import { skills } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons: Record<string, LucideIcon> = { code: Code2, globe: Globe, chart: BarChart3, brain: BrainCircuit, wrench: Wrench };

export default function Skills() {
  return (
    <section id="habilidades" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading number="04" eyebrow="Habilidades" title="Lo que sé hacer y con qué herramientas" intro="Las herramientas técnicas listadas son las que he usado en mis proyectos y actividades. No muestro porcentajes de dominio." />

        <Reveal>
          <h3 className="flex items-center gap-2 font-display text-lg font-semibold"><Sparkles size={18} className="text-electric" /> Habilidades personales</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.personal.map((s) => (<span key={s} className="rounded-full border border-navy/15 px-4 py-2 text-sm font-medium transition hover:border-electric hover:bg-sky-100">{s}</span>))}
          </div>
        </Reveal>

        <h3 className="mt-14 font-display text-lg font-semibold">Herramientas y formación tecnológica</h3>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {skills.technical.map((c, i) => {
            const Icon = icons[c.icon];
            return (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="h-full rounded-2xl border border-navy/10 bg-mist p-6">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-sky"><Icon size={20} /></span>
                  <h4 className="mt-4 font-display font-semibold">{c.title}</h4>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-electric">Usado en mis proyectos</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {c.used.map((u) => (<span key={u} className="rounded-md bg-white px-2.5 py-1 text-sm shadow-sm">{u}</span>))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
