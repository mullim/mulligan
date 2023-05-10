import Link from "next/link";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Link
      className="text-5xl font-bold text-center mb-6 md:m-0 md:text-left"
      href="/"
    >
      {title}
    </Link>
  );
}
