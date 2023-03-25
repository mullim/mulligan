import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mike Mulligan</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <Header title="Mike Mulligan" />
        <p className="description">
          Software Engineer @ <span id="shop">Shopify</span><br/>
          Previously @ <span id="deliverr">Deliverr</span>, <span id="booz">Booz Allen Hamilton</span>, and <span id="caci">CACI</span>
        </p>
      </main>

     {/*  <Footer /> */}
    </div>
  )
}
