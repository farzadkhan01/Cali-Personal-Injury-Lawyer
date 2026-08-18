import { cn } from "@/lib/utils";
import Badge from "./Badge";

const widthClasses = {
  default: "max-w-2xl",
  narrow: "max-w-xl",
  wide: "max-w-3xl",
};

const toneClasses = {
  light: { heading: "text-ink-950", description: "text-gray-600" },
  dark: { heading: "text-warm-white", description: "text-warm-white/70" },
};

export default function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  width = "default",
  tone = "light",
  className,
}) {
  const isCentered = align === "center";
  const toneStyles = toneClasses[tone];

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        isCentered ? "mx-auto items-center text-center" : "items-start text-left",
        widthClasses[width],
        className
      )}
    >
      {eyebrow && <Badge tone={tone}>{eyebrow}</Badge>}
      {heading && (
        <h2
          className={cn(
            "font-display text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl",
            toneStyles.heading
          )}
        >
          {heading}
        </h2>
      )}
      {description && (
        <p className={cn("text-base leading-relaxed sm:text-lg", toneStyles.description)}>{description}</p>
      )}
    </div>
  );
}
