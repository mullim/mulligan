import Head from "next/head";
import Image from "next/image";
import mike from "../public/mike.jpg";

import ExternalLink from "../components/ExternalLink";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mike Mulligan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main" className="flex flex-col-reverse md:flex-row">
        <article className="[&>p]:mb-6 [&>p]:leading-8">
          <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
            Hi, I&apos;m Mike.
          </h2>
          <p>
            I&apos;m a software engineer from{" "}
            <ExternalLink url="https://en.wikipedia.org/wiki/Upstate_New_York">
              Upstate, New York
            </ExternalLink>
            . Right now, I work as a{" "}
            <ExternalLink url="https://www.flexport.com">
              senior software engineer at Flexport
            </ExternalLink>
            . I&apos;ve spent my career crafting performant front-end web apps
            and scalable back-end services - you know, making the digital world
            work seamlessly.
          </p>
          <p>
            Prior to{" "}
            <ExternalLink url="https://www.flexport.com">Flexport</ExternalLink>
            , I was a front-end engineer at{" "}
            <ExternalLink url="https://www.shopify.com">Shopify</ExternalLink>{" "}
            and{" "}
            <ExternalLink url="https://www.deliverr.com">Deliverr</ExternalLink>
            . And before that, I was a lead engineer at{" "}
            <ExternalLink url="https://www.boozallen.com">
              Booz Allen Hamilton
            </ExternalLink>
            .
          </p>
        </article>
        <Image
          src={mike}
          alt="Mike Mulligan"
          width={375}
          className="rounded-lg mx-auto mb-8 md:ml-8 md:mb-0 w-3/4 sm:w-1/2 md:w-full"
        />
      </main>
    </div>
  );
}
