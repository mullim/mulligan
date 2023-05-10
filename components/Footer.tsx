const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="mt-12">
      <time>{YEAR}</time> © Mike Mulligan.
    </footer>
  );
}
