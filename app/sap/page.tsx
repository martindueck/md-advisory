import { getWebsiteProjects } from "@/lib/notion";
import { SapContent } from "./SapContent";

export const revalidate = 3600;

export default async function SapPage() {
  const projects = await getWebsiteProjects();
  const featured = projects.filter((p) => p.featured);
  return <SapContent projects={featured} />;
}
