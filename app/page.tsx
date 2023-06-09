import "./style.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mike Mulligan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main id="main">
        <p>
          Hey there 👋 I&apos;m Mike, a full stack developer based out of
          Upstate New York. Throughout my career, I&apos;ve built performant
          front-end web app&apos;s and scalable back-end services on AWS.
        </p>
        <p>
          Currently, I work at Shopify to help merchants provide fast and
          reliable fulfillment to their customers.
        </p>
        <p>Previously, I worked at Deliverr, Booz Allen Hamilton, and CACI</p>
      </main>
    </div>
  );
}
