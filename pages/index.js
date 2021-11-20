import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import * as React from "react"

export default function Home() {
  React.useEffect(() => {
    // window is accessible here.
    window.location.href = "intent:https://tremp.page.link/AqZgL4D8UL97wbrbA#Intent;end";
    console.log("window.innerHeight", window.innerHeight);
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Tremp!" />
        <p className="description">
          You'll be redirected in a few moments...
        </p>
      </main>

      <Footer />
    </div>
  )
}
