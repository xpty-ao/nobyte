import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HexLattice } from "@/components/ui/HexLattice";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 py-20 md:py-28">
      <HexLattice />
      <Container className="relative">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-6 max-w-[22ch] font-display text-4xl font-bold leading-tight md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-mist-2 md:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
