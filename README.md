# Lilly Info — Company & Medicines Overview

An independent, informational website about Eli Lilly and Company: its history and the medicines
it offers. **Not affiliated with or endorsed by Eli Lilly and Company.** Not medical advice.

## Structure

- `backend/` — Node.js + Express API serving company and medicine data (`/api/company`, `/api/medicines`, `/api/medicines/:slug`)
- `frontend/` — Next.js (App Router, TypeScript, Tailwind CSS) site that consumes the API

## Running locally

This project uses [nvm](https://github.com/nvm-sh/nvm). An `.nvmrc` (`lts/krypton`, Node 24) is provided.

```bash
nvm use
```

### 1. Backend API

```bash
cd backend
npm install
npm run dev      # http://localhost:4000
```

### 2. Frontend

In a second terminal:

```bash
cd frontend
npm install
npm run dev       # http://localhost:3000
```

The frontend reads `NEXT_PUBLIC_API_URL` from `frontend/.env.local` (defaults to `http://localhost:4000`).

## Pages

- `/` — Home: company intro, therapeutic areas, featured medicines
- `/about` — Company facts and history timeline
- `/medicines` — Full medicine list, filterable by category
- `/medicines/[slug]` — Individual medicine detail page
