import React from "react";

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, children }) => (
  <a
    className="text-gray-500 transition hover:text-gray-900 underline"
    href={href}
    rel="nofollow"
    target="_blank"
  >
    {children}
  </a>
);

export default ExternalLink;
