import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import { getAllPosts, getPost } from "@/lib/posts";
import { formatDateDot, readingTime } from "@/lib/format";
import { formatMetaDescription } from "@/lib/seo";
import { site } from "@/lib/site";

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

  const minutes = readingTime(post.content);
  const tag = post.tags[0];

  return (
    <article className="mt-14">
      <Link
        href="/posts/"
        className="inline-flex items-center gap-1.75 font-mono text-xs text-accent transition-[gap] duration-150 hover:gap-2.75"
      >
        {site.post.backLink}
      </Link>

      <h1 className="mt-5 font-display text-[38px] font-bold leading-[1.08] tracking-tight text-fg sm:text-[52px]">
        {post.title}
      </h1>

      <div className="mt-4.5 flex flex-wrap items-center gap-3 font-mono text-xs text-muted">
        <time dateTime={post.date}>{formatDateDot(post.date)}</time>
        <span className="text-[#2e2e34]">/</span>
        <span>{minutes} {site.post.readingTimeSuffix}</span>
        {tag && (
          <>
            <span className="text-[#2e2e34]">/</span>
            <span className="text-accent">{tag}</span>
          </>
        )}
      </div>

      <div className="prose prose-invert mt-10 max-w-155">
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
