"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./Header";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div
      id="nav-bar"
      className="flex flex-col md:flex-row mb-14 view border-b-4 border-dracula-current-line pb-8"
    >
      <Header title="Mike Mulligan" />
      <ul className="list-none flex items-end m-auto md:m-0 md:ml-auto">
        {navLinks.map(({ href, label }) => (
          <li
            className={`mx-3 text-xl border-b-2 hover:border-dracula-orange dark:hover:border-dracula-green  ${
              pathname === href
                ? "border-dracula-orange dark:border-dracula-green"
                : "border-transparent"
            }`}
            key={href}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
        <ThemeToggle />
      </ul>
    </div>
  );
}
