import Head from "next/head";
import Header from "@components/Header";
import Navbar from "@components/Navbar";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Mike Mulligan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mike Mulligan" />
        <Navbar />
        <h1>Contact</h1>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/michaelmulligan94/">
              Linkedin
            </a>
          </li>
          <li>
            <a href="https://github.com/mullim">Github</a>
          </li>
        </ul>
      </main>

      {/*  <Footer /> */}
    </div>
  );
}
