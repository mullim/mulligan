"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="flex flex-col text-center md:flex-row md:my-10 md:text-left">
      <span className="text-content">
        <time>{year}</time> © Mike Mulligan.
      </span>
      <span className="my-2 md:my-0 md:ml-auto text-content">
        <a
          href="https://www.github.com/mullim"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" className="fa-fw" />
        </a>
        <a
          href="https://www.linkedin.com/in/michaelmulligan94/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" className="fa-fw" />
        </a>
        <a
          href="https://www.twitter.com/mulligandev"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" className="fa-fw" />
        </a>
      </span>
    </footer>
  );
}
