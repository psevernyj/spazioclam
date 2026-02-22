import React from "react";
import stylesCommon from "@/app/page.module.css";
import styles from "@/components/pageSections/home/contacts.module.css";
import commonStyles from "@/app/page.module.css";

const Contacts = () => {
    return (
        <section className={`${stylesCommon.container} ${styles.contactsSection}`}>
            <div className={styles.card}>
                <div className={styles.header}>
                    <h2 className={stylesCommon.pageTitle}>Contatti</h2>
                    <p className={styles.subtitle}>
                        Per informazioni o per prenotare una seduta:
                    </p>
                </div>

                <div className={styles.grid} role="list">
                    <div className={styles.item} role="listitem">
                        <span className={styles.icon} aria-hidden>💬</span>
                        <div className={styles.itemBody}>
                            <div className={styles.label}>WhatsApp</div>
                            <a
                                className={styles.value}
                                href="https://wa.me/393464195612"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Scrivimi su WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className={styles.item} role="listitem">
                        <span className={styles.icon} aria-hidden>📞</span>
                        <div className={styles.itemBody}>
                            <div className={styles.label}>Tel</div>
                            <a className={styles.value} href="tel:+393464195612">
                                +39 346 419 5612
                            </a>
                        </div>
                    </div>

                    <div className={styles.item} role="listitem">
                        <span className={styles.icon} aria-hidden>✉️</span>
                        <div className={styles.itemBody}>
                            <div className={styles.label}>Email</div>
                            <a className={styles.value} href="mailto:maksymasso@gmail.com">
                                maksymasso@gmail.com
                            </a>
                        </div>
                    </div>

                    <div className={styles.item} role="listitem">
                        <span className={styles.icon} aria-hidden>📷</span>
                        <div className={styles.itemBody}>
                            <div className={styles.label}>Instagram</div>
                            <a
                                className={styles.value}
                                href="https://www.instagram.com/Maxtanka"
                                target="_blank"
                                rel="noreferrer"
                            >
                                @Maxtanka
                            </a>
                        </div>
                    </div>
                </div>

                <div className={styles.actions}>
                    <a
                        href="/contatti"
                        className={`${commonStyles.button} ${commonStyles.buttonSm} ${commonStyles.buttonSecondary}`}
                    >
                        Vai alla pagina contatti →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contacts;