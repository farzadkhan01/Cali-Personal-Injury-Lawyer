import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";

export default function FinalCTA() {
  return (
    <Section className="bg-ink-950 text-warm-white">
      <Container size="narrow" className="flex flex-col items-center gap-8 text-center">
        <Reveal>
          <Badge tone="dark">Ready When You Are</Badge>
        </Reveal>
        <TextReveal
          as="h2"
          delay={0.1}
          className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl"
        >
          Tell us what happened. Let’s talk about what comes next.
        </TextReveal>
        <Reveal delay={0.2}>
          <p className="max-w-xl text-lg leading-relaxed text-warm-white/70">
            A conversation costs you nothing but a few minutes. We will listen, ask the right
            questions, and help you understand where things stand.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <Button href="/contact" variant="pill" size="lg" icon={ArrowRight}>
            Talk About Your Case
          </Button>
        </Reveal>
      </Container>
    </Section>
  );
}
