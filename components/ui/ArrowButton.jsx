import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ArrowButton({ href, children, className, ...props }) {
  return (
    <Link
      href={href}
      className={cn("group inline-flex items-center gap-2 text-sm font-medium text-ink-950", className)}
      {...props}
    >
      <span className="border-b border-transparent pb-0.5 transition-colors duration-300 group-hover:border-ink-950/40">
        {children}
      </span>
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </Link>
  );
}
