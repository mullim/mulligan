import Link from "next/link";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <Link
      className="text-5xl font-bold text-center  mb-6 md:m-0 md:text-left relative before:content-[''] before:absolute before:block before:w-full before:h-[3px] before:-bottom-3 before:left-0 before:bg-dracula-orange dark:before:bg-dracula-green before:hover:scale-x-100 before:scale-x-0 before:origin-top-left before:transition before:ease-in-out before:duration-500"
      href="/"
    >
      {title}
      <span className="dark:text-dracula-green">.</span>
    </Link>
  );
}
