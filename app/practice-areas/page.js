import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import PracticeAreas from "@/sections/PracticeAreas";
import FinalCTA from "@/sections/FinalCTA";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Practice Areas",
  description:
    "Explore the personal injury situations Cali Personal Injury Lawyer is built to help with, from car accidents to wrongful death.",
  alternates: { canonical: "/practice-areas" },
  openGraph: {
    title: `Practice Areas | ${siteConfig.name}`,
    description: "The personal injury situations Cali Personal Injury Lawyer is built to help with.",
    url: "/practice-areas",
  },
};

export default function PracticeAreasPage() {
  return (
    <>
      <Section spacing="tight" className="pt-12 sm:pt-16 lg:pt-20">
        <Container size="narrow">
          <Reveal>
            <Badge>Practice Areas</Badge>
          </Reveal>
          <TextReveal
            as="h1"
            delay={0.1}
            className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl"
          >
            Personal injury covers more ground than most people expect.
          </TextReveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Every situation below is approached differently, but the goal stays the same: understand what
              happened, protect your interests, and help you move forward with clarity.
            </p>
          </Reveal>
        </Container>
      </Section>

      <PracticeAreas />
      <FinalCTA />
    </>
  );
}
