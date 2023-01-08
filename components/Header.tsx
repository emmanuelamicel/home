import React from 'react';
import styles from '../styles/Header.module.css';

const logos = [
  { src: "sql.png", alt: "SQL" },
  { src: "cs.png", alt: "C#" },
  { src: "node.png", alt: "Node.js" },
  { src: "docker.png", alt: "Docker" },
  { src: "azure.png", alt: "Azure" }
]

const listLogos = logos.map((item) => (
  <li className={styles.li} key={item.alt}>
    <img src={item.src} alt={item.alt} className={styles.logo} />
  </li>
))

export default function Header() {
  return (
    <section id='header' className={styles.section}>
      <header className={styles.intro}>
        <i>Bienvenue sur mon site.<br /> Je m'appelle <b>Emmanuel Amicel</b> et je suis</i>
      </header>
      <h1 className={styles.h1}>Développeur Full Stack</h1>
      <div className={styles.headerText}>Je suis à la recherche d'un CDI sur <b>Rennes</b> à partir de <b>juin 2023</b>.</div>
      <ul className={styles.ul}>
        {listLogos}
      </ul>
    </section>
  )
}