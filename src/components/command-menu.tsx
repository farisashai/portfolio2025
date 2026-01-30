"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";

const pages = [
  { name: "Home", href: "/" },
  { name: "Work", href: "/work" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/journal" },
];

interface ContentItem {
  title: string;
  slug: string;
}

interface CommandMenuProps {
  journal: ContentItem[];
}

export function CommandMenu({ journal }: CommandMenuProps) {
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
          label="Command Menu"
          className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4"
        >
          <Dialog.Title className="sr-only">Command Menu</Dialog.Title>

          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/50 dark:bg-black/70"
            onClick={() => setOpen(false)}
          />

          {/* Dialog Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-xl overflow-hidden rounded-md border border-border bg-background shadow-2xl"
          >
            {/* Search Input */}
            <div className="flex items-center border-b border-border px-3">
              <Search className="w-4 h-4 text-muted-foreground mr-2" />
              <Command.Input
                placeholder="Search..."
                autoFocus
                className="flex h-11 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>

            {/* Results List */}
            <Command.List className="max-h-[400px] overflow-y-auto p-2">
              <Command.Empty className="py-8 text-center text-sm text-muted-foreground">
                No results found.
              </Command.Empty>

              <Command.Group>
                {pages.map((page) => (
                  <Command.Item
                    key={page.href}
                    onSelect={() => runCommand(() => router.push(page.href))}
                    className="flex items-center px-2 py-1.5 text-sm rounded-sm cursor-pointer aria-selected:bg-secondary/80 text-foreground transition-colors mb-0.5"
                  >
                    <span>{page.name}</span>
                  </Command.Item>
                ))}
              </Command.Group>

              {journal.length > 0 && (
                <>
                  <div className="h-px bg-border my-2" />
                  <Command.Group>
                    {journal.map((article) => (
                      <Command.Item
                        key={article.slug}
                        value={article.title}
                        onSelect={() =>
                          runCommand(() =>
                            router.push(`/journal/${article.slug}`),
                          )
                        }
                        className="flex items-center px-2 py-1.5 text-sm rounded-sm cursor-pointer aria-selected:bg-secondary/80 text-muted-foreground aria-selected:text-foreground transition-colors mb-0.5"
                      >
                        <span className="truncate">{article.title}</span>
                      </Command.Item>
                    ))}
                  </Command.Group>
                </>
              )}
            </Command.List>
          </motion.div>
        </Command.Dialog>
      )}
    </AnimatePresence>
  );
}
