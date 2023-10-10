"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12">
      <time>{year}</time> © Mike Mulligan.
    </footer>
  );
}
