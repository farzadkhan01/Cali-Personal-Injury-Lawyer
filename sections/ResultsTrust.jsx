import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Stat from "@/components/ui/Stat";
import Reveal from "@/components/motion/Reveal";

const placeholderStats = [
  { value: "—", label: "Cases Resolved" },
  { value: "—", label: "Total Recovered" },
  { value: "—", label: "Client Satisfaction" },
  { value: "—", label: "Years in Practice" },
];

export default function ResultsTrust() {
  return (
    <Section>
      <Container>
        <Reveal>
          <GlassCard tone="dark" blur="strong" className="overflow-hidden px-6 py-16 sm:px-12 lg:px-16">
            <SectionHeading
              tone="dark"
              eyebrow="Results & Trust"
              heading="Built for verified outcomes"
              description="Cali Personal Injury Lawyer is a concept practice. The figures below are placeholders, structured so real, verified case results can be added as they become available."
            />
            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {placeholderStats.map((stat) => (
                <Stat key={stat.label} tone="dark" value={stat.value} label={stat.label} />
              ))}
            </div>
          </GlassCard>
        </Reveal>
      </Container>
    </Section>
  );
}
