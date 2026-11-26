import Link from "next/link";
import { ArrowUpRight, BookOpen, Compass, Gamepad2, Heart, Recycle, Smartphone, Trophy, type LucideIcon } from "lucide-react";
import { experience, type ExperienceItem } from "@/data/content";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons: Record<ExperienceItem["icon"], LucideIcon> = {
  trophy: Trophy, heart: Heart, book: BookOpen, recycle: Recycle, gamepad: Gamepad2, smartphone: Smartphone, compass: Compass,
};

function Card({ it }: { it: ExperienceItem }) {
  const Icon = icons[it.icon];
  const inner = (
    <article className="h-full rounded-2xl border border-navy/10 bg-white p-6 transition hover:-translate-y-1 hover:shadow-soft">
      <div className="flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-sky"><Icon size={20} /></span>
        <span className="text-xs font-semibold uppercase tracking-wider text-electric">{it.tag}</span>
      </div>
      <h4 className="mt-4 flex items-center justify-between gap-2 font-display text-lg font-semibold">{it.title}{it.href && <ArrowUpRight size={18} className="shrink-0 text-electric" />}</h4>
      <p className="mt-2 text-sm leading-relaxed text-navy/70">{it.text}</p>
    </article>
  );
  return it.href ? <Link href={it.href} className="focus-ring block h-full rounded-2xl">{inner}</Link> : inner;
}

export default function Experience() {
  return (
    <section id="experiencia" className="bg-mist py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading number="02" eyebrow="Experiencia" title="Logros, voluntariado y proyectos" intro="Mi experiencia viene de las competencias, el voluntariado, las tutorías y los proyectos de innovación en los que he participado." />
        <div className="space-y-14">
          {experience.map((g) => (
            <div key={g.group}>
              <Reveal>
                <h3 className="font-display text-xl font-semibold">{g.group}</h3>
                <p className="mt-1 text-navy/60">{g.intro}</p>
              </Reveal>
              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {g.items.map((it, i) => (
                  <Reveal key={it.title} delay={i * 0.06}><Card it={it} /></Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
