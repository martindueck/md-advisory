"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

type NavProps = {
  variant: "landing" | "subpage";
};

export function Nav({ variant }: NavProps) {
  const { lang, toggleLang } = useLanguage();
  const t = translations.nav[lang];

  if (variant === "landing") {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 backdrop-blur-xl bg-white/60 border-b border-black/[0.04]">
        <span className="text-lg font-bold tracking-tight text-foreground">
          MD Advisory
        </span>
        <button
          onClick={toggleLang}
          className="glass-button rounded-full px-3 py-1.5 text-xs font-medium tracking-wide uppercase cursor-pointer"
        >
          {lang === "en" ? "DE" : "EN"}
        </button>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 backdrop-blur-xl bg-white/60 border-b border-black/[0.04]">
      <Link
        href="/"
        className="text-lg font-bold tracking-tight text-foreground hover:text-muted transition-colors"
      >
        MD Advisory
      </Link>
      <div className="flex items-center gap-6 md:gap-8">
        <Link
          href="/ai-agency"
          className="hidden md:block text-sm text-muted hover:text-foreground transition-colors"
        >
          {t.aiAgency}
        </Link>
        <Link
          href="/sap"
          className="hidden md:block text-sm text-muted hover:text-foreground transition-colors"
        >
          {t.sap}
        </Link>
        <Link
          href="/about"
          className="hidden md:block text-sm text-muted hover:text-foreground transition-colors"
        >
          {t.about}
        </Link>
        <button
          onClick={toggleLang}
          className="glass-button rounded-full px-3 py-1.5 text-xs font-medium tracking-wide uppercase cursor-pointer"
        >
          {lang === "en" ? "DE" : "EN"}
        </button>
      </div>
    </nav>
  );
}
