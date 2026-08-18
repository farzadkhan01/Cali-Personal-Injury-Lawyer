import { cn } from "@/lib/utils";

const toneClasses = {
  light: { value: "text-ink-950", label: "text-ink-800", description: "text-gray-500" },
  dark: { value: "text-warm-white", label: "text-warm-white/80", description: "text-warm-white/50" },
};

export default function Stat({ value, label, description, tone = "light", className }) {
  const toneStyles = toneClasses[tone];

  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <span className={cn("font-display text-3xl sm:text-4xl", toneStyles.value)}>{value}</span>
      <span className={cn("text-sm font-medium", toneStyles.label)}>{label}</span>
      {description && <span className={cn("text-sm", toneStyles.description)}>{description}</span>}
    </div>
  );
}
