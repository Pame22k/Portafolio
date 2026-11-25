"use client";
import { useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { profile } from "@/data/content";

const links = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#sobre-mi", label: "Sobre mí" },
  { href: "/#experiencia", label: "Experiencia" },
  { href: "/#proyectos", label: "Proyectos" },
  { href: "/#habilidades", label: "Habilidades" },
  { href: "/#formacion", label: "Formación" },
  { href: "/#contacto", label: "Contacto" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-900/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Navegación principal">
        <a href="/#inicio" className="focus-ring flex items-center gap-2 rounded font-display text-sm font-semibold text-white">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-electric text-xs">PO</span>
          <span className="hidden sm:inline">{profile.shortName}</span>
        </a>
        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="focus-ring rounded-full px-3 py-1.5 text-sm text-sky-200 transition hover:bg-white/10 hover:text-white">{l.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="focus-ring hidden items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-sm text-white transition hover:border-sky hover:bg-white/10 sm:flex">
            <Github size={16} /> GitHub
          </a>
          <button onClick={() => setOpen(!open)} className="focus-ring rounded p-2 text-white lg:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-navy-900 px-5 pb-5 lg:hidden">
          <ul className="flex flex-col pt-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-3 text-sky-200 hover:bg-white/10 hover:text-white">{l.label}</a>
              </li>
            ))}
            <li>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="mt-2 flex items-center gap-2 rounded-lg px-3 py-3 text-white"><Github size={16} /> GitHub</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
