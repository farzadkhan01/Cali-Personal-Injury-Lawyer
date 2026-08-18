import { Compass, MessageSquareText, ShieldCheck, HeartHandshake } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import GlassCard from "@/components/ui/GlassCard";
import ImageFrame from "@/components/ui/ImageFrame";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import Process from "@/sections/Process";
import ResultsTrust from "@/sections/ResultsTrust";
import AttorneySection from "@/sections/AttorneySection";
import FinalCTA from "@/sections/FinalCTA";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "About",
  description:
    "The philosophy behind Cali Personal Injury Lawyer, and how the firm approaches advocacy, clarity, and client support.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description: "The philosophy behind Cali Personal Injury Lawyer and how the firm approaches every case.",
    url: "/about",
  },
};

const values = [
  {
    icon: MessageSquareText,
    title: "Directness",
    description: "We say what we mean, and we explain what we do not yet know.",
  },
  {
    icon: Compass,
    title: "Preparation",
    description: "Every conversation is a chance to understand your situation a little better.",
  },
  {
    icon: ShieldCheck,
    title: "Accountability",
    description: "We hold ourselves to the same standard we hold the other side to.",
  },
  {
    icon: HeartHandshake,
    title: "Patience",
    description: "Recovery does not follow a schedule, and neither does our support.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Section spacing="tight" className="pt-12 sm:pt-16 lg:pt-20">
        <Container size="narrow">
          <Reveal>
            <Badge>About the Firm</Badge>
          </Reveal>
          <TextReveal
            as="h1"
            delay={0.1}
            className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl"
          >
            People come to us after everything got harder. We try to make what happens next easier.
          </TextReveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              Cali Personal Injury Lawyer was built around a simple belief: after an accident, people need
              clarity as much as they need advocacy. Here is how we think about the work.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <ImageFrame ratio="4 / 5" rounded="4xl" className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500 via-ink-950 to-trust-700" />
                <div className="bg-grain absolute inset-0 opacity-[0.06]" />
                <div
                  aria-hidden="true"
                  className="absolute -left-10 top-10 h-56 w-56 rounded-full border border-white/15"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-10 right-0 h-40 w-40 rounded-full bg-accent-300/25 blur-2xl"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
                />
              </ImageFrame>
            </Reveal>

            <div className="flex flex-col gap-8">
              <Badge>Our Philosophy</Badge>
              <h2 className="font-display text-3xl font-medium tracking-tight text-ink-950 sm:text-4xl">
                The legal process should not be another thing happening to you.
              </h2>
              <p className="text-base leading-relaxed text-gray-600">
                Most people do not plan for the moment their life gets interrupted. An accident does not just
                cause injury, it introduces a list of unfamiliar decisions, deadlines, and conversations, often
                while you are still recovering.
              </p>
              <p className="text-base leading-relaxed text-gray-600">
                We built this practice around closing that gap. Not by promising outcomes we cannot control, but
                by making sure you always understand where things stand, what is happening next, and why.
              </p>
              <blockquote className="border-l-2 border-accent-500 pl-6 font-display text-2xl italic leading-snug text-ink-950">
                Advocacy without clarity just adds to the confusion. We try to offer both.
              </blockquote>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container>
          <Reveal className="mb-10 flex flex-col gap-4">
            <Badge>What We Value</Badge>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink-950 sm:text-4xl">
              Four principles that shape every case.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <GlassCard tone="light" blur="soft" className="grid gap-8 p-8 sm:grid-cols-2 sm:p-10 lg:p-12">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-ink-950/5 text-ink-950">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col gap-1">
                    <span className="font-display text-lg text-ink-950">{title}</span>
                    <p className="text-sm leading-relaxed text-gray-600">{description}</p>
                  </div>
                </div>
              ))}
            </GlassCard>
          </Reveal>
        </Container>
      </Section>

      <Process />
      <ResultsTrust />
      <AttorneySection />
      <FinalCTA />
    </>
  );
}
