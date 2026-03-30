"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import type { WebsiteProject } from "@/lib/types";

export function SapContent({ projects }: { projects: WebsiteProject[] }) {
  const { lang } = useLanguage();
  const t = translations.sap[lang];
  const contact = translations.contact[lang];
  const ui = translations.ui[lang];

  return (
    <>
      <Nav variant="subpage" />

      <section className="px-6 pt-28 pb-24 md:px-12 md:pt-32 md:pb-32 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight animate-fade-in-up">
            {t.title}
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed max-w-3xl animate-fade-in-up-delay-1">
            {t.intro}
          </p>

          <div className="mt-16 space-y-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/sap/projects/${project.slug}`}
                className="block glass-card rounded-2xl p-6 md:p-8 transition-transform hover:scale-[1.01]"
              >
                <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug">
                  {project.headline[lang]}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {project.industry[lang]}
                </p>
                <p className="mt-4 text-base text-foreground/70 leading-relaxed">
                  {project.summary[lang]}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="pill rounded-full px-3 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-muted">
                  <span>{project.role[lang]}</span>
                  {project.duration && <span>{project.duration}</span>}
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/sap/projects"
              className="inline-block text-base font-medium text-foreground hover:text-muted transition-colors"
            >
              {ui.moreProjects} &rarr;
            </Link>
          </div>

          {/* Skills Marquee */}
          <div className="mt-20">
            <p className="text-xs uppercase tracking-widest text-muted mb-4">
              {lang === "en" ? "Skills & Modules" : "Skills & Module"}
            </p>
            <div className="overflow-hidden border-t border-b border-black/[0.04] py-4">
              <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(2)].map((_, i) => (
                  <div key={i} className="flex gap-8 mr-8">
                    {["SAP HCM", "PA", "PY", "PT", "PO", "OM", "ESS/MSS", "Self-Services", "SAP Workflow", "Fiori", "SAPUI5", "OData", "ABAP OO", "SAP Customizing", "SAP Process & Forms", "TypeScript"].map((skill) => (
                      <span key={skill} className="text-sm text-foreground/70 font-medium tracking-wide">
                        {skill}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
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
