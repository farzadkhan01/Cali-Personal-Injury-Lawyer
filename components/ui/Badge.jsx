import { cn } from "@/lib/utils";

const toneClasses = {
  light: "border-ink-950/10 bg-glass-light text-ink-800",
  dark: "border-white/15 bg-glass-dark text-warm-white",
};

export default function Badge({ children, icon: Icon, tone = "light", className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] backdrop-blur",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {Icon && <Icon className="h-3.5 w-3.5" aria-hidden="true" />}
      {children}
    </span>
  );
}
