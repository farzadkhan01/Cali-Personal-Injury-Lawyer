import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import FinalCTA from "@/sections/FinalCTA";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Testimonials",
  description:
    "Illustrative examples of the client experience Cali Personal Injury Lawyer is designed around, clearly marked as demo content.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: `Testimonials | ${siteConfig.name}`,
    description: "Illustrative examples of the client experience this practice is designed around.",
    url: "/testimonials",
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Section spacing="tight" className="pt-12 sm:pt-16 lg:pt-20">
        <Container size="narrow">
          <Reveal>
            <Badge>Client Experience</Badge>
          </Reveal>
          <TextReveal
            as="h1"
            delay={0.1}
            className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl"
          >
            What the experience is designed to feel like.
          </TextReveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              The quotes below are illustrative examples, not statements from real clients. They describe the
              standard of communication and care this practice is built around, and will be replaced with genuine
              client experiences once available.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="tight">
        <Container size="narrow">
          <div className="flex flex-col divide-y divide-ink-950/10">
            {testimonials.map((item, index) => (
              <Reveal
                key={item.name + index}
                delay={index * 0.05}
                className="flex flex-col gap-6 py-12 first:pt-0 lg:flex-row lg:items-start lg:gap-12"
              >
                <div className="flex items-center gap-3 lg:w-48 lg:shrink-0">
                  <Quote className="h-8 w-8 text-accent-500" aria-hidden="true" />
                  <Badge className="text-[0.65rem]">Illustrative</Badge>
                </div>
                <div className="flex flex-col gap-4">
                  <p className="font-display text-2xl italic leading-snug text-ink-950 sm:text-3xl">
                    {item.quote}
                  </p>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm font-medium text-ink-900">{item.name}</span>
                    <span className="text-xs text-gray-500">{item.context}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </>
  );
}
