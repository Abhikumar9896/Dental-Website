# Dental Esthetique

Website for Dental Esthetique clinic in Noida.

## Tech Stack

Frontend: React 19, TypeScript, Vite
Styling: Tailwind CSS 4
Routing: React Router 7
API: Vercel Serverless Functions (Nodemailer)

## Local Development

Run the following commands to start the project locally:

```bash
npm install
npm run dev
```

The site will load at http://localhost:5173

## Commands

npm run dev: Start development server
npm run build: Type check and build
npm run preview: Preview production build locally

## Deployment

The project is configured for Vercel.
To enable the appointment booking form, add the following environment variables in the Vercel dashboard:

SMTP_HOST
SMTP_PORT
SMTP_SECURE
SMTP_USER
SMTP_PASS
SMTP_FROM
MAIL_TO
