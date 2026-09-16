# Nakuru Hardware Commerce Platform

A mobile-first local hardware commerce platform for Nakuru County, Kenya.

## Product Goal

Enable customers to discover hardware products, request materials, place orders, make payments, and track fulfillment through a structured digital commerce experience.

## Target Users

- Homeowners
- Landlords
- Professional fundis
- Contractors

## Core Commerce Flow

```
Discover
→ Product
→ Cart
→ Checkout
→ Payment
→ Order Confirmation
→ Fulfillment
→ Delivery
```

## Assisted Procurement Flow

```
Request Materials
→ Clarification
→ Quote
→ Accept Quote
→ Payment
→ Fulfillment
```

## Technology

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Zod
- Safaricom Daraja / M-Pesa
- Google Maps
- Vercel

## Development Workflow

```
main
↓
feature/*
↓
Pull Request
↓
Code Review
↓
Merge
```

## Branch Naming

- `feature/*`
- `fix/*`
- `chore/*`
- `docs/*`
- `refactor/*`

## Project Structure

```
Hardware-E-Shop/
│
├── app/                    # Next.js App Router routes & pages
│   ├── api/                # Route handlers (server-side HTTP endpoints)
│   ├── (customer)/         # Customer-facing routes (route group)
│   └── (admin)/            # Admin routes (route group)
│
├── components/             # Reusable UI components
│   ├── ui/                 # shadcn/ui primitives (Button, Input, Card ...)
│   └── shared/             # Shared feature-agnostic components
│
├── features/               # Feature-scoped modules
│   ├── products/           # Product catalog & discovery
│   ├── cart/               # Shopping cart
│   ├── checkout/           # Checkout flow
│   ├── orders/             # Orders & fulfillment
│   └── procurement/        # Assisted procurement (materials, quotes)
│
├── lib/                    # Shared utilities & client initializers
│   ├── supabase/           # Supabase client setup
│   ├── auth/               # Auth helpers & guards
│   └── utils/              # Shared helper functions
│
├── services/               # Business logic / data abstractions (product, cart, order, payment, procurement)
├── schemas/                # Validation & Zod data schemas
├── types/                  # Shared TypeScript type definitions
│
├── supabase/
│   ├── migrations/         # SQL migrations (tracked by Supabase)
│   └── seed/               # Seed data scripts
│
├── public/                 # Static assets (images, fonts, favicon)
│
├── .env.example            # Environment variable template
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites

- Node.js >= 20
- npm / pnpm / yarn
- A Supabase project (https://supabase.com)

### Installation

1. Clone the repository.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Then fill in your Supabase project URL and anon key.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

### Applying Database Migrations

```bash
supabase start        # start the local stack
supabase db reset     # apply migrations + seed data locally
```

## Available Scripts

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the development server         |
| `npm run build`   | Build the application for production |
| `npm run start`   | Run the production build             |
| `npm run lint`    | Lint the codebase                    |

> Scripts assume a Next.js setup; adjust in `package.json` as the toolchain is added.

## Phase Progress

- **Phase 0 — Repository Foundation**: Directory scaffolding, `.gitignore`, `.env.example`, `README.md`. Empty directories are tracked via `.gitkeep`.
- **Phase 0 — Architecture**: Nested directory architecture established (`app/api`, route groups, `components/ui|shared`, feature modules, `lib` layers, staged `services`/`schemas`). Actual `services/*.service.ts` and `schemas/*.schema.ts` files are **not** created yet — architecture only.