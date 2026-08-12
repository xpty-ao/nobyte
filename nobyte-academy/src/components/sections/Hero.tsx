import Image from "next/image";
import { useTranslations } from "next-intl";
import { ArrowDownRight, ShieldCheck, Terminal, Orbit } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ButtonLink } from "@/components/ui/Button";
import { HexLattice } from "@/components/ui/HexLattice";
import { Reveal } from "@/components/ui/Reveal";

export function Hero() {
  const t = useTranslations("home.hero");
  const stats = t.raw("stats") as { value: string; label: string }[];

  return (
    <section className="relative overflow-hidden pb-18 pt-12 md:pb-24 md:pt-20">
      <HexLattice />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <Reveal><Eyebrow>{t("eyebrow")}</Eyebrow></Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-[18ch] font-display text-[2.8rem] font-bold leading-[1.02] tracking-tight md:text-[4.5rem]">
                {t("title")}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-mist-2 md:text-lg">{t("subtitle")}</p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/contact">{t("ctaPrimary")}</ButtonLink>
                <ButtonLink href="/programs" variant="secondary">{t("ctaSecondary")}</ButtonLink>
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 backdrop-blur-sm">
                    <span className="font-mono text-[11px] tracking-[0.16em] text-violet-2">{s.value}</span>
                    <p className="mt-2 text-sm leading-snug text-mist-2">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(157,92,255,.18),transparent_62%)] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-violet/10 backdrop-blur-sm md:p-8">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,.8)]" />
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-mist">Nobyte / learning environment</span>
                  </div>
                  <span className="font-mono text-[10px] text-violet-2">ONLINE</span>
                </div>

                <div className="grid min-h-[390px] place-items-center py-10">
                  <div className="relative">
                    <div className="absolute -inset-10 rounded-full border border-violet/20" />
                    <div className="absolute -inset-20 rounded-full border border-white/5" />
                    <Image src="/images/nobyte-logo-icon.png" alt="Nobyte Academy" width={260} height={260} className="relative h-52 w-52 object-contain md:h-60 md:w-60" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="rounded-xl border border-white/8 bg-black/20 p-4">
                    <ShieldCheck size={18} className="text-violet-2" />
                    <div className="mt-3 font-display text-sm font-semibold text-white">DEFENSE</div>
                    <div className="mt-1 font-mono text-[10px] text-mist">SOC / SIEM / WAF</div>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 p-4">
                    <Terminal size={18} className="text-violet-2" />
                    <div className="mt-3 font-display text-sm font-semibold text-white">OFFENSE</div>
                    <div className="mt-1 font-mono text-[10px] text-mist">LABS / PENTEST</div>
                  </div>
                  <div className="rounded-xl border border-white/8 bg-black/20 p-4">
                    <Orbit size={18} className="text-violet-2" />
                    <div className="mt-3 font-display text-sm font-semibold text-white">CAREER</div>
                    <div className="mt-1 font-mono text-[10px] text-mist">SKILLS / MENTORSHIP</div>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-mist">Learn · Practice · Develop · Protect</span>
                  <ArrowDownRight size={16} className="text-violet-2" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
