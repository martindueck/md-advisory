export type Language = "en" | "de";

export const translations = {
  nav: {
    en: {
      aiAgency: "AI Agents",
      sap: "SAP Consulting",
      about: "About",
      contact: "Contact",
    },
    de: {
      aiAgency: "AI Agents",
      sap: "SAP Consulting",
      about: "Über mich",
      contact: "Kontakt",
    },
  },
  hero: {
    en: {
      headline: "Your AI Agent. Built for you.",
      subtext:
        "I build personalized AI agent systems that know your context, work 24/7, and are reachable via chat and voice. Done-for-you, ready in one week.",
      cta: "Let's talk",
    },
    de: {
      headline: "Dein persönlicher AI-Agent. Gebaut für dich.",
      subtext:
        "Ich baue personalisierte AI-Agent-Systeme die deinen Kontext kennen, rund um die Uhr arbeiten, und per Chat und Sprache erreichbar sind. Done-for-you, fertig in einer Woche.",
      cta: "Schreib mir",
    },
  },
  sap: {
    en: {
      title: "SAP Consulting",
      intro:
        "Senior SAP Consultant & Developer — 11 years of experience in ABAP, Fiori, and HCM across energy, healthcare, and public sector.",
      projects: [
        {
          headline: "New approval workflow in 3 hours instead of 10 days",
          industry: "Energy sector, Austria, ~2,200 employees",
          summary:
            "Built a fully configurable approval workflow framework where new workflow categories are pure customizing entries — no code needed. Reduced setup time from 10 days to 2-3 hours.",
          tech: "ABAP OO, SAP Workflow, Fiori My Inbox, BAdIs",
          role: "Architecture + Full-Stack Development",
        },
        {
          headline:
            "10 SAP systems consolidated into 1 — with Fiori rollout",
          industry:
            "Public sector / social insurance IT, Austria, thousands of users",
          summary:
            "Developed the complete Fiori ESS/MSS landscape for one of Austria's largest migration projects. Built custom L16 annual payroll statement app. Agile delivery with 2-week sprints.",
          tech: "Fiori/SAPUI5, ABAP, OData, SAP Workflow",
          duration: "01/2021 – 04/2023 (~2.5 years)",
          role: "Full-Stack Developer (Frontend Fiori + Backend ABAP/OData)",
        },
        {
          headline:
            "Hardship allowances via app — from request to payroll",
          industry: "Energy infrastructure / power grid operator, Austria",
          summary:
            "Built 3 custom Fiori apps for hardship allowance management: employee self-service, manager overview, and error correction. Complete digital process from request through approval to payroll integration.",
          tech: "Custom Fiori Apps, Custom Infotype, SAP Workflow",
          role: "Developer + Partial Project Lead",
        },
      ],
    },
    de: {
      title: "SAP Consulting",
      intro:
        "Senior SAP-Berater & Entwickler — 11 Jahre Erfahrung in ABAP, Fiori und HCM in Energiewirtschaft, Gesundheitswesen und Öffentlichem Sektor.",
      projects: [
        {
          headline:
            "Neuer Genehmigungsworkflow in 3 Stunden statt 10 Tagen",
          industry: "Energiewirtschaft, Österreich, ~2.200 Mitarbeiter",
          summary:
            "Ein vollständig konfigurierbares Workflow-Framework gebaut, bei dem neue Workflow-Kategorien reine Customizing-Einträge sind — kein Code nötig. Setup-Zeit von 10 Tagen auf 2-3 Stunden reduziert.",
          tech: "ABAP OO, SAP Workflow, Fiori My Inbox, BAdIs",
          role: "Architektur + Full-Stack-Entwicklung",
        },
        {
          headline:
            "10 SAP-Systeme auf 1 konsolidiert — mit Fiori-Rollout",
          industry:
            "Öffentlicher Sektor / Sozialversicherungs-IT, Österreich, tausende Anwender",
          summary:
            "Die komplette Fiori ESS/MSS-Landschaft für eines der größten Migrationsprojekte Österreichs entwickelt. Custom L16 Jahreslohnzettel-App gebaut. Agile Delivery mit 2-Wochen-Sprints.",
          tech: "Fiori/SAPUI5, ABAP, OData, SAP Workflow",
          duration: "01/2021 – 04/2023 (~2,5 Jahre)",
          role: "Full-Stack Developer (Frontend Fiori + Backend ABAP/OData)",
        },
        {
          headline:
            "Erschwernis-Zulagen per App — von Antrag bis Abrechnung",
          industry:
            "Energieinfrastruktur / Netzbetreiber, Österreich",
          summary:
            "3 Custom Fiori Apps für Erschwernis-Zulagen-Verwaltung gebaut: Mitarbeiter-Self-Service, Manager-Übersicht und Fehlerkorrektur. Kompletter digitaler Prozess von Antrag über Genehmigung bis zur Abrechnungsintegration.",
          tech: "Custom Fiori Apps, Custom Infotype, SAP Workflow",
          role: "Entwickler + Teilprojektleitung",
        },
      ],
    },
  },
  about: {
    en: {
      title: "About",
      tagline:
        "Adventurer of Truth. Christian Entrepreneur. Purpose to Profit Architect.",
      bio: "I'm Martin — SAP consultant by trade, AI systems architect by passion. After 11 years of building enterprise solutions across Europe, I started building personalized AI agent systems that actually work — not just chatbots, but intelligent assistants that know your context, learn your workflows, and are available 24/7 via Telegram and voice. I'm moving to Japan in 2026 to start a new chapter.",
      photoPlaceholder: "Photo coming soon",
    },
    de: {
      title: "Über mich",
      tagline:
        "Adventurer of Truth. Christian Entrepreneur. Purpose to Profit Architect.",
      bio: "Ich bin Martin — SAP-Berater von Beruf, AI-Systemarchitekt aus Leidenschaft. Nach 11 Jahren Enterprise-Lösungen in ganz Europa habe ich angefangen, personalisierte AI-Agent-Systeme zu bauen, die wirklich funktionieren — keine einfachen Chatbots, sondern intelligente Assistenten, die deinen Kontext kennen, deine Arbeitsabläufe lernen und 24/7 per Telegram und Sprache erreichbar sind. 2026 ziehe ich nach Japan für ein neues Kapitel.",
      photoPlaceholder: "Foto folgt",
    },
  },
  contact: {
    en: {
      title: "Contact",
      cta: "Interested? Let's talk.",
      email: "martin@md-advisory.com",
      linkedin: "LinkedIn",
      linkedinUrl: "https://linkedin.com/in/martindueck",
    },
    de: {
      title: "Kontakt",
      cta: "Interesse? Schreib mir.",
      email: "martin@md-advisory.com",
      linkedin: "LinkedIn",
      linkedinUrl: "https://linkedin.com/in/martindueck",
    },
  },
} as const;
