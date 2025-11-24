import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDirectory = path.join(process.cwd(), "src/content");

export type MDXFrontmatter = {
  title: string;
  description: string;
  year: string;
  tech: string;
  category: string;
  featured?: boolean;
  slug: string;
};

export async function getMDXContent(slug: string) {
  const filePath = path.join(contentDirectory, "journal", `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  return { content, frontmatter: data };
}

export async function getAllMDXContent(): Promise<MDXFrontmatter[]> {
  const directory = path.join(contentDirectory, "journal");
  if (!fs.existsSync(directory)) return [];

  const files = fs.readdirSync(directory);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(directory, file), "utf8");
      const { data } = matter(source);
      return { ...data, slug } as MDXFrontmatter;
    });
}

export async function getJournalMDXContent(): Promise<MDXFrontmatter[]> {
  const allContent = await getAllMDXContent();
  return allContent.filter((item) => item.featured === false);
}

export async function getFeaturedMDXContent(): Promise<MDXFrontmatter[]> {
  const allContent = await getAllMDXContent();
  return allContent.filter((item) => item.featured === true);
}
