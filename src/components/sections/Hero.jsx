import styles from "@/styles/hero.module.sass";

export default function Hero() {
  return (
    <div className={styles.sectionWrapper}>
      <h1>Sample text</h1>
      <div className={styles.linkWrapper}><a href="#projects">See my work</a><a href="#contact">Contact me</a></div>
    </div>
  );
}
