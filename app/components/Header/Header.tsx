'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';
import { translations } from '@/lib/i18n/translations';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const isEn = pathname.startsWith('/en');
    const locale = isEn ? 'en' : 'pt';
    const navLinks = translations.header.nav[locale];

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    const switchLanguage = (targetLang: 'pt' | 'en') => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('kr_preferred_lang', targetLang);
        }

        if (targetLang === 'en' && !isEn) {
            // Map PT to EN routes
            if (pathname === '/') router.push('/en');
            else if (pathname === '/sobre') router.push('/en/about');
            else if (pathname === '/servicos') router.push('/en/services');
            else if (pathname === '/projetos') router.push('/en/projects');
            else if (pathname === '/blog') router.push('/en/blog');
            else if (pathname === '/contato') router.push('/en/contact');
            else router.push('/en');
        } else if (targetLang === 'pt' && isEn) {
            // Map EN to PT routes
            if (pathname === '/en') router.push('/');
            else if (pathname === '/en/about') router.push('/sobre');
            else if (pathname === '/en/services') router.push('/servicos');
            else if (pathname === '/en/projects') router.push('/projetos');
            else if (pathname === '/en/blog') router.push('/blog');
            else if (pathname === '/en/contact') router.push('/contato');
            else router.push('/');
        }
        closeMenu();
    };

    const contactUrl = isEn ? '/en/contact' : '/contato';

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href={isEn ? '/en' : '/'} className={styles.logo} onClick={closeMenu}>
                    <img src="/logo.svg" alt="KR Engenharia Logo" className={styles.logoBadge} />
                    <div className={styles.logoText}>
                        <span className={styles.logoMain}>KR ENGENHARIA</span>
                        <span className={styles.logoSub}>{translations.header.tagline[locale]}</span>
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

                {/* Right Group: Language Switcher + CTA */}
                <div className={styles.rightGroup}>
                    {/* Language Switcher Toggle */}
                    <div className={styles.langToggle}>
                        <button
                            type="button"
                            onClick={() => switchLanguage('pt')}
                            className={`${styles.langBtn} ${!isEn ? styles.langBtnActive : ''}`}
                            aria-label="Português"
                        >
                            <span>🇧🇷</span> PT
                        </button>
                        <button
                            type="button"
                            onClick={() => switchLanguage('en')}
                            className={`${styles.langBtn} ${isEn ? styles.langBtnActive : ''}`}
                            aria-label="English"
                        >
                            <span>🇺🇸</span> EN
                        </button>
                    </div>

                    {/* CTA Button */}
                    <Link
                        href={contactUrl}
                        className={styles.ctaButton}
                        title={translations.header.mobileCta[locale]}
                    >
                        {translations.header.cta[locale]}
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

                <Link href={contactUrl} className={styles.mobileCtaButton} onClick={closeMenu}>
                    {translations.header.mobileCta[locale]}
                </Link>
            </div>
        </header>
    );
}
