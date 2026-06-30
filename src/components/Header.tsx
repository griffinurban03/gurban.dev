"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/** Drop a trailing slash (except for root) so active-link checks are slash-agnostic. */
function normalize(path: string): string {
  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

/** Split the wordmark into a lead and a final, accent-colored, word. */
function wordmark(name: string): [string, string] {
  const i = name.lastIndexOf(" ");
  return i === -1 ? ["", name] : [name.slice(0, i + 1), name.slice(i + 1)];
}

export default function Header() {
  const pathname = normalize(usePathname());
  const [lead, accent] = wordmark(site.name);

  return (
    <header className="flex items-center justify-between gap-4 pt-12 pb-2">
      <Link
        href="/"
        className="font-mono text-[15px] font-semibold tracking-[-0.01em] text-fg"
      >
        {lead}
        <span className="text-accent">{accent}</span>
      </Link>

      <nav className="flex items-center gap-6.5 text-[15px]">
        {site.nav.map((item) => {
          const href = normalize(item.href);
          const active = pathname === href || pathname.startsWith(`${href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={
                active
                  ? "text-fg"
                  : "text-muted transition-colors hover:text-fg"
              }
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
