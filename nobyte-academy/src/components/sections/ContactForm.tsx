"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

const fieldClasses =
  "w-full rounded-xl border border-white/15 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-mist focus:border-violet-2 focus:outline-none";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire this up to your form backend / API route of choice
    // (e.g. Formspree, Resend, or a custom Next.js route handler).
    setSubmitted(true);
  }

  const interestOptions = t.raw("interestOptions") as string[];

  if (submitted) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-8">
        <CheckCircle2 className="shrink-0 text-violet-2" size={22} />
        <p className="text-mist-2">{t("success")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-mist-2">{t("name")}</span>
          <input required name="name" type="text" placeholder={t("namePlaceholder")} className={fieldClasses} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-mist-2">{t("email")}</span>
          <input required name="email" type="email" placeholder={t("emailPlaceholder")} className={fieldClasses} />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-mist-2">{t("phone")}</span>
          <input name="phone" type="tel" placeholder={t("phonePlaceholder")} className={fieldClasses} />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-mist-2">{t("company")}</span>
          <input name="company" type="text" placeholder={t("companyPlaceholder")} className={fieldClasses} />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-mist-2">{t("interest")}</span>
        <select required name="interest" defaultValue="" className={fieldClasses}>
          <option value="" disabled className="text-mist">
            {t("interestPlaceholder")}
          </option>
          {interestOptions.map((opt) => (
            <option key={opt} value={opt} className="bg-[var(--color-navy)] text-white">
              {opt}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-mist-2">{t("message")}</span>
        <textarea
          name="message"
          rows={4}
          placeholder={t("messagePlaceholder")}
          className={`${fieldClasses} resize-none`}
        />
      </label>

      <Button type="submit" className="mt-2 justify-self-start">
        {t("submit")}
      </Button>
    </form>
  );
}
