import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CalendarDays } from "lucide-react";

export function SecurityDayTeaser() {
  const t = useTranslations("home.securityDayTeaser");
  const schedule = useTranslations("securityDay.schedule");
  const items = schedule.raw("items") as { time: string; title: string }[];

  return (
    <section className="border-t border-white/5 bg-[var(--color-navy)] py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Reveal><Eyebrow>{t("eyebrow")}</Eyebrow></Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 flex items-center gap-3 font-display text-3xl font-bold md:text-4xl">
                <CalendarDays className="text-violet-2" size={28} />
                {t("title")}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[48ch] text-mist-2">{t("description")}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <ButtonLink href="/security-day" className="mt-8">
                {t("cta")}
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6">
              {items.slice(0, 5).map((item, i) => (
                <div
                  key={item.time}
                  className={`flex items-center gap-4 py-3 ${
                    i !== 0 ? "border-t border-white/10" : ""
                  }`}
                >
                  <span className="w-14 shrink-0 font-mono text-xs text-violet-2">
                    {item.time}
                  </span>
                  <span className="text-sm text-mist-2">{item.title}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
