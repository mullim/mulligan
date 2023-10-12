"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <time>{year}</time> © Mike Mulligan.
    </footer>
  );
}
