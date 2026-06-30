import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { projects } from "@/lib/projects";
import { formatDateDot } from "@/lib/format";
import { site } from "@/lib/site";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="mt-20 sm:mt-24">
        <h1 className="font-display text-[52px] font-bold leading-none tracking-[-0.03em] text-fg sm:text-[74px]">
          {site.name}
          <span className="text-accent">.</span>
        </h1>
        <p className="mt-6 max-w-125 text-[18px] leading-[1.7] text-body">
          {site.intro}
        </p>
      </section>

      {/* Latest writing */}
      <section className="mt-16">
        <div className="mb-1.5 flex items-baseline justify-between">
          <h2 className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-muted">
            {site.home.writingHeading}
          </h2>
          <Link
            href="/posts/"
            className="text-[13px] text-muted transition-colors hover:text-fg"
          >
            {site.home.writingLink}
          </Link>
        </div>
        <ul>
          {posts.map((post) => (
            <li key={post.url}>
              <Link
                href={post.url}
                className="group card-link -mx-3.5 flex items-baseline justify-between gap-4 rounded-[9px] px-3.5 py-3.75 hover:translate-x-1.25 hover:bg-accent/10"
              >
                <span className="text-[15.5px] font-medium text-fg">
                  {post.title}
                </span>
                <time
                  dateTime={post.date}
                  className="shrink-0 font-mono text-xs text-muted transition-colors duration-200 group-hover:text-fg"
                >
                  {formatDateDot(post.date)}
                </time>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* Featured projects */}
      <section className="mt-12">
        <div className="mb-1.5 flex items-baseline justify-between">
          <h2 className="font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-muted">
            {site.home.projectsHeading}
          </h2>
          <Link
            href="/projects/"
            className="text-[13px] text-muted transition-colors hover:text-fg"
          >
            {site.home.projectsLink}
          </Link>
        </div>
        <ul className="space-y-3">
          {featured.map((project) => (
            <li key={project.name}>
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="group card-link -mx-3.5 block rounded-[9px] px-3.5 py-3.75 hover:translate-x-1.25 hover:bg-accent/10"
              >
                <span className="text-[15.5px] font-medium text-fg">
                  {project.name}{" "}
                  <span className="inline-block text-faint transition-[transform,color] duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">
                    ↗
                  </span>
                </span>
                <p className="mt-1 text-sm text-muted transition-colors duration-200 group-hover:text-body">
                  {project.description}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
