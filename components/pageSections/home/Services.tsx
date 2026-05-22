"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./services.module.css";
import common from "@/app/page.module.css";
import massage  from "@/public/massage.webp";
import posturo  from "@/public/posturalle.webp";
import limpho   from "@/public/limpho.webp";
import pancafit from "@/public/pancafit.webp";
import guaSha   from "@/public/gua-sha.webp";
import { useLang } from "@/lib/i18n";

const serviceImages: Record<string, StaticImageData> = {
  massoterapia:    massage,
  analisi:         posturo,
  pancafit:        pancafit,
  tecniche:        guaSha,
  linfodrenaggio:  limpho,
  personaltrainer: pancafit,
};

const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const Services = () => {
  const { t } = useLang();
  const s = t.services;

  return (
      <section className={`${styles.services} ${common.section}`} id="servizi">
        <div className={common.container}>
          {/* Head */}
          <div className={styles.head}>
            <div>
              <div className={styles.eyebrow}><span className={styles.dot} /> {s.eyebrow}</div>
              <h2 className={`${common.pageTitle} ${styles.title}`}>
                {s.title1} <em>{s.titleEm}</em><br />
                {s.title2}
              </h2>
            </div>
            <p className={common.pageSubtitle}>{s.subtitle}</p>
          </div>

          {/* Grid */}
          <div className={styles.grid}>
            {s.items.map((svc) => (
                <article key={svc.id} className={`${styles.card} ${styles[`card-${svc.size}`]}`}>
                  <div className={styles.cardImg}>
                    <Image src={serviceImages[svc.id]} alt={svc.title} fill
                           className={styles.img}
                           sizes="(max-width: 768px) 100vw, 50vw" />
                    <span className={styles.index}>{svc.index}</span>
                  </div>
                  <div className={styles.cardBody}>
                    <h3 className={styles.cardTitle}>{svc.title}</h3>
                    <p className={styles.cardDesc}>{svc.desc}</p>
                    <div className={styles.tags}>
                      {svc.tags.map((tag) => <span key={tag} className={styles.tag}>{tag}</span>)}
                    </div>
                  </div>
                </article>
            ))}

            {/* CTA card */}
            <article className={`${styles.card} ${styles["card-xl"]} ${styles.cardCta}`}>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{s.ctaTitle}</h3>
                <p className={styles.cardDesc}>{s.ctaDesc}</p>
                <div className={styles.tags}>
                  <button
                      onClick={() => scrollTo("contatti")}
                      className={`${common.button} ${common.buttonMd} ${common.buttonPrimary}`}>
                    {s.ctaBtn}
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Footer note */}
          <div className={styles.foot}>
            <p className={styles.note}>{s.footNote}</p>
            <button
                onClick={() => scrollTo("servizi")}
                className={`${common.button} ${common.buttonMd} ${common.buttonOutline}`}>
              {s.footLink}
            </button>
          </div>
        </div>
      </section>
  );
};

export default Services;