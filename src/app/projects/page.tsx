import type { Metadata } from "next";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Things I've built.",
};

export default function ProjectsPage() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Projects</h1>
        <p className="text-muted">A selection of things I&apos;ve built.</p>
      </header>

      <ul className="space-y-6">
        {projects.map((project) => (
          <li
            key={project.name}
            className="rounded-lg border border-border bg-surface p-5 transition-colors hover:border-muted/50"
          >
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group block"
            >
              <h2 className="font-medium transition-colors group-hover:text-accent">
                {project.name}
              </h2>
              <p className="mt-1 text-sm text-muted">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
