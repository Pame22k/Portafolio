import fs from "fs";
import path from "path";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Download, ExternalLink, FileCode2, Clock, Info } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProject(params.slug);
  return { title: p ? `${p.title} · Pamela Ortiz` : "Proyecto" };
}

function readCode(rel: string): string | null {
  try {
    return fs.readFileSync(path.join(process.cwd(), "public", rel), "utf8");
  } catch {
    return null;
  }
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

const Bullets = ({ items }: { items: string[] }) => (
  <ul className="space-y-3 text-navy/80">
    {items.map((t) => (<li key={t} className="flex gap-3"><span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-electric" />{t}</li>))}
  </ul>
);

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();
  const code = p.codeFile ? readCode(p.codeFile.path) : null;
  const idx = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <Nav />
      <main>
        <header className="relative overflow-hidden bg-navy-900 pb-16 pt-32 text-white">
          <div className="bg-grid absolute inset-0" aria-hidden="true" />
          <div className="relative mx-auto max-w-4xl px-5">
            <Link href="/#proyectos" className="focus-ring inline-flex items-center gap-2 rounded text-sm text-sky hover:text-white"><ArrowLeft size={16} /> Volver a proyectos</Link>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-sky">{p.badge}</p>
            <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight sm:text-5xl">{p.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/80">{p.description}</p>
            {p.tech.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tech.map((t) => (<span key={t} className="rounded-full border border-sky/30 bg-white/5 px-3 py-1 text-sm text-sky-200">{t}</span>))}
              </div>
            )}
          </div>
        </header>

        <article className="mx-auto max-w-4xl px-5 pb-24 pt-4">
          {p.note && (
            <div className="mt-8 flex gap-3 rounded-2xl border border-electric/30 bg-sky-100 p-5 text-sm text-navy">
              <Info size={20} className="mt-0.5 shrink-0 text-electric" /><p>{p.note}</p>
            </div>
          )}

          {p.story && p.story.length > 0 && (
            <Block title="¿Qué fue este proyecto?">
              <div className="space-y-4 text-lg leading-relaxed text-navy/80">{p.story.map((t) => (<p key={t}>{t}</p>))}</div>
            </Block>
          )}
          {p.features && <Block title={p.features.title}><Bullets items={p.features.items} /></Block>}

          {p.kind === "curso" && (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-navy/10 bg-mist p-6"><h2 className="font-display text-lg font-semibold">Problema</h2><p className="mt-2 text-navy/75">{p.problem}</p></div>
              <div className="rounded-2xl border border-navy/10 bg-mist p-6"><h2 className="font-display text-lg font-semibold">Objetivo</h2><p className="mt-2 text-navy/75">{p.objective}</p></div>
            </div>
          )}

          <Block title={p.kind === "curso" ? "Mi rol y responsabilidades" : "Mi participación"}><Bullets items={p.role} /></Block>
          {p.process.length > 0 && (
            <Block title="Proceso de desarrollo">
              <ol className="space-y-4">
                {p.process.map((t, i) => (
                  <li key={t} className="flex gap-4"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-navy font-mono text-xs text-sky">{i + 1}</span><span className="text-navy/80">{t}</span></li>
                ))}
              </ol>
            </Block>
          )}

          {p.evidence.length > 0 && (
            <Block title={p.kind === "curso" ? "Evidencias" : "Fotos del proyecto"}>
              <div className="grid gap-6 sm:grid-cols-2">
                {p.evidence.map((e) => (
                  <figure key={e.src} className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-soft">
                    <a href={e.src} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${e.alt} en tamaño completo`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={e.src} alt={e.alt} className="w-full" loading="lazy" />
                    </a>
                    <figcaption className="border-t border-navy/10 p-4 text-sm text-navy/70">{e.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </Block>
          )}

          {p.links && p.links.length > 0 && (
            <Block title="Enlaces">
              <div className="flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full bg-electric px-5 py-2.5 text-sm font-medium text-white transition hover:bg-electric-600">
                    <ExternalLink size={15} /> {l.label}
                  </a>
                ))}
              </div>
            </Block>
          )}

          {p.results.length > 0 && <Block title="Resultados"><Bullets items={p.results} /></Block>}
          {p.learnings.length > 0 && <Block title={p.kind === "curso" ? "Qué demuestra este ejercicio" : "Aprendizajes"}><Bullets items={p.learnings} /></Block>}

          {p.files.length > 0 && (
            <Block title="Código y archivos">
              <div className="flex flex-wrap gap-3">
                {p.files.map((f) => (
                  <a key={f.label} href={f.href} target="_blank" rel="noopener noreferrer" className="focus-ring inline-flex items-center gap-2 rounded-full border border-navy/15 px-4 py-2 text-sm font-medium transition hover:border-electric hover:bg-sky-100">
                    <ExternalLink size={15} className="text-electric" /> {f.label}
                  </a>
                ))}
                {p.files.filter((f) => f.file).map((f) => (
                  <a key={f.file} href={f.file} download className="focus-ring inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2 text-sm font-medium text-white transition hover:bg-electric">
                    <Download size={15} /> Descargar
                  </a>
                ))}
              </div>
              {code && p.codeFile && (
                <details className="mt-6 overflow-hidden rounded-2xl border border-navy/10 bg-navy-900 text-sm text-sky-100" open={false}>
                  <summary className="focus-ring flex cursor-pointer items-center gap-2 px-5 py-4 font-medium text-white"><FileCode2 size={16} className="text-sky" /> Ver código: {p.codeFile.title}</summary>
                  <pre className="max-h-[32rem] overflow-auto border-t border-white/10 p-5 font-mono text-[13px] leading-relaxed"><code>{code}</code></pre>
                </details>
              )}
            </Block>
          )}

          {p.pending.length > 0 && (
            <Block title="Pendiente por completar">
              <div className="rounded-2xl border border-amber-300/50 bg-amber-50 p-6">
                <p className="flex items-center gap-2 text-sm font-medium text-amber-900"><Clock size={16} /> Esta información todavía no está documentada, por eso no la he completado:</p>
                <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-amber-900/90">{p.pending.map((t) => (<li key={t}>{t}</li>))}</ul>
              </div>
            </Block>
          )}

          <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-navy/10 pt-8">
            <Link href="/#proyectos" className="focus-ring inline-flex items-center gap-2 rounded text-sm font-medium hover:text-electric"><ArrowLeft size={16} /> Todos los proyectos</Link>
            <Link href={`/proyectos/${next.slug}`} className="focus-ring rounded-full bg-electric px-5 py-2.5 text-sm font-medium text-white hover:bg-electric-600">Siguiente: {next.title} →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
