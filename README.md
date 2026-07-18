# ClaimMate.ai

AI-powered insurance claim assistant. See `docs/PHASE1_PLANNING.md` for the
full page/feature/role inventory this scaffold is based on.

## Stack
Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui-style components ·
React Hook Form + Zod · TanStack Query · Prisma + PostgreSQL (Neon) · Express
backend (Phase 7) · JWT auth

## Getting started locally

```bash
npm install
cp .env.example .env    # fill in real values
npx prisma generate
npm run dev
```

Open http://localhost:3000

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial scaffold: Phase 1 + Phase 2"
gh repo create claimmate --private --source=. --push
# or create a repo on github.com and:
# git remote add origin <your-repo-url>
# git push -u origin main
```

## Project structure

```
src/
  app/
    (public)/       # landing, about, services, contact, login, register, forgot-password
    (dashboard)/
      user/          # policies, claims, payments, notifications, profile, settings
      admin/         # users, policies, claims, payments, reports, analytics, settings
    api/             # route handlers (or proxy to Express backend in Phase 7)
  components/
    ui/              # Button, Input, Card, Modal, etc. (Phase 3)
    layout/          # Navbar, Footer, Sidebar
    shared/          # Providers, cross-cutting components
  lib/               # utils, api client, auth helpers
  hooks/             # custom React hooks
  types/             # shared TypeScript types
prisma/
  schema.prisma      # draft schema, refine in Phase 6
docs/
  PHASE1_PLANNING.md
```

## Status

- [x] Phase 1: Planning (landing page inventoried; auth + dashboard Figma frames pending)
- [x] Phase 2: Project setup (this scaffold)
- [ ] Phase 3: Shared components (Button done, rest pending)
- [ ] Phase 4: Public website
- [ ] Phase 5: Dashboard UI
- [ ] Phase 6: Database design (draft schema exists, needs review)
- [ ] Phase 7: Backend
- [ ] Phase 8: Frontend + backend integration
- [ ] Phase 9: AI chatbot (Benji)
- [ ] Phase 10: Final features
- [ ] Phase 11: Deployment
