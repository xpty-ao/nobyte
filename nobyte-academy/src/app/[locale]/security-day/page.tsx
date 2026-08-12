import { getTranslations, setRequestLocale } from "next-intl/server";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { buildPageMetadata } from "@/lib/metadata";
import { Clock3, Users } from "lucide-react";

type ScheduleItem = { time: string; title: string };
type UpcomingItem = { month: string; title: string; description: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return buildPageMetadata(locale, "securityDay", "/security-day");
}

export default async function SecurityDayPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("securityDay");

  const audience = t.raw("what.audience.items") as string[];
  const schedule = t.raw("schedule.items") as ScheduleItem[];
  const upcoming = t.raw("upcoming.items") as UpcomingItem[];

  return (
    <>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("hero.title")}
        subtitle={t("hero.subtitle")}
      />

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 md:grid-cols-[1.2fr_1fr]">
            <Reveal>
              <h2 className="font-display text-2xl font-bold md:text-3xl">{t("what.title")}</h2>
              <p className="mt-4 leading-relaxed text-mist-2">{t("what.description")}</p>
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
                <Clock3 className="shrink-0 text-violet-2" size={20} />
                <p className="text-sm text-mist-2">{t("what.cadence")}</p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
                <div className="flex items-center gap-2">
                  <Users className="text-violet-2" size={20} />
                  <h3 className="font-display text-base font-semibold">
                    {t("what.audience.title")}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {audience.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-mist-2"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-[var(--color-navy)] py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-bold md:text-3xl">{t("schedule.title")}</h2>
          </Reveal>
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
            {schedule.map((item, i) => (
              <Reveal key={item.time} delay={0.03 * i}>
                <div
                  className={`flex items-center gap-6 bg-white/[0.02] px-6 py-4 ${
                    i !== 0 ? "border-t border-white/10" : ""
                  }`}
                >
                  <span className="w-16 shrink-0 font-mono text-sm text-violet-2">
                    {item.time}
                  </span>
                  <span className="text-sm text-mist-2 md:text-base">{item.title}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <Reveal>
            <h2 className="font-display text-2xl font-bold md:text-3xl">{t("upcoming.title")}</h2>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {upcoming.map((item, i) => (
              <Reveal key={item.month} delay={0.06 * i}>
                <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                  <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-violet-2">
                    {item.month}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist-2">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-white/5 bg-[var(--color-navy)] py-20 md:py-24">
        <Container>
          <Reveal className="mx-auto max-w-[56ch] text-center">
            <h2 className="font-display text-2xl font-bold md:text-3xl">{t("evolution.title")}</h2>
            <p className="mt-4 text-mist-2">{t("evolution.description")}</p>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <Reveal className="mx-auto max-w-[52ch] text-center">
            <h2 className="font-display text-2xl font-bold md:text-3xl">
              {t("registration.title")}
            </h2>
            <p className="mt-4 text-mist-2">{t("registration.description")}</p>
            <ButtonLink href="/contact" className="mt-8 inline-flex">
              {t("registration.button")}
            </ButtonLink>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
