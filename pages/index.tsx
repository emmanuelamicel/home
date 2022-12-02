import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>
        <Portfolio />
      </main>

      <footer className={styles.footer}>
        <a title="Check out my GitHub!" href="https://github.com/emmanuelamicel">
          <Image src="/triskell.png" alt="My GitHub repository" width={20} height={20} />
        </a>
      </footer>
    </>
  )
}
