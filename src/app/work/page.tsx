import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";
import { getAllMDXContent, type MDXFrontmatter } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Work | Faris Ashai",
  description: "Selected engineering projects and case studies.",
};

function ProjectCard({ project }: { project: MDXFrontmatter }) {
  return (
    <Link
      key={project.slug}
      href={`/journal/${project.slug}`}
      className="group flex flex-col sm:flex-row sm:items-baseline justify-between py-6 border-t border-border first:border-t-0 hover:bg-secondary transition-none -mx-6 px-6"
    >
      <div className="flex flex-col gap-2 sm:gap-1">
        <span className="text-lg font-medium text-foreground group-hover:underline underline-offset-4 decoration-1">
          {project.title}
        </span>
        <span className="text-muted-foreground max-w-md leading-relaxed">
          {project.description}
        </span>
        <span className="text-xs font-mono text-muted-foreground/70 mt-1">
          {project.keywords}
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

export default async function WorkPage() {
  const allProjects = await getAllMDXContent();
  const projects = allProjects.filter((item) => item.featured === true);

  return (
    <Container className="flex-1 max-w-3xl">
      <div className="flex flex-col gap-12 py-8 sm:py-12">
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-3xl font-medium italic">
            Featured Work
          </h1>
          <p className="text-muted-foreground text-lg">
            Some interesting projects I&apos;ve built recently and problems
            I&apos;ve solved.
          </p>
        </div>

        <div className="flex flex-col mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="flex flex-col gap-4 mt-4 pt-8 border-t border-border">
          <p className="text-muted-foreground flex flex-wrap gap-2 items-center">
            See all of my past projects on{" "}
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
