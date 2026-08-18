import { cn } from "@/lib/utils";

const sizeClasses = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-[90rem]",
};

export default function Container({
  as: Tag = "div",
  size = "default",
  className,
  children,
  ...props
}) {
  return (
    <Tag className={cn("mx-auto w-full px-5 sm:px-6 lg:px-8", sizeClasses[size], className)} {...props}>
      {children}
    </Tag>
  );
}
