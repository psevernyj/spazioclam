"use client";

import React, { useState } from "react";
import styles from "./faq.module.css";
import common from "@/app/page.module.css";
import { useLang } from "@/lib/i18n";

const WaIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={22} height={22} aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.2 5 4.4.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.7 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
);

const FAQ = () => {
  const { t } = useLang();
  const f = t.faq;
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));

  const toggle = (i: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: f.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.cta ? `${item.a} ${item.cta.text}` : item.a,
      },
    })),
  };

  return (
      <section className={`${styles.faq} ${common.section}`} id="faq">
        <div className={common.container}>
          <div className={styles.head}>
            <div className={styles.eyebrow}><span className={styles.dot} /> {f.eyebrow}</div>
            <h2 className={`${common.pageTitle} ${styles.title}`}>
              {f.title1} <em>{f.titleEm}</em><br />
              {f.title2}
            </h2>
            <p className={`${common.pageSubtitle} ${styles.lede}`}>{f.subtitle}</p>
          </div>

          <div className={styles.list}>
            {f.items.map((item, i) => {
              const isOpen = openIndexes.has(i);
              return (
                  <div key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                    <button
                        type="button"
                        className={styles.question}
                        aria-expanded={isOpen}
                        onClick={() => toggle(i)}
                    >
                      <span>{item.q}</span>
                      <span className={styles.icon} aria-hidden>{isOpen ? "−" : "+"}</span>
                    </button>
                    <div className={styles.answerWrap}>
                      <div className={styles.answerInner}>
                        <p className={styles.answer}>{item.a}</p>
                        {item.meta && (
                            <div className={styles.metaRow}>
                              {item.meta.map((m) => (
                                  <span key={m.text} className={styles.metaPip}>
                                <span className={styles.metaGlyph}>{m.icon}</span>
                                    {m.text}
                              </span>
                              ))}
                            </div>
                        )}
                        {item.cta && (
                            <div className={styles.cta}>
                              <div className={styles.ctaIco}><WaIcon /></div>
                              <div className={styles.ctaCopy}>
                                <h4>{item.cta.title}</h4>
                                <p>{item.cta.text}</p>
                              </div>
                              <a
                                  href="https://wa.me/393464195612"
                                  target="_blank"
                                  rel="noreferrer"
                                  className={styles.ctaBtn}
                              >
                                <WaIcon /> {item.cta.btn}
                              </a>
                            </div>
                        )}
                      </div>
                    </div>
                  </div>
              );
            })}
          </div>
        </div>

        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </section>
  );
};

export default FAQ;
