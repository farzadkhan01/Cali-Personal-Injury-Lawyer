import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import { processSteps } from "@/data/process";

export default function Process() {
  return (
    <Section id="process">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          heading="A clear path forward"
          description="Every case moves through the same careful stages, so you always know what is happening and why."
          align="center"
          width="narrow"
          className="mx-auto"
        />

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-6 top-0 h-full w-px bg-ink-950/10 lg:left-0 lg:top-6 lg:h-px lg:w-full"
          />
          <ol className="relative flex flex-col gap-10 lg:flex-row lg:justify-between lg:gap-6">
            {processSteps.map((step, index) => (
              <Reveal
                key={step.title}
                as="li"
                delay={index * 0.08}
                className="relative flex gap-5 lg:flex-1 lg:flex-col lg:gap-6"
              >
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink-950/10 bg-warm-white font-display text-sm text-ink-950 shadow-glass-sm">
                  {step.number}
                </span>
                <div className="flex flex-col gap-2">
                  <span className="font-display text-xl text-ink-950">{step.title}</span>
                  <p className="text-sm leading-relaxed text-gray-600 lg:max-w-[14rem]">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
