import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome home!
        </h1>
      </main>

      <footer className={styles.footer}>
        <a title="Go to my GitHub" href="https://github.com/emmanuelamicel">
          <Image src="/triskell.png" alt="My GitHub repository" width={20} height={20} />
        </a>
      </footer>
    </div>
  )
}
