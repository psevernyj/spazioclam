// app/contatti/page.tsx
import styles from "./page.module.css";

export const metadata = {
    title: "Contatti | Prenota una seduta | Max",
    description:
        "Contatta Max per informazioni su massoterapia, Pancafit®, linfodrenaggio, riequilibrio posturale e personal training a Milano.",
};

export default function ContattiPage() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.sectionInner}>
                        <h1 className={styles.title}>Contatti</h1>
                        <p className={styles.intro}>
                            Per informazioni sui trattamenti, per un primo colloquio o per prenotare una seduta,
                            puoi contattarmi qui:
                        </p>

                        <ul className={styles.contactsList}>
                            <li>
                                <span className={styles.label}>Telefono:</span>{" "}
                                <a href="tel:+393464195612">+39 346 419 5612</a>
                            </li>
                            <li>
                                <span className={styles.label}>Email:</span>{" "}
                                <a href="mailto:maksymasso@gmail.com">maksymasso@gmail.com</a>
                            </li>
                            <li>
                                <span className={styles.label}>Instagram:</span>{" "}
                                <a href="https://www.instagram.com/Maxtanka" target="_blank" rel="noreferrer">
                                    @Maxtanka
                                </a>
                            </li>
                        </ul>

                        <p className={styles.note}>
                            Rispondo di solito entro breve. Se non posso rispondere subito al telefono, ti
                            richiamerò appena possibile.
                        </p>
                    </div>
                </section>

                {/* Можна потім додати форму, якщо захочеш */}
            </main>
        </div>
    );
}