import { ArrowRight, Compass } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import ArrowButton from "@/components/ui/ArrowButton";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <Section className="flex min-h-[70vh] items-center">
      <Container size="narrow" className="flex flex-col items-center gap-6 text-center">
        <Badge icon={Compass}>404</Badge>
        <h1 className="font-display text-4xl font-medium tracking-tight text-ink-950 sm:text-5xl">
          This page took a wrong turn.
        </h1>
        <p className="max-w-md text-lg leading-relaxed text-gray-600">
          The page you are looking for does not exist, or may have moved. Let us help you find your way back.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-6">
          <Button href="/" icon={ArrowRight}>
            Back to Homepage
          </Button>
          <ArrowButton href="/contact">Talk to Us Instead</ArrowButton>
        </div>
      </Container>
    </Section>
  );
}
