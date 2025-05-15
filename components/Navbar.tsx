"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const isDevelopment = process.env.NODE_ENV === "development";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { href: "/", label: "Home" },
    ...(isDevelopment ? [{ href: "/blog", label: "Blog" }] : []),
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur-md shadow-sm border-b border-border-light/80 dark:border-border-dark/80">
      <div className="container py-3">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold text-primary-light dark:text-primary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200"
            aria-label="Home"
          >
            Mike Mulligan
          </Link>

          <div className="flex items-center space-x-1 sm:space-x-6">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`
                  relative py-2 text-sm sm:text-base font-medium
                  transition-colors duration-200
                  ${
                    isActive(href)
                      ? "text-accent-light dark:text-accent-dark after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-accent-light dark:after:bg-accent-dark"
                      : "text-secondary-light dark:text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark"
                  }
                `}
                aria-current={isActive(href) ? "page" : undefined}
              >
                {label}
              </Link>
            ))}
            <div className="ml-2 sm:ml-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
