import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { projects } from "@/lib/projects";
import { formatDate } from "@/lib/format";
import { site } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero */}
      <section className="space-y-4 pt-4">
        <h1 className="text-2xl font-semibold tracking-tight">{site.name}</h1>
        <p className="text-muted">{site.role}</p>
        <p className="leading-relaxed text-fg/90">
          Placeholder intro paragraph. Write a sentence or two about who you are,
          what you build, and what this site is for. This is the first thing
          visitors read, so keep it short and specific.
        </p>
      </section>

      {/* Latest writing */}
      <section className="space-y-5">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Writing
          </h2>
          <Link
            href="/posts/"
            className="text-sm text-muted transition-colors hover:text-fg"
          >
            All posts →
          </Link>
        </div>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.url}>
              <Link href={post.url} className="group block">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <span className="font-medium transition-colors group-hover:text-accent">
                    {post.title}
                  </span>
                  <time
                    dateTime={post.date}
                    className="shrink-0 font-mono text-xs text-muted"
                  >
                    {formatDate(post.date)}
                  </time>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured projects */}
      <section className="space-y-5">
        <div className="flex items-baseline justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
            Projects
          </h2>
          <Link
            href="/projects/"
            className="text-sm text-muted transition-colors hover:text-fg"
          >
            All projects →
          </Link>
        </div>
        <ul className="space-y-4">
          {featured.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <span className="font-medium transition-colors group-hover:text-accent">
                  {project.name}
                </span>
                <p className="mt-1 text-sm text-muted">{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
