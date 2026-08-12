import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function MissionStrip() {
  const t = useTranslations("home.mission");

  return (
    <section className="relative border-t border-white/5 bg-[var(--color-navy)] py-20 md:py-28">
      <Container>
        <Reveal className="flex justify-center">
          <Eyebrow>{t("eyebrow")}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mx-auto mt-6 max-w-[26ch] text-center font-display text-3xl font-bold leading-tight md:text-5xl">
            {t("title")}
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-[62ch] text-center text-mist-2 md:text-lg">
            {t("description")}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
