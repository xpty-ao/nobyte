import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { NewsletterForm } from "./NewsletterForm";
import { MessageCircle, Music2 } from "lucide-react";

function LinkedinMark({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
    </svg>
  );
}

function FacebookMark({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
    </svg>
  );
}

function InstagramMark({ size = 16, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.22.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.05.41 2.22.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.22-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.05.36-2.22.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.22-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.05-.41-2.22-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.22.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.05-.36 2.22-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56a5.87 5.87 0 0 0-2.13 1.38A5.87 5.87 0 0 0 .63 4.14c-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.71 1.46 1.38 2.13.67.67 1.34 1.08 2.13 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.87 5.87 0 0 0 2.13-1.38 5.87 5.87 0 0 0 1.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.87 5.87 0 0 0-1.38-2.13A5.87 5.87 0 0 0 19.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
    </svg>
  );
}

const social = [
  { href: "https://www.linkedin.com", label: "LinkedIn", icon: LinkedinMark },
  { href: "https://www.facebook.com", label: "Facebook", icon: FacebookMark },
  { href: "https://www.instagram.com", label: "Instagram", icon: InstagramMark },
  { href: "https://www.tiktok.com", label: "TikTok", icon: Music2 },
  { href: "https://wa.me/", label: "WhatsApp", icon: MessageCircle },
];

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--color-void)]">
      <div className="mx-auto max-w-[1180px] px-6 py-16 md:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-[26ch] text-sm leading-relaxed text-mist">
              {t("tagline")}
            </p>
            <div className="mt-6 flex gap-2">
              {social.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-mist-2 transition-colors hover:border-violet hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
              {t("columns.academy")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-mist-2">
              <li><Link className="hover:text-white" href="/about">{t("links.about")}</Link></li>
              <li><Link className="hover:text-white" href="/careers">{t("links.careers")}</Link></li>
              <li><Link className="hover:text-white" href="/security-day">{t("links.securityDay")}</Link></li>
              <li><Link className="hover:text-white" href="/corporate">{t("links.corporate")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
              {t("columns.programs")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-mist-2">
              <li><Link className="hover:text-white" href="/programs">{t("links.career")}</Link></li>
              <li><Link className="hover:text-white" href="/programs">{t("links.training")}</Link></li>
              <li><Link className="hover:text-white" href="/programs">{t("links.awareness")}</Link></li>
              <li><Link className="hover:text-white" href="/programs">{t("links.workshops")}</Link></li>
            </ul>
          </div>

          <div className="col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-mist">
              {t("newsletter.title")}
            </h3>
            <p className="mt-4 text-sm text-mist-2">{t("newsletter.description")}</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-mist md:flex-row md:items-center">
          <p>
            © {year} Nobyte Academy. {t("rights")}
          </p>
          <p className="font-mono uppercase tracking-[0.14em]">{t("location")}</p>
        </div>
      </div>
    </footer>
  );
}
