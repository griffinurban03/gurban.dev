import type { Metadata } from "next";
import { Manrope, JetBrains_Mono } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
// import Backdrop from "@/components/Backdrop";
import { site } from "@/lib/site";

config.autoAddCss = false;

/** Display face for headings/wordmark; mono for labels, dates, and code. */
const display = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s - ${site.domain}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable}`}>
      <body className="min-h-dvh bg-bg text-fg antialiased">
        {/*
          Animated mesh "dotted" backdrop. Disabled for now — uncomment the import
          above and the line below to enable the background canvas + vignette.
        */}
        {/* <Backdrop /> */}
        <div className="relative mx-auto flex min-h-dvh max-w-[820px] flex-col px-6 sm:px-[60px]">
          <Header />
          <main className="flex-1">
            <PageTransition>{children}</PageTransition>
          </main>
        </div>
      </body>
    </html>
  );
}
