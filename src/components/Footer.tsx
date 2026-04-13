import Link from "next/link";
import { SITE, NAV_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-gold">{SITE.name}</p>
            <p className="mt-2 text-sm text-muted">{SITE.tagline}</p>
            <p className="mt-4 text-xs text-muted">{SITE.description}</p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-foreground">Navigation</p>
            <ul className="mt-4 flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-semibold text-foreground">Connect</p>
            <ul className="mt-4 flex flex-col gap-2">
              {SOCIAL_LINKS.map((link) => (
                <li key={link.platform}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted transition-colors hover:text-gold"
                  >
                    {link.platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="mt-1">
            Master skills faster than everyone else. That is the superpower.
          </p>
        </div>
      </div>
    </footer>
  );
}
