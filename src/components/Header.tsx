"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

/** Drop a trailing slash (except for root) so active-link checks are slash-agnostic. */
function normalize(path: string): string {
  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

export default function Header() {
  const pathname = normalize(usePathname());

  return (
    <header className="flex items-center justify-between gap-4 py-6">
      <Link
        href="/"
        className="font-mono text-sm font-semibold tracking-tight text-fg transition-colors hover:text-accent"
      >
        {site.name}
      </Link>

      <nav className="flex items-center gap-5 text-sm">
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
