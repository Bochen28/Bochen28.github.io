import React from "react";
import styles from "@/styles/navbar.module.sass";

export default function Navbar() {
  return (
    <nav className={styles.navWrapper}>
      <div className={styles.logoWrapper}><a href="#hero">Logo</a></div>
      <div className={styles.linksWrapper}>
        <a href="#about">about</a>
        <a href="#projects">projects</a>
        <a href="#contact">contact</a>
      </div>
    </nav>
  );
}
