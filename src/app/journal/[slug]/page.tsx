export const dynamic = "force-static";

import type { Metadata } from "next";
import { BackButton } from "@/components/back-button";
import { Container } from "@/components/container";
import { getAllMDXContent, getMDXContent } from "@/lib/mdx";

export async function generateStaticParams() {
  const articles = await getAllMDXContent();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  try {
    const { frontmatter } = await getMDXContent(slug);
    return {
      title: `${frontmatter.title} | Faris Ashai`,
      description: frontmatter.description,
    };
  } catch {
    return {
      title: "Article Not Found",
    };
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  try {
    const { content, frontmatter } = await getMDXContent(slug);

    return (
      <Container className="max-w-3xl py-8 sm:py-12">
        <BackButton />

        <article className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-serif text-4xl font-medium italic tracking-tight">
              {frontmatter.title}
            </h1>
            <div className="flex gap-4 text-sm text-muted-foreground font-mono uppercase tracking-wider">
              <span>{frontmatter.date}</span>
              <span>•</span>
              <span>{frontmatter.labels.join(", ")}</span>
            </div>
          </div>

          <div
            className="prose prose-neutral dark:prose-invert max-w-none leading-relaxed
            prose-headings:font-medium prose-headings:text-foreground
            prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground
            prose-code:text-foreground prose-code:font-semibold prose-code:before:content-none prose-code:after:content-none"
          >
            <blockquote>
              <p>{frontmatter.description}</p>
            </blockquote>
            {content}
          </div>
        </article>
      </Container>
    );
  } catch {
    return (
      <Container className="max-w-3xl py-12 sm:py-24">
        <p>Article not found.</p>
      </Container>
    );
  }
}
