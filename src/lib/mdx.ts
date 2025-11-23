import fs from "fs";
import matter from "gray-matter";
import path from "path";

const contentDirectory = path.join(process.cwd(), "src/content");

export async function getMDXContent(type: "work" | "journal", slug: string) {
  const filePath = path.join(contentDirectory, type, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);
  return { content, frontmatter: data };
}

export async function getAllMDXContent(type: "work" | "journal") {
  const directory = path.join(contentDirectory, type);
  if (!fs.existsSync(directory)) return [];

  const files = fs.readdirSync(directory);
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(directory, file), "utf8");
    const { data } = matter(source);
    return { ...data, slug };
  });
}
