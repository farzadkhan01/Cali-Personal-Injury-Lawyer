import Link from "next/link";
import Container from "@/components/ui/Container";
import Divider from "@/components/ui/Divider";
import { navLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

const footerLinks = navLinks.flatMap((link) =>
  link.label === "Resources" ? link.children : [{ label: link.label, href: link.href }]
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-ink-950 text-warm-white">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex max-w-sm flex-col gap-4">
            <span className="font-display text-xl">{siteConfig.name}</span>
            <p className="text-sm leading-relaxed text-warm-white/60">{siteConfig.footerTagline}</p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-3">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-warm-white/70 transition-colors duration-200 hover:text-warm-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 text-sm text-warm-white/70">
            <span className="text-xs uppercase tracking-[0.14em] text-warm-white/40">Contact</span>
            <span>{siteConfig.contact.phonePlaceholder}</span>
            <span>{siteConfig.contact.emailPlaceholder}</span>
          </div>
        </div>

        <Divider tone="dark" className="my-10" />

        <div className="flex flex-col gap-3 text-xs text-warm-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {siteConfig.name}. Demo content, not verified legal information.
          </p>
          <p>Concept project for design and development demonstration purposes only.</p>
        </div>
      </Container>
    </footer>
  );
}
