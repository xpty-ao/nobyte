"use client";

import { useTranslations } from "next-intl";

export function NewsletterForm() {
  const t = useTranslations("footer.newsletter");

  return (
    <form
      className="mt-4 flex overflow-hidden rounded-full border border-white/15 bg-white/[0.03]"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        required
        placeholder={t("placeholder")}
        className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder:text-mist focus:outline-none"
      />
      <button
        type="submit"
        className="shrink-0 bg-gradient-to-r from-[var(--color-violet)] to-[var(--color-magenta)] px-4 py-2.5 font-display text-xs font-medium text-white"
      >
        {t("submit")}
      </button>
    </form>
  );
}
