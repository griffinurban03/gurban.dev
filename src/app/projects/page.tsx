import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.projects.title,
  description: site.projects.metaDescription,
};

export default function ProjectsPage() {
  return (
    <div className="mt-14">
      <header>
        <h1 className="font-display text-[40px] font-bold tracking-[-0.03em] text-fg">
          {site.projects.title}
        </h1>
        <p className="mt-2 text-muted">{site.projects.subtitle}</p>
      </header>

      <ul className="mt-8 space-y-3">
        {projects.map((project) => (
          <li key={project.name}>
            <a
              href={project.href}
              target="_blank"
              rel="noreferrer"
              className="group card-link -mx-3.5 block rounded-[9px] px-3.5 py-3.75 hover:translate-x-1.25 hover:bg-accent/10"
            >
              <span className="text-[15.5px] font-medium text-fg">
                {project.name}{" "}
                <span className="inline-block text-faint transition-[transform,color] duration-500 ease-in-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                  ↗
                </span>
              </span>
              <p className="mt-1 text-sm text-muted transition-colors duration-500 ease-in-out group-hover:text-body">{project.description}</p>
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
