import Head from "next/head";
import Image from "next/image";
import ExternalLink from "../components/ExternalLink";
import SocialLink from "../components/SocialLink";

import books from "../public/books.png";

export default function Home() {
  return (
    <div className="w-full max-w-3xl">
      <Head>
        <title>Mike Mulligan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main id="main" className="flex flex-col">
        <h2 className="mb-1 text-lg font-medium">Hi, I&apos;m Mike.</h2>
        <div className="mb-3 flex flex-wrap gap-1 text-xs text-gray-600">
          <SocialLink
            label="Github"
            href="https://github.com/mullim"
            username="@mullim"
          />
          <SocialLink
            label="LinkedIn"
            href="https://www.linkedin.com/in/michaelmulligan94/"
            username="@michaelmulligan94"
          />
          <SocialLink
            label="Twitter"
            href="https://x.com/mulligandev"
            username="@mulligandev"
          />
          <SocialLink
            label="Email"
            href="mailto:mkmllgn@gmail.com"
            username="mkmllgn[at]gmail[dot]com"
          />
        </div>
        <p className="mb-2 text-xs text-gray-600">
          I&apos;m a Software Engineer from Upstate, New York. Right now, I work
          as a Senior Software Engineer at{" "}
          <ExternalLink href="https://www.flexport.com">Flexport</ExternalLink>.
          I&apos;ve spent my career crafting performant front-end web apps and
          scalable back-end systems. Before Flexport, I was a Frontend Engineer
          at <ExternalLink href="https://www.shopify.com">Shopify</ExternalLink>{" "}
          and{" "}
          <ExternalLink href="https://www.deliverr.com">Deliverr</ExternalLink>.
          Earlier in my career, I built software for the Air Force Research
          Laboratory at{" "}
          <ExternalLink href="https://www.boozallen.com">
            Booz Allen Hamilton
          </ExternalLink>{" "}
          and <ExternalLink href="https://www.caci.com">CACI</ExternalLink>.
        </p>
        <div className="mt-8">
          <Image
            src={books}
            alt="Infinite Books"
            className="w-full mx-auto rounded-lg bg-cover object-cover"
          />
        </div>
      </main>
    </div>
  );
}
