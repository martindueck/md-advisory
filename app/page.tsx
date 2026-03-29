"use client";

import { useState, useEffect } from "react";
import { type Language, translations } from "@/lib/translations";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language | null;
    if (stored === "de" || stored === "en") {
      setLang(stored);
    }
  }, []);

  const toggleLang = () => {
    const next = lang === "en" ? "de" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  const t = {
    nav: translations.nav[lang],
    hero: translations.hero[lang],
    sap: translations.sap[lang],
    about: translations.about[lang],
    contact: translations.contact[lang],
  };

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20 backdrop-blur-xl bg-white/60 border-b border-black/[0.04]">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          MD Advisory
        </a>
        <div className="flex items-center gap-6 md:gap-8">
          <a
            href="#ai-agents"
            className="hidden md:block text-sm text-muted hover:text-foreground transition-colors"
          >
            {t.nav.aiAgency}
          </a>
          <a
            href="#sap"
            className="hidden md:block text-sm text-muted hover:text-foreground transition-colors"
          >
            {t.nav.sap}
          </a>
          <a
            href="#about"
            className="hidden md:block text-sm text-muted hover:text-foreground transition-colors"
          >
            {t.nav.about}
          </a>
          <a
            href="#contact"
            className="hidden md:block text-sm text-muted hover:text-foreground transition-colors"
          >
            {t.nav.contact}
          </a>
          <button
            onClick={toggleLang}
            className="glass-button rounded-full px-3 py-1.5 text-xs font-medium tracking-wide uppercase cursor-pointer"
          >
            {lang === "en" ? "DE" : "EN"}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="ai-agents"
        className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-20 md:px-12 lg:px-20 overflow-hidden"
      >
        <div className="hero-glow top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] animate-fade-in-up">
            {t.hero.headline}
          </h1>
          <p className="mt-6 md:mt-8 text-lg md:text-xl text-muted leading-relaxed max-w-2xl mx-auto animate-fade-in-up-delay-1">
            {t.hero.subtext}
          </p>
          <a
            href="#contact"
            className="inline-block mt-10 md:mt-12 glass-button rounded-full px-8 py-4 text-base font-medium tracking-wide animate-fade-in-up-delay-2"
          >
            {t.hero.cta}
          </a>
        </div>
      </section>

      {/* SAP Section */}
      <section
        id="sap"
        className="px-6 py-24 md:px-12 md:py-32 lg:px-20"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t.sap.title}
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed max-w-3xl">
            {t.sap.intro}
          </p>

          <div className="mt-16 space-y-8">
            {t.sap.projects.map(
              (
                project: {
                  headline: string;
                  industry: string;
                  summary: string;
                  tech: string;
                  duration?: string;
                  role: string;
                },
                i: number
              ) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug">
                    {project.headline}
                  </h3>
                  <p className="mt-2 text-sm text-muted">
                    {project.industry}
                  </p>
                  <p className="mt-4 text-base text-foreground/70 leading-relaxed">
                    {project.summary}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.split(", ").map((tech: string, j: number) => (
                      <span
                        key={j}
                        className="pill rounded-full px-3 py-1 text-xs text-muted"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
                    <span>{project.role}</span>
                    {project.duration && <span>{project.duration}</span>}
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-6 py-24 md:px-12 md:py-32 lg:px-20"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-4 text-lg md:text-xl text-muted italic tracking-wide">
            {t.about.tagline}
          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-12 items-start">
            <div className="flex-1">
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                {t.about.bio}
              </p>
            </div>
            <div className="w-full md:w-64 lg:w-72 aspect-[3/4] rounded-2xl bg-subtle flex items-center justify-center shrink-0">
              <span className="text-sm text-muted">
                {t.about.photoPlaceholder}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-6 py-24 md:px-12 md:py-32 lg:px-20"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {t.contact.cta}
          </p>

          <div className="mt-12 flex flex-col gap-4">
            <a
              href={`mailto:${t.contact.email}`}
              className="text-lg md:text-xl font-medium text-foreground hover:text-muted transition-colors w-fit"
            >
              {t.contact.email}
            </a>
            <a
              href={t.contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-xl font-medium text-foreground hover:text-muted transition-colors w-fit"
            >
              {t.contact.linkedin}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 md:px-12 lg:px-20 border-t border-black/[0.04]">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-sm text-muted">
          <span>MD Advisory</span>
          <span>{new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
