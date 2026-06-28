import Link from "next/link";

export default function NotFound() {
  return (
    <div className="space-y-4 py-16 text-center">
      <p className="font-mono text-sm text-muted">404</p>
      <h1 className="text-2xl font-semibold tracking-tight">Page not found</h1>
      <p className="text-muted">
        That page doesn&apos;t exist (or moved).{" "}
        <Link href="/" className="text-accent hover:underline">
          Go home
        </Link>
        .
      </p>
    </div>
  );
}
