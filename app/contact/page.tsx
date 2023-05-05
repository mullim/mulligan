import Head from "next/head";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
/* import ContactForm from "@components/ContactForm"; */

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Mike Mulligan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Contact</h1>
        {/* <ContactForm /> */}
        <p>You can get in touch with me via Linkedin</p>
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
