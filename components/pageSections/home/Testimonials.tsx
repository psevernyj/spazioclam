"use client";

import React from "react";
import styles from "./testimonials.module.css";
import common from "@/app/page.module.css";
import { useLang } from "@/lib/i18n";

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22} aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.2 5 4.4.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.7 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
);

const HeartIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={13} height={13} aria-hidden>
      <path d="M12 21s-7-4.5-9-9.5C1.5 7 4 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 3 0 5.5 3 4 7.5-2 5-9 9.5-9 9.5z" />
    </svg>
);

const Testimonials = () => {
  const { t } = useLang();
  const tm = t.testimonials;

  return (
      <section className={`${styles.section} ${common.section}`} aria-label={tm.eyebrow}>
        <div className={common.container}>
          {/* Head */}
          <div className={styles.head}>
            <div>
              <div className={styles.eyebrow}><span className={styles.dot} /> {tm.eyebrow}</div>
              <h2 className={`${common.pageTitle} ${styles.title}`}>
                {tm.title1} <em>{tm.titleEm}</em> {tm.title2}
              </h2>
            </div>
            <p className={common.pageSubtitle}>{tm.subtitle}</p>
          </div>

          {/* Cards */}
          <div className={styles.grid}>
            {tm.items.map((item) => (
                <article key={item.name} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.who}>
                      <div className={styles.avatar}><WhatsAppIcon /></div>
                      <div>
                        <div className={styles.name}>{item.name}</div>
                        <div className={styles.sub}>{item.role}</div>
                      </div>
                    </div>
                    <div className={styles.stars} aria-label="5 stelle">★★★★★</div>
                  </div>
                  <p className={styles.text}>{item.text}</p>
                  <div className={styles.closing}>
                    <HeartIcon />{item.closing}
                  </div>
                </article>
            ))}
          </div>

          {/* Footer CTA */}
          <div className={styles.foot}>
            <a
                href="https://wa.me/393464195612"
                target="_blank"
                rel="noreferrer"
                className={`${common.button} ${common.buttonMd} ${common.buttonPrimary}`}
            >
              <WhatsAppIcon /> {tm.footBtn}
            </a>
          </div>
        </div>
      </section>
  );
};

export default Testimonials;