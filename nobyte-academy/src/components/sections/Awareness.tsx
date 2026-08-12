import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { UserX } from "lucide-react";

export function Awareness() {
  const t = useTranslations("home.awareness");

  return (
    <section className="border-t border-white/5 py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:grid-cols-[auto_1fr_auto] md:p-12">
          <Reveal>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-violet)]/30 to-[var(--color-magenta)]/30 text-violet-2">
              <UserX size={26} strokeWidth={1.6} />
            </div>
          </Reveal>
          <div>
            <Reveal><Eyebrow>{t("eyebrow")}</Eyebrow></Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 max-w-[26ch] font-display text-2xl font-bold leading-tight md:text-3xl">
                {t("title")}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 max-w-[56ch] text-mist-2">{t("description")}</p>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <ButtonLink href="/corporate" variant="secondary">
              {t("cta")}
            </ButtonLink>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
