"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { translations } from "@/lib/translations";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const agents = {
  en: [
    { name: "Orchestrator", desc: "Routes tasks between agents. Cross-domain coordination, status aggregation, infrastructure management." },
    { name: "Training", desc: "Daily workout programming, nutrition tracking, progression analysis, water reminders. Voice-controlled from the gym." },
    { name: "E-Commerce", desc: "Product pipeline (200+ products), Google & Bing Ads, Shopify sync, automated SOPs, KPI tracking, weekly reviews." },
    { name: "SAP", desc: "Task management, client knowledge base, code documentation, time tracking. Full consulting workflow support." },
    { name: "Personal", desc: "Business pitches, research, admin, travel planning. Everything that doesn't belong to a specific domain." },
    { name: "Agency", desc: "Team coordination, revenue tracking, customer lifecycle, challenge gamification. Runs the AI consulting business." },
  ],
  de: [
    { name: "Orchestrator", desc: "Verteilt Aufgaben zwischen Agenten. Bereichsübergreifende Koordination, Status-Aggregation, Infrastruktur-Management." },
    { name: "Training", desc: "Tägliche Workout-Pläne, Ernährungstracking, Progressionsanalyse, Wasser-Reminder. Per Sprache aus dem Gym steuerbar." },
    { name: "E-Commerce", desc: "Produktpipeline (200+ Produkte), Google & Bing Ads, Shopify-Sync, automatisierte SOPs, KPI-Tracking, Wochenreviews." },
    { name: "SAP", desc: "Aufgabenmanagement, Kunden-Wissensbasis, Code-Dokumentation, Zeiterfassung. Volle Unterstützung im Beratungsprozess." },
    { name: "Personal", desc: "Business-Pitches, Recherche, Admin, Reiseplanung. Alles was keiner spezifischen Domäne zugehört." },
    { name: "Agency", desc: "Team-Koordination, Revenue-Tracking, Customer Lifecycle, Challenge-Gamification. Steuert das AI-Consulting-Business." },
  ],
};

const packages = {
  en: {
    sections: [
      {
        title: "Private / Entrepreneur",
        desc: "For individuals who want their own AI system.",
        packages: [
          { name: "Kickstart", price: "1.500 €", desc: "1 agent, Telegram bot, Notion setup. Done in one week.", duration: "1 week" },
          { name: "System", price: "5.000 €", desc: "Multi-agent setup, voice control, custom workflows, full onboarding.", duration: "2–3 weeks" },
          { name: "Partner", price: "1.500 €/mo", desc: "Ongoing optimization, new agents, workflow automation, priority support.", duration: "Monthly" },
        ],
      },
      {
        title: "Enterprise",
        desc: "For companies that want AI-powered operations.",
        packages: [
          { name: "Audit", price: "5.000 €", desc: "Analysis of your processes, AI readiness assessment, implementation roadmap.", duration: "1–2 weeks" },
          { name: "Rollout", price: "15–25k €", desc: "Department-level agent deployment, integrations, team training, go-live.", duration: "4–8 weeks" },
          { name: "Operations", price: "3.000 €/mo", desc: "Continuous optimization, new workflows, monitoring, scaling support.", duration: "Monthly" },
        ],
      },
      {
        title: "Education",
        desc: "Learn to build your own agents.",
        packages: [
          { name: "Online Course", price: "497 €", desc: "Self-paced. From zero to your first multi-agent system.", duration: "Self-paced" },
          { name: "Live Workshop", price: "2.500 €", desc: "2-day intensive, max 12 participants. Hands-on, leave with a working system.", duration: "2 days" },
          { name: "Corporate Training", price: "8–15k €", desc: "Custom training for your team. Strategy, architecture, hands-on implementation.", duration: "2–5 days" },
        ],
      },
      {
        title: "Tools",
        desc: "Self-service for the technically inclined.",
        packages: [
          { name: "AI Agent Setup Tool", price: "97 € + 19 €/mo", desc: "Guided setup wizard. Configure agents, deploy bots, connect Notion — all self-service.", duration: "Coming soon" },
        ],
      },
    ],
  },
  de: {
    sections: [
      {
        title: "Privat / Unternehmer",
        desc: "Für Einzelpersonen die ihr eigenes AI-System wollen.",
        packages: [
          { name: "Kickstart", price: "1.500 €", desc: "1 Agent, Telegram-Bot, Notion-Setup. Fertig in einer Woche.", duration: "1 Woche" },
          { name: "System", price: "5.000 €", desc: "Multi-Agent-Setup, Sprachsteuerung, individuelle Workflows, volles Onboarding.", duration: "2–3 Wochen" },
          { name: "Partner", price: "1.500 €/Monat", desc: "Laufende Optimierung, neue Agenten, Workflow-Automatisierung, Priority-Support.", duration: "Monatlich" },
        ],
      },
      {
        title: "Enterprise",
        desc: "Für Unternehmen die AI-gestützte Operations wollen.",
        packages: [
          { name: "Audit", price: "5.000 €", desc: "Analyse deiner Prozesse, AI-Readiness-Bewertung, Umsetzungsfahrplan.", duration: "1–2 Wochen" },
          { name: "Rollout", price: "15–25k €", desc: "Abteilungsweite Agent-Einführung, Integrationen, Team-Training, Go-Live.", duration: "4–8 Wochen" },
          { name: "Operations", price: "3.000 €/Monat", desc: "Kontinuierliche Optimierung, neue Workflows, Monitoring, Skalierungsunterstützung.", duration: "Monatlich" },
        ],
      },
      {
        title: "Education",
        desc: "Lerne dein eigenes System zu bauen.",
        packages: [
          { name: "Online-Kurs", price: "497 €", desc: "Selbstgesteuert. Von Null zum ersten Multi-Agent-System.", duration: "Selbstgesteuert" },
          { name: "Live Workshop", price: "2.500 €", desc: "2-Tage-Intensiv, max. 12 Teilnehmer. Hands-on, mit fertigem System nach Hause.", duration: "2 Tage" },
          { name: "Corporate Training", price: "8–15k €", desc: "Individuelles Training für dein Team. Strategie, Architektur, Hands-on-Umsetzung.", duration: "2–5 Tage" },
        ],
      },
      {
        title: "Tools",
        desc: "Self-Service für technisch Versierte.",
        packages: [
          { name: "AI Agent Setup Tool", price: "97 € + 19 €/Monat", desc: "Geführter Setup-Wizard. Agenten konfigurieren, Bots deployen, Notion verbinden — alles Self-Service.", duration: "Coming soon" },
        ],
      },
    ],
  },
};

export default function AiAgencyPage() {
  const { lang } = useLanguage();
  const t = translations.hero[lang];
  const contact = translations.contact[lang];

  return (
    <>
      <Nav variant="subpage" />

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] px-6 pt-24 pb-20 md:px-12 lg:px-20 overflow-hidden">
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

      {/* My Setup — 6 Agents */}
      <section className="px-6 pb-24 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-muted mb-2">
            {lang === "en" ? "Proof of Concept" : "Proof of Concept"}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {lang === "en" ? "My Setup — 6 Agents, One System" : "Mein Setup — 6 Agenten, ein System"}
          </h2>
          <p className="mt-4 text-lg text-muted max-w-3xl">
            {lang === "en"
              ? "I run my entire life through AI agents. Each one is a domain expert — they know my context, my data, my preferences. This is what I build for you."
              : "Ich steuere mein gesamtes Leben über AI-Agenten. Jeder ist ein Domänenexperte — sie kennen meinen Kontext, meine Daten, meine Präferenzen. Genau das baue ich für dich."}
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents[lang].map((agent) => (
              <div key={agent.name} className="glass-card rounded-2xl p-6">
                <h3 className="text-lg font-bold tracking-tight">{agent.name}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{agent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Interfaces */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20 border-t border-black/[0.04]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {lang === "en" ? "How It Works" : "Wie es funktioniert"}
          </h2>

          {/* Two interfaces */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-2xl p-8">
              <p className="text-xs uppercase tracking-widest text-muted mb-3">
                {lang === "en" ? "For Everyone" : "Für alle"}
              </p>
              <h3 className="text-xl font-bold tracking-tight">Telegram + Voice</h3>
              <p className="mt-3 text-base text-muted leading-relaxed">
                {lang === "en"
                  ? "Send a message or voice note from your phone. Your agent understands context, executes tasks, and responds in seconds. Works from the car, the gym, or the couch."
                  : "Nachricht oder Sprachnachricht vom Handy schicken. Dein Agent versteht den Kontext, führt Aufgaben aus und antwortet in Sekunden. Funktioniert vom Auto, aus dem Gym oder von der Couch."}
              </p>
            </div>
            <div className="glass-card rounded-2xl p-8">
              <p className="text-xs uppercase tracking-widest text-muted mb-3">
                {lang === "en" ? "For Power Users" : "Für Power-User"}
              </p>
              <h3 className="text-xl font-bold tracking-tight">VS Code / Terminal</h3>
              <p className="mt-3 text-base text-muted leading-relaxed">
                {lang === "en"
                  ? "Full IDE integration. Build skills, edit workflows, extend your agents with code. Direct access to all tools, APIs, and databases."
                  : "Volle IDE-Integration. Skills bauen, Workflows bearbeiten, Agenten mit Code erweitern. Direkter Zugang zu allen Tools, APIs und Datenbanken."}
              </p>
            </div>
          </div>

          {/* Modular Architecture */}
          <div className="mt-16">
            <h3 className="text-xl font-bold tracking-tight">
              {lang === "en" ? "Modular Architecture" : "Modulare Architektur"}
            </h3>
            <p className="mt-3 text-base text-muted leading-relaxed max-w-3xl">
              {lang === "en"
                ? "Three building blocks. Infinite possibilities."
                : "Drei Bausteine. Unendliche Möglichkeiten."}
            </p>
            <div className="mt-8 flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="glass-card rounded-2xl px-8 py-6 text-center flex-1">
                <p className="text-2xl font-bold">Code</p>
                <p className="mt-1 text-sm text-muted">{lang === "en" ? "Skills & Automation" : "Skills & Automatisierung"}</p>
              </div>
              <span className="text-2xl font-light text-muted">+</span>
              <div className="glass-card rounded-2xl px-8 py-6 text-center flex-1">
                <p className="text-2xl font-bold">Agent</p>
                <p className="mt-1 text-sm text-muted">{lang === "en" ? "Context & Intelligence" : "Kontext & Intelligenz"}</p>
              </div>
              <span className="text-2xl font-light text-muted">+</span>
              <div className="glass-card rounded-2xl px-8 py-6 text-center flex-1">
                <p className="text-2xl font-bold">Notion</p>
                <p className="mt-1 text-sm text-muted">{lang === "en" ? "Data & Memory" : "Daten & Gedächtnis"}</p>
              </div>
              <span className="text-2xl font-light text-muted">=</span>
              <div className="rounded-2xl px-8 py-6 text-center flex-1 bg-foreground text-background">
                <p className="text-lg font-bold">{lang === "en" ? "Every tool you can imagine" : "Jedes Tool das du dir vorstellen kannst"}</p>
                <p className="mt-1 text-sm opacity-60">{lang === "en" ? "and more" : "und mehr"}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get — Packages */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20 border-t border-black/[0.04]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {lang === "en" ? "What You Get" : "Was du bekommst"}
          </h2>
          <p className="mt-4 text-lg text-muted">
            {lang === "en"
              ? "Choose the format that fits your needs."
              : "Wähle das Format das zu deinen Anforderungen passt."}
          </p>

          <div className="mt-16 space-y-20">
            {packages[lang].sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-2xl font-bold tracking-tight">{section.title}</h3>
                <p className="mt-2 text-base text-muted">{section.desc}</p>

                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {section.packages.map((pkg) => (
                    <div key={pkg.name} className="glass-card rounded-2xl p-6 flex flex-col justify-between">
                      <div>
                        <p className="text-xs uppercase tracking-widest text-muted">{pkg.duration}</p>
                        <h4 className="mt-2 text-xl font-bold tracking-tight">{pkg.name}</h4>
                        <p className="mt-3 text-sm text-muted leading-relaxed">{pkg.desc}</p>
                      </div>
                      <p className="mt-6 text-2xl font-bold">{pkg.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20 border-t border-black/[0.04]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {lang === "en" ? "Ready?" : "Bereit?"}
          </h2>
          <p className="mt-4 text-lg text-muted">{contact.cta}</p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${contact.email}`}
              className="glass-button rounded-full px-8 py-4 text-base font-medium tracking-wide"
            >
              {contact.email}
            </a>
            <a
              href={contact.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button rounded-full px-8 py-4 text-base font-medium tracking-wide"
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
