import Reveal from "./Reveal";

export default function SectionHeading({ number, eyebrow, title, intro, dark = false }: { number: string; eyebrow: string; title: string; intro?: string; dark?: boolean }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-electric">{number}</span>
        <span className="h-px w-10 bg-electric" />
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] ${dark ? "text-sky" : "text-navy/60"}`}>{eyebrow}</span>
      </div>
      <h2 className={`mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl ${dark ? "text-white" : "text-navy"}`}>{title}</h2>
      {intro && <p className={`mt-4 text-base leading-relaxed ${dark ? "text-sky-200/90" : "text-navy/70"}`}>{intro}</p>}
    </Reveal>
  );
}
