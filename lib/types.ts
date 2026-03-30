export interface WebsiteProject {
  id: string;
  slug: string;
  headline: { en: string; de: string };
  industry: { en: string; de: string };
  summary: { en: string; de: string };
  detail: { en: string; de: string } | null;
  tech: string[];
  role: { en: string; de: string };
  duration: string | null;
  status: "completed" | "ongoing";
  featured: boolean;
}
