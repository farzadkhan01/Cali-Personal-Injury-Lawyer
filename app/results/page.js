import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import ResultsTrust from "@/sections/ResultsTrust";
import FinalCTA from "@/sections/FinalCTA";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Case Results",
  description:
    "A framework for verified personal injury case results, structured for Cali Personal Injury Lawyer as real outcomes become available.",
  alternates: { canonical: "/results" },
  openGraph: {
    title: `Case Results | ${siteConfig.name}`,
    description: "A framework for verified case results, structured for real outcomes as they become available.",
    url: "/results",
  },
};

const resultSlots = [
  { category: "Car Accidents", note: "Verified result will be added here once available." },
  { category: "Workplace Injuries", note: "Verified result will be added here once available." },
  { category: "Catastrophic Injuries", note: "Verified result will be added here once available." },
];

export default function ResultsPage() {
  return (
    <>
      <Section spacing="tight" className="pt-12 sm:pt-16 lg:pt-20">
        <Container size="narrow">
          <Reveal>
            <Badge>Results</Badge>
          </Reveal>
          <TextReveal
            as="h1"
            delay={0.1}
            className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl"
          >
            A framework built for verified outcomes.
          </TextReveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              No case results have been verified for this concept practice yet. This page is structured so real,
              confirmed outcomes can be added here without redesigning the layout.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {resultSlots.map((slot) => (
              <Reveal key={slot.category}>
                <GlassCard tone="light" blur="soft" hover className="flex flex-col gap-6 p-8">
                  <div className="flex items-center justify-between">
                    <Badge>{slot.category}</Badge>
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-gray-400">
                      Placeholder
                    </span>
                  </div>
                  <span className="font-display text-3xl text-ink-950">—</span>
                  <p className="text-sm leading-relaxed text-gray-600">{slot.note}</p>
                </GlassCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container size="narrow">
          <Badge>How Results Are Evaluated</Badge>
          <h2 className="mt-6 font-display text-3xl font-medium tracking-tight text-ink-950 sm:text-4xl">
            Every case is different, and so is every outcome.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-600">
            The value of a personal injury case depends on many factors, including the severity of the injury,
            the strength of the evidence, and the willingness of the responsible party to negotiate fairly.
            Because of this, past outcomes are not a guarantee of future results. Verified case results will be
            published here once available, structured so each one reflects the specific facts involved.
          </p>
        </Container>
      </Section>

      <ResultsTrust />
      <FinalCTA />
    </>
  );
}
