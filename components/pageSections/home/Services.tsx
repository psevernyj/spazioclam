import React from 'react';
import stylesCommon from "@/app/page.module.css";
import styles from "@/components/pageSections/home/services.module.css";
import commonStyles from "@/app/page.module.css";
import bg from "@/public/pancafit.webp";
import guaSha from "@/public/gua-sha.webp";
import limpho from "@/public/limpho.webp";
import posturo from "@/public/posturalle.webp";
import massage from "@/public/massage.webp";
import Image from "next/image";

const services = [
    {
        id: "massoterapia",
        title: "Massoterapia",
        description:
            "Massaggi terapeutici per sciogliere tensioni, migliorare la mobilità e aiutarti a recuperare più velocemente.",
        tags: ["Tensioni muscolari", "Dolore", "Recupero"],
        bg: massage,
    },
    {
        id: "analisi-posturale",
        title: "Analisi posturale iniziale",
        description:
            "Valutazione completa di postura, appoggi e mobilità per individuare la vera causa del tuo disturbo.",
        tags: ["Valutazione", "Prevenzione", "Postura"],
        bg: posturo,
    },
    {
        id: "linfodrenaggio",
        title: "Linfodrenaggio",
        description:
            "Tecnica manuale delicata per drenare i liquidi, ridurre gonfiore e favorire il recupero dopo traumi o interventi.",
        tags: ["Edemi", "Gonfiore", "Ritenzione"],
        bg: limpho,
    },
    {
        id: "pancafit",
        title: "Pancafit® – Metodo Raggi®",
        description:
            "Riequilibrio posturale con allungamento globale e lavoro sul respiro per liberare tensioni profonde.",
        tags: ["Postura", "Cervicale", "Lombalgia"],
        bg: bg,
    },
    {
        id: "tecniche-di-supporto",
        title: "Coppettazione, Gua Sha, Moxa",
        description:
            "Tecniche complementari per migliorare la circolazione, ridurre rigidità e potenziare i risultati dei trattamenti.",
        tags: ["Circolazione", "Recupero", "Tensioni"],
        bg: guaSha,
    },
];


const Services = () => {
    return (
        <section className={`${stylesCommon.container} ${styles.sectionAlt}`}>

                <h2 className={stylesCommon.pageTitle}>Servizi</h2>
                <p className={stylesCommon.pageSubtitle}>
                    Ogni percorso parte da un’analisi iniziale per individuare le cause — e solo dopo si
                    procede con trattamenti mirati.
                </p>

                <div className={styles.servicesGrid}>
                    {services.map((service) => (
                        <article key={service.id} className={styles.serviceCard}>
                            <div className={styles.titleWrapper}>
                                <Image
                                    src={service.bg}
                                    alt={service.title}
                                    fill
                                    className={styles.titleImage}
                                />
                                <div className={styles.titleOverlay} />
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                            </div>
                            <div className={styles.serviceDescription}>
                                <p className={stylesCommon.paragraph}>{service.description}</p>

                                <ul className={styles.serviceTagList}>
                                    {service.tags.map((tag) => (
                                        <li key={tag} className={styles.serviceTag}>
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                <a href="/servizi" className={`${commonStyles.button} ${commonStyles.buttonSm} ${commonStyles.buttonSecondary}`}>
                    Scopri tutti i servizi →
                </a>
        </section>
    );
};

export default Services;