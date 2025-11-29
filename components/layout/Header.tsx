// components/layout/Header.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import logo from "../../public/main-logo.webp";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.inner}>
                {/* LOGO */}
                <div className={styles.logo}>
                    <Link href="/" onClick={closeMenu}>
                        <Image
                            src={logo}
                            alt="Logo"
                            width={120}
                            height={40}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>
                </div>

                {/* DESKTOP NAV + MOBILE NAV */}
                <nav
                    className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
                    aria-label="Main navigation"
                >
                    <ul>
                        <li>
                            <Link href="/" onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/chi-sono" onClick={closeMenu}>
                                Chi sono
                            </Link>
                        </li>
                        <li>
                            <Link href="/servizi" onClick={closeMenu}>
                                Servizi
                            </Link>
                        </li>
                        <li>
                            <Link href="/contatti" onClick={closeMenu}>
                                Contatti
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* HAMBURGER BUTTON (mobile only) */}
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