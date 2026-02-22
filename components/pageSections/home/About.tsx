import React from 'react';
import stylesCommon from "@/app/page.module.css";
import max1 from "../../../public/max-1.webp";
import max2 from "../../../public/max-2.webp";
import max3 from "../../../public/diploma.jpg";
import max4 from "../../../public/max-4.webp";
import Image from "next/image";
import styles from "@/components/pageSections/home/about.module.css";
import commonStyles from "@/app/page.module.css";

const About = () => {
    return (
        <section className={`${stylesCommon.section} ${stylesCommon.container}`}>
            <div className={styles.aboutWrapper}>
                <div className={styles.aboutPhotos}>
                    <div className={styles.aboutGallery}>
                        <div className={`${styles.photoItem} ${styles.photoHero}`}>
                            <Image src={max4} alt="Max - ritratto" fill className={styles.photo}
                                   sizes="(max-width: 900px) 100vw, 45vw"/>
                        </div>
                        <div className={styles.photoItem}>
                            <Image src={max3} alt="Sessione" fill className={styles.photo}
                                   sizes="(max-width: 900px) 50vw, 22vw"/>
                        </div>
                        <div className={styles.photoItem}>
                            <Image src={max2} alt="Trattamento" fill className={styles.photo}
                                   sizes="(max-width: 900px) 50vw, 22vw"/>
                        </div>
                    </div>
                </div>

                <div className={styles.aboutText}>
                    <div className={styles.aboutBadges}>
                        <span className={styles.aboutBadge}>Massoterapista MCB</span>
                        <span className={styles.aboutBadge}>Metodo Raggi® · Pancafit®</span>
                        <span className={styles.aboutBadge}>Personal Trainer</span>
                    </div>
                    <h2 className={stylesCommon.pageTitle}>Chi sono</h2>

                    <div className={`${stylesCommon.paragraph} ${styles.aboutTextContent}`}>
                        <p>
                            Sono Max, massoterapista MCB e personal trainer. Aiuto persone con dolori, rigidità o
                            post-infortuni a ritrovare
                            mobilità, postura e benessere.
                        </p>
                        <div className={styles.aboutHighlights}>
                            <div className={styles.highlight}>Postura</div>
                            <div className={styles.highlight}>Recupero</div>
                            <div className={styles.highlight}>Performance</div>
                        </div>
                        <ul className={styles.aboutList}>
                            <li>Dolori cervicali e lombari, tensioni muscolari</li>
                            <li>Recupero dopo traumi e sovraccarichi da allenamento</li>
                            <li>Miglioramento di mobilità, forza e prevenzione infortuni</li>
                        </ul>
                        <p className={styles.heroMeta}>
                            📍 Abbiategrasso — su appuntamento · Percorsi personalizzati dopo analisi posturale.
                        </p>
                    </div>
                    <a href="/chi-sono"
                       className={`${commonStyles.button} ${commonStyles.buttonSm} ${commonStyles.buttonSecondary}`}>
                        Leggi di più su di me →
                    </a>

                    <div className={styles.aboutStats} aria-label="Esperienza e formazione">
                        <div className={styles.statCard}>
                            <p className={styles.statValue}>~10 anni</p>
                            <p className={styles.statLabel}>di esperienza nel massaggio sportivo</p>
                        </div>

                        <div className={styles.statCard}>
                            <p className={styles.statValue}>5+ anni</p>
                            <p className={styles.statLabel}>come massoterapista qualificato</p>
                        </div>

                        <div className={styles.statCard}>
                            <p className={styles.statValue}>dal 2022</p>
                            <p className={styles.statLabel}>Pancafit® · Metodo Raggi® nella pratica clinica</p>
                        </div>

                        <div className={styles.statCard}>
                            <p className={styles.statValue}>dal 2010</p>
                            <p className={styles.statLabel}>
                                allenatore (arti marziali → calisthenics &amp; preparazione fisica) ·
                                certificazione CFSC
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;