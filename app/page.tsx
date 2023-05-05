import Head from "next/head";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mike Mulligan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">
          Software Engineer @ <span id="shop">Shopify</span>
          <br />
          Previously @ <span id="deliverr">Deliverr</span>,{" "}
          <span id="booz">Booz Allen Hamilton</span>, and{" "}
          <span id="caci">CACI</span>
        </p>
        <p>I&apos;m probably building some sort of web service.</p>
      </main>

      {/*  <Footer /> */}
    </div>
  );
}
