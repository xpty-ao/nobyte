"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ButtonLink } from "@/components/ui/Button";

const navItems = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/programs", key: "programs" },
  { href: "/careers", key: "careers" },
  { href: "/security-day", key: "securityDay" },
  { href: "/corporate", key: "corporate" },
  { href: "/contact", key: "contact" },
] as const;

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-[var(--color-void)]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 md:px-10">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`rounded-full px-3.5 py-2 font-display text-[13.5px] font-medium transition-colors ${active ? "bg-white/[0.06] text-white" : "text-mist-2 hover:text-white"}`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher dark />
          <ButtonLink href="/contact" className="!py-2.5 !text-[13px]">
            {t("cta")}
          </ButtonLink>
        </div>

        <button
          className="flex items-center justify-center rounded-full border border-white/15 p-2 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[var(--color-void)] px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className={`rounded-lg px-3 py-3 font-display text-[15px] ${
                  pathname === item.href
                    ? "bg-white/[0.06] text-white"
                    : "text-mist-2"
                }`}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between">
            <LanguageSwitcher dark />
            <ButtonLink href="/contact" className="!py-2.5 !text-[13px]">
              {t("cta")}
            </ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
