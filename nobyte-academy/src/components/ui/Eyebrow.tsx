export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-violet-2">
      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-violet-2)] shadow-[0_0_8px_2px_var(--color-violet)]" />
      {children}
    </div>
  );
}
