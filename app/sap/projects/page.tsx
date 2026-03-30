import { getWebsiteProjects } from "@/lib/notion";
import { AllProjectsContent } from "./AllProjectsContent";

export const revalidate = 3600;

export default async function AllProjectsPage() {
  const projects = await getWebsiteProjects();
  return <AllProjectsContent projects={projects} />;
}
