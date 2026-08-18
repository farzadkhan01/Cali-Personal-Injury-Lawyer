import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-2xl border border-ink-950/10 bg-white/70 px-4 py-3 text-sm text-ink-950 placeholder:text-gray-400 backdrop-blur transition-colors duration-200 focus:border-ink-950/30 focus:outline-none focus:ring-2 focus:ring-ink-950/10";

export const Label = forwardRef(function Label({ className, children, ...props }, ref) {
  return (
    <label ref={ref} className={cn("text-sm font-medium text-ink-900", className)} {...props}>
      {children}
    </label>
  );
});

export const Input = forwardRef(function Input({ className, ...props }, ref) {
  return <input ref={ref} className={cn(fieldClasses, className)} {...props} />;
});

export const Textarea = forwardRef(function Textarea({ className, rows = 4, ...props }, ref) {
  return <textarea ref={ref} rows={rows} className={cn(fieldClasses, className)} {...props} />;
});

export function FormError({ children }) {
  if (!children) return null;

  return (
    <p role="alert" className="text-sm text-red-600">
      {children}
    </p>
  );
}

export function FormField({ label, htmlFor, error, children, className }) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && <Label htmlFor={htmlFor}>{label}</Label>}
      {children}
      <FormError>{error}</FormError>
    </div>
  );
}
