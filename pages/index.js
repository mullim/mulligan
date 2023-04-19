import Head from 'next/head'
import Header from '@components/Header'
import Navbar from '@components/Navbar'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mike Mulligan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mike Mulligan" />
        <Navbar />
        <p className="description">
          Software Engineer @ Shopify<br/>
          Previously @ Deliverr, Booz Allen Hamilton, and CACI
        </p>
      </main>

     {/*  <Footer /> */}
    </div>
  )
}
