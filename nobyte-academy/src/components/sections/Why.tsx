import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck, Users, Briefcase } from "lucide-react";

const icons = [ShieldCheck, Users, Briefcase];

export function Why() {
  const t = useTranslations("home.why");
  const points = t.raw("points") as { title: string; description: string }[];

  return (
    <section className="border-t border-white/5 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div>
            <Reveal><Eyebrow>{t("eyebrow")}</Eyebrow></Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 max-w-[16ch] font-display text-3xl font-bold leading-tight md:text-4xl">
                {t("title")}
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-[46ch] text-mist-2">{t("description")}</p>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => {
              const Icon = icons[i] ?? ShieldCheck;
              return (
                <Reveal key={p.title} delay={0.06 * i} className={i === 2 ? "sm:col-span-2" : ""}>
                  <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-white/20">
                    <Icon className="text-violet-2" size={22} strokeWidth={1.75} />
                    <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist-2">{p.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
