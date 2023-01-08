import React from 'react';
import styles from '../styles/Navbar.module.css';

const links = [
  { title: 'Home', link: '#header' },
  { title: 'A propos', link: '#about' },
  { title: 'Parcours', link: '#experience' },
  { title: 'Compétences', link: '#skills' },
  { title: 'Passions', link: '#hobbies' },
  { title: 'Contact', link: '#contact' }
]

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {links.map((item) => (
          <li className={styles.link} key={item.title}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}