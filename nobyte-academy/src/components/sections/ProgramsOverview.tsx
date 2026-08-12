import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProgramCard } from "./ProgramCard";

type Program = { code: string; title: string; description: string; items: string[] };

export function ProgramsOverview() {
  const t = useTranslations("home.programsOverview");
  const tp = useTranslations("programs");
  const programs = tp.raw("list") as Program[];

  return (
    <section className="border-t border-white/5 py-20 md:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>{t("eyebrow")}</Eyebrow>
            <h2 className="mt-5 max-w-[20ch] font-display text-3xl font-bold leading-tight md:text-4xl">
              {t("title")}
            </h2>
          </div>
          <ButtonLink href="/programs" variant="secondary">
            {t("viewAll")}
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((p, i) => (
            <Reveal key={p.code} delay={0.05 * i}>
              <ProgramCard index={i} {...p} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
