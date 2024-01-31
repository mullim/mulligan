import React from "react";

interface ExternalLinkProps {
  url: string;
  children: React.ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ url, children }) => (
  <a
    className="font-semibold underline"
    href={url}
    rel="nofollow"
    target="_blank"
  >
    {children}
  </a>
);

export default ExternalLink;
