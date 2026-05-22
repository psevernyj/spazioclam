"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import logo from "@/public/main-logo.webp";
import { useLang } from "@/lib/i18n";

const WaIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={16} height={16} aria-hidden>
      <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.6.1-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.4.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.6-1.5-.9-2-.2-.5-.5-.5-.6-.5h-.5c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.2 5 4.4.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4 0-.1-.2-.2-.5-.3zM12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.3 5L2 22l5.2-1.4c1.4.7 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2z" />
    </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLang();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu  = () => setIsMenuOpen(false);

  const scrollTo = (id: string) => {
    closeMenu();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
      <header className={styles.header}>
        <div className={styles.inner}>

          {/* BRAND */}
          <Link href="/" className={styles.brand} onClick={closeMenu}>
            <Image
                src={logo}
                alt="Max Voytsekhovskyy"
                height={36}
                width={36}
                className={styles.logo}
                priority
            />
            <div className={styles.brandText}>
              <span className={styles.brandName}>Max</span>
              <span className={styles.brandSub}>Voytsekhovskyy</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav
              className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
              aria-label="Navigazione principale"
          >
            <ul>
              {/*<li><button onClick={() => scrollTo("hero")}>{t.nav.home}</button></li>*/}
              <li><button onClick={() => scrollTo("about")}>{t.nav.about}</button></li>
              <li><button onClick={() => scrollTo("process")}>{t.nav.process}</button></li>
              <li><button onClick={() => scrollTo("servizi")}>{t.nav.services}</button></li>
              <li><button onClick={() => scrollTo("contatti")}>{t.nav.contacts}</button></li>
            </ul>
          </nav>

          {/* RIGHT SIDE */}
          <div className={styles.right}>
            {/* Language switcher */}
            <div className={styles.langSwitch} aria-label="Seleziona lingua">
              <button
                  className={`${styles.langBtn} ${lang === "it" ? styles.langActive : ""}`}
                  onClick={() => setLang("it")}
              >
                IT
              </button>
              <button
                  className={`${styles.langBtn} ${lang === "en" ? styles.langActive : ""}`}
                  onClick={() => setLang("en")}
              >
                EN
              </button>
            </div>

            {/* CTA */}
            <button className={styles.cta} onClick={() => scrollTo("contatti")}>
              <WaIcon />
              {t.nav.book}
            </button>
          </div>

          {/* HAMBURGER */}
          <button
              type="button"
              className={styles.menuButton}
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
              aria-expanded={isMenuOpen}
          >
          <span className={`${styles.menuIcon} ${isMenuOpen ? styles.menuIconOpen : ""}`}>
            <span />
            <span />
            <span />
          </span>
          </button>

        </div>
      </header>
  );
};

export default Header;