import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { Quote } from "lucide-react";

export function Community() {
  const t = useTranslations("home.community");
  return (
    <section className="border-t border-white/5 py-20 md:py-24">
      <Container>
        <div className="mx-auto max-w-[60ch] text-center">
          <Reveal className="flex justify-center"><Eyebrow>{t("eyebrow")}</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight md:text-4xl">
              {t("title")}
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 text-mist-2">{t("description")}</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function Testimonials() {
  const t = useTranslations("home.testimonials");
  const items = t.raw("items") as { quote: string; name: string; role: string }[];

  return (
    <section className="border-t border-white/5 bg-[var(--color-navy)] py-20 md:py-28">
      <Container>
        <Reveal className="flex justify-center"><Eyebrow>{t("eyebrow")}</Eyebrow></Reveal>
        <Reveal delay={0.06}>
          <h2 className="mx-auto mt-5 max-w-[26ch] text-center font-display text-3xl font-bold leading-tight md:text-4xl">
            {t("title")}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={0.06 * i}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7">
                <Quote className="text-violet-2" size={22} strokeWidth={1.5} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-mist-2">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-white/10 pt-4">
                  <p className="font-display text-sm font-semibold">{item.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-mist">
                    {item.role}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Partners() {
  const t = useTranslations("home.partners");
  const names = ["UAN", "ISPTEC", "AngoTIC", "TechHub Luanda", "CyberAO", "DevSec Angola"];

  return (
    <section className="border-t border-white/5 py-16">
      <Container>
        <div className="flex flex-col items-center gap-8 text-center">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-4 font-display text-xl font-semibold text-mist-2">{t("title")}</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
            {names.map((name) => (
              <span key={name} className="font-display text-sm font-medium tracking-wide text-mist-2">
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function FinalCta() {
  const t = useTranslations("home.finalCta");
  return (
    <section className="relative overflow-hidden border-t border-white/5 py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-violet)]/15 via-transparent to-[var(--color-magenta)]/10" />
      <Container className="relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-[24ch] font-display text-3xl font-bold leading-tight md:text-5xl">
            {t("title")}
          </h2>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mx-auto mt-5 max-w-[52ch] text-mist-2 md:text-lg">{t("description")}</p>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/contact">{t("ctaPrimary")}</ButtonLink>
            <ButtonLink href="/contact" variant="secondary">
              {t("ctaSecondary")}
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
