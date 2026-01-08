"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Research", href: "/research" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
];

function Logo() {
  return (
    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="20" r="4" fill="currentColor"/>
      <circle cx="20" cy="20" r="4" fill="currentColor"/>
      <circle cx="32" cy="20" r="4" fill="currentColor"/>
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--color-border)]">
      <nav className="container-wide flex items-center justify-between h-14">
        <Link href="/" className="flex items-center gap-2 font-medium hover:opacity-60 transition-opacity">
          <Logo />
          <span>Janett Labs</span>
        </Link>

        <ul className="flex items-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className={`text-sm transition-opacity hover:opacity-60 ${
                  pathname === item.href || pathname?.startsWith(item.href + "/")
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-text-muted)]"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
