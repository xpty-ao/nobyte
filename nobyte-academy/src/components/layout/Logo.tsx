import Image from "next/image";
import { Link } from "@/i18n/navigation";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0">
      <Image
        src="/images/nobyte-logo-icon.png"
        alt="Nobyte Academy"
        width={38}
        height={38}
        className="h-9 w-9 object-contain"
        priority
      />
      {!compact && (
        <span className="font-display leading-none">
          <span className="block text-[15px] font-bold tracking-tight text-white">
            NOBYTE<span className="text-gradient">.</span>
          </span>
          <span className="block font-mono text-[9px] uppercase tracking-[0.28em] text-mist">
            Academy
          </span>
        </span>
      )}
    </Link>
  );
}
