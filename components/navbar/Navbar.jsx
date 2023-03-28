import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbarTitle}>Congreso de Ciencias Oscuras</h1>
      <div className={styles.navbarContent}>
        <input id="menu__toggle" className={styles.menuToggle} type="checkbox" />
        <label className={styles.menuBtn} for="menu__toggle">
          <span></span>
        </label>

        <ul className={styles.menuBox}>
          <li><Link className={styles.menuItem} href="#">Inicio</Link></li>
          <li><Link className={styles.menuItem} href="#">Explorar</Link></li>
          <li><Link className={styles.menuItem} href="#">Nuestro Equipo</Link></li>
          <li><Link className={styles.menuItem} href="#">Contacto</Link></li>
          <li><Link className={styles.menuItem} href="#">Cerrar Sesión</Link></li>
        </ul>
      </div>
    </div>
  )
}