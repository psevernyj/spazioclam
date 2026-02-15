import React from 'react';
import stylesCommon from "@/app/page.module.css";
import styles from "@/components/pageSections/home/contacts.module.css";

const Contacts = () => {
    return (
        <section className={stylesCommon.container}>
            <h2 className={styles.sectionTitle}>Contatti</h2>
            <p>Per informazioni o per prenotare una seduta:</p>
            <ul className={styles.contactsList}>
                <li>
                    Tel: <a href="tel:+393464195612">+39 346 419 5612</a>
                </li>
                <li>
                    Email: <a href="mailto:maksymasso@gmail.com">maksymasso@gmail.com</a>
                </li>
                <li>
                    Instagram:{" "}
                    <a href="https://www.instagram.com/Maxtanka" target="_blank" rel="noreferrer">
                        @Maxtanka
                    </a>
                </li>
            </ul>

            <a href="/contatti" className={styles.linkButton}>
                Vai alla pagina contatti →
            </a>
        </section>
    );
};

export default Contacts;