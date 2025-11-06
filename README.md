# Cursor Landing Page

A modern, ultra-minimalistic dark-themed landing page built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Dark theme with stunning gradient effects
- ⚡ Lightning-fast performance with Next.js 14
- 🌊 Smooth scroll animations using Framer Motion
- 🎭 Beautiful UI components from shadcn/ui
- 📱 Fully responsive design
- 🎯 SEO optimized
- ♿ Accessible components
- 🎨 Custom animations and transitions

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Waitlist Integration

The waitlist form posts to a backend endpoint that writes unique email addresses to a Google Sheet. Configure the following environment variables in a `.env.local` file:

- `NEXT_PUBLIC_BACKEND_URL` — base URL for the waitlist backend (use `http://localhost:3000/api` when relying on the built-in route handler).
- `GOOGLE_SERVICE_ACCOUNT_EMAIL` — service account email with access to the target sheet.
- `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY` — private key for the service account (wrap the key in double quotes and replace literal newlines with `\n`).
- `GOOGLE_SHEETS_SPREADSHEET_ID` — the spreadsheet ID from the Google Sheets URL.
- `GOOGLE_SHEETS_SHEET_NAME` *(optional)* — sheet tab name; defaults to `Waitlist Prism`.
- `GOOGLE_SHEETS_WAITLIST_RANGE` *(optional)* — range used for storing emails; defaults to `A:A`.

Ensure the linked spreadsheet grants edit access to the configured service account.

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── scroll-reveal.tsx
│   ├── feature-card.tsx
│   ├── animated-gradient-text.tsx
│   ├── floating-orb.tsx
│   ├── parallax-section.tsx
│   ├── testimonial-card.tsx
│   └── stat-card.tsx
└── lib/
    └── utils.ts         # Utility functions
```

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme.

### Content

Edit `app/page.tsx` to update the landing page content.

### Components

All custom components are in the `components/` directory and can be easily modified.

## Build for Production

```bash
npm run build
npm start
```

## License

MIT
