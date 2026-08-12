import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { buildPageMetadata } from "@/lib/metadata";
import {
  Users2,
  Target,
  Eye,
  Sparkles,
  BookOpen,
  Wrench,
  Rocket,
  Network,
} from "lucide-react";

const pillarIcons = [BookOpen, Wrench, Rocket, Network];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata(locale, "about", "/about");
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("about");

  const values = t.raw("values.items") as string[];
  const pillars = t.raw("approach.pillars") as { title: string; description: string }[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            <Reveal>
              <Users2 className="text-violet-2" size={26} strokeWidth={1.6} />
              <h2 className="mt-4 font-display text-2xl font-bold">{t("who.title")}</h2>
              <p className="mt-4 leading-relaxed text-mist-2">{t("who.description")}</p>
            </Reveal>

            <div className="grid gap-8 sm:grid-cols-2">
              <Reveal delay={0.06}>
                <Target className="text-violet-2" size={24} strokeWidth={1.6} />
                <h3 className="mt-3 font-display text-lg font-semibold">{t("mission.title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-2">{t("mission.description")}</p>
              </Reveal>
              <Reveal delay={0.12}>
                <Eye className="text-violet-2" size={24} strokeWidth={1.6} />
                <h3 className="mt-3 font-display text-lg font-semibold">{t("vision.title")}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-2">{t("vision.description")}</p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-[var(--color-navy)] py-20 md:py-28">
        <Container>
          <Reveal className="flex items-center gap-3">
            <Sparkles className="text-violet-2" size={24} strokeWidth={1.6} />
            <h2 className="font-display text-2xl font-bold md:text-3xl">{t("values.title")}</h2>
          </Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v} delay={0.04 * i}>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 font-display text-sm font-medium">
                  {v}
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-bold md:text-3xl">{t("approach.title")}</h2>
            <p className="mt-3 max-w-[52ch] text-mist-2">{t("approach.description")}</p>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => {
              const Icon = pillarIcons[i] ?? BookOpen;
              return (
                <Reveal key={p.title} delay={0.06 * i}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <Icon className="text-violet-2" size={22} strokeWidth={1.6} />
                    <h3 className="mt-4 font-display text-base font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-2">{p.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
