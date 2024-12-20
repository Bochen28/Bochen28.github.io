import Image from "next/image";
import styles from "@/styles/projects.module.sass";

export default function Projects() {
  return (
    <div id="projects" className={styles.sectionWrapper}>
      <h1>Let's look at my work</h1>
      <div className={styles.projectsWrapper}>
        <div className={styles.project}>
          <Image
            className={styles.projectImage}
            src="/project1.png"
            alt="Project 1"
            width={500}
            height={500}
          />
          <div className={styles.textWrapper}>
            <h3>Sample description for project</h3>
            <div className={styles.buttonWrapper}>
              <button className={styles.button}>Git</button>
              <button className={styles.button}>Demo</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
