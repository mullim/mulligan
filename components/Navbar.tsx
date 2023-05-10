import Link from "next/link";
import Header from "./Header";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row mb-10 view">
      <Header title="Mike Mulligan" />
      <ul className="list-none flex items-center m-auto md:m-0 md:ml-auto">
        {navLinks.map(({ href, label }) => (
          <li
            className="mx-2 text-lg text-teal-600 active:text-teal-800 hover:text-teal-800"
            key={href}
          >
            <Link href={href}>{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
