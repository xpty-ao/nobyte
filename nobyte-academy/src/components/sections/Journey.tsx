import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function Journey() {
  const t = useTranslations("home.journey");

  return (
    <section className="border-t border-white/5 bg-[var(--color-navy)] py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <Reveal><Eyebrow>{t("eyebrow")}</Eyebrow></Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight md:text-4xl">
                {t("title")}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[48ch] text-mist-2">{t("description")}</p>
            </Reveal>
            <Reveal delay={0.18}>
              <ButtonLink href="/programs" variant="secondary" className="mt-8">
                {t("cta")}
              </ButtonLink>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em] text-mist">
                <span>Beginner</span>
                <span className="text-violet-2">Professional</span>
              </div>
              <div className="relative mt-4 h-2 w-full rounded-full bg-white/10">
                <div className="absolute inset-y-0 left-0 w-[78%] rounded-full bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-magenta)]" />
                <div className="absolute -top-1.5 left-[78%] h-5 w-5 -translate-x-1/2 rounded-full border-2 border-[var(--color-navy)] bg-white shadow-[0_0_0_4px_var(--color-violet)]" />
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-mist-2 sm:grid-cols-4">
                {["Assessment", "Training", "Labs & Mentorship", "First Job"].map((step) => (
                  <div key={step} className="border-t border-white/10 pt-3 font-mono text-[11px] uppercase tracking-wide">
                    {step}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
