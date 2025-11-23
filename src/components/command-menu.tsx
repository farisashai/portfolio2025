"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Search, FileText, FlaskConical, Layout, Hash, ArrowRight, CornerDownRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const pages = [
  { name: "Home", href: "/", icon: Layout },
  { name: "Work", href: "/work", icon: Layout },
  { name: "Experiments", href: "/experiments", icon: FlaskConical },
  { name: "About", href: "/about", icon: Layout },
  { name: "Journal", href: "/journal", icon: FileText },
];

interface ContentItem {
  title: string;
  slug: string;
}

interface CommandMenuProps {
  projects: ContentItem[];
  journal: ContentItem[];
}

export function CommandMenu({ projects, journal }: CommandMenuProps) {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <Command.Dialog
          open={open}
          onOpenChange={setOpen}
          label="Global Command Menu"
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] sm:pt-[25vh] px-4"
        >
          {/* Overlay with blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          
          {/* Dialog Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="relative w-full max-w-xl overflow-hidden rounded-xl border border-border bg-background shadow-2xl ring-1 ring-black/5 dark:ring-white/10"
          >
            {/* Accessible Title for Screen Readers */}
            <DialogPrimitive.Title className="sr-only">Global Command Menu</DialogPrimitive.Title>

            <div className="flex items-center border-b border-border px-4 py-2 sm:py-0" cmdk-input-wrapper="">
              <Search className="w-5 h-5 text-muted-foreground mr-3" />
              <Command.Input 
                placeholder="Search..."
                autoFocus
                className="flex h-12 sm:h-14 w-full rounded-md bg-transparent py-3 text-base outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 font-sans"
              />
              <kbd className="hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-secondary px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">ESC</span>
              </kbd>
            </div>
            
            <Command.List className="max-h-[360px] overflow-y-auto overflow-x-hidden py-2 px-2 scroll-py-2">
              <Command.Empty className="py-12 text-center text-sm text-muted-foreground flex flex-col items-center gap-2">
                <span>No results found.</span>
              </Command.Empty>

              <Command.Group heading="Pages" className="px-2 py-1.5 text-[10px] tracking-wider font-semibold text-muted-foreground/70 mb-1">
                {pages.map((page) => {
                  const pageKeywords = 
                    page.name === "Work" ? projects.map(p => p.title) :
                    page.name === "Journal" ? journal.map(j => j.title) :
                    undefined;

                  return (
                  <React.Fragment key={page.href}>
                    <Command.Item
                      onSelect={() => runCommand(() => router.push(page.href))}
                      keywords={pageKeywords}
                      className="group flex items-center px-3 py-3 text-sm text-foreground rounded-lg cursor-pointer aria-selected:bg-secondary aria-selected:text-secondary-foreground transition-colors"
                    >
                      <div className="flex items-center justify-center w-8 h-8 rounded-md bg-secondary/50 mr-3 border border-border/50 group-aria-selected:bg-background group-aria-selected:border-border group-aria-selected:shadow-sm">
                        <page.icon className="w-4 h-4 text-muted-foreground group-aria-selected:text-foreground transition-colors" />
                      </div>
                      <span className="font-medium">{page.name}</span>
                      <ArrowRight className="w-4 h-4 ml-auto text-muted-foreground/0 group-aria-selected:text-muted-foreground/50 transition-all -translate-x-2 group-aria-selected:translate-x-0" />
                    </Command.Item>

                    {page.name === "Work" && projects.length > 0 && (
                      <div className="flex flex-col gap-0.5 ml-4 pl-4 border-l border-border/50 my-1">
                        {projects.map((project) => (
                          <Command.Item
                            key={project.slug}
                            value={project.title}
                            onSelect={() => runCommand(() => router.push(`/work/${project.slug}`))}
                            className="group flex items-center px-2 py-2 text-sm text-muted-foreground rounded-md cursor-pointer aria-selected:bg-secondary aria-selected:text-foreground transition-colors"
                          >
                            <CornerDownRight className="w-3 h-3 mr-2 text-muted-foreground/50" />
                            <span className="truncate">{project.title}</span>
                          </Command.Item>
                        ))}
                      </div>
                    )}

                    {page.name === "Journal" && journal.length > 0 && (
                      <div className="flex flex-col gap-0.5 ml-4 pl-4 border-l border-border/50 my-1">
                        {journal.map((post) => (
                          <Command.Item
                            key={post.slug}
                            value={post.title}
                            onSelect={() => runCommand(() => router.push(`/journal/${post.slug}`))}
                            className="group flex items-center px-2 py-2 text-sm text-muted-foreground rounded-md cursor-pointer aria-selected:bg-secondary aria-selected:text-foreground transition-colors"
                          >
                            <CornerDownRight className="w-3 h-3 mr-2 text-muted-foreground/50" />
                            <span className="truncate">{post.title}</span>
                          </Command.Item>
                        ))}
                      </div>
                    )}
                  </React.Fragment>
                )})}
              </Command.Group>
            </Command.List>
          </motion.div>
        </Command.Dialog>
      )}
    </AnimatePresence>
  );
}
