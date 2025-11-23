import type { Metadata } from "next";
import { Container } from "@/components/container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Journal Entry | Faris Ashai",
  description: "Thoughts and observations.",
};

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <Container className="max-w-2xl py-12 sm:py-24">
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
            <time dateTime="2025-11-01">November 1, 2025</time>
            <span>•</span>
            <span>Engineering</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium italic tracking-tight text-foreground">
            Placeholder Title for {slug}
          </h1>
        </header>

        <div className="prose prose-neutral dark:prose-invert max-w-none leading-7 sm:leading-8">
          <p className="text-lg sm:text-xl text-muted-foreground font-normal mb-8">
            This is the lead paragraph. It should capture the essence of the article and hook the reader.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h2>A Subheading</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
      </article>
    </Container>
  );
}

