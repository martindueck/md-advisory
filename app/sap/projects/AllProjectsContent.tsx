"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { WebsiteProject } from "@/lib/types";

export function AllProjectsContent({
  projects,
}: {
  projects: WebsiteProject[];
}) {
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

          <h1 className="mt-8 text-3xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
            {ui.allProjects}
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed max-w-3xl animate-fade-in-up-delay-1">
            {ui.allProjectsIntro}
          </p>

          <div className="mt-16 space-y-6">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/sap/projects/${project.slug}`}
                className="block glass-card rounded-2xl p-6 md:p-8 transition-transform hover:scale-[1.01]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg md:text-xl font-bold tracking-tight leading-snug">
                    {project.headline[lang]}
                  </h3>
                  <span
                    className={`shrink-0 text-xs font-medium px-2 py-1 rounded-full ${
                      project.status === "ongoing"
                        ? "bg-blue-50 text-blue-600"
                        : "bg-green-50 text-green-600"
                    }`}
                  >
                    {project.status === "ongoing" ? ui.ongoing : ui.completed}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted">
                  {project.industry[lang]}
                </p>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed line-clamp-2">
                  {project.summary[lang]}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="pill rounded-full px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
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
