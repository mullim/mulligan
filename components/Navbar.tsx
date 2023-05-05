import Link from "next/link";
import "./Navbar.css";
import Header from "./Header";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <div className="flex mb-4">
      <Header title="Mike Mulligan" />
      <ul className="list-none flex items-center p-0 m-0 ml-auto">
        {navLinks.map(({ href, label }) => (
          <li className="mr-2" key={href}>
            <Link className="no-underline text-lg text-teal-600" href={href}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
