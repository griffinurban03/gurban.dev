import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 flex items-center justify-between border-t border-divider pt-6 pb-12 font-mono text-xs text-muted">
      <span className="text-faint">{site.domain}</span>
      <div className="flex gap-5.5">
        {site.socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            className="transition-colors hover:text-accent"
            target={s.href.startsWith("http") ? "_blank" : undefined}
            rel={s.href.startsWith("http") ? "noreferrer" : undefined}
          >
            {s.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
