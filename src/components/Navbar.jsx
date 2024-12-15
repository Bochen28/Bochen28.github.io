import React from "react";
import styles from "@/styles/navbar.module.sass";

export default function Navbar() {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.logoWrapper}><a href="#hero">Logo</a></div>
      <div className={styles.linksWrapper}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
