"use client";

import React from "react";
import styles from "./process.module.css";
import common from "@/app/page.module.css";
import { useLang } from "@/lib/i18n";

const Process = () => {
  const { t } = useLang();
  const p = t.process;

  return (
    <section className={`${styles.process} ${common.section}`} id="process">
      <div className={common.container}>
        <div className={styles.head}>
          <div className={styles.eyebrow}><span className={styles.dot} /> {p.eyebrow}</div>
          <h2 className={`${common.pageTitle} ${styles.title}`}>
            {p.title1} <em>{p.titleEm}</em>
          </h2>
          <p className={`${common.pageSubtitle} ${styles.lede}`}>{p.lede}</p>
        </div>

        <div className={styles.rail}>
          {p.steps.map((step) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.badge}>{step.num}</div>
              <h4 className={styles.stepTitle}>{step.title}</h4>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
