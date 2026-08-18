"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 pt-4">
      <Container>
        <div className="flex items-center justify-between gap-4 rounded-full border border-white/50 bg-glass-light px-4 py-2.5 shadow-glass-sm backdrop-blur-xl sm:px-6">
          <Link href="/" className="font-display text-lg font-medium tracking-tight text-ink-950">
            {siteConfig.shortName}
          </Link>

          <DesktopNav links={navLinks} />

          <div className="hidden lg:block">
            <Button href="/contact" size="sm">
              {siteConfig.primaryCta}
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2.5 text-ink-950 transition-colors duration-200 hover:bg-ink-950/5 lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <MobileNav id="mobile-nav" links={navLinks} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
