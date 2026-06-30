import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faInstagram,
  faLetterboxd,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: site.about.title,
  description: `About ${site.name}.`,
};

type IconKey = (typeof site.socials)[number]["icon"];

const socialIcons: Record<IconKey, IconDefinition> = {
  github: faGithub,
  linkedin: faLinkedin,
  instagram: faInstagram,
  letterboxd: faLetterboxd,
  email: faEnvelope,
};

export default function AboutPage() {
  return (
    <div className="mt-14 max-w-155">
      <article className="prose prose-invert">
        <h1>{site.about.title}</h1>
        {site.about.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <h2>{site.about.interestsHeading}</h2>
        {site.about.paragraphsInterests.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </article>

      <section className="mt-16">
        <h2 className="mb-3 font-display text-2xl font-bold tracking-[-0.015em] text-fg">
          {site.about.elsewhereHeading}
        </h2>
        <div className="-mx-3">
          {site.socials.map((s) => {
            const isExternal = s.href.startsWith("http");
            return (
              <a
                key={s.label}
                href={s.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="group card-link flex items-center gap-3.5 rounded-lg px-3 py-3 text-body no-underline hover:translate-x-1.25 hover:bg-accent/10"
              >
                <FontAwesomeIcon
                  icon={socialIcons[s.icon]}
                  className="h-4 w-4 shrink-0 text-muted transition-colors duration-200 group-hover:text-accent"
                  fixedWidth
                />
                <span className="text-sm">{s.label}</span>
                {isExternal && (
                  <FontAwesomeIcon
                    icon={faUpRightFromSquare}
                    className="ml-auto h-3 w-3 text-faint opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  />
                )}
              </a>
            );
          })}
        </div>
      </section>
    </div>
  );
}
