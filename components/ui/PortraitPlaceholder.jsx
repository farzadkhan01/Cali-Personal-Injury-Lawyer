import { User } from "lucide-react";

export default function PortraitPlaceholder({ label = "Photo Coming Soon" }) {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-cool-white to-white" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-gray-400">
        <span className="flex h-20 w-20 items-center justify-center rounded-full border border-ink-950/10 bg-white">
          <User className="h-8 w-8" aria-hidden="true" />
        </span>
        <span className="text-xs font-medium uppercase tracking-[0.14em]">{label}</span>
      </div>
    </>
  );
}
