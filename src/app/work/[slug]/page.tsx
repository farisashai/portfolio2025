import type { Metadata } from "next";
import { Container } from "@/components/container";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Project Detail | Faris Ashai",
  description: "Case study details.",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  
  return (
    <Container className="max-w-3xl py-12 sm:py-24">
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
            Project Title {slug}
          </h1>
          <div className="flex gap-4 text-sm text-muted-foreground font-mono uppercase tracking-wider">
            <span>2024</span>
            <span>•</span>
            <span>Infrastructure</span>
          </div>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none leading-relaxed">
          <p className="text-xl font-medium text-foreground leading-relaxed mb-8">
            This is a placeholder for the case study content. In the real implementation, 
            this would be populated by MDX or a CMS.
          </p>
          <p>
            The case study should cover:
          </p>
          <ul>
            <li>What you built</li>
            <li>Why it mattered</li>
            <li>The interesting engineering decisions</li>
            <li>Tradeoffs</li>
            <li>What you’d revise today</li>
          </ul>
          <hr className="my-8 border-border" />
          <h3>The Challenge</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </article>
    </Container>
  );
}

