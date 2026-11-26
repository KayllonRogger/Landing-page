import Link from 'next/link';
import styles from '../../servicos/page.module.css';
import HowItWorks from '../HowItWorks/HowItWorks';
import { catalog, contactHref, type Locale, type ServiceKey } from '@/lib/services/catalog';

const ICON_PATHS: Record<ServiceKey, string> = {
    'testes-comissionamento': 'M13 10V3L4 14h7v7l9-11h-7z',
    'diagnostico-falhas': 'M21 21l-4.35-4.35M11 18a7 7 0 100-14 7 7 0 000 14zM8 11h1.5l1-2 1.5 4 1-2H15',
    'retrofit-spcs': 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
    'estudos-eletricos': 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
};

const COPY = {
    pt: {
        badge: 'SERVIÇOS',
        title: 'Testes, diagnóstico, retrofit e estudos de sistemas elétricos',
        description: 'Quatro linhas de serviço para sistemas de proteção, controle e automação. Contrate uma etapa, um pacote integrado ou apoio por período. A KR é a interface comercial e coordena a entrega; quem elabora, revisa, aprova e executa cada etapa é definido na proposta.',
        sectionBadge: 'O QUE A KR FAZ',
        sectionTitle: 'Linhas de serviço',
        problems: 'Problemas atendidos:',
        deliverables: 'Entregáveis típicos:',
        details: 'Ver detalhes do serviço',
        ctaTitle: 'Não sabe qual serviço se aplica?',
        ctaText: 'Descreva o problema, o tipo de instalação e os equipamentos envolvidos. Na conversa técnica indicamos o escopo adequado, ou se o caso não é para a KR.',
        ctaButton: 'Apresentar uma demanda técnica',
    },
    en: {
        badge: 'SERVICES',
        title: 'Testing, diagnosis, retrofit, and studies for electrical systems',
        description: 'Four service lines for protection, control, and automation systems. Hire a single stage, an integrated package, or support for a period. KR is the commercial point of contact and coordinates the delivery; who prepares, reviews, approves, and executes each stage is set in the proposal.',
        sectionBadge: 'WHAT KR DOES',
        sectionTitle: 'Service lines',
        problems: 'Problems addressed:',
        deliverables: 'Typical deliverables:',
        details: 'View service details',
        ctaTitle: 'Not sure which service applies?',
        ctaText: 'Describe the problem, the type of installation, and the equipment involved. During the technical call we point to the right scope, or tell you if the case is not a fit for KR.',
        ctaButton: 'Present a technical need',
    },
};

export default function ServicesCatalog({ locale }: { locale: Locale }) {
    const t = COPY[locale];

    return (
        <div className={styles.page}>
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>{t.badge}</span>
                    </div>
                    <h1 className={styles.bannerTitle}>{t.title}</h1>
                    <p className={styles.bannerDescription}>{t.description}</p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>{t.sectionBadge}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{t.sectionTitle}</h2>
                    <div className={styles.titleDivider}></div>
                </div>

                <div className={styles.catalogGrid}>
                    {catalog.map((service) => (
                        <article key={service.key} className={styles.serviceCard}>
                            <div className={styles.cardTop}>
                                <div className={styles.iconBox}>
                                    <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={ICON_PATHS[service.key]} />
                                    </svg>
                                </div>
                                <h3 className={styles.cardTitle}>{service.title[locale]}</h3>
                            </div>
                            <p className={styles.cardDescription}>{service.description[locale]}</p>

                            <h4 className={styles.deliverablesHeading}>{t.problems}</h4>
                            <ul className={styles.problemsList}>
                                {service.problems[locale].map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>

                            <h4 className={styles.deliverablesHeading}>{t.deliverables}</h4>
                            <ul className={styles.deliverablesList}>
                                {service.deliverables[locale].map((item) => (
                                    <li key={item} className={styles.deliverableItem}>
                                        <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href={service.href[locale]} className={styles.serviceDetailLink}>
                                <span>{t.details}</span>
                                <span className="sr-only">: {service.title[locale]}</span>
                                <svg className={styles.detailArrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>

                            <div className={styles.cardFooter}>
                                {service.tags[locale].map((tag) => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

            </section>

            {/* How hiring works (moved from the home page) */}
            <HowItWorks locale={locale} />

            <section className={styles.section}>
                <section className={styles.ctaBanner}>
                    <div className={styles.ctaPattern}></div>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>{t.ctaTitle}</h2>
                        <p className={styles.ctaSubtitle}>{t.ctaText}</p>
                        <Link href={contactHref(locale)} className={styles.ctaActionBtn}>{t.ctaButton}</Link>
                    </div>
                </section>
            </section>
        </div>
    );
}
