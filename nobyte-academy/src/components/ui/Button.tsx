import { ComponentPropsWithoutRef } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import type { AppPathnames } from "@/i18n/routing";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-display text-sm font-medium tracking-wide transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-magenta)] text-white shadow-[0_8px_30px_-8px_rgba(124,58,237,0.65)]",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08]",
  ghost: "text-white/80 hover:text-white",
};

type LinkProps = {
  href: AppPathnames | { pathname: AppPathnames };
  variant?: Variant;
  icon?: boolean;
  className?: string;
  children: React.ReactNode;
};

export function ButtonLink({
  href,
  variant = "primary",
  icon = true,
  className = "",
  children,
}: LinkProps) {
  return (
    <Link
      href={href as never}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
      {icon && <ArrowUpRight size={16} strokeWidth={2.25} />}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: { variant?: Variant; className?: string } & ComponentPropsWithoutRef<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
