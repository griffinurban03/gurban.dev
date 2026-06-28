/*
 * Central site configuration. Everything here is placeholder content —
 * swap in your real name, links, and copy when you're ready.
 */
export const site = {
  name: "Placeholder Name",
  /** Bare domain — used as the SEO title suffix (e.g. "About - gurban.dev"). */
  domain: "gurban.dev",
  /** Short role/tagline shown under your name on the homepage. */
  role: "Placeholder role — e.g. Software Engineer",
  description:
    "Placeholder description for gurban.dev — a personal site with writing and projects.",
  url: "https://gurban.dev",
  email: "placeholder@gurban.dev",

  /** Primary navigation (the home link is the wordmark in the header).
   *  Hrefs keep trailing slashes to match the site's canonical URL style. */
  nav: [
    { href: "/posts/", label: "Posts" },
    { href: "/projects/", label: "Projects" },
    { href: "/about/", label: "About" },
  ],

  /** Shown in the footer and on the about page. */
  socials: [
    { label: "GitHub", href: "https://github.com/placeholder" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/placeholder" },
    { label: "X", href: "https://x.com/placeholder" },
    { label: "Email", href: "mailto:placeholder@gurban.dev" },
  ],
} as const;
