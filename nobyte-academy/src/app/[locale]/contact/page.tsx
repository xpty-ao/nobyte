import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { buildPageMetadata } from "@/lib/metadata";
import { MapPin, Mail, Clock } from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata(locale, "contact", "/contact");
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <h3 className="font-display text-lg font-semibold">{t("info.title")}</h3>
                <div className="mt-5 space-y-4 text-sm text-mist-2">
                  <div className="flex items-center gap-3">
                    <MapPin className="shrink-0 text-violet-2" size={18} />
                    {t("info.location")}
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="shrink-0 text-violet-2" size={18} />
                    {t("info.email")}
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="shrink-0 text-violet-2" size={18} />
                    {t("info.hours")}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
