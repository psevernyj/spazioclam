// components/layout/Footer.tsx
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.inner}>
                <p>
                    © {new Date().getFullYear()} Max Voytsekhosvkyy – Massoterapia &amp; Personal Training
                </p>
                <p>
                    Tel: <a href="tel:+393464195612">+39 346 419 5612</a> · Email:{" "}
                    <a href="mailto:maksymasso@gmail.com">maksymasso@gmail.com</a>
                </p>
                <p>
                    IG:{" "}
                    <a href="https://www.instagram.com/Maxtanka" target="_blank" rel="noreferrer">
                        @Maxtanka
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;