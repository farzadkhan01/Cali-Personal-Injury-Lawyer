"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function DesktopNav({ links }) {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
      {links.map((link) => {
        const isActive = pathname === link.href || link.children?.some((child) => child.href === pathname);

        return (
          <div key={link.href} className="group relative">
            <Link
              href={link.href}
              className={cn(
                "flex items-center gap-1 text-sm font-medium transition-colors duration-200",
                isActive ? "text-ink-950" : "text-ink-800 hover:text-ink-950"
              )}
            >
              {link.label}
              {link.children && (
                <ChevronDown
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                  aria-hidden="true"
                />
              )}
            </Link>

            {link.children && (
              <div className="pointer-events-none absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:translate-y-3 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-3 group-focus-within:opacity-100">
                <div className="flex flex-col gap-1 rounded-3xl border border-white/50 bg-glass-light-strong p-3 shadow-glass-lg backdrop-blur-xl">
                  {link.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className={cn(
                        "rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors duration-200",
                        pathname === child.href ? "bg-ink-950/5 text-ink-950" : "text-ink-900 hover:bg-ink-950/5"
                      )}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </nav>
  );
}
