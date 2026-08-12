export function HexLattice({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {/* hex grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35] grid-fade-mask"
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="hexgrid"
            width="46.5"
            height="80.5"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1)"
          >
            <path
              d="M23.25 0 L46.5 13.4 L46.5 40.25 L23.25 53.6 L0 40.25 L0 13.4 Z"
              fill="none"
              stroke="var(--color-navy-3)"
              strokeWidth="0.6"
            />
            <path
              d="M23.25 40.25 L46.5 53.65 L46.5 80.5 L23.25 93.9"
              fill="none"
              stroke="var(--color-navy-3)"
              strokeWidth="0.6"
            />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#hexgrid)" />
      </svg>

      {/* radar scan sweep */}
      <div className="absolute inset-x-0 top-0 h-full animate-scan bg-gradient-to-b from-transparent via-[var(--color-violet)]/10 to-transparent" />

      {/* ambient glow nodes */}
      <div className="absolute left-[12%] top-[20%] h-2 w-2 animate-pulse-slow rounded-full bg-[var(--color-violet-2)] shadow-[0_0_20px_6px_var(--color-violet)]" />
      <div className="absolute right-[18%] top-[55%] h-1.5 w-1.5 animate-pulse-slow rounded-full bg-[var(--color-magenta)] shadow-[0_0_16px_5px_var(--color-magenta)] [animation-delay:1.1s]" />
      <div className="absolute left-[40%] bottom-[15%] h-1.5 w-1.5 animate-pulse-slow rounded-full bg-[var(--color-violet-2)] shadow-[0_0_16px_5px_var(--color-violet)] [animation-delay:2s]" />
    </div>
  );
}
