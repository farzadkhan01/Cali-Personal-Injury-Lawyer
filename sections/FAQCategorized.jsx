"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqCategories } from "@/data/faq";
import { cn } from "@/lib/utils";

export default function FAQCategorized() {
  const [openId, setOpenId] = useState(`${faqCategories[0].category}-0`);

  return (
    <Section spacing="tight" className="pt-12 sm:pt-16 lg:pt-20">
      <Container size="narrow">
        <SectionHeading
          eyebrow="Common Questions"
          heading="Answers organized by topic"
          description="General information to help you get oriented. Your situation may involve details worth discussing directly."
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 flex flex-col gap-12">
          {faqCategories.map((group) => (
            <div key={group.category} className="flex flex-col gap-2">
              <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-gray-400">
                {group.category}
              </h3>
              <div className="flex flex-col">
                {group.items.map((item, index) => {
                  const id = `${group.category}-${index}`;
                  const isOpen = id === openId;

                  return (
                    <div key={item.question} className="border-b border-ink-950/10">
                      <h4>
                        <button
                          type="button"
                          onClick={() => setOpenId(isOpen ? null : id)}
                          aria-expanded={isOpen}
                          aria-controls={`faq-panel-${id}`}
                          id={`faq-trigger-${id}`}
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
                      </h4>
                      <div
                        id={`faq-panel-${id}`}
                        role="region"
                        aria-labelledby={`faq-trigger-${id}`}
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
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
