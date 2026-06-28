/*
 * SEO helpers. Mirrors the conventions in AGENTS.md:
 * meta descriptions are cleaned (no HTML, collapsed whitespace) and truncated
 * cleanly at a word boundary before 160 characters.
 */
const MAX_DESCRIPTION = 160;

export function formatMetaDescription(input: string): string {
  const cleaned = input
    .replace(/<[^>]*>/g, "") // strip HTML tags
    .replace(/\s+/g, " ") // collapse whitespace
    .trim();

  if (cleaned.length <= MAX_DESCRIPTION) return cleaned;

  const truncated = cleaned.slice(0, MAX_DESCRIPTION);
  const lastSpace = truncated.lastIndexOf(" ");
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : MAX_DESCRIPTION).trimEnd()}…`;
}
