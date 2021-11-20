import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import * as React from "react"

export default function Home() {
  React.useEffect(() => {
    // window is accessible here.
    window.location = "https://tremp.page.link/AqZgL4D8UL97wbrbA";
    console.log("window.innerHeight", window.innerHeight);
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
