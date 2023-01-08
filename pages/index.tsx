import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Hobbies from '../components/Hobbies'
import Contact from '../components/Contact'
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
        <Header />
        <About />
        <Experience />
        <Skills />
        <Hobbies />
        <Contact />
      </main>

      <footer className={styles.footer}>
        <a title="Check out my GitHub!" href="https://github.com/emmanuelamicel">
          <Image src="/triskell.png" alt="My GitHub repository" width={20} height={20} />
        </a>
      </footer>
    </>
  )
}
