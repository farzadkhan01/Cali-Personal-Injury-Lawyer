import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import ImageFrame from "@/components/ui/ImageFrame";
import Divider from "@/components/ui/Divider";
import PortraitPlaceholder from "@/components/ui/PortraitPlaceholder";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import FinalCTA from "@/sections/FinalCTA";
import { attorneys } from "@/data/attorneys";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Attorneys",
  description: "Meet the team behind Cali Personal Injury Lawyer and the philosophy that shapes how cases are handled.",
  alternates: { canonical: "/attorneys" },
  openGraph: {
    title: `Attorneys | ${siteConfig.name}`,
    description: "Meet the team behind Cali Personal Injury Lawyer.",
    url: "/attorneys",
  },
};

export default function AttorneysPage() {
  return (
    <>
      <Section spacing="tight" className="pt-12 sm:pt-16 lg:pt-20">
        <Container size="narrow">
          <Reveal>
            <Badge>Attorneys</Badge>
          </Reveal>
          <TextReveal
            as="h1"
            delay={0.1}
            className="mt-6 font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl"
          >
            The team behind every case.
          </TextReveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
              This section is structured to introduce the attorneys handling your case, including their focus,
              background, and approach, once verified information is finalized.
            </p>
          </Reveal>
        </Container>
      </Section>

      {attorneys.map((attorney) => (
        <Section key={attorney.slug} spacing="tight">
          <Container>
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <ImageFrame ratio="4 / 5" rounded="4xl" className="relative">
                  <PortraitPlaceholder label="Attorney Photo, Coming Soon" />
                </ImageFrame>
              </Reveal>

              <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                  <span className="font-display text-3xl text-ink-950">{attorney.name}</span>
                  <span className="text-sm font-medium uppercase tracking-[0.14em] text-gray-400">
                    {attorney.title}
                  </span>
                </div>

                <p className="text-base leading-relaxed text-gray-600">{attorney.bio}</p>

                <div className="flex flex-wrap gap-2">
                  {attorney.focus.map((area) => (
                    <Badge key={area}>{area}</Badge>
                  ))}
                </div>

                <Divider className="max-w-sm" />

                <blockquote className="border-l-2 border-accent-500 pl-6 font-display text-xl italic leading-snug text-ink-950">
                  {attorney.philosophy}
                </blockquote>

                <dl className="grid gap-4 sm:grid-cols-2">
                  {attorney.credentials.map((item) => (
                    <div key={item.label} className="flex flex-col gap-1">
                      <dt className="text-xs font-medium uppercase tracking-[0.14em] text-gray-400">
                        {item.label}
                      </dt>
                      <dd className="text-sm font-medium text-ink-900">{item.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <FinalCTA />
    </>
  );
}
