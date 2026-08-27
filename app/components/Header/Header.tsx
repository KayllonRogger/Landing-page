'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { href: '/', label: 'INÍCIO' },
        { href: '/sobre', label: 'SOBRE NÓS' },
        { href: '/servicos', label: 'SERVIÇOS' },
        { href: '/projetos', label: 'PROJETOS' },
        { href: '/blog', label: 'BLOG' },
        { href: '/contato', label: 'CONTATO' },
    ];

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    <img src="/logo.svg" alt="KR Engenharia Logo" className={styles.logoBadge} />
                    <div className={styles.logoText}>
                        <span className={styles.logoMain}>KR ENGENHARIA</span>
                        <span className={styles.logoSub}>Engenharia Elétrica & SAS</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                            >
                                {link.label}
                                {isActive && <span className={styles.activeIndicator}></span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* CTA Button */}
                <Link href="/contato" className={styles.ctaButton}>
                    SOLICITAR ORÇAMENTO
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className={`${styles.hamburger} ${isMenuOpen ? styles.hamburgerActive : ''}`}
                    onClick={toggleMenu}
                    aria-label="Abrir menu de navegação"
                    aria-expanded={isMenuOpen}
                >
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                    <span className={styles.hamburgerLine}></span>
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                            onClick={closeMenu}
                        >
                            {link.label}
                        </Link>
                    );
                })}
                <Link href="/contato" className={styles.mobileCtaButton} onClick={closeMenu}>
                    SOLICITAR ORÇAMENTO
                </Link>
            </div>
        </header>
    );
}
