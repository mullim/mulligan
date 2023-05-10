import Link from "next/link";
import Header from "./Header";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <div className="flex mb-10">
      <Header title="Mike Mulligan" />
      <ul className="list-none flex items-center p-0 m-0 ml-auto">
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
