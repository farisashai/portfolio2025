import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/container";

export default function Home() {
  return (
    <Container className="flex-1 max-w-3xl">
      <div className="flex flex-col gap-12 sm:gap-16 py-8 sm:py-12">
        {/* Identity Snapshot */}
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-4xl font-medium italic tracking-tight">Faris Ashai</h1>
          <p className="text-muted-foreground font-medium">Software Engineer</p>
        </div>

        <div className="flex flex-col gap-8 max-w-xl">
          <p className="text-xl sm:text-2xl leading-relaxed sm:leading-relaxed text-foreground">
            Building thoughtful software at scale with a focus on UI systems, interaction design, and product reliability.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I value clarity, craft, and engineering that feels inevitable.
          </p>
        </div>

        <div className="flex flex-col gap-6">
           <div className="flex gap-8 text-base font-medium">
             <Link href="/work" className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">View Work</Link>
             <Link href="/about" className="underline underline-offset-4 decoration-border hover:decoration-foreground transition-colors">More about me</Link>
           </div>
        </div>

        {/* Secondary/Social Links */}
        <div className="flex gap-6 text-sm text-muted-foreground mt-8">
          <a 
            href="https://github.com/farisashai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            GitHub
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
          </a>
          <a 
            href="https://www.linkedin.com/in/farisashai/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            LinkedIn
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
          </a>
          <a 
            href="mailto:farisashai@gmail.com" 
            className="hover:text-foreground transition-colors flex items-center gap-1.5"
          >
            Email
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
          </a>
        </div>
      </div>
    </Container>
  );
}
