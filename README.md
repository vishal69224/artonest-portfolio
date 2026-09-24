# Artonest Technosys Platform

Next.js marketing site for **Artonest Technosys** (design studio), with a FastAPI backend ready for future Python / AI projects.

Live site: connect this repo to [Vercel](https://vercel.com) with **Root Directory = `frontend`**.

## Stack

| Layer | Technology |
| --- | --- |
| Frontend | Next.js, TypeScript, Tailwind CSS, Framer Motion |
| Backend | FastAPI (optional / later) |

## Local development

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel.
3. Set **Root Directory** to `frontend`.
4. Framework preset: Next.js (auto).
5. Deploy.

## Add Python projects later

Project case studies live in `frontend/src/data/projects.ts`. Add new entries there (and optional images), then commit and push — Vercel will redeploy automatically.

## Backend (optional)

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
