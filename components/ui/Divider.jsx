import { cn } from "@/lib/utils";

const toneClasses = {
  light: "via-ink-950/10",
  dark: "via-white/15",
};

export default function Divider({ tone = "light", className }) {
  return (
    <div
      role="presentation"
      className={cn("h-px w-full bg-gradient-to-r from-transparent to-transparent", toneClasses[tone], className)}
    />
  );
}
