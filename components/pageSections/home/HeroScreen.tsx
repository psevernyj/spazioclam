import React from 'react';
import styles from "@/components/pageSections/home/hero.module.css";
import stylesCommon from "@/app/page.module.css";

const HeroScreen = () => {
    return (
        <>
            <section className={`${styles.hero} ${stylesCommon.container}`}>
                <div className={styles.heroInner}>
                    <div className={styles.heroText}>
                        <div className={styles.heroBadge}>
                            Massoterapia · Pancafit® · Personal Training
                        </div>
                        <h1 className={styles.heroTitle}>
                            <span className={"blackText"}>Ritrova equilibrio, </span>
                            <span className={"grayText"}>forza e benessere.</span>
                        </h1>
                        <p className={styles.heroSubtitle}>
                            Trattamenti mirati e percorsi personalizzati per eliminare il dolore, migliorare la
                            postura e tornare a muoverti con energia.
                        </p>

                        <div className={styles.heroActions}>
                            <a
                                href="/contatti"
                                className={`${stylesCommon.button} ${stylesCommon.buttonLg} ${stylesCommon.buttonOutline}`}
                            >
                                Prenota una seduta
                            </a>

                            <a
                                href="/servizi"
                                className={`${stylesCommon.button} ${stylesCommon.buttonLg} ${stylesCommon.buttonSecondary}`}
                            >
                                Scopri i servizi
                            </a>
                        </div>


                        <p className={styles.heroMeta}>
                            📍 Abbiategrasso — su appuntamento.
                        </p>
                    </div>
                </div>
            </section>
            <section className={`${styles.heroVisual} ${stylesCommon.container}`}>
                <div className={styles.heroCircle}/>

                <div className={styles.heroCard}>
                    <p className={styles.heroCardTitle}>Sport da combattimento</p>
                    <p className={styles.heroCardText}>
                        Percorsi mirati per migliorare la performance, la forza, la mobilità e prevenire infortuni negli
                        sport da combattimento.
                    </p>
                    <ul className={styles.heroTagList}>
                        <li>Performance</li>
                        <li>Forza</li>
                        <li>Prevenzione</li>
                    </ul>
                </div>

                <div className={styles.heroCard}>
                    <p className={styles.heroCardTitle}>Allenamento intensivo</p>
                    <p className={styles.heroCardText}>
                        Per atleti e persone che si allenano spesso e vogliono sostenere carichi elevati in modo
                        sicuro ed efficace.
                    </p>
                    <ul className={styles.heroTagList}>
                        <li>Recupero</li>
                        <li>Carichi elevati</li>
                        <li>Sicurezza</li>
                    </ul>
                </div>

                <div className={styles.heroCard}>
                    <p className={styles.heroCardTitle}>Recupero post-infortunio</p>
                    <p className={styles.heroCardText}>
                        Se hai avuto traumi o infortuni e vuoi tornare ad allenarti senza dolore e con fiducia nel
                        tuo corpo.
                    </p>
                    <ul className={styles.heroTagList}>
                        <li>Riabilitazione</li>
                        <li>Dolore</li>
                        <li>Mobilità</li>
                    </ul>
                </div>

                <div className={styles.heroCard}>
                    <p className={styles.heroCardTitle}>Postura & vita sedentaria</p>
                    <p className={styles.heroCardText}>
                        Se lavori molte ore seduto o conduci una vita sedentaria e vuoi migliorare la postura, la
                        mobilità e il benessere.
                    </p>
                    <ul className={styles.heroTagList}>
                        <li>Schiena</li>
                        <li>Cervicale</li>
                        <li>Postura</li>
                    </ul>
                </div>
            </section>
        </>
    );
};

export default HeroScreen;