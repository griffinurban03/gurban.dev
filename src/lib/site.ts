/*
 * Single source of truth for the site's text and configuration.
 * Edit copy here — not in page or component files.
 *
 * Identity (name, role, links, nav) and per-page UI copy live together
 * because they serve the same purpose: one place to customize the site.
 */
export const site = {
  name: "Griffin Urban",
  /** Bare domain — used as the SEO title suffix (e.g. "About - gurban.dev"). */
  domain: "gurban.dev",
  /** Short role/tagline shown as the homepage eyebrow. */
  role: "Software Engineer",
  /** One- or two-sentence hero intro on the homepage. */
  intro:
    "Software Engineer & Rock Climbing enthusiast",
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
    { label: "GitHub", href: "https://github.com/placeholder", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/placeholder", icon: "linkedin" },
    { label: "Instagram", href: "https://instagram.com/placeholder", icon: "instagram" },
    { label: "Email", href: "mailto:placeholder@gurban.dev", icon: "email" },
  ],

  /** Per page copy and metadatra. */
  home: {
    writingHeading: "Writing",
    writingLink: "All posts →",
    projectsHeading: "Projects",
    projectsLink: "All projects →",
  },

  posts: {
    title: "Posts",
    subtitle: "Writing and thoughts.",
    empty: "No posts yet.",
  },

  projects: {
    title: "Projects",
    subtitle: "A selection of things I've built.",
    metaDescription: "Things I've built.",
  },

  post: {
    backLink: "← writing",
    readingTimeSuffix: "min read",
  },

  about: {
    title: "About Me",
    paragraphs: [
      "I am a software engineer from Ames, Iowa. Currently an engineering intern at Bound where I'm working on social media integrations for their mobile app.",
      "I am a recent graduate of Iowa State University where I majored in Software Engineering. I have a passion for building software that makes a difference in people's lives.",
    ],
    elsewhereHeading: "Elsewhere",
    interestsHeading: "Interests",
    paragraphsInterests: [
      "In my free time, I enjoy rock climbing, reading, watching movies, and playing video games. I also enjoy software development, whether it's building personal projects, or working on my own game.",
    ],
  },
} as const;
