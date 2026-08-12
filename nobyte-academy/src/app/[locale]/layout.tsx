import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { spaceGrotesk, manrope, jetbrainsMono } from "@/lib/fonts";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "../globals.css";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta.home" });
  const siteUrl = "https://www.nobyte.academy";

  return {
    metadataBase: new URL(siteUrl),
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: locale === "pt" ? "/" : "/en",
      languages: {
        pt: "/",
        en: "/en",
        "x-default": "/",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: locale === "pt" ? siteUrl : `${siteUrl}/en`,
      siteName: "Nobyte Academy",
      locale: locale === "pt" ? "pt_AO" : "en_US",
      type: "website",
      images: [{ url: "/images/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/og-image.jpg"],
    },
    icons: {
      icon: [
        { url: "/images/icon-32.png", sizes: "32x32", type: "image/png" },
        { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      ],
      apple: [{ url: "/images/icon-180.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Nobyte Academy",
    url: "https://www.nobyte.academy",
    logo: "https://www.nobyte.academy/images/nobyte-logo-icon.png",
    description:
      locale === "pt"
        ? "Academia angolana de cibersegurança dedicada a formação prática, mentoria e desenvolvimento de carreira."
        : "Angolan cybersecurity academy dedicated to practical training, mentorship and career development.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Luanda",
      addressCountry: "AO",
    },
    sameAs: [
      "https://linkedin.com",
      "https://facebook.com",
      "https://instagram.com",
    ],
  };

  return (
    <html lang={locale} className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-[var(--color-void)] font-body antialiased">
        <NextIntlClientProvider>
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
