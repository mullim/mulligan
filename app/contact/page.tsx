import Head from "next/head";
/* import ContactForm from "@components/ContactForm"; */

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Mike Mulligan | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <ul className="[&>li:last-child]:mb-4">
          <li>
            <a
              href="https://www.linkedin.com/in/michaelmulligan94/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/mullim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
        </ul>
      </main>

      {/*  <Footer /> */}
    </div>
  );
}
