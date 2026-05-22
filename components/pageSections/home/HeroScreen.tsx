"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";
import common from "@/app/page.module.css";
import maxPhoto from "@/public/max-1.webp";
import { useLang } from "@/lib/i18n";

const WaIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22} aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.2 5 4.4.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.7 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
);

const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

const WHOM_FEATURED = [false, true, false, false];

const HeroScreen = () => {
  const { t } = useLang();
  const h = t.hero;

  return (
      <>
        {/* ── HERO ── */}
        <section className={styles.hero}>
          <div className={`${common.container} ${styles.heroGrid}`}>
            {/* LEFT */}
            <div className={styles.left}>
              <div className={styles.eyebrow}>
                <span className={styles.dot} />
                {h.eyebrow}
              </div>

              <h1 className={styles.h1}>
                {h.h1Line1}<br />
                <em>{h.h1Em}</em>{h.h1Rest}<br />
                <span className={styles.accent}>{h.h1Accent}</span>
              </h1>

              <p className={styles.lede}>{h.lede}</p>

              <div className={styles.ctas}>
                <button
                    onClick={() => scrollTo("contatti")}
                    className={`${common.button} ${common.buttonLg} ${common.buttonPrimary}`}>
                  {h.cta1}
                </button>
                <button
                    onClick={() => scrollTo("servizi")}
                    className={`${common.button} ${common.buttonLg} ${common.buttonOutline}`}>
                  {h.cta2}
                </button>
              </div>

              <div className={styles.meta}>
              <span className={styles.pip}>
                <span className={styles.glyph}>📍</span>
                {h.meta1}
              </span>
                <span className={styles.pip}>
                <span className={styles.glyph}>⏱</span>
                  {h.meta2}
              </span>
              </div>
            </div>

            {/* RIGHT — photo card */}
            <div className={styles.photoWrap}>
              <Image
                  src={maxPhoto}
                  alt="Max Voytsekhovskyy — massoterapista"
                  fill
                  className={styles.photo}
                  sizes="(max-width: 1100px) 100vw, 45vw"
                  priority
              />

              {/* Credential badge */}
              <div className={`${styles.badge} ${styles.badgeTop}`}>
                <div className={styles.avatar}>M</div>
                <div className={styles.who}>
                  <strong>Max Voytsekhovskyy</strong>
                  <span>{h.badgeSub}</span>
                </div>
              </div>

              {/* Experience badge */}
              <div className={`${styles.badge} ${styles.badgeBot}`}>
                <div className={styles.stat}>
                  10<span className={styles.plus}>+</span> {h.statUnit}
                </div>
                <div className={styles.statLabel}>{h.statLabel}</div>
              </div>
            </div>
          </div>

          {/* ── TRUST STRIP ── */}
          <div className={styles.trust}>
            <div className={`${common.container} ${styles.trustInner}`}>
              <div className={styles.trustLabel}>
                {h.trustLabel1}<br />{h.trustLabel2}
              </div>
              <div className={styles.trustList}>
                {h.trust.map((item) => (
                    <div key={item.abbr} className={styles.trustItem}>
                      <b>{item.abbr}</b>
                      <span>{item.desc}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FOR WHOM CARDS ── */}
        <section className={styles.whom}>
          <div className={`${common.container} ${styles.whomHead}`}>
            <div>
              <div className={`${styles.eyebrow} ${styles.eyebrowDark}`}>
                <span className={styles.dot} /> {h.whomEyebrow}
              </div>
              <h2 className={`${common.pageTitle} ${styles.whomTitle}`}>
                {h.whomTitle1}<br /><em>{h.whomTitleEm}</em>
              </h2>
            </div>
            <p className={common.pageSubtitle}>{h.whomSubtitle}</p>
          </div>

          <div className={`${common.container} ${styles.whomGrid}`}>
            {h.whomCards.map((card, i) => (
                <div key={card.num} className={`${styles.whomCard} ${WHOM_FEATURED[i] ? styles.whomFeatured : ""}`}>
                  <div className={styles.whomNum}>{card.num}</div>
                  <h3 className={styles.whomCardTitle}>{card.title}</h3>
                  <p className={styles.whomCardText}>{card.text}</p>
                  <div className={styles.whomTags}>
                    {card.tags.map((tag) => <span key={tag} className={styles.whomTag}>{tag}</span>)}
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* WA Banner — outside whom section */}
        <div className={styles.waBannerWrap}>
          <div className={`${common.container} ${styles.waBanner}`}>
            <div className={styles.waIco}><WaIcon /></div>
            <div className={styles.waCopy}>
              <h4>{h.waBannerTitle}</h4>
              <p>{h.waBannerText}</p>
            </div>
            <a
                href="https://wa.me/393464195612"
                target="_blank"
                rel="noreferrer"
                className={styles.waBtn}
            >
              <WaIcon /> {h.waBannerBtn}
            </a>
          </div>
        </div>
      </>
  );
};

export default HeroScreen;