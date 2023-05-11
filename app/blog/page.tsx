import Head from "next/head";
import { sql } from "@vercel/postgres";

export default async function About() {
  const { rows } = await sql`SELECT * from posts`;
  console.log(rows);
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
