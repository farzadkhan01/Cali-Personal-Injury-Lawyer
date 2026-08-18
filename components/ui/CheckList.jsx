import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const toneClasses = {
  light: { icon: "bg-ink-950/5 text-ink-950", text: "text-gray-600" },
  dark: { icon: "bg-white/10 text-warm-white", text: "text-warm-white/70" },
};

export default function CheckList({ items, tone = "light", className }) {
  const toneStyles = toneClasses[tone];

  return (
    <ul className={cn("flex flex-col gap-4", className)}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
              toneStyles.icon
            )}
          >
            <Check className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
          <span className={cn("text-base leading-relaxed", toneStyles.text)}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
