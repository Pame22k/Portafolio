import { Github, Mail } from "lucide-react";
import { profile } from "@/data/content";
import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-navy-900 py-24 text-white">
      <div className="bg-grid absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading dark number="06" eyebrow="Contacto" title="Hablemos" intro="Si quieres conversar sobre un proyecto, una oportunidad o una idea, escríbeme." />
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal className="space-y-4">
            <a href={`mailto:${profile.email}`} className="focus-ring flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-sky/50">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-electric"><Mail size={20} /></span>
              <span><span className="block text-xs uppercase tracking-wider text-sky">Correo</span><span className="break-all">{profile.email}</span></span>
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="focus-ring flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 p-5 transition hover:border-sky/50">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-electric"><Github size={20} /></span>
              <span><span className="block text-xs uppercase tracking-wider text-sky">GitHub</span>github.com/Pame22k</span>
            </a>
          </Reveal>
          <Reveal delay={0.1}><ContactForm /></Reveal>
        </div>
      </div>
    </section>
  );
}
