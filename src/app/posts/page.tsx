import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/format";

export const metadata: Metadata = {
  title: "Posts",
  description: "Writing and notes.",
};

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
        <p className="text-muted">Writing and notes.</p>
      </header>

      {posts.length === 0 ? (
        <p className="text-muted">No posts yet.</p>
      ) : (
        <ul className="space-y-8">
          {posts.map((post) => (
            <li key={post.url}>
              <Link href={post.url} className="group block space-y-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h2 className="font-medium transition-colors group-hover:text-accent">
                    {post.title}
                  </h2>
                  <time
                    dateTime={post.date}
                    className="shrink-0 font-mono text-xs text-muted"
                  >
                    {formatDate(post.date)}
                  </time>
                </div>
                {post.summary && (
                  <p className="text-sm text-muted">{post.summary}</p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
