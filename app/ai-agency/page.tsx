"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function AiAgencyPage() {
  const { lang } = useLanguage();
  const t = translations.hero[lang];
  const contact = translations.contact[lang];

  return (
    <>
      <Nav variant="subpage" />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20 md:px-12 lg:px-20 overflow-hidden">
        <div className="hero-glow top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up">
            {t.headline}
          </h1>
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay-1">
            {t.subtext}
          </p>
          <a
            href={`mailto:${contact.email}`}
            className="inline-block mt-10 md:mt-12 glass-button rounded-full px-8 py-4 text-base font-medium tracking-wide animate-fade-in-up-delay-2"
          >
            {t.cta}
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
