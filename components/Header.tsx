"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Research", href: "/research" },
  { name: "Team", href: "/team" },
  { name: "Blog", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[var(--color-border)]">
      <nav className="container-wide flex items-center justify-between h-14">
        <Link href="/" className="font-medium hover:opacity-60 transition-opacity">
          Janett Labs
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
