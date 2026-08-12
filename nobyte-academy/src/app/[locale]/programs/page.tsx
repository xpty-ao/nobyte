import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { ProgramCard } from "@/components/sections/ProgramCard";
import { buildPageMetadata } from "@/lib/metadata";

type Program = { code: string; title: string; description: string; items: string[] };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata(locale, "programs", "/programs");
}

export default async function ProgramsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("programs");
  const programs = t.raw("list") as Program[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            {programs.map((p, i) => (
              <Reveal key={p.code} delay={0.06 * i}>
                <ProgramCard index={i} {...p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 py-20 md:py-24">
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
