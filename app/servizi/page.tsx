// app/servizi/page.tsx
import styles from "./page.module.css";

export const metadata = {
    title: "Servizi | Massoterapia, Pancafit®, Linfodrenaggio | Max",
    description:
        "Massoterapia, analisi posturale, linfodrenaggio, Pancafit® – Metodo Raggi®, coppettazione, Gua Sha e Moxa a Milano.",
};

export default function ServiziPage() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <section className={styles.section}>
                    <div className={styles.sectionInner}>
                        <h1 className={styles.title}>Servizi</h1>
                        <p className={styles.intro}>
                            Di seguito i servizi che offro. Ogni percorso parte da un’analisi iniziale per
                            individuare le cause — e solo dopo si procede con trattamenti mirati.
                        </p>
                    </div>
                </section>

                {/* MASSOTERAPIA */}
                <section className={styles.section}>
                    <div className={styles.sectionInner}>
                        <h2 className={styles.sectionTitle}>Massoterapia</h2>
                        <p>
                            Un servizio completo di massaggi terapeutici per prevenire o risolvere disturbi
                            muscoloscheletrici. Include:
                        </p>
                        <ul className={styles.list}>
                            <li>Massaggio Svedese</li>
                            <li>Massaggio Sportivo</li>
                            <li>Massaggio Decontratturante</li>
                            <li>Massaggio alla zona cervicale, lombare, dorsale, etc.</li>
                        </ul>
                        <p>
                            Il Massaggiatore MCB è la figura inserita nell’elenco delle professioni del Ministero
                            della Salute fra le Arti Ausiliarie delle Professioni Sanitarie, abilitata ad operare
                            in autonomia, anche in regime di libera professione, nell’ambito del massaggio
                            sportivo e del benessere e, dietro specifica prescrizione medica nell’ambito
                            terapeutico, in collaborazione con le altre figure dell’area sanitaria e
                            riabilitativa.
                        </p>
                    </div>
                </section>

                {/* ANALISI POSTURALE */}
                <section className={styles.section}>
                    <div className={styles.sectionInner}>
                        <h2 className={styles.sectionTitle}>Analisi posturale (prima seduta)</h2>
                        <p>
                            All’inizio del percorso, effettuo un’analisi posturale completa: si osserva come stai
                            in piedi, come cammini, la mobilità delle articolazioni e si identificano le
                            possibili cause o concause del tuo disturbo (traumi passati, postura errata,
                            disallineamenti, tensioni muscolari). Questa fase è essenziale per definire un piano
                            terapeutico su misura.
                        </p>
                    </div>
                </section>

                {/* LINFODRENAGGIO */}
                <section className={styles.section}>
                    <div className={styles.sectionInner}>
                        <h2 className={styles.sectionTitle}>Linfodrenaggio</h2>
                        <p>
                            Tecnica manuale specifica che favorisce il drenaggio dei liquidi linfatici stagnanti
                            nei tessuti. Utile in caso di edemi, gonfiore, ritenzione idrica, dopo traumi o
                            interventi chirurgici per accelerare il recupero.
                        </p>
                        <p>
                            Il linfodrenaggio è un massaggio particolarmente delicato ma efficace per riportare
                            leggerezza nei tessuti e migliorare la circolazione linfatica.
                        </p>
                    </div>
                </section>

                {/* PANCAFIT */}
                <section className={styles.section}>
                    <div className={styles.sectionInner}>
                        <h2 className={styles.sectionTitle}>Pancafit® – Metodo Raggi®</h2>
                        <p>
                            Sedute con Pancafit®, attrezzo brevettato che fa parte del Metodo Raggi®,
                            specializzato nel riequilibrio posturale.
                        </p>
                        <ul className={styles.list}>
                            <li>
                                Si agisce tramite l’allungamento muscolare globale decompensato, mantenendo posture
                                corrette, senza “compensi” corporei.
                            </li>
                            <li>
                                Si usano anche tecniche respiratorie per rilasciare tensioni profonde e migliorare
                                la qualità del movimento.
                            </li>
                        </ul>
                        <p>
                            Questo approccio è particolarmente efficace per disturbi come dolori lombari,
                            cervicali, rigidità articolare, posture scorrette e rigidità muscolari.
                        </p>
                        <p>
                            Ogni percorso Pancafit® inizia con l’analisi posturale, la definizione del
                            trattamento e prosegue con sedute dedicate.
                        </p>
                    </div>
                </section>

                {/* COPPETTAZIONE, GUA SHA, MOXA */}
                <section className={styles.section}>
                    <div className={styles.sectionInner}>
                        <h2 className={styles.sectionTitle}>Coppettazione, Gua Sha, Moxa</h2>
                        <p>
                            Tecniche di supporto e approfondimento che affiancano i trattamenti principali, scelte
                            in base alla problematica emersa durante l’analisi posturale per ottenere risultati
                            migliori e più duraturi:
                        </p>
                        <ul className={styles.list}>
                            <li>
                                <strong>Coppettazione:</strong> utilizzo di coppette per creare una suzione sulla
                                pelle che aiuta a stimolare la circolazione, sciogliere tensioni e favorire il
                                metabolismo locale.
                            </li>
                            <li>
                                <strong>Gua Sha:</strong> tecnica che usa strumenti lisci per “raschiare”
                                delicatamente la pelle, favorendo il flusso sanguigno e linfatico, riducendo
                                tensioni e rigidità.
                            </li>
                            <li>
                                <strong>Moxa:</strong> applicazione di calore su punti specifici per stimolare la
                                circolazione, lenire dolori e rilassare la muscolatura profonda.
                            </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    );
}