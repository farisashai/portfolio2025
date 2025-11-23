import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Work | Faris Ashai",
  description: "Selected engineering projects and case studies.",
};

const projects = [
  {
    name: "Design System Alpha",
    description: "A composable component library for enterprise dashboards.",
    tech: "React, TypeScript, Tailwind",
    year: "2024",
    slug: "design-system-alpha",
  },
  {
    name: "Cloud Dashboard",
    description: "Real-time monitoring platform with sub-second latency.",
    tech: "Next.js, WebSockets, Go",
    year: "2023",
    slug: "cloud-dashboard",
  },
  {
    name: "Commerce SDK",
    description: "Headless commerce toolkit used by 50+ merchants.",
    tech: "TypeScript, Node.js",
    year: "2023",
    slug: "commerce-sdk",
  },
  {
    name: "Mobile Checkout",
    description: "Redesigned checkout flow increasing conversion by 15%.",
    tech: "React Native",
    year: "2022",
    slug: "mobile-checkout",
  },
];

export default function WorkPage() {
  return (
    <Container className="flex-1 max-w-3xl">
      <div className="flex flex-col gap-12 py-8 sm:py-12">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-3xl font-medium italic">Featured Work</h1>
          <p className="text-muted-foreground text-lg">
            A collection of projects I&apos;ve built and problems I&apos;ve solved.
          </p>
        </div>

        <div className="flex flex-col mt-8">
          {projects.map((project) => (
            <Link 
              key={project.slug} 
              href={`/work/${project.slug}`}
              className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-6 border-t border-border first:border-t-0 hover:bg-secondary transition-none -mx-6 px-6"
            >
              <div className="flex flex-col gap-2 sm:gap-1">
                <span className="text-lg font-medium text-foreground group-hover:underline underline-offset-4 decoration-1">
                  {project.name}
                </span>
                <span className="text-muted-foreground max-w-md leading-relaxed">
                  {project.description}
                </span>
                <span className="text-xs font-mono text-muted-foreground/70 mt-1">{project.tech}</span>
              </div>
              <div className="hidden sm:flex flex-col items-end gap-1 mt-1">
                 <span className="text-sm text-muted-foreground font-mono tabular-nums">{project.year}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-4 pt-8 border-t border-border">
           <p className="text-muted-foreground">
            See more on <a href="https://github.com/farisashai" className="text-foreground hover:underline underline-offset-4 inline-flex items-center gap-0.5" target="_blank" rel="noopener noreferrer">GitHub <ArrowUpRight className="w-3 h-3" /></a> and <a href="https://devpost.com/farisashai" className="text-foreground hover:underline underline-offset-4 inline-flex items-center gap-0.5" target="_blank" rel="noopener noreferrer">Devpost <ArrowUpRight className="w-3 h-3" /></a>.
           </p>
        </div>
      </div>
    </Container>
  );
}
