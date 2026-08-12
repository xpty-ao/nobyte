# Deployment Guide

This project uses `next-intl` middleware to rewrite friendly, localized URLs
(`/sobre`, `/programas`, `/en/about`, ...) at request time. That means it
needs to run as a live Next.js application (not a pure static export) —
Cloudflare Pages supports this via the official **`@cloudflare/next-on-pages`**
adapter, which compiles the app (including middleware) to run on Cloudflare's
edge network.

---

## 1. Push the project to GitHub

```bash
cd nobyte-academy
git init
git add .
git commit -m "Initial commit: Nobyte Academy website"
git branch -M main
git remote add origin https://github.com/<your-org>/nobyte-academy.git
git push -u origin main
```

`node_modules`, `.next`, and `.env*` are already excluded via `.gitignore`.

---

## 2. Deploy to Cloudflare Pages

### Option A — Cloudflare Dashboard (recommended for first deploy)

1. Go to **Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git**.
2. Select the `nobyte-academy` repository.
3. Configure the build:
   - **Framework preset:** `Next.js`
   - **Build command:**
     ```
     npx @cloudflare/next-on-pages@latest
     ```
   - **Build output directory:**
     ```
     .vercel/output/static
     ```
   - **Node version:** 20 (set `NODE_VERSION=20` under Environment Variables if needed)
4. Under **Settings → Functions → Compatibility flags**, add `nodejs_compat`
   for both Production and Preview.
5. Click **Save and Deploy**.

Cloudflare will build and give you a `*.pages.dev` URL. Add your custom domain
(`www.nobyte.academy`) under **Custom domains** once you're happy with the
preview.

### Option B — Wrangler CLI

```bash
npm install --save-dev @cloudflare/next-on-pages wrangler
npx @cloudflare/next-on-pages@latest
npx wrangler pages deploy .vercel/output/static --project-name=nobyte-academy
```

Add a `wrangler.toml` if you want compatibility flags tracked in-repo:

```toml
name = "nobyte-academy"
compatibility_date = "2026-01-01"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".vercel/output/static"
```

---

## 3. Environment variables

None are required for the current build (see `.env.example`). If you wire up
the contact form to an email/API service, add the variables under
**Pages → Settings → Environment variables** for both Production and Preview,
matching whatever you put in `.env.example`.

---

## 4. Custom domain & DNS

1. In Cloudflare Pages, go to your project → **Custom domains → Set up a domain**.
2. Enter `www.nobyte.academy` (and `nobyte.academy` if you want the apex to
   resolve too — Cloudflare will offer to set up a redirect).
3. If the domain's DNS already lives in the same Cloudflare account, the
   records are created automatically. Otherwise, add the CNAME Cloudflare
   shows you at your current DNS provider.
4. Update `siteUrl` in `src/lib/metadata.ts`, `src/app/[locale]/layout.tsx`,
   `src/app/sitemap.ts`, and `src/app/robots.ts` if the final domain differs
   from `https://www.nobyte.academy`.

---

## 5. Verifying the deployment

After the first deploy, spot-check:

- `/` and `/en` load with the correct language and content.
- `/sobre`, `/programas`, `/carreiras`, `/security-day`, `/corporativo`,
  `/contactos` all resolve (Portuguese paths).
- `/en/about`, `/en/programs`, `/en/careers`, `/en/security-day`,
  `/en/corporate`, `/en/contact` all resolve (English paths).
- `/sitemap.xml` and `/robots.txt` return valid content with your real domain.
- The language switcher in the navbar keeps you on the equivalent page when
  toggling PT/EN.
- Run the site through Google's Rich Results Test and PageSpeed Insights once
  live, since both benefit from a real (non-localhost) URL.

---

## 6. Alternative: Vercel

Since this is a stock Next.js App Router project, it also deploys to Vercel
with zero configuration (`vercel.com/new` → import the GitHub repo → deploy).
Useful as a quick staging environment if you want to preview changes before
they hit Cloudflare.
