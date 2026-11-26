# Portafolio profesional · Pamela Raquel Ortiz Cruz

Portafolio web de una sola página con vista de detalle para cada proyecto. Presenta mi perfil, experiencia, proyectos (cuatro actividades del curso de Inteligencia Artificial y cuatro proyectos personales), habilidades, formación y un formulario de contacto conectado a una API REST.

🔗 **Portafolio publicado:** _(pega aquí tu enlace de Vercel)_

> 📸 **Captura de pantalla:** agrega una imagen en `public/captura.png` y quita este aviso. Luego muéstrala con `![Captura del portafolio](public/captura.png)`.

## Tecnologías

- [Next.js 14](https://nextjs.org/) (App Router) y [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://motion.dev/) para animaciones y [Lucide React](https://lucide.dev/) para iconos
- Git y GitHub para el control de versiones, y Vercel para el despliegue
- [Resend](https://resend.com/) para enviar los correos del formulario

## Estructura del proyecto

```
app/
  layout.tsx            Fuentes, metadatos y HTML base
  page.tsx              Página principal (una sola página con 7 secciones)
  globals.css           Estilos globales de Tailwind
  proyectos/[slug]/     Página de detalle de cada proyecto
  api/contact/route.ts  API REST: POST /api/contact
components/             Nav, Hero, About, Experience, Projects, Skills, Education, Contact, ContactForm...
data/
  content.ts            Textos de perfil, experiencia, habilidades y formación
  projects.ts           Contenido de los 7 proyectos (edita aquí para completar pendientes)
lib/validation.ts       Validación del formulario (usada en el cliente y el servidor)
public/
  evidencias/           Capturas y gráficas de los proyectos
  codigo/               Código fuente de las actividades
```

## Instalación y ejecución local

Necesitas [Node.js 18.18 o superior](https://nodejs.org/).

```bash
npm install
cp .env.example .env.local   # en Windows: copy .env.example .env.local
npm run dev
```

Abre http://localhost:3000. Para probar la versión de producción: `npm run build` y luego `npm start`.

## Variables de entorno

Se definen en `.env.local` (local) y en Vercel → Settings → Environment Variables. **Nunca se suben a GitHub.**

| Variable | Descripción |
|---|---|
| `RESEND_API_KEY` | Clave de API de Resend |
| `CONTACT_TO_EMAIL` | Correo donde llegan los mensajes |
| `CONTACT_FROM_EMAIL` | Remitente (en pruebas: `Portafolio <onboarding@resend.dev>`) |

Sin `RESEND_API_KEY`, el endpoint valida los datos pero responde `503` e informa que el envío no está configurado. No simula enviar correos.

> Con el remitente de prueba de Resend, solo se puede enviar al correo con el que creaste tu cuenta de Resend. Para otros destinatarios se necesita verificar un dominio.

## API REST

`POST /api/contact` con cuerpo JSON `{ "name", "email", "message" }`.

| Código | Cuándo |
|---|---|
| 200 | Mensaje enviado |
| 400 | JSON inválido o campos que no pasan la validación (devuelve `errors` por campo) |
| 502 / 500 | Falló el servicio de correo o la red |
| 503 | Faltan las variables de entorno |

Validaciones: nombre de 2 a 80 caracteres, correo con formato válido y mensaje de 10 a 2000 caracteres.

## Lo aprendido

_(Escribe aquí con tus palabras 3 o 4 líneas: por ejemplo, cómo se organiza un proyecto en Next.js, cómo funciona una ruta de API, cómo usaste Git y Vercel, y qué fue lo más difícil.)_

## Sugerencia para GitHub

- **Descripción:** Portafolio profesional de Pamela Ortiz hecho con Next.js, React, TypeScript y Tailwind CSS.
- **Topics:** `portfolio`, `nextjs`, `react`, `typescript`, `tailwindcss`, `vercel`, `machine-learning`, `python`, `framer-motion`
