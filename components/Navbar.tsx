"use client";
import Link from "next/link";
import Header from "./Header";
import { usePathname } from "next/navigation";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import "./navbar.css";
import ThemeSwitch from "./ThemeSwitch";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col md:flex-row mb-10 view border-b-4 pb-8 border-black">
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
