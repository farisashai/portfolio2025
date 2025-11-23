"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/container";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Work", path: "/work" },
  { name: "Experiments", path: "/experiments" },
  { name: "About", path: "/about" },
  { name: "Journal", path: "/journal" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="w-full py-8 sm:py-12 mb-8 sm:mb-16">
      <Container className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 max-w-3xl">
        <Link href="/" className="font-medium tracking-tight text-lg">
          Faris Ashai
        </Link>
        <div className="flex items-center gap-6">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => {
              const isActive = pathname.startsWith(item.path);
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    "relative text-sm transition-colors hover:text-foreground flex flex-col items-center justify-center",
                    isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground",
                  )}
                >
                  {/* Hidden bold text to reserve space */}
                  <span className="invisible font-medium">{item.name}</span>

                  {/* Visible text positioned absolutely to center */}
                  <span className="absolute inset-0 flex items-center justify-center">
                    {item.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-[2px] left-0 right-0 h-px bg-foreground"
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <ModeToggle />
        </div>
      </Container>
    </nav>
  );
}
