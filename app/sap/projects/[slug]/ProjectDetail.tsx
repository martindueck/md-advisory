"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { WebsiteProject } from "@/lib/types";

export function ProjectDetail({ project }: { project: WebsiteProject }) {
  const { lang } = useLanguage();
  const contact = translations.contact[lang];
  const ui = translations.ui[lang];

  return (
    <>
      <Nav variant="subpage" />

      <section className="px-6 pt-28 pb-24 md:px-12 md:pt-32 md:pb-32 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/sap"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            &larr; {ui.back}
          </Link>

          <div className="mt-8 glass-card rounded-2xl p-6 md:p-10">
            <h1 className="text-2xl md:text-4xl font-bold tracking-tight leading-snug animate-fade-in-up">
              {project.headline[lang]}
            </h1>

            <p className="mt-3 text-sm text-muted">
              {project.industry[lang]}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
              <span>{project.role[lang]}</span>
              {project.duration && <span>{project.duration}</span>}
              <span className={project.status === "ongoing" ? "text-blue-600" : "text-green-600"}>
                {project.status === "ongoing" ? ui.ongoing : ui.completed}
              </span>
            </div>

            <p className="mt-8 text-base text-foreground/80 leading-relaxed">
              {project.summary[lang]}
            </p>

            {project.detail?.[lang] && (
              <p className="mt-6 text-base text-foreground/70 leading-relaxed">
                {project.detail[lang]}
              </p>
            )}

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="pill rounded-full px-3 py-1 text-xs text-muted"
                >
                  {tech}
                </span>
              ))}
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
