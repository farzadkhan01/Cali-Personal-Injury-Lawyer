"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { practiceAreas } from "@/data/practiceAreas";
import { practiceAreaIcons as iconMap } from "@/lib/practiceAreaIcons";
import { cn } from "@/lib/utils";

export default function CaseDiscovery() {
  const [selectedSlug, setSelectedSlug] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const selected = practiceAreas.find((area) => area.slug === selectedSlug);

  return (
    <Section id="case-discovery">
      <Container>
        <SectionHeading
          eyebrow="Start Here"
          heading="What happened?"
          description="Select the situation closest to yours. It helps us prepare for a focused, useful conversation, nothing more."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {practiceAreas.map((area) => {
            const Icon = iconMap[area.icon];
            const isSelected = area.slug === selectedSlug;

            return (
              <button
                key={area.slug}
                type="button"
                aria-pressed={isSelected}
                onClick={() => setSelectedSlug(isSelected ? null : area.slug)}
                className={cn(
                  "flex flex-col items-center gap-3 rounded-3xl border px-4 py-6 text-center transition-all duration-300 ease-premium",
                  isSelected
                    ? "border-ink-950 bg-ink-950 text-warm-white shadow-elevated"
                    : "border-ink-950/10 bg-glass-light text-ink-900 backdrop-blur hover:-translate-y-1 hover:shadow-glass-sm"
                )}
              >
                <Icon
                  className={cn("h-6 w-6", isSelected ? "text-accent-300" : "text-accent-500")}
                  aria-hidden="true"
                />
                <span className="text-sm font-medium">{area.short}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {selected && (
            <motion.div
              key={selected.slug}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <GlassCard
                tone="dark"
                blur="strong"
                className="flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between"
              >
                <p className="max-w-xl text-lg leading-relaxed text-warm-white">{selected.response}</p>
                <Button href="/contact" variant="pill" icon={ArrowRight} className="shrink-0">
                  Continue the Conversation
                </Button>
              </GlassCard>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Section>
  );
}
