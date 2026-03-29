"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export default function SapPage() {
  const { lang } = useLanguage();
  const t = translations.sap[lang];
  const contact = translations.contact[lang];

  return (
    <>
      <Nav variant="subpage" />

      {/* SAP Section */}
      <section className="px-6 pt-28 pb-24 md:px-12 md:pt-32 md:pb-32 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
            {t.title}
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed max-w-3xl animate-fade-in-up-delay-1">
            {t.intro}
          </p>

          <div className="mt-16 space-y-8">
            {t.projects.map(
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
