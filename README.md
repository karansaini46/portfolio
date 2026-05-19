# Karan Saini Portfolio

Premium full-stack developer portfolio built with Next.js, TypeScript, TailwindCSS, and Framer Motion.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Edit Content

Update portfolio copy, URLs, skills, proof points, contact details, and project data in:

```text
src/data/portfolio.ts
```

## Project Screenshots

Drop images into:

```text
public/projects/d-desk/
public/projects/invoiceflow/
public/projects/devmind-ai/
```

Then add the matching web paths to the project `screenshots` array in `src/data/portfolio.ts`.

Example:

```ts
screenshots: ["/projects/d-desk/dashboard.png"]
```

## Environment

No environment variables are required.
