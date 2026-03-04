# Events App

A full-featured events management application built with **Next.js 15**, **React 19**, and **TypeScript**. Browse events, view details, and create new ones — all with a clean UI, form validation, and global state management.

**Live demo:** https://events-app-lime.vercel.app

---

## Features

- Browse a list of events on the home page
- View individual event details at `/event/[id]`
- Create a new event via a validated form at `/create/new-event`
- Client-side state management with Redux Toolkit
- Form handling with React Hook Form + Zod schema validation
- Date picker powered by react-datepicker
- Toast notifications via react-hot-toast
- Styled with styled-components
- Next.js API Routes for data fetching and event creation

---

## Tech Stack

| Technology | Version |
|---|---|
| Next.js | 15.x (Turbopack) |
| React | 19.x |
| TypeScript | 5.x |
| Redux Toolkit | 2.x |
| React Hook Form | 7.x |
| Zod | 4.x |
| styled-components | 6.x |
| react-datepicker | 8.x |
| react-hot-toast | 2.x |

---

## Project Structure

```
events-app/
├── app/
│   ├── api/
│   │   └── events/          # GET all events, POST new event
│   │       └── [id]/        # GET single event by ID
│   ├── components/
│   │   ├── event/           # Single event component
│   │   ├── event-list/      # Events list component + models
│   │   ├── main/            # Main layout component
│   │   └── nav-bar/         # Navigation bar
│   ├── create/
│   │   └── new-event/       # Create event page
│   ├── event/
│   │   └── [id]/            # Event detail page
│   ├── lib/                 # Shared utilities
│   ├── shared/              # Shared UI components
│   └── store/               # Redux store + slices
├── data/
│   └── events.json          # Local JSON data source
└── public/                  # Static assets
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended), npm, or yarn

### Installation

```bash
git clone https://github.com/VicTyslenko/events-app.git
cd events-app
pnpm install
```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
pnpm build
pnpm start
```

---

## Deployment

Deployed on [Vercel](https://vercel.com). Each push to `main` triggers an automatic deployment.
