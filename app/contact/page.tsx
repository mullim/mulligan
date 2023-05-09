import Head from "next/head";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
/* import ContactForm from "@components/ContactForm"; */

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Mike Mulligan | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
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
