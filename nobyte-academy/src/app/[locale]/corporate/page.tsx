import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/metadata";
import { ShieldCheck, Users, GraduationCap, TrendingUp } from "lucide-react";

const benefitIcons = [ShieldCheck, Users, GraduationCap, TrendingUp];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata(locale, "corporate", "/corporate");
}

export default async function CorporatePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("corporate");

  const benefits = t.raw("benefits.items") as { title: string; description: string }[];
  const workItems = t.raw("programs.items") as string[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-bold md:text-3xl">{t("benefits.title")}</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => {
              const Icon = benefitIcons[i] ?? ShieldCheck;
              return (
                <Reveal key={b.title} delay={0.06 * i}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <Icon className="text-violet-2" size={22} strokeWidth={1.6} />
                    <h3 className="mt-4 font-display text-base font-semibold">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-2">{b.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-[var(--color-navy)] py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-bold md:text-3xl">{t("programs.title")}</h2>
          </Reveal>
          <div className="mt-8 grid gap-3">
            {workItems.map((item, i) => (
              <Reveal key={item} delay={0.05 * i}>
                <div className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-6 py-4">
                  <span className="font-mono text-xs text-violet-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-mist-2 md:text-base">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Reveal className="mx-auto max-w-[52ch] text-center">
            <h2 className="font-display text-2xl font-bold md:text-3xl">{t("cta.title")}</h2>
            <p className="mt-4 text-mist-2">{t("cta.description")}</p>
            <ButtonLink href="/contact" className="mt-8 inline-flex">
              {t("cta.button")}
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
