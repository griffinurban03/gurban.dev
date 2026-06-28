# Developer/Agent Guide: gurban.dev

This repository contains the personal website and blog of Griffin Urban (`gurban.dev`),
a single [Next.js](https://nextjs.org) app (App Router) written in TypeScript and styled
with Tailwind CSS. All content currently ships as clearly-marked placeholder text.

---

## 1. Project Directory Structure

```
gurban.dev/
├── content/
│   └── posts/                  # Raw MDX blog posts, grouped by year
│       └── YYYY/
│           └── post-slug.mdx
├── src/
│   ├── app/                    # Routes (App Router); each page.tsx is a route
│   │   ├── posts/              # Posts index + /posts/[date]/[slug] post pages
│   │   ├── projects/
│   │   ├── about/
│   │   ├── layout.tsx          # Root layout, global metadata
│   │   ├── globals.css         # Tailwind v4 entry + design tokens (@theme)
│   │   ├── sitemap.ts          # /sitemap.xml
│   │   └── robots.ts           # /robots.txt
│   ├── components/             # Header (client), Footer
│   └── lib/                    # site config + data + helpers (see below)
├── next.config.ts
└── package.json
```

`src/lib/` is the single source of truth for non-post content:

- **`site.ts`** — name, domain, role, links, nav. Edit copy here, not in components.
- **`projects.ts`** — the project list (`featured: true` also surfaces it on the homepage).
- **`posts.ts`** — reads and parses the post files.
- **`format.ts` / `seo.ts`** — date formatting and SEO helpers.

---

## 2. Where Content Lives

Raw blog posts are written in MDX and reside under `content/posts/`.

- **Storage Format:** Files are organized into subdirectories by year of publication
  (e.g. `content/posts/2026/`).
- **Filename convention:** The filename is the slug of the post with an `.mdx` extension,
  **without** the date prefix (e.g. `hello-world.mdx`).
- **Frontmatter Schema:**
  ```yaml
  ---
  title: "Post Title"
  summary: "Brief synopsis. Used for SEO meta tags and preview snippets."
  date: YYYY-MM-DD
  ---
  ```

Adding a post is purely a content change: drop a new `.mdx` file in the right year folder.
No code or route edits are required — `src/lib/posts.ts` discovers files recursively.

---

## 3. URL and Link Structure (CRITICAL)

### Trailing Slashes

The site is configured with `trailingSlash: true` in `next.config.ts`, so every canonical
URL ends with a slash and non-slash URLs 308-redirect. All internal links **MUST** end with
a trailing slash.

- **Good:** `href="/about/"`, `href="/posts/"`, `href="/projects/"`
- **Bad:** `href="/about"`, `href="/posts"`, `href="/projects"`

### Post URL Structure

A post file stored at `content/posts/YYYY/slug.mdx` is served at:

```
/posts/YYYY-MM-DD/slug/
```

_Note the full date prefix (from the frontmatter `date`) and the trailing slash._

`src/lib/posts.ts` computes this as the `url` property on every post object. **Always use
`post.url`** in layouts and components rather than constructing the path by hand.

---

## 4. Metadata and SEO Rules

SEO metadata is managed in `src/app/layout.tsx` (global) and per-page `generateMetadata`:

- **Titles:** Page titles are suffixed with ` - gurban.dev` via the metadata `title.template`
  (e.g. `About - gurban.dev`). `site.domain` holds the suffix.
- **Descriptions:** Post meta descriptions are run through `formatMetaDescription()`
  (`src/lib/seo.ts`), which strips HTML, collapses whitespace, and truncates cleanly at a
  word boundary before 160 characters (appending `…` if truncated).
- `metadataBase`, the sitemap, and robots all derive from `site.url` — keep it accurate.

---

## 5. Technology Stack & Key Commands

- **Framework:** Next.js (App Router, React Server Components), TypeScript.
- **Styling:** Tailwind CSS v4 — CSS-first config (no `tailwind.config.js`); tokens live in
  the `@theme` block of `src/app/globals.css`. Dark-only.
- **Posts:** MDX rendered with `next-mdx-remote/rsc` + `remark-gfm` + `rehype-slug`;
  frontmatter parsed with `gray-matter`.
- **Hosting:** Vercel.

### Key Commands

- **Install Dependencies:**
  ```bash
  npm install
  ```
- **Local Dev Server:**
  ```bash
  npm run dev
  ```
- **Production build (type-check + lint + static prerender — the main correctness gate):**
  ```bash
  npm run build
  ```
- **Lint only:**
  ```bash
  npm run lint
  ```
