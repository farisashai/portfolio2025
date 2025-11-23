import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";

export function Footer() {
  return (
    <footer className="w-full py-12 mt-auto">
      <Container className="max-w-3xl flex flex-col gap-8">
        <hr className="border-border" />
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 text-sm text-muted-foreground">
          <div className="flex flex-col gap-1">
            <span className="font-medium text-foreground">
              © {new Date().getFullYear()} Faris Ashai
            </span>
            <span>Software Engineer</span>
          </div>
          <div className="flex gap-6">
            <a
              href="mailto:farisashai@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
            <ExternalLink href="https://github.com/farisashai">
              GitHub
            </ExternalLink>
            <ExternalLink href="https://www.linkedin.com/in/farisashai/">
              LinkedIn
            </ExternalLink>
          </div>
        </div>
      </Container>
    </footer>
  );
}
