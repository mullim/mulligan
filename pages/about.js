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
        <h1>About</h1>
        <p className="description">About me...coming eventually...</p>
      </main>

      {/*  <Footer /> */}
    </div>
  );
}
