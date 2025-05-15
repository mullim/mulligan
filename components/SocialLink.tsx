"use client";

import ExternalLink from "./ExternalLink";

interface SocialLinkProps {
  label: string;
  href: string;
  username: string;
  className?: string;
  icon?: React.ReactNode;
}

export default function SocialLink({
  label,
  href,
  username,
  className,
  icon,
}: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`${label} profile - ${username}`}
    >
      {icon}
      {username}
    </a>
  );
}
