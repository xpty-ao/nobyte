# Nobyte Academy — Official Website

The bilingual (Portuguese / English) marketing site for **Nobyte Academy**, an Angolan
cybersecurity education and career-development organization.

Built with Next.js (App Router), TypeScript, Tailwind CSS v4, `next-intl`, and
Framer Motion. Production-ready and structured for deployment to Cloudflare Pages.

---

## 1. Tech stack

| Layer            | Choice                                   |
| ----------------- | ---------------------------------------- |
| Framework          | Next.js 16 (App Router)                  |
| Language           | TypeScript                               |
| Styling            | Tailwind CSS v4 (CSS-first `@theme`)     |
| i18n               | `next-intl` (localized pathnames)        |
| Motion             | Framer Motion                            |
| Icons              | lucide-react                             |
| Fonts              | Space Grotesk, Manrope, JetBrains Mono — self-hosted via `next/font/local` (no external font requests) |
| Deployment target  | Cloudflare Pages                         |

---

## 2. Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` (Portuguese, default) or `http://localhost:3000/en`.

Other useful scripts:

```bash
npm run build   # production build
npm run start   # run the production build locally
npm run lint    # ESLint
```

---

## 3. Project structure

```
src/
  app/
    [locale]/            # everything the visitor sees is nested under the active locale
      layout.tsx         # <html>/<body>, fonts, metadata, JSON-LD, Navbar/Footer
      page.tsx            # homepage
      about/              # -> /sobre (pt) - /en/about (en)
      programs/           # -> /programas (pt) - /en/programs (en)
      careers/            # -> /carreiras (pt) - /en/careers (en)
      security-day/       # -> /security-day (pt & en)
      corporate/          # -> /corporativo (pt) - /en/corporate (en)
      contact/            # -> /contactos (pt) - /en/contact (en)
    robots.ts             # /robots.txt
    sitemap.ts            # /sitemap.xml (with hreflang alternates)
    globals.css           # design tokens (@theme) + base styles
  components/
    layout/               # Navbar, Footer, Logo, LanguageSwitcher, NewsletterForm
    sections/             # Homepage sections + inner-page building blocks
    ui/                    # Button, Container, Eyebrow, HexLattice, Reveal
  i18n/
    routing.ts             # locales, default locale, localized pathnames map
    navigation.ts           # typed Link/useRouter/usePathname wrappers
    request.ts              # loads the right messages/<locale>.json
  messages/
    pt.json                 # Portuguese copy (default locale)
    en.json                 # English copy
  lib/
    fonts.ts                # next/font/local definitions
    metadata.ts              # shared per-page <head> metadata builder
  fonts/                     # self-hosted .ttf files (OFL licensed)
  middleware.ts               # next-intl locale routing/negotiation
public/images/                 # logo, favicons, OG image (derived from your brand kit)
brand-assets/                  # raw/original brand files (not served) — source logo, cover art
```

---

## 4. Editing content

**All visible text lives in `src/messages/pt.json` and `src/messages/en.json`.**
Nothing is hardcoded in components — edit the JSON, not the `.tsx` files, to
change copy. Keep both files structurally identical (same keys); check with:

```bash
node -e "
const pt = require('./src/messages/pt.json');
const en = require('./src/messages/en.json');
const keys = (o, p='') => Object.entries(o).flatMap(([k,v]) =>
  typeof v === 'object' && v !== null && !Array.isArray(v) ? keys(v, p+'.'+k) : [p+'.'+k]);
const a = new Set(keys(pt)), b = new Set(keys(en));
console.log('missing in en:', [...a].filter(k => !b.has(k)));
console.log('missing in pt:', [...b].filter(k => !a.has(k)));
"
```

### Adding a new page

1. Add the internal route key to `pathnames` in `src/i18n/routing.ts` (this is
   what maps `/about` to `/sobre` in Portuguese and `/about` in English).
2. Create `src/app/[locale]/<folder>/page.tsx` where `<folder>` matches the
   internal key you added.
3. Add matching `meta.<page>` and `<page>` sections to both message files.
4. Add the route to the `pages` array in `src/app/sitemap.ts`.

### Swapping fonts

Fonts are self-hosted (no Google Fonts network call at build or runtime) via
`src/lib/fonts.ts` and the `.ttf` files in `src/fonts/`. To use different
faces, replace the files there and update the `localFont` calls — no other
code changes needed, since the whole app reads from the `--font-display`,
`--font-body`, and `--font-mono` CSS variables defined in `globals.css`.

### Design tokens

Colors, animation keyframes, and the signature hex-lattice/scan-line motif are
defined once in `src/app/globals.css` under `@theme`. Change a hex value there
and it propagates everywhere (Tailwind v4 auto-generates utilities like
`bg-violet`, `text-mist-2`, etc. from these tokens).

---

## 5. Forms

The contact form (`src/components/sections/ContactForm.tsx`) and newsletter
form (`src/components/layout/NewsletterForm.tsx`) are UI-complete but not
wired to a backend yet — they currently just show a success state on submit.
Connect them to whichever service you prefer:

- A Next.js **Route Handler** (`src/app/api/contact/route.ts`) that emails you
  or writes to a database,
- A form service like **Formspree**, **Basin**, or **Resend**,
- Or a Cloudflare Pages **Function** if you deploy there (see `DEPLOYMENT.md`).

---

## 6. Environment variables

The site currently ships with no required environment variables — all brand
assets and copy are static. If you wire up the contact form to an email
service or database, document the variables you add here and in a
`.env.example` file, for instance:

```bash
# .env.example
RESEND_API_KEY=
CONTACT_RECIPIENT_EMAIL=geral@nobyte.academy
```

Never commit real secrets — only `.env.example` with empty/placeholder values
should be tracked in git.

---

## 7. SEO

- Per-locale, per-page `<title>`, meta description, canonical URL, and
  `hreflang` alternates are generated from `src/lib/metadata.ts` and
  `meta.<page>` in the message files.
- `/sitemap.xml` and `/robots.txt` are generated dynamically
  (`src/app/sitemap.ts`, `src/app/robots.ts`) and include hreflang alternates
  per URL.
- Organization JSON-LD (schema.org `EducationalOrganization`) is injected in
  `src/app/[locale]/layout.tsx`.
- Update `siteUrl` in `src/lib/metadata.ts` and the equivalent constants in
  `src/app/[locale]/layout.tsx`, `sitemap.ts`, and `robots.ts` if the
  production domain changes from `https://www.nobyte.academy`.

---

## 8. Deployment

See `DEPLOYMENT.md` for step-by-step GitHub + Cloudflare Pages instructions.

---

## 9. Suggested next steps

- Replace the placeholder social links, WhatsApp number, and email in
  `Footer.tsx` / `contact.json` with real ones.
- Wire the contact and newsletter forms to a real backend (see section 5).
- Replace the placeholder partner/university names in `Closing.tsx`
  (the `Partners` section) with real logos once partnerships are confirmed.
- Add real photography/video from past Security Day editions once available —
  the site intentionally avoids stock "hacker" imagery, per the brand brief.
- Consider adding a blog/resources section for long-form security-awareness
  content (good for SEO and for repurposing Security Day talks).
