import { Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { getJournalMDXContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Journal | Faris Ashai",
  description: "Thoughts on engineering, design, and creative pursuits.",
};

export default async function JournalPage() {
  const entries = await getJournalMDXContent();

  return (
    <Container className="flex-1 max-w-3xl">
      <div className="flex flex-col gap-12 py-8 sm:py-12">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-3xl font-medium italic">Journal</h1>
          <p className="text-muted-foreground text-lg">
            Writings about craft, systems, and observations.
          </p>
        </div>

        <div className="flex flex-col">
          {entries.length > 0 ? (
            entries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/journal/${entry.slug}`}
                className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-6 border-t border-border first:border-t-0 hover:bg-secondary transition-none -mx-6 px-6"
              >
                <div className="flex flex-col gap-2 sm:gap-1">
                  <span className="text-lg font-medium text-foreground group-hover:underline underline-offset-4 decoration-1">
                    {entry.title}
                  </span>
                  <span className="text-muted-foreground max-w-md leading-relaxed">
                    {entry.description}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground/70 mt-1">
                    {entry.category}
                  </span>
                </div>
                <div className="hidden sm:flex flex-col items-end gap-1 mt-1">
                  <span className="text-sm text-muted-foreground font-mono tabular-nums">
                    {entry.year}
                  </span>
                </div>
              </Link>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center gap-6 border border-dashed border-border rounded-xl bg-secondary/30">
              <div className="bg-background p-3 rounded-full shadow-sm border border-border">
                <Sparkles className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col gap-2 max-w-sm px-4">
                <h3 className="text-lg font-medium font-serif italic">
                  In the Works
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m currently curating my thoughts on engineering,
                  design, and the intersection of both. Check back soon.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
