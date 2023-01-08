import React from 'react';
import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <section id='header' className={styles.section}>
      <header className={styles.intro}>
        <i>Bienvenue sur mon site.<br /> Je m'appelle <b>Emmanuel Amicel</b> et je suis</i>
      </header>
      <h1 className={styles.h1}>DevOps</h1>
      <p className={styles.headerText}>Je suis à la recherche d'un CDI sur <b>Rennes</b> à partir de <b>juin 2023</b>.</p>
      <ul className={styles.ul}>
        <li className={styles.li}><img src="sql.png" alt="SQL" className={styles.logo} /></li>
        <li className={styles.li}><img src="cs.png" alt="C#" className={styles.logo} /></li>
        <li className={styles.li}><img src="node.png" alt="Node.js" className={styles.logo} /></li>
        <li className={styles.li}><img src="docker.png" alt="Docker" className={styles.logo} /></li>
        <li className={styles.li}><img src="azure.png" alt="Azure" className={styles.logo} /></li>
      </ul>
    </section>
  )
}