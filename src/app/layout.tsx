export const dynamic = "force-static";
export const revalidate = false;
export const fetchCache = "force-cache";

import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader } from "next/font/google";
import { CommandMenu } from "@/components/command-menu";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { PageTransition } from "@/components/page-transition";
import { ThemeProvider } from "@/components/theme-provider";
import { getAllMDXContent } from "@/lib/mdx";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faris Ashai",
  description:
    "Software Engineer focused on UI systems and interaction design.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const journal = await getAllMDXContent();

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${newsreader.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-background text-foreground selection:bg-neutral-200 selection:text-black dark:selection:bg-neutral-700 dark:selection:text-white min-h-screen flex flex-col transition-colors duration-300 ease-in-out">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CommandMenu
            journal={journal.map((j) => ({ title: j.title, slug: j.slug }))}
          />
          <Nav />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
