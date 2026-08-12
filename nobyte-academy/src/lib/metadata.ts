import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { getPathname } from "@/i18n/navigation";
import type { AppPathnames } from "@/i18n/routing";

const siteUrl = "https://www.nobyte.academy";

export async function buildPageMetadata(
  locale: string,
  metaKey: string,
  pathname: AppPathnames
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `meta.${metaKey}` });

  const ptPath = getPathname({ locale: "pt", href: pathname });
  const enPath = getPathname({ locale: "en", href: pathname });

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "pt" ? ptPath : enPath,
      languages: {
        pt: ptPath,
        en: enPath,
        "x-default": ptPath,
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: `${siteUrl}${locale === "pt" ? ptPath : enPath}`,
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
  };
}
