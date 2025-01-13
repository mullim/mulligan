"use client";

import ExternalLink from "./ExternalLink";

type SocialLinkProps = {
  label: string;
  href: string;
  username: string;
};

export default function SocialLink({ label, href, username }: SocialLinkProps) {
  return (
    <div className="flex gap-1">
      <div>{label}:</div>
      <div>
        <ExternalLink href={href}>{username}</ExternalLink>
      </div>
    </div>
  );
}
