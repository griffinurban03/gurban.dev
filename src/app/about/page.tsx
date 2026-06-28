import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name}.`,
};

export default function AboutPage() {
  return (
    <article className="prose prose-invert max-w-none">
      <h1>About</h1>
      <p>
        Placeholder bio. Introduce yourself — what you do, what you care about,
        and what you&apos;re working on right now. A few short paragraphs is
        plenty.
      </p>
      <p>
        Placeholder paragraph two. You might mention your background, the kinds
        of problems you like to solve, or what you&apos;re currently learning.
      </p>
      <h2>Elsewhere</h2>
      <ul>
        {site.socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </article>
  );
}
