import { cn } from "@/lib/utils";

const roundedClasses = {
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "4xl": "rounded-4xl",
};

export default function ImageFrame({
  as: Tag = "div",
  ratio = "4 / 5",
  rounded = "3xl",
  className,
  children,
  ...props
}) {
  return (
    <Tag
      className={cn("relative overflow-hidden bg-cool-white", roundedClasses[rounded], className)}
      style={{ aspectRatio: ratio }}
      {...props}
    >
      {children}
    </Tag>
  );
}
