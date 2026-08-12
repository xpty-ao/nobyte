import { GraduationCap, Terminal, ShieldAlert, Presentation } from "lucide-react";

const icons = [GraduationCap, Terminal, ShieldAlert, Presentation];

export function ProgramCard({
  index,
  code,
  title,
  description,
  items,
}: {
  index: number;
  code: string;
  title: string;
  description: string;
  items: string[];
}) {
  const Icon = icons[index % icons.length];

  return (
    <div className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-white/25">
      <div className="flex items-center justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-violet)]/25 to-[var(--color-magenta)]/25 text-violet-2">
          <Icon size={20} strokeWidth={1.75} />
        </div>
        <span className="font-mono text-[11px] tracking-[0.1em] text-mist">{code}</span>
      </div>

      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-mist-2">{description}</p>

      <ul className="mt-5 flex flex-1 flex-col gap-2 border-t border-white/10 pt-5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-mist-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-2" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
