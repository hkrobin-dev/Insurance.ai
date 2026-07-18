# ClaimMate.ai — Phase 1: Planning

## Overview
ClaimMate.ai is an AI-powered insurance claim assistant. It helps policyholders
(claimants) push back against insurers — generating emails, formal letters,
analyzing policies, and prepping for EUOs (Examinations Under Oath).

Sold as a SaaS with 3 pricing tiers (Monthly, One-Time Claim, Yearly), gated by
feature/tool access and access level to "Benji" (branded AI assistant).

## Pages Identified (from Figma landing page)

| Page/Section | Notes |
|---|---|
| Navbar | Logo, Home / Features / Pricing / Contact / FAQ, Log In, Sign Up |
| Hero | Headline, CTA ("Get Started"), social proof counter |
| How It Works | 3-step process timeline |
| Features ("Smart Claim Tools") | Tool list w/ icons — confirm full list, some cut off in screenshot |
| Pricing & Feature Breakdown | 3 tiers, feature comparison |
| Testimonials | Carousel, 3+ reviews |
| Contact | Form: First Name, Last Name, Email, Country, Message |
| FAQ | Accordion, 5 questions |
| Login | *(not yet seen in Figma — need screenshot)* |
| Register | *(not yet seen in Figma — need screenshot)* |
| Forgot Password | *(not yet seen in Figma — need screenshot)* |
| User Dashboard | *(not yet seen — need Figma frames)* |
| Admin Dashboard | *(not yet seen — need Figma frames, confirm this exists)* |

**Action needed:** send remaining Figma frames (auth pages + dashboards) when ready — Phase 1 isn't fully closed until those are inventoried too. We can proceed to Phase 2/3 in parallel since they aren't blocked by this.

## Features / Tools Identified

- AI Email Response Generator
- AI Letter Generator
- Policy Analyzer (upload policy → extract coverages/exclusions/limitations)
- Proof of Loss Formatter / PDF export
- Smart Timeline
- Receipts management
- Templates
- EUO Toolkit (prep for Examination Under Oath)
- Document Export Tools
- "Benji" — tiered AI assistant (Basic inbox guidance → Full integration)

## Pricing Tiers

| Tier | Price | Includes |
|---|---|---|
| Monthly | $99/mo | Unlimited email responses, AI Letter Generator, Proof of Loss Formatter, Document Export, Basic Benji |
| One-Time Claim | $349 one-time | Full access to one claim case: unlimited AI email, Letter Generator, Proof of Loss PDF, Policy Analyzer, Smart Timeline/Receipts/Templates, Full Benji (for that claim) |
| Yearly | $899/yr | Everything in Monthly + Priority Support + full smart tools + Full Benji integration |

## User Roles

- **Guest** — browses public site, can sign up
- **User** — authenticated, subscribed to one of 3 tiers, feature access gated by tier
- **Admin** — internal role (assumed; needs confirmation from dashboard Figma frames) — manages users, claims, content

## Data Entities (early draft, refine in Phase 6)

- User (auth, profile, role, subscription tier)
- Subscription/Plan (tier, price, feature flags, billing cycle)
- Claim (tied to One-Time Claim purchase; status, timeline)
- Policy (uploaded doc, AI-extracted coverage/exclusions)
- Document (uploaded/generated files — letters, proof of loss, receipts)
- Message/Chat (Benji conversation history)
- Notification
- Review/Testimonial

## Repo & Folder Structure

See Phase 2 scaffold — repo initialized locally, ready for `git init` + push to GitHub once you connect it.

## Phase 1 Checklist

- [x] Analyze available Figma frames (landing page)
- [x] List pages (landing page complete; auth + dashboard pending)
- [x] List features
- [x] Identify user roles (Guest, User confirmed; Admin assumed — needs confirmation)
- [ ] Create GitHub repository (needs your GitHub — see note below)
- [x] Create project folders (scaffolded in Phase 2, see below)

**Note on GitHub:** I don't have internet access in this environment, so I can't create the repo for you. Run this once you have the project locally:
```bash
cd claimmate
git init
git add .
git commit -m "Initial scaffold"
gh repo create claimmate --private --source=. --push
# or push manually to a repo you create on github.com
```
