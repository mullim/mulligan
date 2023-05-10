import Link from "next/link";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Link className="text-4xl font-bold" href="/">
      {title}
    </Link>
  );
}
