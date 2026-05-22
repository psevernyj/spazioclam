"use client";

import React from "react";
import styles from "./contacts.module.css";
import common from "@/app/page.module.css";
import { useLang } from "@/lib/i18n";

const Contacts = () => {
  const { t } = useLang();
  const c = t.contacts;

  return (
      <section className={styles.section} id="contatti">
        <div className={`${common.container} ${styles.inner}`}>
          {/* LEFT */}
          <div className={styles.left}>
            <div className={styles.eyebrow}>
              <span className={styles.dot} /> {c.eyebrow}
            </div>

            <h2 className={styles.h2}>
              {c.h2Line1}<br />
              <em>{c.h2Em}</em><br />
              {c.h2Line3} <span className={styles.accent}>{c.h2Accent}</span>
            </h2>

            <p className={styles.lede}>{c.lede}</p>

            <div className={styles.ctas}>
              <a
                  href="https://wa.me/393464195612"
                  target="_blank"
                  rel="noreferrer"
                  className={`${common.button} ${common.buttonLg} ${common.buttonPrimary}`}
              >
                {c.waBtn}
              </a>
              <a
                  href="tel:+393464195612"
                  className={`${common.button} ${common.buttonLg} ${common.buttonGhost}`}
              >
                +39 346 419 5612
              </a>
            </div>

            <div className={styles.meta}>
              {[
                { k: "WhatsApp", v: <a href="https://wa.me/393464195612" target="_blank" rel="noreferrer">{c.metaWa}</a> },
                { k: "Tel",      v: <a href="tel:+393464195612">+39 346 419 5612</a> },
                { k: "Email",    v: <a href="mailto:maksymasso@gmail.com">maksymasso@gmail.com</a> },
                { k: "Instagram",v: <a href="https://www.instagram.com/Maxtanka" target="_blank" rel="noreferrer">@Maxtanka</a> },
                { k: "Studio",   v: <span>Abbiategrasso (MI)</span> },
                { k: c.hoursKey, v: <span>{c.hours}</span> },
              ].map((item) => (
                  <div key={item.k} className={styles.metaItem}>
                    <div className={styles.metaKey}>{item.k}</div>
                    <div className={styles.metaVal}>{item.v}</div>
                  </div>
              ))}
            </div>
          </div>

          {/* RIGHT — real Google Maps */}
          <div className={styles.mapCard}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.2438038167825!2d8.9185301!3d45.404423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786ef0014c8ffcf%3A0xfbc979621d3d4da8!2sSpazio%20CLAM%20asd!5e0!3m2!1suk!2sua!4v1779397778288!5m2!1suk!2sua"
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Max — Abbiategrasso"
            />
            <div className={styles.mapTag}>
              <div className={styles.where}>
                <strong>Studio Max</strong>
                <span>{c.mapCity}</span>
              </div>
              <a
                  href="https://maps.app.goo.gl/q5smyL6dy1uXkBpv5"
                  target="_blank"
                  rel="noreferrer"
                  className={styles.go}
              >
                {c.mapOpen}
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contacts;