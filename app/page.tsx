"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations.landing[lang];
  const contact = translations.contact[lang];

  return (
    <>
      <Nav variant="landing" />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[70vh] px-6 pt-24 pb-12 md:px-12 lg:px-20 overflow-hidden">
        <div className="hero-glow top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] animate-fade-in-up">
            Martin Dueck
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay-1">
            {t.tagline}
          </p>
        </div>
      </section>

      {/* Navigation Cards */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/ai-agency" className="block group">
            <div className="glass-card rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between min-h-[260px] animate-fade-in-up-delay-1">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {t.cards.aiAgency.title}
                </h2>
                <p className="mt-4 text-base text-muted leading-relaxed">
                  {t.cards.aiAgency.description}
                </p>
              </div>
              <span className="mt-6 text-sm font-medium text-foreground group-hover:translate-x-1 transition-transform inline-block">
                &rarr;
              </span>
            </div>
          </Link>

          <Link href="/sap" className="block group">
            <div className="glass-card rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between min-h-[260px] animate-fade-in-up-delay-2">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {t.cards.sap.title}
                </h2>
                <p className="mt-4 text-base text-muted leading-relaxed">
                  {t.cards.sap.description}
                </p>
              </div>
              <span className="mt-6 text-sm font-medium text-foreground group-hover:translate-x-1 transition-transform inline-block">
                &rarr;
              </span>
            </div>
          </Link>

          <Link href="/about" className="block group">
            <div className="glass-card rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between min-h-[260px] animate-fade-in-up-delay-3">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                  {t.cards.about.title}
                </h2>
                <p className="mt-4 text-base text-muted leading-relaxed">
                  {t.cards.about.description}
                </p>
              </div>
              <span className="mt-6 text-sm font-medium text-foreground group-hover:translate-x-1 transition-transform inline-block">
                &rarr;
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {contact.title}
          </h2>
          <p className="mt-4 text-lg text-muted">{contact.cta}</p>

          <div className="mt-12 flex flex-col gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="text-lg md:text-xl font-medium text-foreground hover:text-muted transition-colors w-fit"
            >
              {contact.email}
            </a>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-medium text-foreground hover:text-muted transition-colors w-fit"
            >
              {contact.linkedin}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
