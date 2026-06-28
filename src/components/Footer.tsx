import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-border py-8 text-sm text-muted">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex flex-wrap gap-4">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="transition-colors hover:text-fg"
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
