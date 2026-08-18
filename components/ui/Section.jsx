import { cn } from "@/lib/utils";

const spacingClasses = {
  default: "py-20 sm:py-28 lg:py-32",
  tight: "py-12 sm:py-16",
  none: "",
};

export default function Section({
  as: Tag = "section",
  spacing = "default",
  className,
  children,
  ...props
}) {
  return (
    <Tag className={cn("relative", spacingClasses[spacing], className)} {...props}>
      {children}
    </Tag>
  );
}
