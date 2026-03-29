"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function AboutPage() {
  const { lang } = useLanguage();
  const t = translations.about[lang];
  const contact = translations.contact[lang];

  return (
    <>
      <Nav variant="subpage" />

      {/* About Section */}
      <section className="px-6 pt-28 pb-24 md:px-12 md:pt-32 md:pb-32 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
            {t.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted italic tracking-wide animate-fade-in-up-delay-1">
            {t.tagline}
          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-12 items-start animate-fade-in-up-delay-2">
            <div className="flex-1">
              <p className="text-base md:text-lg text-foreground/70 leading-relaxed">
                {t.bio}
              </p>
            </div>
            <div className="w-full md:w-64 lg:w-72 aspect-[3/4] rounded-2xl bg-subtle flex items-center justify-center shrink-0">
              <span className="text-sm text-muted">
                {t.photoPlaceholder}
              </span>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="mt-20">
            <p className="text-lg text-muted">{contact.cta}</p>
            <div className="mt-6 flex flex-col gap-4">
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
        </div>
      </section>

      <Footer />
    </>
  );
}
