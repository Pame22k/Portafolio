export type ContactInput = { name: string; email: string; message: string };
export type FieldErrors = Partial<Record<keyof ContactInput, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function validateContact(input: Partial<Record<keyof ContactInput, unknown>>): {
  ok: boolean;
  errors: FieldErrors;
  data: ContactInput;
} {
  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";
  const errors: FieldErrors = {};

  if (!name) errors.name = "El nombre es obligatorio.";
  else if (name.length < 2) errors.name = "El nombre es demasiado corto.";
  else if (name.length > 80) errors.name = "El nombre no puede superar 80 caracteres.";

  if (!email) errors.email = "El correo es obligatorio.";
  else if (!EMAIL_RE.test(email) || email.length > 120) errors.email = "Escribe un correo válido (ej. nombre@correo.com).";

  if (!message) errors.message = "El mensaje es obligatorio.";
  else if (message.length < 10) errors.message = "El mensaje debe tener al menos 10 caracteres.";
  else if (message.length > 2000) errors.message = "El mensaje no puede superar 2000 caracteres.";

  return { ok: Object.keys(errors).length === 0, errors, data: { name, email, message } };
}
