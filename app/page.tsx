// app/page.tsx
import styles from "./page.module.css";
import Image from "next/image";
import max1 from "../public/max-1.webp";
import max2 from "../public/max-2.webp";

const services = [
    {
        id: "massoterapia",
        title: "Massoterapia",
        description:
            "Massaggi terapeutici per sciogliere tensioni, migliorare la mobilità e favorire il recupero muscolare.",
        tags: ["Svedese", "Sportivo", "Decontratturante"],
    },
    {
        id: "analisi-posturale",
        title: "Analisi posturale iniziale",
        description:
            "Valutazione completa di postura, appoggi, mobilità articolare e compensi per capire l’origine del disturbo.",
        tags: ["Valutazione", "Prevenzione"],
    },
    {
        id: "linfodrenaggio",
        title: "Linfodrenaggio",
        description:
            "Tecnica manuale delicata per drenare liquidi, ridurre gonfiori e favorire il recupero dopo traumi o interventi.",
        tags: ["Edemi", "Gonfiore", "Ritenzione"],
    },
    {
        id: "pancafit",
        title: "Pancafit® – Metodo Raggi®",
        description:
            "Riequilibrio posturale con allungamento globale decompensato e lavoro sul respiro per liberare tensioni profonde.",
        tags: ["Postura", "Dolori cervicali", "Lombalgia"],
    },
    {
        id: "tecniche-di-supporto",
        title: "Coppettazione, Gua Sha, Moxa",
        description:
            "Tecniche complementari per migliorare la circolazione, ridurre rigidità e potenziare l’efficacia dei trattamenti.",
        tags: ["Circolazione", "Recupero", "Tensioni"],
    },
];


export default function HomePage() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                {/* HERO – новий перший блок */}
                <section className={styles.hero}>
                    <div className={styles.heroInner}>
                        <div className={styles.heroText}>
                            <div className={styles.heroBadge}>
                                Massoterapia · Pancafit® · Personal Training
                            </div>
                            <h1 className={styles.heroTitle}>Ritrova equilibrio, forza e benessere.</h1>
                            <p className={styles.heroSubtitle}>
                                Trattamenti mirati, riequilibrio posturale e percorsi di allenamento
                                personalizzati per chi vuole tornare a muoversi senza dolore e con più energia.
                            </p>

                            <div className={styles.heroActions}>
                                <a href="/contatti" className={styles.primaryButton}>
                                    Prenota una seduta
                                </a>
                                <a href="/servizi" className={styles.secondaryButton}>
                                    Scopri i servizi
                                </a>
                            </div>

                            <p className={styles.heroMeta}>
                                Ricevo su appuntamento a Milano. Ogni percorso inizia da un’analisi posturale
                                completa.
                            </p>
                        </div>

                        <div className={styles.heroVisual}>
                            <div className={styles.heroCircle} />
                            <div className={styles.heroCard}>
                                <p className={styles.heroCardTitle}>Approccio su misura</p>
                                <p className={styles.heroCardText}>
                                    Sportivi, post-infortunio, lavoro d’ufficio: ogni corpo ha una storia diversa.
                                </p>
                                <ul className={styles.heroTagList}>
                                    <li>Dolori cervicali</li>
                                    <li>Lombalgia</li>
                                    <li>Rigidità muscolare</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CHI SONO – більш продаючий блок з фото */}
                <section className={styles.section}>
                    <div className={styles.aboutWrapper}>
                        <div className={styles.aboutText}>
                            <div className={styles.aboutBadges}>
                                <span className={styles.aboutBadge}>Massoterapista MCB</span>
                                <span className={styles.aboutBadge}>Metodo Raggi® · Pancafit®</span>
                                <span className={styles.aboutBadge}>Personal Trainer</span>
                            </div>

                            <h2 className={styles.sectionTitle}>Chi sono</h2>

                            <p className={styles.aboutLead}>
                                Sono Max, massoterapista e personal trainer. Aiuto le persone che convivono con dolori
                                ricorrenti, rigidità o conseguenze di traumi a tornare a muoversi con più libertà e
                                sicurezza.
                            </p>

                            <p>
                                Vengo dal mondo degli sport da combattimento, dove ho imparato quanto il gesto tecnico e
                                l’attenzione al dettaglio possano fare la differenza. Da questa esperienza è nata la
                                passione per il corpo umano, per il movimento e per tutto ciò che permette di recuperare
                                dopo sforzi intensi, infortuni o posture scorrette.
                            </p>

                            <p>
                                Mi sono diplomato in Massoterapia presso Ecolife Milano e ho approfondito il{" "}
                                <strong>riequilibrio posturale post traumatico</strong> con il Metodo Raggi® (Pancafit®.
                                Da quasi dieci anni affianco atleti, persone che lavorano in ufficio e chi semplicemente
                                vuole stare meglio nel proprio corpo.
                            </p>

                            <ul className={styles.aboutList}>
                                <li>Dolori cervicali, lombalgia, tensioni muscolari croniche</li>
                                <li>Recupero dopo traumi, interventi o sovraccarichi da allenamento</li>
                                <li>Postura alterata da lavoro sedentario o stress</li>
                            </ul>

                            <p className={styles.aboutClosing}>
                                Ogni percorso è personalizzato: parto sempre dall’ascolto, dall’analisi posturale e dalle
                                tue esigenze concrete, per costruire insieme il trattamento più efficace per te.
                            </p>

                            <a href="/chi-sono" className={styles.linkButton}>
                                Leggi di più su di me →
                            </a>
                        </div>

                        <div className={styles.aboutPhotos}>
                            {/* основне фото Макса */}
                            <div className={styles.aboutPhotoMainWrapper}>
                                <Image
                                    src={max1}
                                    alt="Maksym Voytsekhosvkyy durante una sessione di massoterapia"
                                    width={320}
                                    height={380}
                                    className={styles.aboutPhotoMain}
                                />
                            </div>

                            {/*/!* друге фото опційно – можна видалити, якщо буде одна фотка *!/*/}
                            {/*<div className={styles.aboutPhotoSecondaryWrapper}>*/}
                            {/*    <Image*/}
                            {/*        src={max2}*/}
                            {/*        alt="Dettaglio del lavoro manuale sul paziente"*/}
                            {/*        width={170}*/}
                            {/*        height={200}*/}
                            {/*        className={styles.aboutPhotoSecondary}*/}
                            {/*    />*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </section>


                {/* SERVIZI – картки */}
                <section className={styles.sectionAlt}>
                    <div className={styles.sectionInner}>
                        <div className={styles.servicesHeader}>
                            <h2 className={styles.sectionTitle}>Servizi</h2>
                            <p className={styles.sectionIntro}>
                                Ogni percorso parte da un’analisi iniziale per individuare le cause — e solo dopo si
                                procede con trattamenti mirati.
                            </p>
                        </div>

                        <div className={styles.servicesGrid}>
                            {services.map((service) => (
                                <article key={service.id} className={styles.serviceCard}>
                                    <div className={styles.serviceIcon} aria-hidden="true" />
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDescription}>{service.description}</p>

                                    <ul className={styles.serviceTagList}>
                                        {service.tags.map((tag) => (
                                            <li key={tag} className={styles.serviceTag}>
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>

                        <a href="/servizi" className={styles.linkButton}>
                            Scopri tutti i servizi →
                        </a>
                    </div>
                </section>


                {/* CONTATTI (тизер) */}
                <section className={styles.section}>
                    <div className={styles.sectionInner}>
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
                    </div>
                </section>
            </main>
        </div>
    );
}