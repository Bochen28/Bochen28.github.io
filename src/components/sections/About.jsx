import styles from "@/styles/about.module.sass";

export default function About() {
  return (
    <div id="about" className={styles.sectionWrapper}>
      <h1>Sample text</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ac
        orci neque. Phasellus suscipit porta tristique. Vivamus efficitur nisl
        et mi commodo, ut molestie purus gravida. Mauris at lacus pellentesque,
        porta elit id, aliquet urna. Cras ut molestie lacus. Sed pharetra urna
        non lorem aliquet, vel luctus erat ultricies.
      </p>
    </div>
  );
}
