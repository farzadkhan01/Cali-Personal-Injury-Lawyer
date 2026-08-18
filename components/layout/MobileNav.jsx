"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export default function MobileNav({ id, links, isOpen, onClose }) {
  const shouldReduceMotion = useReducedMotion();
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -12 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:hidden"
        >
          <Container className="mt-3">
            <div className="flex max-h-[calc(100dvh-7rem)] flex-col gap-1 overflow-y-auto rounded-3xl border border-white/50 bg-glass-light-strong p-4 shadow-glass-lg backdrop-blur-xl">
              {links.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <div key={link.href} className="flex flex-col">
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={cn(
                        "rounded-2xl px-4 py-3 text-base font-medium transition-colors duration-200",
                        isActive ? "bg-ink-950/5 text-ink-950" : "text-ink-900 hover:bg-ink-950/5"
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="ml-4 flex flex-col gap-0.5 border-l border-ink-950/10 pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={onClose}
                            className={cn(
                              "rounded-xl px-3 py-2 text-sm transition-colors duration-200",
                              pathname === child.href ? "text-ink-950" : "text-ink-800/80 hover:bg-ink-950/5"
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              <Button href="/contact" onClick={onClose} className="mt-2">
                {siteConfig.primaryCta}
              </Button>
            </div>
          </Container>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
