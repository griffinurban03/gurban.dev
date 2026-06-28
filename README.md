# gurban.dev

Source code for my personal website — a blog and project showcase.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first config, dark theme)
- MDX blog posts in [`content/posts/`](content/posts) (grouped by year), rendered with
  [`next-mdx-remote`](https://github.com/hashicorp/next-mdx-remote)
- Deployed on [Vercel](https://vercel.com)

See [AGENTS.md](AGENTS.md) for the full structure, URL conventions, and SEO rules.

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint
```

## Writing a post

Add an `.mdx` file under the year folder in [`content/posts/`](content/posts) (e.g.
`content/posts/2026/my-post.mdx`) with frontmatter:

```mdx
---
title: "My post title"
summary: "One-line summary shown in the index and SEO meta tags."
date: 2026-06-28
---

Post body in Markdown / MDX.
```

It appears automatically on `/posts/`, newest first, served at
`/posts/YYYY-MM-DD/my-post/`.

## Customizing

Most site-wide content lives in [`src/lib/site.ts`](src/lib/site.ts) (name, links,
nav). Projects are in [`src/lib/projects.ts`](src/lib/projects.ts). Colors and fonts
are design tokens in [`src/app/globals.css`](src/app/globals.css). All copy currently
ships as clearly-marked placeholders.
