export const dynamic = "force-static";

import type { Metadata } from "next";
import { Container } from "@/components/container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getMDXContent, getAllMDXContent } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  const entries = await getAllMDXContent("journal");
  return entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const slug = (await params).slug;
  try {
    const { frontmatter } = await getMDXContent("journal", slug);
    return {
      title: `${frontmatter.title} | Faris Ashai`,
      description: frontmatter.description,
    };
  } catch {
    return {
      title: "Entry Not Found",
    };
  }
}

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  try {
    const { content, frontmatter } = await getMDXContent("journal", slug);

    return (
      <Container className="max-w-2xl py-8 sm:py-12">
        <Link 
          href="/journal" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Journal
        </Link>

        <article className="flex flex-col gap-10">
          <header className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <time dateTime={frontmatter.date}>{frontmatter.date}</time>
              <span>•</span>
              <span>{frontmatter.category}</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl font-medium italic tracking-tight text-foreground">
              {frontmatter.title}
            </h1>
          </header>

          <div className="prose prose-neutral dark:prose-invert max-w-none leading-7 sm:leading-8 
            prose-headings:font-medium prose-headings:text-foreground 
            prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
            <MDXRemote source={content} />
          </div>
        </article>
      </Container>
    );
  } catch {
    return (
      <Container className="max-w-2xl py-12 sm:py-24">
        <p>Entry not found.</p>
      </Container>
    );
  }
}
