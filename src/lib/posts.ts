import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  /** Filename without extension, e.g. "hello-world". Unique together with `dateSlug`. */
  slug: string;
  title: string;
  summary: string;
  /** Optional topic tags from frontmatter; the first is shown on the post page. */
  tags: string[];
  /** Full ISO 8601 timestamp (UTC). */
  date: string;
  /** Date portion only, "YYYY-MM-DD" — used as the first URL segment. */
  dateSlug: string;
  /** Canonical path with a trailing slash, e.g. "/posts/2026-06-09/hello-world/". */
  url: string;
};

export type Post = PostMeta & {
  /** Raw MDX body (frontmatter stripped). */
  content: string;
};

/** Recursively collect every .md/.mdx file under content/posts/ (grouped by year). */
function postFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return postFiles(full);
    return /\.mdx?$/.test(entry.name) ? [full] : [];
  });
}

function readPost(file: string): Post {
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);

  const slug = path.basename(file).replace(/\.mdx?$/, "");
  const date = data.date
    ? new Date(data.date).toISOString()
    : new Date(0).toISOString();
  const dateSlug = date.slice(0, 10); // YYYY-MM-DD

  return {
    slug,
    title: typeof data.title === "string" ? data.title : slug,
    summary: typeof data.summary === "string" ? data.summary : "",
    tags: Array.isArray(data.tags)
      ? data.tags.filter((t): t is string => typeof t === "string")
      : [],
    date,
    dateSlug,
    url: `/posts/${dateSlug}/${slug}/`,
    content,
  };
}

/** Every post with its body, newest first. */
function allPosts(): Post[] {
  return postFiles(POSTS_DIR)
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Every post as metadata (no body), newest first — for list/index views. */
export function getAllPosts(): PostMeta[] {
  return allPosts().map((p) => ({
    slug: p.slug,
    title: p.title,
    summary: p.summary,
    tags: p.tags,
    date: p.date,
    dateSlug: p.dateSlug,
    url: p.url,
  }));
}

/** Resolve a single post from its URL segments. */
export function getPost(dateSlug: string, slug: string): Post | null {
  return (
    allPosts().find((p) => p.dateSlug === dateSlug && p.slug === slug) ?? null
  );
}
