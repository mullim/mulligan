import Link from "next/link";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Link className="text-4xl font-bold text-center md:text-left" href="/">
      {title}
    </Link>
  );
}
