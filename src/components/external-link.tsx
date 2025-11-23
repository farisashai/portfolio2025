import { ArrowUpRight } from "lucide-react";
import type * as React from "react";
import { cn } from "@/lib/utils";

type ExternalLinkProps = React.ComponentPropsWithoutRef<"a">;

export function ExternalLink({
  className,
  children,
  ...props
}: ExternalLinkProps) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground",
        className,
      )}
    >
      <span>{children}</span>
      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
    </a>
  );
}
