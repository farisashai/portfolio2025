import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { Sparkles } from "lucide-react";

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


const entries: Entry[] = [
  {
    title: "On Software Longevity",
    date: "November 2025",
    category: "Engineering",
    slug: "software-longevity",
  },

  {
    date: "September 2025",
    category: "Engineering",
    slug: "return-to-static",
    title: "The Return to Static",
  },
  {
    date: "August 2025",
    category: "Design",
    slug: "ambient-computing",
    title: "Ambient Computing",
  },
];

export default function JournalPage() {
  return (
    <Container className="flex-1 max-w-3xl">
      <div className="flex flex-col gap-12 py-8 sm:py-12">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-3xl font-medium italic">Journal</h1>
          <p className="text-muted-foreground text-lg">
            Writing about craft, systems, and observations.
          </p>
        </div>

        <div className="flex flex-col mt-8">
          {entries.length > 0 ? (
            entries.map((entry) => (
              <Link 
                key={entry.slug} 
                href={`/journal/${entry.slug}`}
                className="group flex flex-col -mx-4 px-4 py-4 hover:bg-secondary rounded-lg transition-none"
              >
                <div className="flex items-baseline justify-between border-b border-border group-hover:border-transparent pb-4 transition-none">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
                      <h2 className="text-xl font-medium text-foreground">
                        {entry.title}
                      </h2>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider border border-border px-1.5 py-0.5 rounded-full self-start sm:self-auto">
                        {entry.category}
                      </span>
                  </div>
                  <span className="text-sm text-muted-foreground tabular-nums shrink-0 ml-4 font-mono">
                    {entry.date}
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
                <h3 className="text-lg font-medium font-serif italic">In the Works</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I&apos;m currently curating my thoughts on engineering, design, and the intersection of both. Check back soon.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}
