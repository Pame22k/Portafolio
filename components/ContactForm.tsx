"use client";
import { useState } from "react";
import { CheckCircle2, Loader2, Send, AlertCircle } from "lucide-react";
import { validateContact, type ContactInput, type FieldErrors } from "@/lib/validation";

type Status = { type: "idle" } | { type: "loading" } | { type: "success"; message: string } | { type: "error"; message: string };

export default function ContactForm() {
  const [values, setValues] = useState<ContactInput>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ type: "idle" });

  const onChange = (k: keyof ContactInput) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const check = validateContact(values);
    setErrors(check.errors);
    if (!check.ok) { setStatus({ type: "idle" }); return; }

    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(check.data) });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; message?: string; errors?: FieldErrors };
      if (res.ok && json.ok) {
        setStatus({ type: "success", message: json.message ?? "¡Mensaje enviado!" });
        setValues({ name: "", email: "", message: "" });
      } else {
        if (json.errors) setErrors(json.errors);
        setStatus({ type: "error", message: json.message ?? "No se pudo enviar el mensaje." });
      }
    } catch {
      setStatus({ type: "error", message: "No hay conexión con el servidor. Inténtalo de nuevo." });
    }
  }

  const base = "w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder:text-white/35 outline-none transition focus:border-sky focus:ring-2 focus:ring-electric/50";
  const loading = status.type === "loading";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5" aria-describedby="form-status">
      {(["name", "email"] as const).map((k) => (
        <div key={k}>
          <label htmlFor={k} className="mb-1.5 block text-sm font-medium text-sky-200">{k === "name" ? "Nombre" : "Correo electrónico"}</label>
          <input id={k} name={k} type={k === "email" ? "email" : "text"} autoComplete={k === "email" ? "email" : "name"} value={values[k]} onChange={onChange(k)} disabled={loading}
            aria-invalid={!!errors[k]} aria-describedby={errors[k] ? `${k}-err` : undefined}
            placeholder={k === "name" ? "Tu nombre" : "tucorreo@ejemplo.com"} className={`${base} ${errors[k] ? "border-red-400" : "border-white/15"}`} />
          {errors[k] && <p id={`${k}-err`} className="mt-1.5 text-sm text-red-300">{errors[k]}</p>}
        </div>
      ))}
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-sky-200">Mensaje</label>
        <textarea id="message" name="message" rows={5} value={values.message} onChange={onChange("message")} disabled={loading}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? "message-err" : undefined}
          placeholder="Cuéntame en qué puedo ayudarte…" className={`${base} resize-y ${errors.message ? "border-red-400" : "border-white/15"}`} />
        {errors.message && <p id="message-err" className="mt-1.5 text-sm text-red-300">{errors.message}</p>}
      </div>
      <button type="submit" disabled={loading} className="focus-ring inline-flex items-center gap-2 rounded-full bg-electric px-7 py-3 font-medium text-white shadow-glow transition hover:bg-electric-600 disabled:cursor-not-allowed disabled:opacity-60">
        {loading ? (<><Loader2 size={18} className="animate-spin" /> Enviando…</>) : (<><Send size={18} /> Enviar mensaje</>)}
      </button>
      <div id="form-status" role="status" aria-live="polite">
        {status.type === "success" && (<p className="flex items-start gap-2 rounded-xl bg-emerald-400/10 p-4 text-emerald-200"><CheckCircle2 size={20} className="shrink-0" />{status.message}</p>)}
        {status.type === "error" && (<p className="flex items-start gap-2 rounded-xl bg-red-400/10 p-4 text-red-200"><AlertCircle size={20} className="shrink-0" />{status.message}</p>)}
      </div>
    </form>
  );
}
