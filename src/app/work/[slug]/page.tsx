export const dynamic = "force-static";

import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/container";
import { getAllMDXContent, getMDXContent } from "@/lib/mdx";

export async function generateStaticParams() {
  const projects = await getAllMDXContent("work");
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const slug = (await params).slug;
  try {
    const { frontmatter } = await getMDXContent("work", slug);
    return {
      title: `${frontmatter.title} | Faris Ashai`,
      description: frontmatter.description,
    };
  } catch {
    return {
      title: "Project Not Found",
    };
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  try {
    const { content, frontmatter } = await getMDXContent("work", slug);

    return (
      <Container className="max-w-3xl py-8 sm:py-12">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Work
        </Link>

        <article className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="font-serif text-4xl font-medium italic tracking-tight">
              {frontmatter.title}
            </h1>
            <div className="flex gap-4 text-sm text-muted-foreground font-mono uppercase tracking-wider">
              <span>{frontmatter.year}</span>
              <span>•</span>
              <span>{frontmatter.category || frontmatter.tech}</span>
            </div>
          </div>

          <div
            className="prose prose-neutral dark:prose-invert max-w-none leading-relaxed 
            prose-headings:font-medium prose-headings:text-foreground 
            prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground"
          >
            <MDXRemote source={content} />
          </div>
        </article>
      </Container>
    );
  } catch {
    return (
      <Container className="max-w-3xl py-12 sm:py-24">
        <p>Project not found.</p>
      </Container>
    );
  }
}
