"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";

type NavProps = {
  variant: "landing" | "subpage";
};

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className="hidden md:flex flex-col items-center gap-1.5 text-sm transition-colors hover:text-foreground"
    >
      <span className={isActive ? "text-foreground font-medium" : "text-muted"}>
        {children}
      </span>
      {isActive && (
        <span className="w-1 h-1 rounded-full bg-foreground" />
      )}
    </Link>
  );
}

export function Nav({ variant }: NavProps) {
  const { lang, toggleLang } = useLanguage();
  const t = translations.nav[lang];

  if (variant === "landing") {
    return (
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 backdrop-blur-xl bg-white/60 border-b border-black/[0.04]">
        <Image
          src="/logo-black.png"
          alt="MD Advisory"
          width={160}
          height={32}
          className="h-7 w-auto"
          priority
        />
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
      <Link href="/" className="hover:opacity-70 transition-opacity">
        <Image
          src="/logo-black.png"
          alt="MD Advisory"
          width={160}
          height={32}
          className="h-7 w-auto"
          priority
        />
      </Link>
      <div className="flex items-center gap-6 md:gap-8">
        <NavLink href="/ai-agency">{t.aiAgency}</NavLink>
        <NavLink href="/sap">{t.sap}</NavLink>
        <NavLink href="/about">{t.about}</NavLink>
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
