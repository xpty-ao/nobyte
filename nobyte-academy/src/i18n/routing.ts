import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["pt", "en"],
  defaultLocale: "pt",
  localePrefix: "as-needed",
  pathnames: {
    "/": "/",
    "/about": {
      pt: "/sobre",
      en: "/about",
    },
    "/programs": {
      pt: "/programas",
      en: "/programs",
    },
    "/careers": {
      pt: "/carreiras",
      en: "/careers",
    },
    "/security-day": {
      pt: "/security-day",
      en: "/security-day",
    },
    "/corporate": {
      pt: "/corporativo",
      en: "/corporate",
    },
    "/contact": {
      pt: "/contactos",
      en: "/contact",
    },
  },
});

export type AppPathnames = keyof typeof routing.pathnames;
