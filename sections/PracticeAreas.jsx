"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import ArrowButton from "@/components/ui/ArrowButton";
import Reveal from "@/components/motion/Reveal";
import { practiceAreas } from "@/data/practiceAreas";
import { practiceAreaIcons as iconMap } from "@/lib/practiceAreaIcons";
import { cn } from "@/lib/utils";

export default function PracticeAreas() {
  const [activeSlug, setActiveSlug] = useState(practiceAreas[0].slug);
  const active = practiceAreas.find((area) => area.slug === activeSlug) ?? practiceAreas[0];
  const ActiveIcon = iconMap[active.icon];

  return (
    <Section id="practice-areas">
      <Container>
        <SectionHeading
          eyebrow="Practice Areas"
          heading="Where we focus"
          description="Personal injury covers a wide range of situations. Explore the areas below to see how each one is typically approached."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-start">
          <ul className="flex flex-col divide-y divide-ink-950/10 border-y border-ink-950/10">
            {practiceAreas.map((area, index) => {
              const Icon = iconMap[area.icon];
              const isActive = area.slug === activeSlug;

              return (
                <li key={area.slug}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveSlug(area.slug)}
                    onFocus={() => setActiveSlug(area.slug)}
                    onClick={() => setActiveSlug(area.slug)}
                    aria-expanded={isActive}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="flex items-center gap-5">
                      <span
                        className={cn(
                          "font-display text-sm transition-colors duration-300",
                          isActive ? "text-accent-500" : "text-gray-300"
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "font-display text-xl transition-colors duration-300 sm:text-2xl",
                          isActive ? "text-ink-950" : "text-gray-400"
                        )}
                      >
                        {area.title}
                      </span>
                    </span>
                    <Icon
                      className={cn(
                        "h-5 w-5 shrink-0 transition-colors duration-300",
                        isActive ? "text-ink-950" : "text-gray-300"
                      )}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={cn(
                      "grid transition-all duration-300 ease-premium lg:hidden",
                      isActive ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <p className="overflow-hidden text-sm leading-relaxed text-gray-600">{area.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <Reveal className="hidden lg:block" y={16}>
            <GlassCard tone="light" blur="strong" className="sticky top-28 flex flex-col gap-6 p-8">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-950 text-warm-white">
                <ActiveIcon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="flex flex-col gap-3">
                <span className="font-display text-2xl text-ink-950">{active.title}</span>
                <p className="text-base leading-relaxed text-gray-600">{active.description}</p>
              </div>
              <ArrowButton href={`/practice-areas/${active.slug}`}>Learn About This Area</ArrowButton>
            </GlassCard>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
