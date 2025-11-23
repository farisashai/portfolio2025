import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "About | Faris Ashai",
  description: "My background, philosophy, and approach to software engineering.",
};

export default function AboutPage() {
  return (
    <Container className="flex-1 max-w-3xl">
      <div className="flex flex-col gap-16 py-8 sm:py-12">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-3xl font-medium italic">About</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-12">
          
          {/* Professional Identity */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">Identity</h2>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I’m a software engineer who cares deeply about building fast, thoughtful, and well-designed products. Over the past five years I’ve worked across many layers of the stack, primarily focused on frontend systems, refining interactions, and making interfaces feel purposeful and responsive.
            </p>
            <p>
              I enjoy systems thinking just as much as product polish, whether that means improving reliability, smoothing out abstractions, or tightening performance. I try to approach every project with intention and a high bar for quality, always looking for the small decisions that make a product feel cohesive.
            </p>
            <p>
              Outside of work, you’ll usually find me exploring new coffee and tea spots, chasing sunsets, listening to live music, or traveling somewhere new.
            </p>
          </div>

          {/* History */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">History</h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <span className="font-medium text-foreground">Head of Frontend</span>
              <div className="flex justify-between items-baseline text-muted-foreground">
                <span>Formal</span>
                <span className="text-sm tabular-nums">Now</span>
              </div>
            </div>
            
            <div className="flex flex-col">
              <span className="font-medium text-foreground">iOS Power Software Engineer</span>
              <div className="flex justify-between items-baseline text-muted-foreground">
                <span>Apple</span>
                <span className="text-sm tabular-nums">2023—2025</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-medium text-foreground">Vice President of Development</span>
              <div className="flex justify-between items-baseline text-muted-foreground">
                <span>ACM @ UCSD</span>
                <span className="text-sm tabular-nums">2022—2023</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-medium text-foreground">Hackathon Director</span>
              <div className="flex justify-between items-baseline text-muted-foreground">
                <span>TritonHacks</span>
                <span className="text-sm tabular-nums">2021—2022</span>
              </div>
            </div>
          </div>

          {/* Awards */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">Awards</h2>
          <div className="flex flex-col gap-4">
             <div className="flex flex-col">
              <span className="font-medium text-foreground">Top 50 Hacker</span>
              <div className="flex justify-between items-baseline text-muted-foreground">
                <span>Major League Hacking</span>
                <span className="text-sm tabular-nums"></span>
              </div>
            </div>
          </div>

          {/* Creative Identity */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">Creative Roots</h2>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              My engineering practice is deeply informed by my background in creative fields.
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex flex-col gap-1">
                <span className="font-medium text-foreground block">Photography</span>
                <span className="text-base">Teaches me about composition, hierarchy, and the importance of negative space.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-medium text-foreground block">Music</span>
                <span className="text-base">Influences how I think about rhythm, patterns, and timing in user interfaces.</span>
              </li>
              <li className="flex flex-col gap-1">
                <span className="font-medium text-foreground block">Writing</span>
                <span className="text-base">Forces clarity of thought, which directly translates to cleaner, more maintainable code.</span>
              </li>
            </ul>
          </div>

          {/* Values */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">Values</h2>
          <ul className="flex flex-col gap-3 text-base text-muted-foreground">
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40"></span>
              Build for durability
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40"></span>
              Clarity over cleverness
            </li>
            <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40"></span>
              Experiment often
            </li>
             <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40"></span>
              Ship with intention
            </li>
             <li className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40"></span>
              Beauty = correctness + restraint
            </li>
          </ul>

          {/* Now */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">Now</h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Currently exploring WebGL, rust-based frontend tooling, and reading about sustainable computing.
          </p>
        </div>
      </div>
    </Container>
  );
}
