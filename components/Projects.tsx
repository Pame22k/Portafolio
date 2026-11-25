import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { courseProjects, personalProjects, type Project } from "@/data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function Card({ p, i }: { p: Project; i: number }) {
  const cover = p.evidence[0];
  return (
    <Reveal delay={i * 0.06}>
      <Link href={`/proyectos/${p.slug}`} className="focus-ring group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-sky/50 hover:bg-white/10">
        <div className="relative aspect-[16/9] overflow-hidden bg-navy-700">
          {cover ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={cover.src} alt={cover.alt} className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" />
          ) : (
            <div className="bg-grid grid h-full place-items-center text-sky/70">
              <span className="font-display text-3xl font-semibold tracking-tight">{p.title}</span>
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-sky">{p.badge}</span>
          <h4 className="mt-2 flex items-center justify-between gap-2 font-display text-xl font-semibold text-white">
            {p.title}
            <ArrowUpRight size={20} className="shrink-0 text-sky transition group-hover:translate-x-1 group-hover:-translate-y-1" />
          </h4>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{p.summary}</p>
          {p.tech.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.slice(0, 4).map((t) => (<span key={t} className="rounded-md bg-white/10 px-2 py-0.5 text-xs text-sky-200">{t}</span>))}
            </div>
          )}
        </div>
      </Link>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="proyectos" className="relative overflow-hidden bg-navy-900 py-24 text-white">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading dark number="03" eyebrow="Proyectos" title="Del código a la solución" intro="Cada tarjeta abre una página con la explicación, el proceso, las evidencias y el código." />

        <Reveal><h3 className="font-display text-xl font-semibold">Actividades del curso</h3><p className="mt-1 text-sm text-sky-200/80">Las cuatro actividades obligatorias de las 10 semanas.</p></Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {courseProjects.map((p, i) => (<Card key={p.slug} p={p} i={i} />))}
        </div>

        <div className="mt-16">
          <Reveal><h3 className="font-display text-xl font-semibold">Proyectos personales</h3><p className="mt-1 text-sm text-sky-200/80">Propuestas de innovación y tecnología en las que he participado.</p></Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {personalProjects.map((p, i) => (<Card key={p.slug} p={p} i={i} />))}
          </div>
        </div>
      </div>
    </section>
  );
}
