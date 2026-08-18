import { Heart, Lock, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Reveal from "@/components/motion/Reveal";
import TextReveal from "@/components/motion/TextReveal";
import ContactForm from "@/sections/ContactForm";
import { siteConfig } from "@/data/site";

export const metadata = {
  title: "Contact",
  description: "Start a conversation about your situation with Cali Personal Injury Lawyer.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact | ${siteConfig.name}`,
    description: "Start a conversation about your situation.",
    url: "/contact",
  },
};

const trustNotes = [
  { icon: Users, label: "A real conversation, not a call center" },
  { icon: Lock, label: "Your information is kept private" },
  { icon: Heart, label: "No pressure, just a conversation" },
];

export default function ContactPage() {
  return (
    <Section spacing="tight" className="pt-12 sm:pt-16 lg:pt-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="flex flex-col gap-8 lg:sticky lg:top-32">
            <Reveal>
              <Badge>Contact</Badge>
            </Reveal>
            <TextReveal
              as="h1"
              delay={0.1}
              className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink-950 sm:text-5xl"
            >
              Tell us what happened.
            </TextReveal>
            <Reveal delay={0.2}>
              <p className="max-w-md text-lg leading-relaxed text-gray-600">
                Share a few details below and we will follow up to talk through your situation and next steps.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="flex flex-col gap-4">
              {trustNotes.map(({ icon: Icon, label }) => (
                <span key={label} className="flex items-center gap-3 text-sm text-ink-800">
                  <Icon className="h-4 w-4 text-accent-500" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-xs leading-relaxed text-gray-400">
                {siteConfig.contact.phonePlaceholder} · {siteConfig.contact.emailPlaceholder}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
