import Link from "next/link";
import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";

export default function Home() {
  return (
    <Container className="flex-1 max-w-3xl">
      <div className="flex flex-col gap-12 sm:gap-16 py-8 sm:py-12">
        {/* Identity Snapshot */}
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-4xl font-medium italic tracking-tight">
            Faris Ashai
          </h1>
          <p className="text-muted-foreground font-medium">Software Engineer</p>
        </div>

        <div className="flex flex-col gap-8 max-w-xl">
          <p className="text-xl sm:text-2xl leading-relaxed sm:leading-relaxed text-foreground">
            Building performant interfaces, resilient systems, and thoughtful
            user experiences.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-8 text-base font-medium">
            <Link
              href="/work"
              className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              View Work
            </Link>
            <Link
              href="/about"
              className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors"
            >
              About Me
            </Link>
          </div>
        </div>

        {/* Secondary/Social Links */}
        <div className="flex gap-6 text-sm text-muted-foreground mt-8 items-center">
          <ExternalLink href="https://github.com/farisashai">
            GitHub
          </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/farisashai/">
            LinkedIn
          </ExternalLink>
          <a
            href="mailto:farisashai@gmail.com"
            className="hover:text-foreground transition-colors"
          >
            Email
          </a>
        </div>

        {/* Inspired By */}
        <div className="text-sm text-muted-foreground/60 mt-6">
          Inspired by{" "}
          <a
            href="https://emilkowal.ski/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            @Emil Kowalski
          </a>{" "}
          and{" "}
          <a
            href="https://paco.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            @Paco Coursey
          </a>
        </div>
      </div>
    </Container>
  );
}
