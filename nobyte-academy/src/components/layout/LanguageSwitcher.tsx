"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useParams } from "next/navigation";

const labels: Record<string, string> = {
  pt: "PT",
  en: "EN",
};

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return (
    <div
      className={`flex items-center rounded-full border p-0.5 font-mono text-xs ${
        dark
          ? "border-white/15 bg-white/[0.03]"
          : "border-black/10 bg-black/[0.03]"
      }`}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() =>
            router.replace(
              // @ts-expect-error -- dynamic pathname/params combination is valid at runtime
              { pathname, params },
              { locale: loc }
            )
          }
          aria-current={locale === loc}
          className={`rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
            locale === loc
              ? "bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-magenta)] text-white"
              : dark
                ? "text-mist hover:text-white"
                : "text-mist hover:text-ink"
          }`}
        >
          {labels[loc]}
        </button>
      ))}
    </div>
  );
}
