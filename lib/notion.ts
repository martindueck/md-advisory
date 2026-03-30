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

  const detailEn = getText(props.website_detail_en);
  const detailDe = getText(props.website_detail_de);

  return {
    id: page.id as string,
    slug: getText(props.website_slug),
    headline: {
      en: getText(props.website_headline_en),
      de: getText(props.website_headline_de),
    },
    industry: {
      en: getText(props.website_industry_en),
      de: getText(props.website_industry_de),
    },
    summary: {
      en: getText(props.website_summary_en),
      de: getText(props.website_summary_de),
    },
    detail:
      detailEn || detailDe ? { en: detailEn, de: detailDe } : null,
    tech:
      props.website_tech?.type === "multi_select"
        ? props.website_tech.multi_select.map((t) => t.name)
        : [],
    role: {
      en: getText(props.website_role_en),
      de: getText(props.website_role_de),
    },
    duration: getText(props.website_duration) || null,
    status:
      (props.website_status as SelectProperty)?.select?.name === "Ongoing"
        ? "ongoing"
        : "completed",
    featured: (props.website_featured as CheckboxProperty)?.checkbox ?? false,
  };
}

export async function getWebsiteProjects(): Promise<WebsiteProject[]> {
  const response = await notion.dataSources.query({
    data_source_id: dataSourceId,
    filter: {
      property: "website_show",
      checkbox: { equals: true },
    },
    sorts: [{ property: "website_sort", direction: "ascending" }],
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
        { property: "website_show", checkbox: { equals: true } },
        { property: "website_slug", rich_text: { equals: slug } },
      ],
    },
  });

  if (response.results.length === 0) return null;
  return mapProject(response.results[0] as Record<string, unknown>);
}
