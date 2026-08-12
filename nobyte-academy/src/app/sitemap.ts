import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";

const siteUrl = "https://www.nobyte.academy";

const pages: (keyof typeof routing.pathnames)[] = [
  "/",
  "/about",
  "/programs",
  "/careers",
  "/security-day",
  "/corporate",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => {
    const ptPath = getPathname({ locale: "pt", href: page });
    const enPath = getPathname({ locale: "en", href: page });

    return {
      url: `${siteUrl}${ptPath}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          pt: `${siteUrl}${ptPath}`,
          en: `${siteUrl}${enPath}`,
        },
      },
    };
  });
}
