import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDateDot } from "@/lib/format";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.posts.title,
  description: site.posts.subtitle,
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="mt-14">
      <header>
        <h1 className="font-display text-[40px] font-bold tracking-[-0.03em] text-fg">
          {site.posts.title}
        </h1>
        <p className="mt-2 text-muted">{site.posts.subtitle}</p>
      </header>

      {posts.length === 0 ? (
        <p className="mt-10 text-muted">{site.posts.empty}</p>
      ) : (
        <ul className="mt-8">
          {posts.map((post) => (
            <li key={post.url}>
              <Link
                href={post.url}
                className="card-link -mx-3.5 block rounded-[9px] px-3.5 py-3.75 hover:translate-x-1.25 hover:bg-accent/10"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-[15.5px] font-medium text-fg">
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.date}
                    className="shrink-0 font-mono text-xs text-muted"
                  >
                    {formatDateDot(post.date)}
                  </time>
                </div>
                {post.summary && (
                  <p className="mt-1 text-sm text-muted">{post.summary}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
