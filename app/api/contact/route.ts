import { NextResponse } from "next/server";
import { validateContact } from "@/lib/validation";

export const runtime = "nodejs";

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "El cuerpo de la solicitud no es JSON válido." }, { status: 400 });
  }

  const { ok, errors, data } = validateContact((body ?? {}) as Record<string, unknown>);
  if (!ok) {
    return NextResponse.json({ ok: false, message: "Revisa los campos del formulario.", errors }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portafolio <onboarding@resend.dev>";

  // Sin credenciales NO se simula el envío: se informa con claridad.
  if (!apiKey || !to) {
    console.error("[contact] Falta RESEND_API_KEY o CONTACT_TO_EMAIL.");
    return NextResponse.json(
      { ok: false, message: "El envío de correos aún no está configurado en el servidor. Escríbeme directamente por correo." },
      { status: 503 }
    );
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: data.email,
        subject: `Nuevo mensaje del portafolio de ${data.name}`,
        html: `<p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
<p><strong>Correo:</strong> ${escapeHtml(data.email)}</p>
<p><strong>Mensaje:</strong></p><p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>`,
      }),
    });

    if (!res.ok) {
      console.error("[contact] Resend respondió", res.status, await res.text());
      return NextResponse.json(
        { ok: false, message: "No se pudo enviar el mensaje en este momento. Inténtalo de nuevo más tarde." },
        { status: 502 }
      );
    }
    return NextResponse.json({ ok: true, message: "¡Mensaje enviado! Gracias por escribirme." }, { status: 200 });
  } catch (err) {
    console.error("[contact] Error de red", err);
    return NextResponse.json({ ok: false, message: "Ocurrió un error inesperado al enviar el mensaje." }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: false, message: "Usa POST /api/contact." }, { status: 405, headers: { Allow: "POST" } });
}
