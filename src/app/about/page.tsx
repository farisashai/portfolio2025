import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ExternalLink } from "@/components/external-link";

export const metadata: Metadata = {
  title: "About | Faris Ashai",
  description:
    "My background, philosophy, and approach to software engineering.",
};

interface HistoryItem {
  role: string;
  company: string;
  start: Date;
  end?: Date; // undefined means "Now"
}

// Note: Month is 0-indexed in JavaScript Date (0 = January, 1 = February, etc.)
const history: HistoryItem[] = [
  {
    role: "Head of Frontend",
    company: "Formal",
    start: new Date(2025, 6), // July 2025
    end: undefined, // Now
  },
  {
    role: "iOS Power Software Engineer",
    company: "Apple",
    start: new Date(2023, 7), // Aug 2023
    end: new Date(2025, 5), // May 2025
  },
  {
    role: "Tutor (Advanced Data Structures)",
    company: "UC San Diego",
    start: new Date(2021, 8), // Sept 2021
    end: new Date(2023, 5), // June 2023
  },
  {
    role: "Vice President of Development",
    company: "ACM @ UCSD",
    start: new Date(2022, 5), // June 2022
    end: new Date(2023, 5), // June 2023
  },
  {
    role: "iOS Power & Performance Intern",
    company: "Apple",
    start: new Date(2022, 5), // June 2022
    end: new Date(2022, 8), // Sept 2022
  },
  {
    role: "Hackathon Director",
    company: "TritonHacks",
    start: new Date(2021, 5), // June 2021
    end: new Date(2022, 5), // June 2022
  },
  {
    role: "Front End Engineer Intern",
    company: "Deckard Technologies",
    start: new Date(2021, 5), // June 2021
    end: new Date(2021, 8), // Sept 2021
  },
  {
    role: "B.S. in Math and Computer Science",
    company: "UC San Diego",
    start: new Date(2019, 8), // Sept 2019
    end: new Date(2023, 5), // June 2023
  },
];

function formatDateRange(start: Date, end?: Date) {
  if (!end) return "Now";

  const startYear = start.getFullYear();
  const endYear = end.getFullYear();
  const startMonth = start.toLocaleDateString("en-US", { month: "short" });
  const endMonth = end.toLocaleDateString("en-US", { month: "short" });

  if (startYear !== endYear) {
    return `${startYear}—${endYear}`;
  }

  if (startMonth === endMonth) {
    return `${startMonth} ${startYear}`;
  }

  return `${startMonth}—${endMonth} ${startYear}`;
}

export default function AboutPage() {
  // Sort by end date (descending), putting "Now" first
  const sortedHistory = [...history].sort((a, b) => {
    const endA = a.end?.getTime() ?? Infinity;
    const endB = b.end?.getTime() ?? Infinity;
    return endB - endA;
  });

  return (
    <Container className="flex-1 max-w-3xl">
      <div className="flex flex-col gap-16 py-8 sm:py-12">
        {/* Header */}
        <div className="flex flex-col gap-2">
          <h1 className="font-serif text-3xl font-medium italic">About</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-8 md:gap-12">
          {/* Professional Identity */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
            Identity
          </h2>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I’m a software engineer who cares deeply about building fast,
              thoughtful, and well-designed products. Over the past five years
              I’ve worked across many layers of the stack, primarily focused on
              frontend systems, refining interactions, and making interfaces
              feel purposeful and responsive.
            </p>
            <p>
              I enjoy systems thinking just as much as product polish, whether
              that means improving reliability, smoothing out abstractions, or
              tightening performance. I try to approach every project with
              intention and a high bar for quality, always looking for the small
              decisions that make a product feel cohesive.
            </p>
            <p>
              Outside of work, you’ll usually find me exploring new coffee and
              tea spots, chasing sunsets, listening to live music, or traveling
              somewhere new.
            </p>
          </div>

          {/* History */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
            History
          </h2>
          <div className="flex flex-col gap-5">
            {sortedHistory.map((item) => (
              <div
                key={item.role + item.company}
                className="flex justify-between items-start gap-4"
              >
                <div className="flex flex-col">
                  <span className="font-medium text-foreground">
                    {item.role}
                  </span>
                  <span className="text-muted-foreground">{item.company}</span>
                </div>
                <span className="text-sm tabular-nums text-muted-foreground shrink-0 text-right">
                  {formatDateRange(item.start, item.end)}
                </span>
              </div>
            ))}
          </div>

          {/* Awards */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
            Awards
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col">
              <ExternalLink
                href="https://top.mlh.io/2022/profiles/faris-ashai"
                className="font-medium text-foreground"
              >
                Top 50 Hacker
              </ExternalLink>
              <div className="flex justify-between items-baseline text-muted-foreground">
                <span>Major League Hacking</span>
                <span className="text-sm tabular-nums">2022</span>
              </div>
            </div>
          </div>

          {/* Values */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
            Values
          </h2>
          <ul className="flex flex-col gap-3 text-base text-muted-foreground">
            <li className="flex items-start gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0"></span>
              <span>
                Study fundamentals, experiment often with a playful attitude
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0"></span>
              <span>Durable modular systems with swappable layers</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0"></span>
              <span>
                Tackle classes of problems not problems, avoid bandaid fixes and
                stopgap solutions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0"></span>
              <span>
                Static determinism through rules to reduce errors: knowledge
                base, architecture docs, opinionated linters and formatters,
                syntax rules, structural rules
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0"></span>
              <span>
                Beauty = delight + performance + correctness + simplicity
              </span>
            </li>
          </ul>

          {/* Now */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
            Now
          </h2>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              Currently, I&apos;m focused on building end-to-end type-safe
              systems and visual tools that lower the barrier to entry for
              complex logic.
            </p>
            <p>
              I&apos;m diving deep into **AST parsing** and **domain-specific
              languages** to build better developer tools, as seen in my work on
              the Visual Rego Editor. I&apos;m also exploring how to bridge the
              gap between backend and frontend type systems more effectively
              using tools like `proto-to-trpc`.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
