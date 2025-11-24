import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDirectory = path.join(process.cwd(), "src/content");

export type MDXFrontmatter = {
  title: string;
  description: string;
  year: string;
  keywords: string;
  labels: string[];
  featured?: boolean;
  draft?: boolean;
  slug: string;
};

const SUPPORTED_LABELS = ["Engineering", "Other"] as const;

const REQUIRED_FIELDS = ["title", "description", "year", "keywords", "labels"];
const OPTIONAL_FIELDS = ["featured", "draft"];
const SUPPORTED_FIELDS = [...REQUIRED_FIELDS, ...OPTIONAL_FIELDS];

function validateFrontmatter(
  data: Record<string, unknown>,
  slug: string,
): void {
  const isDev = process.env.NODE_ENV === "development";
  if (!isDev) return;

  // Check for required fields
  for (const field of REQUIRED_FIELDS) {
    if (!(field in data)) {
      throw new Error(
        `[${slug}] Missing required field: "${field}". Required fields: ${REQUIRED_FIELDS.join(", ")}`,
      );
    }
  }

  // Check for unsupported fields
  const dataKeys = Object.keys(data);
  for (const key of dataKeys) {
    if (!SUPPORTED_FIELDS.includes(key)) {
      throw new Error(
        `[${slug}] Unsupported field: "${key}". Supported fields: ${SUPPORTED_FIELDS.join(", ")}`,
      );
    }
  }

  // Validate labels array
  if (!Array.isArray(data.labels)) {
    throw new Error(`[${slug}] Field "labels" must be an array of strings`);
  }

  // Check for unsupported labels
  for (const label of data.labels) {
    if (!SUPPORTED_LABELS.includes(label)) {
      throw new Error(
        `[${slug}] Unsupported label: "${label}". Supported labels: ${SUPPORTED_LABELS.join(", ")}`,
      );
    }
  }
}

export async function getMDXContent(slug: string) {
  const filePath = path.join(contentDirectory, "journal", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  validateFrontmatter(data, slug);
  return { content, frontmatter: data };
}

export async function getAllMDXContent(): Promise<MDXFrontmatter[]> {
  const directory = path.join(contentDirectory, "journal");
  if (!fs.existsSync(directory)) return [];

  const isDev = process.env.NODE_ENV === "development";
  const files = fs.readdirSync(directory);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(directory, file), "utf8");
      const { data } = matter(source);
      validateFrontmatter(data, slug);
      return { ...data, slug } as MDXFrontmatter;
    })
    .filter((item) => isDev || !item.draft);
}
