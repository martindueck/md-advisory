export type Language = "en" | "de";

export const translations = {
  nav: {
    en: {
      aiAgency: "AI Agents",
      sap: "SAP Consulting",
      about: "About",
      contact: "Contact",
      home: "Home",
    },
    de: {
      aiAgency: "AI Agents",
      sap: "SAP Consulting",
      about: "Über mich",
      contact: "Kontakt",
      home: "Home",
    },
  },
  landing: {
    en: {
      tagline: "Advisory at the intersection of enterprise and AI.",
      cards: {
        aiAgency: {
          title: "AI Agent Agency",
          description:
            "Personalized AI agent systems that know your context, work 24/7, and are reachable via chat and voice.",
        },
        sap: {
          title: "SAP Consulting",
          description:
            "Senior SAP Consultant & Developer — 11 years of HCM, ABAP, and Fiori across energy, healthcare, public sector, and more.",
        },
        about: {
          title: "About Me",
          description:
            "Adventurer of Truth. Christian Entrepreneur. Purpose to Profit Architect.",
        },
      },
    },
    de: {
      tagline: "Beratung an der Schnittstelle von Enterprise und AI.",
      cards: {
        aiAgency: {
          title: "AI Agent Agency",
          description:
            "Personalisierte AI-Agent-Systeme, die deinen Kontext kennen, rund um die Uhr arbeiten und per Chat und Sprache erreichbar sind.",
        },
        sap: {
          title: "SAP Consulting",
          description:
            "Senior SAP-Berater & Entwickler — 11 Jahre HCM, ABAP und Fiori in Energiewirtschaft, Gesundheitswesen, Öffentlichem Sektor und mehr.",
        },
        about: {
          title: "Über mich",
          description:
            "Adventurer of Truth. Christian Entrepreneur. Purpose to Profit Architect.",
        },
      },
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
        "Senior SAP Consultant & Developer — 11 years of experience in HCM, ABAP, and Fiori across energy, healthcare, public sector, and more.",
    },
    de: {
      title: "SAP Consulting",
      intro:
        "Senior SAP-Berater & Entwickler — 11 Jahre Erfahrung in HCM, ABAP und Fiori in Energiewirtschaft, Gesundheitswesen, Öffentlichem Sektor und mehr.",
    },
  },
  about: {
    en: {
      title: "About",
      tagline:
        "Adventurer of Truth. Christian Entrepreneur. Purpose to Profit Architect.",
      bio: "I'm Martin Dück — SAP consultant by trade, AI systems architect by passion. After 11 years of building enterprise solutions across Europe, I started building personalized AI agent systems that actually work — not just chatbots, but intelligent assistants that know your context, learn your workflows, and are available 24/7 via Telegram and voice. Currently exploring new ventures at the intersection of enterprise consulting and AI.",
      photoPlaceholder: "Photo coming soon",
    },
    de: {
      title: "Über mich",
      tagline:
        "Adventurer of Truth. Christian Entrepreneur. Purpose to Profit Architect.",
      bio: "Ich bin Martin Dück — SAP-Berater von Beruf, AI-Systemarchitekt aus Leidenschaft. Nach 11 Jahren Enterprise-Lösungen in ganz Europa habe ich angefangen, personalisierte AI-Agent-Systeme zu bauen, die wirklich funktionieren — keine einfachen Chatbots, sondern intelligente Assistenten, die deinen Kontext kennen, deine Arbeitsabläufe lernen und 24/7 per Telegram und Sprache erreichbar sind. Aktuell an der Schnittstelle von Enterprise-Beratung und AI.",
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
  ui: {
    en: {
      moreProjects: "More Projects",
      allProjects: "All Projects",
      allProjectsIntro:
        "A comprehensive overview of my SAP consulting projects — past and ongoing.",
      back: "Back",
      ongoing: "Ongoing",
      completed: "Completed",
    },
    de: {
      moreProjects: "Weitere Projekte",
      allProjects: "Alle Projekte",
      allProjectsIntro:
        "Eine Gesamtübersicht meiner SAP-Beratungsprojekte — abgeschlossene und laufende.",
      back: "Zurück",
      ongoing: "Laufend",
      completed: "Abgeschlossen",
    },
  },
} as const;
