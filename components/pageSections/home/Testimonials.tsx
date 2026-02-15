import React from 'react';
import stylesCommon from "@/app/page.module.css";
import styles from "@/components/pageSections/home/testimonials.module.css";
import whatsappIcon from "@/public/Digital_Glyph_Green.svg";
import Image from "next/image";

const Testimonials = () => {
    return (
        <section className={styles.testimonialsSection} aria-label="Testimonianze">
            <div className={stylesCommon.container}>
                <div className={styles.testimonialsHeader}>
                    <h2 className={stylesCommon.pageTitle}>Testimonianze</h2>
                    <p className={stylesCommon.pageSubtitle}>
                        Parole di chi ha già iniziato il percorso.
                    </p>
                </div>

                <div className={styles.testimonialsGrid}>
                    <article className={styles.testimonialCard}>
                        <div className={styles.testimonialTop}>
                            <div className={styles.testimonialAvatar} >
                                <Image width={30} height={30} src={whatsappIcon} alt={"whatsappIcon"}/>
                            </div>
                            <div className={styles.testimonialMeta}>
                                <p className={styles.testimonialName}>Cliente</p>
                                <p className={styles.testimonialSource}>WhatsApp · 18:16</p>
                            </div>
                            <div className={styles.testimonialStars} aria-label="Valutazione 5 su 5">
                                🌟🌟🌟🌟🌟
                            </div>
                        </div>

                        <div className={styles.testimonialBubble}>
                            <p>
                                Caro Max volevo ringraziarti per il tuo supporto e la tua professionalità.
                                Ho apprezzato particolarmente la respirazione diaframmatica. Ho notato che
                                quando mi concentro su questa tecnica riesco a sciogliere le tensioni muscolari
                                su spalle e collo e mi ha aiutato a sentirmi più calma e consapevole del mio corpo.
                            </p>
                            <p className={styles.testimonialClosing}>
                                Grazie infinite a presto e buone feste a te e famiglia. 🤍
                            </p>
                        </div>
                    </article>

                    {/* Дублі (поки нема контенту) */}
                    <article className={styles.testimonialCard}>
                        <div className={styles.testimonialTop}>
                            <Image width={30} height={30} src={whatsappIcon} alt={"whatsappIcon"}/>
                            <div className={styles.testimonialMeta}>
                                <p className={styles.testimonialName}>Cliente</p>
                                <p className={styles.testimonialSource}>WhatsApp · 18:16</p>
                            </div>
                            <div className={styles.testimonialStars} aria-label="Valutazione 5 su 5">
                                🌟🌟🌟🌟🌟
                            </div>
                        </div>

                        <div className={styles.testimonialBubble}>
                            <p>
                                Caro Max volevo ringraziarti per il tuo supporto e la tua professionalità.
                                Ho apprezzato particolarmente la respirazione diaframmatica…
                            </p>
                            <p className={styles.testimonialClosing}>
                                Grazie infinite a presto. 🤍
                            </p>
                        </div>
                    </article>

                    <article className={styles.testimonialCard}>
                        <div className={styles.testimonialTop}>
                            <Image width={30} height={30} src={whatsappIcon} alt={"whatsappIcon"}/>
                            <div className={styles.testimonialMeta}>
                                <p className={styles.testimonialName}>Cliente</p>
                                <p className={styles.testimonialSource}>WhatsApp · 18:16</p>
                            </div>
                            <div className={styles.testimonialStars} aria-label="Valutazione 5 su 5">
                                🌟🌟🌟🌟🌟
                            </div>
                        </div>

                        <div className={styles.testimonialBubble}>
                            <p>
                                Caro Max volevo ringraziarti per il tuo supporto e la tua professionalità…
                            </p>
                            <p className={styles.testimonialClosing}>
                                Grazie infinite. 🤍
                            </p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;