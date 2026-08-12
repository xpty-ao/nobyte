import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Ecosystem() {
  const t = useTranslations("home.ecosystem");
  const steps = t.raw("steps") as { code: string; title: string; description: string }[];

  return (
    <section className="border-t border-white/5 py-20 md:py-28">
      <Container>
        <div className="max-w-[60ch]">
          <Reveal><Eyebrow>{t("eyebrow")}</Eyebrow></Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight md:text-4xl">
              {t("title")}
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-0 md:grid-cols-5 md:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.code} delay={0.05 * i}>
              <div className="relative border-t border-white/10 pt-5 md:border-t-0 md:pt-0">
                <span className="font-mono text-[11px] tracking-[0.14em] text-violet-2">
                  {s.code}
                </span>
                <h3 className="mt-3 font-display text-base font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-2">{s.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
