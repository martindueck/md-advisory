import { notFound } from "next/navigation";
import { getWebsiteProjects, getProjectBySlug } from "@/lib/notion";
import { ProjectDetail } from "./ProjectDetail";

export const revalidate = 3600;

export async function generateStaticParams() {
  const projects = await getWebsiteProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectDetail project={project} />;
}
