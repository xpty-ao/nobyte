import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/metadata";
import {
  Radar,
  Crosshair,
  Code2,
  Cloud,
  ClipboardCheck,
  FileCheck2,
  Award,
  FolderGit2,
} from "lucide-react";

type Path = {
  code: string;
  title: string;
  description: string;
  skills: string[];
  certifications: string[];
};

const pathIcons = [Radar, Crosshair, Code2, Cloud, ClipboardCheck];
const guidanceIcons = [FileCheck2, Award, FolderGit2];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata(locale, "careers", "/careers");
}

export default async function CareersPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("careers");
  const common = await getTranslations("common");
  const paths = t.raw("paths") as Path[];
  const guidance = t.raw("guidance.items") as { title: string; description: string }[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-5">
            {paths.map((p, i) => {
              const Icon = pathIcons[i] ?? Radar;
              return (
                <Reveal key={p.code} delay={0.05 * i}>
                  <div className="grid gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-7 md:grid-cols-[auto_1fr_1fr] md:items-start md:gap-10">
                    <div className="flex items-center gap-4 md:flex-col md:items-start">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-violet)]/25 to-[var(--color-magenta)]/25 text-violet-2">
                        <Icon size={20} strokeWidth={1.75} />
                      </div>
                      <div>
                        <span className="font-mono text-[11px] tracking-[0.1em] text-mist">{p.code}</span>
                        <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                      </div>
                    </div>

                    <div>
                      <p className="text-sm leading-relaxed text-mist-2">{p.description}</p>
                      <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.12em] text-mist">
                        {common("skillsRequired")}
                      </p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {p.skills.map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist-2"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-mist">
                        {common("certifications")}
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {p.certifications.map((c) => (
                          <li key={c} className="text-sm text-mist-2">{c}</li>
                        ))}
                      </ul>
                    </div>
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
            <h2 className="font-display text-2xl font-bold md:text-3xl">{t("guidance.title")}</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {guidance.map((g, i) => {
              const Icon = guidanceIcons[i] ?? FileCheck2;
              return (
                <Reveal key={g.title} delay={0.06 * i}>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                    <Icon className="text-violet-2" size={22} strokeWidth={1.6} />
                    <h3 className="mt-4 font-display text-base font-semibold">{g.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-2">{g.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Reveal className="mx-auto max-w-[52ch] text-center">
            <h2 className="font-display text-2xl font-bold md:text-3xl">{t("cta.title")}</h2>
            <p className="mt-4 text-mist-2">{t("cta.description")}</p>
            <ButtonLink href="/programs" className="mt-8 inline-flex">
              {t("cta.button")}
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
