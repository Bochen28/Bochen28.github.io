import styles from "@/styles/contact.module.sass";

export default function Contact() {
  return (
    <div id="contact" className={styles.sectionWrapper}>
      <div className={styles.contactBox}>
        <h1>Contact me</h1>
        <form className={styles.contactForm} action="">
          <label>Your email</label>
          <input className={styles.contactInput} type="text" name="" id="" />
          <label>Your Message</label>
          <textarea className={styles.messageField} name="" id=""></textarea>
          <button className={styles.contactButton}>Send</button>
        </form>
      </div>
    </div>
  );
}
