import Link from "next/link";
import { cn } from "@/lib/utils";

const variantClasses = {
  primary: "bg-ink-950 text-warm-white hover:bg-ink-900",
  secondary: "border border-ink-950/10 bg-glass-light text-ink-950 backdrop-blur hover:bg-white/80",
  ghost: "text-ink-950 hover:bg-ink-950/5",
  pill: "bg-accent-500 text-warm-white hover:bg-accent-600",
};

const sizeClasses = {
  default: "px-6 py-3 text-sm",
  sm: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "default",
  icon: Icon,
  type = "button",
  className,
  children,
  ...props
}) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-300 ease-premium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-950 disabled:pointer-events-none disabled:opacity-50",
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {children}
      {Icon && (
        <Icon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {content}
    </button>
  );
}
