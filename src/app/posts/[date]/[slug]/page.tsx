import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getAllPosts, getPost } from "@/lib/posts";
import { formatDate } from "@/lib/format";
import { formatMetaDescription } from "@/lib/seo";

type Params = { params: Promise<{ date: string; slug: string }> };

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    date: post.dateSlug,
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { date, slug } = await params;
  const post = getPost(date, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: formatMetaDescription(post.summary),
  };
}

export default async function PostPage({ params }: Params) {
  const { date, slug } = await params;
  const post = getPost(date, slug);
  if (!post) notFound();

  return (
    <article className="space-y-8">
      <header className="space-y-2 border-b border-border pb-6">
        <Link
          href="/posts/"
          className="font-mono text-xs text-muted transition-colors hover:text-fg"
        >
          ← Posts
        </Link>
        <h1 className="text-2xl font-semibold tracking-tight">{post.title}</h1>
        <time dateTime={post.date} className="font-mono text-xs text-muted">
          {formatDate(post.date)}
        </time>
      </header>

      <div className="prose prose-invert max-w-none">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug],
            },
          }}
        />
      </div>
    </article>
  );
}
