import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mike Mulligan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Mike Mulligan" />
        <p className="description">
          Software Engineer @ Shopify<br/>
          Previously @ Deliverr, Booz Allen Hamilton, and CACI
        </p>
      </main>

     {/*  <Footer /> */}
    </div>
  )
}
