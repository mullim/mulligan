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
        <article className="[&>p]:mb-6 [&>p]:leading-8">
          <h1 className="text-2xl font-bold mb-6 text-center md:text-left">
            Contact
          </h1>
          <p className="text-center md:text-left">
            Get in touch by sending me a message on{" "}
            <a
              href="https://www.linkedin.com/in/mullim"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:underline-offset-4"
            >
              Linkedin
            </a>
          </p>
        </article>
      </main>
      {/*  <Footer /> */}
    </div>
  );
}
