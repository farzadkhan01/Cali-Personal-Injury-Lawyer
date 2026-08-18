import { ArrowRight, FileText, MessageCircle, MessageSquareText, Shield, HeartHandshake } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ArrowButton from "@/components/ui/ArrowButton";
import GlassCard from "@/components/ui/GlassCard";
import Divider from "@/components/ui/Divider";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import { siteConfig } from "@/data/site";

const trustPoints = [
  { icon: Shield, label: "Your case, protected" },
  { icon: MessageCircle, label: "Clear communication at every step" },
  { icon: HeartHandshake, label: "Support built around your recovery" },
];

export default function Hero() {
  return (
    <Section spacing="tight" className="overflow-hidden pt-12 sm:pt-16 lg:pt-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="flex flex-col gap-8">
            <Reveal>
              <Badge>California Personal Injury Attorneys</Badge>
            </Reveal>

            <TextReveal
              as="h1"
              delay={0.1}
              className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl"
            >
              Everything changed in an instant. Here is what happens next.
            </TextReveal>

            <Reveal delay={0.2}>
              <p className="max-w-lg text-lg leading-relaxed text-gray-600">
                Cali Personal Injury Lawyer helps people across California move forward after an
                accident, with clear guidance, steady advocacy, and a plan built around your
                recovery.
              </p>
            </Reveal>

            <Reveal delay={0.3} className="flex flex-wrap items-center gap-6">
              <Button href="/contact" icon={ArrowRight}>
                Talk About Your Case
              </Button>
              <ArrowButton href="/#how-we-help">{siteConfig.secondaryCta}</ArrowButton>
            </Reveal>

            <Reveal delay={0.4}>
              <Divider className="max-w-md" />
            </Reveal>

            <Reveal delay={0.45} className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-8">
              {trustPoints.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-2 text-sm text-ink-800">
                  <Icon className="h-4 w-4 text-accent-500" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={0.2} y={32} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden="true"
              className="animate-float absolute -right-8 -top-12 h-48 w-48 rounded-full bg-accent-400/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-10 -left-8 h-40 w-40 rounded-full bg-trust-500/20 blur-3xl"
            />

            <GlassCard tone="light" blur="strong" className="relative rotate-1 p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4 border-b border-ink-950/10 pb-4">
                <span className="text-xs font-medium uppercase tracking-[0.14em] text-ink-800/60">
                  Case Overview
                </span>
                <span className="h-2 w-2 rounded-full bg-accent-500" aria-hidden="true" />
              </div>
              <div className="flex flex-col gap-4 pt-5">
                <div className="h-3 w-3/4 rounded-full bg-ink-950/10" />
                <div className="h-3 w-full rounded-full bg-ink-950/10" />
                <div className="h-3 w-5/6 rounded-full bg-ink-950/10" />
                <div className="mt-2 flex gap-3">
                  <div className="h-16 flex-1 rounded-2xl bg-ink-950/5" />
                  <div className="h-16 flex-1 rounded-2xl bg-ink-950/5" />
                </div>
              </div>
            </GlassCard>

            <GlassCard
              tone="dark"
              blur="soft"
              className="absolute -left-6 top-8 hidden -rotate-3 items-center gap-3 px-4 py-3 sm:-left-10 sm:flex"
            >
              <FileText className="h-4 w-4 text-accent-300" aria-hidden="true" />
              <span className="text-xs font-medium text-warm-white">Case Timeline</span>
            </GlassCard>

            <GlassCard
              tone="light"
              blur="soft"
              className="absolute -bottom-6 right-4 flex rotate-2 items-center gap-3 px-4 py-3 sm:right-8"
            >
              <MessageSquareText className="h-4 w-4 text-trust-600" aria-hidden="true" />
              <span className="text-xs font-medium text-ink-900">Direct Communication</span>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
