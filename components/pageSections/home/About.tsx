"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./about.module.css";
import common from "@/app/page.module.css";
import max4   from "@/public/max-4.webp";
import max3   from "@/public/diploma.jpg";
import max2   from "@/public/max-2.webp";
import { useLang } from "@/lib/i18n";

const About = () => {
  const { t } = useLang();
  const a = t.about;

  return (
    <section className={`${styles.about} ${common.section}`} id="about">
      <div className={common.container}>
        <div className={styles.inner}>
          {/* PHOTOS */}
          <div className={styles.photos}>
            <div className={`${styles.ph} ${styles.phBig}`}>
              <Image src={max4} alt="Max Voytsekhovskyy — ritratto" fill
                className={styles.img} sizes="(max-width: 900px) 100vw, 42vw" />
            </div>
            <div className={styles.ph}>
              <Image src={max3} alt="Diploma MCB" fill
                className={styles.img} sizes="(max-width: 900px) 50vw, 21vw" />
            </div>
            <div className={styles.ph}>
              <Image src={max2} alt="Sessione di massoterapia" fill
                className={styles.img} sizes="(max-width: 900px) 50vw, 21vw" />
            </div>
          </div>

          {/* TEXT */}
          <div className={styles.text}>
            <div className={styles.eyebrow}>
              <span className={styles.dot} /> {a.eyebrow}
            </div>

            <p className={styles.pull}>
              <span className={styles.qm}>"</span>{a.pull}{" "}
              <em>{a.pullEm}</em>{a.pullRest}
            </p>

            <p className={common.paragraph}>{a.p1}</p>

            <p className={common.paragraph} style={{ marginTop: 16 }}>
              {a.p2.pre} <strong>{a.p2.b1}</strong>{a.p2.mid1}{" "}
              <strong>{a.p2.b2}</strong> {a.p2.mid2}{" "}
              <strong>{a.p2.b3}</strong> {a.p2.post}
            </p>

            <div className={styles.signature}>Max V.</div>
            <div className={styles.signed}>Massoterapista MCB · Personal Trainer CFSC</div>

            <Link href="/chi-sono"
              className={`${common.button} ${common.buttonSm} ${common.buttonSecondary}`}
              style={{ marginTop: 24 }}>
              {a.link}
            </Link>

            {/* Stats */}
            <div className={styles.stats}>
              {a.stats.map((s) => (
                <div key={s.num} className={styles.statCell}>
                  <div className={styles.statNum}>{s.num}</div>
                  <div className={styles.statLbl}>{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
