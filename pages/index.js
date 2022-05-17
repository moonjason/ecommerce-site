import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HomeBanner from '../components/HomeBanner'

export default function Home() {
  return (
    <div className="home-container">
      <Head>
        <title>SZN Threads</title>
        <meta name="description" content="Selling slick outerwear based on the current season. A fun personal learning project using modern technology by Jason Moon" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <HomeBanner/>
    </div>
  )
}
