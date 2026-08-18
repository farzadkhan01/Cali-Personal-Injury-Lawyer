import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import CheckList from "@/components/ui/CheckList";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import Process from "@/sections/Process";
import FAQ from "@/sections/FAQ";
import FinalCTA from "@/sections/FinalCTA";
import { practiceAreas } from "@/data/practiceAreas";
import { siteConfig } from "@/data/site";

const detailedAreas = practiceAreas.filter((area) => area.overview);

export function generateStaticParams() {
  return detailedAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const area = detailedAreas.find((item) => item.slug === slug);

  if (!area) {
    return {};
  }

  return {
    title: `${area.title} Attorney`,
    description: area.overview,
    alternates: { canonical: `/practice-areas/${area.slug}` },
    openGraph: {
      title: `${area.title} | ${siteConfig.name}`,
      description: area.overview,
      url: `/practice-areas/${area.slug}`,
    },
  };
}

export default async function PracticeAreaPage({ params }) {
  const { slug } = await params;
  const area = detailedAreas.find((item) => item.slug === slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <Section spacing="tight" className="pt-12 sm:pt-16 lg:pt-20">
        <Container size="narrow">
          <Reveal>
            <Badge>Practice Area</Badge>
          </Reveal>
          <TextReveal
            as="h1"
            delay={0.1}
            className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink-950 sm:text-5xl"
          >
            {area.title}
          </TextReveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">{area.overview}</p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8">
            <Button href="/contact" icon={ArrowRight}>
              Talk About Your Case
            </Button>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <GlassCard tone="light" blur="soft" className="flex h-full flex-col gap-6 p-8">
                <h2 className="font-display text-xl text-ink-950">Common Concerns</h2>
                <CheckList items={area.concerns} />
              </GlassCard>
            </Reveal>
            <Reveal delay={0.1}>
              <GlassCard tone="dark" blur="soft" className="flex h-full flex-col gap-6 p-8">
                <h2 className="font-display text-xl text-warm-white">How We Can Help</h2>
                <CheckList items={area.help} tone="dark" />
              </GlassCard>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
