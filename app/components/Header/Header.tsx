'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, type ReactNode } from 'react';
import styles from './Header.module.css';
import { translations } from '@/lib/i18n/translations';
import { englishRoute, portugueseRoute } from '@/lib/routes';
import { catalog, type ServiceKey } from '@/lib/services/catalog';

const SERVICE_ROUTES = ['/servicos', '/en/services', ...catalog.flatMap((service) => [service.href.pt, service.href.en])]
    .map((route) => route.replace(/\/$/, ''));

const studiesIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
);

const automationIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
);

const commissioningIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);

const diagnosisIcon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <polyline points="7.5 11 9 11 10 8.5 12 13.5 13 11 14.5 11" />
    </svg>
);

const SERVICE_ICONS: Record<ServiceKey, ReactNode> = {
    'testes-comissionamento': commissioningIcon,
    'diagnostico-falhas': diagnosisIcon,
    'retrofit-spcs': automationIcon,
    'estudos-eletricos': studiesIcon,
};

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const isEn = pathname.startsWith('/en');
    const currentPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
    const locale = isEn ? 'en' : 'pt';
    const navLinks = translations.header.nav[locale];

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsMobileServicesOpen(false);
        setIsServicesDropdownOpen(false);
    };

    const serviceItems = catalog.map((service) => ({
        href: service.href[locale].replace(/\/$/, ''),
        title: service.title[locale],
        subtitle: service.summary[locale],
        icon: SERVICE_ICONS[service.key],
    }));

    const isServicesLink = (href: string) => href === '/servicos' || href === '/en/services';

    const isServicesActive = (href: string) => {
        if (!isServicesLink(href)) return currentPath === href;
        return SERVICE_ROUTES.some((route) => pathname.startsWith(route));
    };

    const switchLanguage = (targetLang: 'pt' | 'en') => {
        localStorage.setItem('kr_preferred_lang', targetLang);

        if (targetLang === 'en' && !isEn) {
            router.push(englishRoute(pathname));
        } else if (targetLang === 'pt' && isEn) {
            router.push(portugueseRoute(pathname));
        }
        closeMenu();
    };

    const contactUrl = isEn ? '/en/contact' : '/contato';

    return (
        <header className={styles.header}>
            <a href="#conteudo" className="kr-skip-link">{isEn ? 'Skip to content' : 'Pular para o conteúdo'}</a>
            <div className={styles.container}>
                {/* Logo */}
                <Link href={isEn ? '/en' : '/'} className={styles.logo} onClick={closeMenu}>
                    <img src="/logo.svg" alt="" className={styles.logoBadge} />
                    <div className={styles.logoText}>
                        <span className={styles.logoMain}>KR ENGENHARIA</span>
                        <span className={styles.logoSub}>{translations.header.tagline[locale]}</span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.nav} aria-label={isEn ? 'Main navigation' : 'Navegação principal'}>
                    {navLinks.map((link) => {
                        if (isServicesLink(link.href)) {
                            const isActive = isServicesActive(link.href);
                            return (
                                <div
                                    key={link.href}
                                    className={styles.navDropdownWrapper}
                                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                                >
                                    <Link
                                        href={link.href}
                                        className={`${styles.navDropdownTrigger} ${isActive ? styles.navDropdownTriggerActive : ''}`}
                                        onClick={() => setIsServicesDropdownOpen(false)}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        <span style={{ textDecoration: 'none' }}>{link.label}</span>
                                        <svg
                                            className={`${styles.dropdownChevron} ${isServicesDropdownOpen ? styles.dropdownChevronOpen : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </Link>

                                    <div className={`${styles.dropdownMenu} ${isServicesDropdownOpen ? styles.dropdownMenuOpen : ''}`}>
                                        {serviceItems.map((item) => {
                                            const isItemActive = pathname.startsWith(item.href);
                                            return (
                                                <Link
                                                    key={item.href}
                                                    href={item.href}
                                                    className={`${styles.dropdownItem} ${isItemActive ? styles.dropdownItemActive : ''}`}
                                                    onClick={() => setIsServicesDropdownOpen(false)}
                                                >
                                                    <div className={styles.dropdownItemIcon}>{item.icon}</div>
                                                    <div className={styles.dropdownItemContent}>
                                                        <span className={styles.dropdownItemTitle}>{item.title}</span>
                                                        <span className={styles.dropdownItemSubtitle}>{item.subtitle}</span>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                        <div className={styles.dropdownDivider}></div>
                                        <Link
                                            href={link.href}
                                            className={styles.dropdownFooterLink}
                                            onClick={() => setIsServicesDropdownOpen(false)}
                                        >
                                            <span>{isEn ? 'View all services →' : 'Ver todos os serviços →'}</span>
                                        </Link>
                                    </div>
                                </div>
                            );
                        }

                        const isActive = currentPath === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                                aria-current={isActive ? 'page' : undefined}
                            >
                                {link.label}
                                {isActive && <span className={styles.activeIndicator}></span>}
                            </Link>
                        );
                    })}
                </nav>

                {/* Right Group: Language Switcher + CTA */}
                <div className={styles.rightGroup}>
                    {/* Desktop Language Switcher */}
                    <div className={styles.desktopLangToggle}>
                        <button
                            type="button"
                            onClick={() => switchLanguage('pt')}
                            className={`${styles.langBtn} ${!isEn ? styles.langBtnActive : ''}`}
                            aria-label="Mudar para Português"
                        >
                            <span>🇧🇷</span> PT
                        </button>
                        <button
                            type="button"
                            onClick={() => switchLanguage('en')}
                            className={`${styles.langBtn} ${isEn ? styles.langBtnActive : ''}`}
                            aria-label="Switch to English"
                        >
                            <span>🇺🇸</span> EN
                        </button>
                    </div>

                    {/* Mobile Quick Language Toggle */}
                    <button
                        type="button"
                        onClick={() => switchLanguage(isEn ? 'pt' : 'en')}
                        className={styles.mobileQuickLangBtn}
                        title={isEn ? 'Mudar para Português' : 'Switch to English'}
                        aria-label={isEn ? 'Mudar para Português' : 'Switch to English'}
                    >
                        <span>{isEn ? '🇧🇷' : '🇺🇸'}</span>
                        <span className={styles.mobileQuickLangCode}>{isEn ? 'PT' : 'EN'}</span>
                    </button>

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
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label={isEn ? (isMenuOpen ? 'Close navigation menu' : 'Open navigation menu') : (isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação')}
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
                <div className={styles.mobileDrawerLangBox}>
                    <span className={styles.mobileDrawerLangLabel}>
                        {isEn ? 'Select Language / Idioma:' : 'Selecione o Idioma:'}
                    </span>
                    <div className={styles.mobileDrawerLangButtons}>
                        <button
                            type="button"
                            onClick={() => switchLanguage('pt')}
                            className={`${styles.mobileDrawerLangBtn} ${!isEn ? styles.mobileDrawerLangBtnActive : ''}`}
                        >
                            <span className={styles.flagIcon}>🇧🇷</span>
                            <span>Português (BR)</span>
                            {!isEn && <span className={styles.activeCheck}>✓</span>}
                        </button>
                        <button
                            type="button"
                            onClick={() => switchLanguage('en')}
                            className={`${styles.mobileDrawerLangBtn} ${isEn ? styles.mobileDrawerLangBtnActive : ''}`}
                        >
                            <span className={styles.flagIcon}>🇺🇸</span>
                            <span>English (US)</span>
                            {isEn && <span className={styles.activeCheck}>✓</span>}
                        </button>
                    </div>
                </div>

                <div className={styles.mobileNavDivider}></div>

                {navLinks.map((link) => {
                    if (isServicesLink(link.href)) {
                        return (
                            <div key={link.href} className={styles.mobileDropdownGroup}>
                                <button
                                    type="button"
                                    className={styles.mobileDropdownTrigger}
                                    onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                                    aria-expanded={isMobileServicesOpen}
                                >
                                    <span>{link.label}</span>
                                    <svg
                                        className={`${styles.mobileChevron} ${isMobileServicesOpen ? styles.mobileChevronOpen : ''}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                {isMobileServicesOpen && (
                                    <div className={styles.mobileSubmenu}>
                                        {serviceItems.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className={styles.mobileSubmenuItem}
                                                onClick={closeMenu}
                                            >
                                                <span className={styles.mobileSubmenuTitle}>{item.title}</span>
                                                <span className={styles.mobileSubmenuSubtitle}>{item.subtitle}</span>
                                            </Link>
                                        ))}
                                        <Link
                                            href={link.href}
                                            className={styles.mobileSubmenuItem}
                                            style={{
                                                background: 'rgba(200, 122, 40, 0.08)',
                                                borderLeft: '3px solid var(--primary-orange)',
                                            }}
                                            onClick={closeMenu}
                                        >
                                            <span className={styles.mobileSubmenuTitle} style={{ color: 'var(--primary-blue)' }}>
                                                {isEn ? '→ Full service catalog' : '→ Catálogo completo de serviços'}
                                            </span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        );
                    }

                    const isActive = currentPath === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.mobileNavLink} ${isActive ? styles.mobileNavLinkActive : ''}`}
                            aria-current={isActive ? 'page' : undefined}
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
