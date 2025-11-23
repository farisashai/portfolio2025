import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";

export const metadata: Metadata = {
  title: "Work | Faris Ashai",
  description: "Selected engineering projects and case studies.",
};

interface Project {
  name: string;
  description: string;
  tech: string;
  year: string;
  slug: string;
}

const projects: Project[] = [
  {
    name: "Designing a Visual Code Editor",
    description:
      "Interactive editor for policy-as-code with real-time validation.",
    tech: "React, TypeScript, Monaco Editor",
    year: "October 2025",
    slug: "visual-rego-editor",
  },
  {
    name: "Bridging the Server Boundary from Go to TypeScript",
    description:
      "Generating end-to-end type-safe tRPC clients from Protocol Buffers.",
    tech: "Go, TypeScript, Protobuf, tRPC",
    year: "November 2025",
    slug: "bridging-go-to-typescript",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
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
        <span className="text-xs font-mono text-muted-foreground/70 mt-1">
          {project.tech}
        </span>
      </div>
      <div className="hidden sm:flex flex-col items-end gap-1 mt-1">
        <span className="text-sm text-muted-foreground font-mono tabular-nums">
          {project.year}
        </span>
      </div>
    </Link>
  );
}

export default function WorkPage() {
  return (
    <Container className="flex-1 max-w-3xl">
      <div className="flex flex-col gap-12 py-8 sm:py-12">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-3xl font-medium italic">
            Featured Work
          </h1>
          <p className="text-muted-foreground text-lg">
            A collection of projects I&apos;ve built and problems I&apos;ve
            solved.
          </p>
        </div>

        <div className="flex flex-col mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-4 pt-8 border-t border-border">
          <p className="text-muted-foreground flex flex-wrap gap-2 items-center">
            See more on{" "}
            <ExternalLink
              href="https://github.com/farisashai"
              className="text-foreground"
            >
              GitHub
            </ExternalLink>
            and{" "}
            <ExternalLink
              href="https://devpost.com/farisashai"
              className="text-foreground"
            >
              Devpost
            </ExternalLink>
            .
          </p>
        </div>
      </div>
    </Container>
  );
}
