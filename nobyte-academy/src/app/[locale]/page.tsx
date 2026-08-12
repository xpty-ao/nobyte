import { setRequestLocale } from "next-intl/server";
import { Hero } from "@/components/sections/Hero";
import { Why } from "@/components/sections/Why";
import { MissionStrip } from "@/components/sections/MissionStrip";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { Journey } from "@/components/sections/Journey";
import { ProgramsOverview } from "@/components/sections/ProgramsOverview";
import { Awareness } from "@/components/sections/Awareness";
import { SecurityDayTeaser } from "@/components/sections/SecurityDayTeaser";
import { Community, Testimonials, Partners, FinalCta } from "@/components/sections/Closing";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <Why />
      <MissionStrip />
      <Ecosystem />
      <Journey />
      <ProgramsOverview />
      <Awareness />
      <SecurityDayTeaser />
      <Community />
      <Testimonials />
      <Partners />
      <FinalCta />
    </>
  );
}
