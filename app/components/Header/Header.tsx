'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import styles from './Header.module.css';
import { translations } from '@/lib/i18n/translations';

const SERVICE_ROUTES_PT = [
    '/servicos',
    '/estudos-de-protecao-e-seletividade',
    '/automacao-sistemas-eletricos',
    '/comissionamento-e-ensaios-em-campo',
];

const SERVICE_ROUTES_EN = [
    '/en/services',
    '/en/protection-and-selectivity-studies',
    '/en/power-system-automation',
    '/en/commissioning-and-field-testing',
];

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

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    const isEn = pathname.startsWith('/en');
    const locale = isEn ? 'en' : 'pt';
    const navLinks = translations.header.nav[locale];

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsMobileServicesOpen(false);
        setIsServicesDropdownOpen(false);
    };

    const serviceItems = isEn
        ? [
              {
                  href: '/en/protection-and-selectivity-studies',
                  title: 'Protection & Selectivity Studies',
                  subtitle: 'Short-circuit, coordination, selectivity & Arc Flash (ETAP / PTW / ATP)',
                  icon: studiesIcon,
              },
              {
                  href: '/en/power-system-automation',
                  title: 'Power System Automation',
                  subtitle: 'IEC 61850, DNP3, Modbus, SCADA, Gateways & IED engineering',
                  icon: automationIcon,
              },
              {
                  href: '/en/commissioning-and-field-testing',
                  title: 'Commissioning & Field Testing',
                  subtitle: 'Secondary injection, relays, transformers & commissioning test sets',
                  icon: commissioningIcon,
              },
          ]
        : [
              {
                  href: '/estudos-de-protecao-e-seletividade',
                  title: 'Estudos de Proteção e Seletividade',
                  subtitle: 'Curto-circuito, coordenação, seletividade e Arc Flash (ETAP / PTW / ATP)',
                  icon: studiesIcon,
              },
              {
                  href: '/automacao-sistemas-eletricos',
                  title: 'Automação de Sistemas Elétricos',
                  subtitle: 'IEC 61850, DNP3, Modbus, SCADA, Gateways e parametrização',
                  icon: automationIcon,
              },
              {
                  href: '/comissionamento-e-ensaios-em-campo',
                  title: 'Comissionamento & Ensaios em Campo',
                  subtitle: 'Ensaios secundários e primários, IEDs e caixas de calibração',
                  icon: commissioningIcon,
              },
          ];

    const isServicesLink = (href: string) => href === '/servicos' || href === '/en/services';

    const isServicesActive = (href: string) => {
        if (!isServicesLink(href)) return pathname === href;
        return [...SERVICE_ROUTES_PT, ...SERVICE_ROUTES_EN].some((route) => pathname.startsWith(route));
    };

    const switchLanguage = (targetLang: 'pt' | 'en') => {
        localStorage.setItem('kr_preferred_lang', targetLang);

        if (targetLang === 'en' && !isEn) {
            // Map PT to EN routes
            if (pathname === '/' || pathname === '') router.push('/en');
            else if (pathname.startsWith('/sobre')) router.push('/en/about');
            else if (pathname.startsWith('/servicos')) router.push('/en/services');
            else if (pathname.startsWith('/estudos-de-protecao-e-seletividade')) router.push('/en/protection-and-selectivity-studies');
            else if (pathname.startsWith('/automacao-sistemas-eletricos')) router.push('/en/power-system-automation');
            else if (pathname.startsWith('/comissionamento-e-ensaios-em-campo')) router.push('/en/commissioning-and-field-testing');
            else if (pathname.startsWith('/projetos')) router.push('/en/projects');
            else if (pathname.startsWith('/blog')) router.push('/en/blog');
            else if (pathname.startsWith('/drive')) router.push('/en/drive');
            else if (pathname.startsWith('/contato')) router.push('/en/contact');
            else router.push('/en');
        } else if (targetLang === 'pt' && isEn) {
            // Map EN to PT routes
            if (pathname === '/en' || pathname === '/en/') router.push('/');
            else if (pathname.startsWith('/en/about')) router.push('/sobre');
            else if (pathname.startsWith('/en/services')) router.push('/servicos');
            else if (pathname.startsWith('/en/protection-and-selectivity-studies')) router.push('/estudos-de-protecao-e-seletividade');
            else if (pathname.startsWith('/en/power-system-automation')) router.push('/automacao-sistemas-eletricos');
            else if (pathname.startsWith('/en/commissioning-and-field-testing')) router.push('/comissionamento-e-ensaios-em-campo');
            else if (pathname.startsWith('/en/projects')) router.push('/projetos');
            else if (pathname.startsWith('/en/blog')) router.push('/blog');
            else if (pathname.startsWith('/en/drive')) router.push('/drive');
            else if (pathname.startsWith('/en/contact')) router.push('/contato');
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
                                            <span>{isEn ? 'View all services & scope →' : 'Ver todos os serviços e escopos →'}</span>
                                        </Link>
                                    </div>
                                </div>
                            );
                        }

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
                                                background: 'rgba(243, 156, 18, 0.08)',
                                                borderLeft: '3px solid var(--primary-orange)',
                                            }}
                                            onClick={closeMenu}
                                        >
                                            <span className={styles.mobileSubmenuTitle} style={{ color: 'var(--primary-orange)' }}>
                                                {isEn ? '→ Full Services Catalog & Scope' : '→ Catálogo Completo & Escopo'}
                                            </span>
                                        </Link>
                                    </div>
                                )}
                            </div>
                        );
                    }

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
