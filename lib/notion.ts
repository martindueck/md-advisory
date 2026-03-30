import { Client } from "@notionhq/client";
import type { WebsiteProject } from "./types";

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const dataSourceId = process.env.NOTION_PROJECTS_DATASOURCE_ID!;

type RichTextProperty = {
  type: "rich_text";
  rich_text: Array<{ plain_text: string }>;
};

type TitleProperty = {
  type: "title";
  title: Array<{ plain_text: string }>;
};

type CheckboxProperty = {
  type: "checkbox";
  checkbox: boolean;
};

type NumberProperty = {
  type: "number";
  number: number | null;
};

type SelectProperty = {
  type: "select";
  select: { name: string } | null;
};

type MultiSelectProperty = {
  type: "multi_select";
  multi_select: Array<{ name: string }>;
};

type NotionProperty =
  | RichTextProperty
  | TitleProperty
  | CheckboxProperty
  | NumberProperty
  | SelectProperty
  | MultiSelectProperty;

function getText(prop: NotionProperty | undefined): string {
  if (!prop) return "";
  if (prop.type === "rich_text") return prop.rich_text.map((t) => t.plain_text).join("");
  if (prop.type === "title") return prop.title.map((t) => t.plain_text).join("");
  return "";
}

function mapProject(page: Record<string, unknown>): WebsiteProject {
  const props = page.properties as Record<string, NotionProperty>;

  const detailEn = getText(props.detail_en);
  const detailDe = getText(props.detail_de);

  return {
    id: page.id as string,
    slug: getText(props.slug),
    headline: {
      en: getText(props.headline_en),
      de: getText(props.headline_de),
    },
    industry: {
      en: getText(props.industry_en),
      de: getText(props.industry_de),
    },
    summary: {
      en: getText(props.summary_en),
      de: getText(props.summary_de),
    },
    detail:
      detailEn || detailDe ? { en: detailEn, de: detailDe } : null,
    tech:
      props.tech?.type === "multi_select"
        ? props.tech.multi_select.map((t) => t.name)
        : [],
    role: {
      en: getText(props.role_en),
      de: getText(props.role_de),
    },
    duration: getText(props.duration) || null,
    status:
      (props.status as SelectProperty)?.select?.name === "Ongoing"
        ? "ongoing"
        : "completed",
    featured: (props.featured as CheckboxProperty)?.checkbox ?? false,
  };
}

export async function getWebsiteProjects(): Promise<WebsiteProject[]> {
  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      property: "show",
      checkbox: { equals: true },
    },
    sorts: [{ property: "sort", direction: "ascending" }],
  });

  return response.results.map((page) => mapProject(page as Record<string, unknown>));
}

export async function getProjectBySlug(
  slug: string
): Promise<WebsiteProject | null> {
  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      and: [
        { property: "show", checkbox: { equals: true } },
        { property: "slug", rich_text: { equals: slug } },
      ],
    },
  });

  if (response.results.length === 0) return null;
  return mapProject(response.results[0] as Record<string, unknown>);
}
