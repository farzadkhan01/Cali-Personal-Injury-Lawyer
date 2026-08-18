export default function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-trust-500/15 blur-[120px]" />
      <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-accent-400/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-ink-950/5 blur-[100px]" />
      <div className="bg-grain absolute inset-0 opacity-[0.035]" />
    </div>
  );
}
