'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <div className={styles.logo}>
                    <div className={styles.logoBadge}>KR</div>
                    <div className={styles.logoText}>
                        <span className={styles.logoMain}>KAYLLON ROGGER</span>
                        <span className={styles.logoSub}>Engenharia & Consultoria</span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    <Link href="#inicio" className={styles.navLink}>
                        INÍCIO
                    </Link>
                    <Link href="#sobre" className={styles.navLink}>
                        SOBRE NÓS
                    </Link>
                    <Link href="#servicos" className={styles.navLink}>
                        SERVIÇOS
                    </Link>
                    <Link href="#projetos" className={styles.navLink}>
                        PROJETOS
                    </Link>
                    <Link href="/blog" className={styles.navLink}>
                        BLOG
                    </Link>
                </nav>

                {/* CTA Button */}
                <button className={styles.ctaButton}>
                    SOLICITAR ORÇAMENTO
                </button>

                {/* Mobile Menu Button */}
                <button
                    className={styles.hamburger}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
                <Link href="#inicio" className={styles.mobileNavLink}>
                    INÍCIO
                </Link>
                <Link href="#sobre" className={styles.mobileNavLink}>
                    SOBRE NÓS
                </Link>
                <Link href="#servicos" className={styles.mobileNavLink}>
                    SERVIÇOS
                </Link>
                <Link href="#projetos" className={styles.mobileNavLink}>
                    PROJETOS
                </Link>
                <Link href="/blog" className={styles.mobileNavLink}>
                    BLOG
                </Link>
                <button className={styles.mobileCtaButton}>
                    SOLICITAR ORÇAMENTO
                </button>
            </div>
        </header>
    );
}
