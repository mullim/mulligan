"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Header from "./Header";

import "./navbar.css";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div
      id="nav-bar"
      className="flex flex-col md:flex-row mb-10 view border-b-4 pb-8"
    >
      <Header title="Mike Mulligan" />
      <ul className="list-none flex items-end m-auto md:m-0 md:ml-auto">
        {navLinks.map(({ href, label }) => (
          <li
            className={pathname === href ? "nav-link-active" : "nav-link"}
            key={href}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
