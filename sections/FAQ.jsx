"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <Section id="faq">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Common Questions"
          heading="Questions people often ask"
          description="General answers to get you oriented. Your situation may involve details worth discussing directly."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 flex flex-col">
          {faqs.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <div key={item.question} className="border-b border-ink-950/10">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-trigger-${index}`}
                    className="flex w-full items-center justify-between gap-4 py-6 text-left"
                  >
                    <span className="font-display text-lg text-ink-950 sm:text-xl">{item.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300",
                        isOpen && "rotate-180 text-ink-950"
                      )}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${index}`}
                  className={cn(
                    "grid transition-all duration-300 ease-premium",
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-base leading-relaxed text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
