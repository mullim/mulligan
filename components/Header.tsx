interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return <h1 className="text-2xl">{title}</h1>;
}
