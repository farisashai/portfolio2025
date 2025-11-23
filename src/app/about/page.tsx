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
              I'm a software engineer who cares deeply about building fast,
              thoughtful, and well-designed products. Over the past five years
              I've worked across many layers of the stack, primarily focused on
              frontend systems, refining interactions, and making interfaces
              feel purposeful and responsive.
            </p>
            <p>
              I enjoy systems thinking just as much as product polish, whether
              that means improving reliability, smoothing out abstractions, or
              tightening performance. Every project is approached with
              intention and a high bar for quality, always looking for the small
              decisions that make a product feel cohesive.
            </p>
            <p>
              Outside of work, I explore new coffee and tea spots, chase sunsets,
              listen to live music, and travel.
            </p>
          </div>

          {/* History */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
            History
          </h2>
          <div className="flex flex-col gap-4">
            {sortedHistory.map((item) => (
              <div
                key={item.role + item.company}
                className="text-foreground leading-relaxed"
              >
                <span className="font-medium">{item.role}</span>
                <span className="text-muted-foreground"> — {item.company}</span>
                <span className="text-muted-foreground"> — {formatDateRange(item.start, item.end)}</span>
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
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Engineering Practice</h3>
              <ul className="flex flex-col gap-3 text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0"></span>
                  <span>Design modular systems with swappable layers so evolution is a feature, not a rewrite.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0"></span>
                  <span>Treat incidents as manifestations of a broader class of problems; never ship band-aids.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0"></span>
                  <span>Codify determinism: architecture docs, knowledge bases, opinionated linters, syntax + structural rules.</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-foreground mb-3">Design Philosophy</h3>
              <ul className="flex flex-col gap-3 text-base text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0"></span>
                  <span>Beauty emerges when delight, performance, correctness, and simplicity converge.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 mt-2.5 shrink-0"></span>
                  <span>Anchor every decision in fundamentals, then explore with intent and playfulness.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Focus */}
          <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mt-1.5">
            Focus
          </h2>
          <div className="flex flex-col gap-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              I lead Frontend at Formal, building a security-focused database reverse proxy that enforces zero-trust policies before a query ever touches customer data.
            </p>
            <p>
              The product prevents data leakage and engineer compromise, manages secrets, and ships auditable analytics, proactive threat detection, streamlined access workflows, and enterprise-grade policy configuration. Every UI surface is a policy management tool that stays deeply integrated with the native cloud providers and tools our customers already trust.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
