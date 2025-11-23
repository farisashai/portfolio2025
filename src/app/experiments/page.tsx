import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Experiments | Faris Ashai",
  description:
    "A playground for UI prototypes, interaction studies, and unfinished ideas.",
};

const experiments = [
  {
    title: "Fluid Cursor",
    description: "Physics-based cursor interaction using spring animations.",
    tag: "Interaction",
  },
  {
    title: "Infinite Scroll",
    description: "Virtualization technique for massive lists.",
    tag: "Performance",
  },
  {
    title: "Dynamic Islands",
    description: "Morphing UI containers based on content state.",
    tag: "UI Pattern",
  },
  {
    title: "Shader Gradient",
    description: "WebGL fragment shader for generating smooth gradients.",
    tag: "Visual",
  },
  {
    title: "Audio Viz",
    description: "Real-time audio frequency visualization.",
    tag: "Audio",
  },
  {
    title: "Type Scale",
    description: "Generative typography scaling tool.",
    tag: "Tool",
  },
];

export default function ExperimentsPage() {
  return (
    <Container className="flex-1 max-w-5xl">
      <div className="flex flex-col gap-12 py-8 sm:py-12">
        <div className="flex flex-col gap-2 max-w-2xl">
          <h1 className="font-serif text-3xl font-medium italic">
            Experiments
          </h1>
          <p className="text-muted-foreground text-lg">
            A digital playground for exploring ideas, interactions, and
            patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {experiments.map((exp, i) => (
            <div
              key={i}
              className="aspect-square bg-secondary/50 border border-border rounded-xl p-6 flex flex-col justify-between hover:border-border hover:bg-secondary transition-all duration-300 group cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest border border-border px-2 py-1 rounded-full">
                  {exp.tag}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-medium text-foreground group-hover:underline underline-offset-4 decoration-1">
                  {exp.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
