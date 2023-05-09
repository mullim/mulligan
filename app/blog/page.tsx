import Head from "next/head";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>Mike Mulligan | Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p className="description">Blog...coming eventually...</p>
      </main>
    </div>
  );
}
