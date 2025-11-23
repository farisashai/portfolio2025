import { Sparkles } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Journal | Faris Ashai",
  description: "Thoughts on engineering, design, and creative pursuits.",
};

interface Entry {
  title: string;
  date: string;
  category: string;
  slug: string;
}

const entries: Entry[] = [];

export default function JournalPage() {
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
                className="group flex items-center justify-between py-4 border-b border-border last:border-0 hover:bg-transparent"
              >
                <div className="flex flex-col gap-1">
                  <h2 className="text-lg font-medium text-foreground group-hover:text-muted-foreground transition-colors">
                    {entry.title}
                  </h2>
                  <span className="text-sm text-muted-foreground">
                    {entry.category}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground tabular-nums font-mono">
                  {entry.date}
                </span>
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
