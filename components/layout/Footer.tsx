import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.mark}>m</span>
          <span>© {new Date().getFullYear()} Max Voytsekhovskyy — Massoterapia &amp; Personal Training</span>
        </div>
        <div className={styles.right}>
          Tel: <a href="tel:+393464195612">+39 346 419 5612</a>
          {" · "}
          <a href="mailto:maksymasso@gmail.com">maksymasso@gmail.com</a>
          {" · "}
          <a href="https://www.instagram.com/Maxtanka" target="_blank" rel="noreferrer">@Maxtanka</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
