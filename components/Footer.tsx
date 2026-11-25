import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900 py-8 text-center text-sm text-sky-200/70">
      © {new Date().getFullYear()} {profile.name} · Hecho con Next.js, React, TypeScript y Tailwind CSS
    </footer>
  );
}
