'use client';

import Link from 'next/link';
import styles from './Services.module.css';

interface ServicesProps {
    locale?: 'pt' | 'en';
}

export default function Services({ locale = 'pt' }: ServicesProps) {
    const isEn = locale === 'en';

    const services = [
        {
            id: 1,
            title: isEn ? 'PROTECTION & SELECTIVITY STUDIES' : 'ESTUDOS DE PROTEÇÃO & SELETIVIDADE',
            description: isEn
                ? 'Mitigate outage risks and ensure asset integrity. Analytical short-circuit calculations, coordination curves, and IED parameterization in ETAP.'
                : 'Mitigue riscos de desligamentos intempestivos e proteja ativos críticos. Cálculos analíticos de curto-circuito, curvas de coordenação e parametrização de IEDs em ETAP.',
            tags: isEn ? ['ETAP Analysis', 'Coordination Curves', 'ONS Compliance'] : ['Estudos ETAP', 'Curvas de Coordenação', 'Conformidade ONS'],
            href: isEn ? '/en/protection-and-selectivity-studies/' : '/estudos-de-protecao-e-seletividade/',
            icon: (
                <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: isEn ? 'POWER SYSTEM AUTOMATION & IEC 61850' : 'AUTOMAÇÃO DE SISTEMAS ELÉTRICOS & IEC 61850',
            description: isEn
                ? 'End-to-end substation automation (SAS). High-speed GOOSE messaging, zero-loss PRP/HSR redundancy, SCADA HMIs, and utility protocols (DNP3, IEC 60870-5-104).'
                : 'Engenharia completa de automação de subestações (SAS). Mensagens GOOSE ultrarrápidas, redes redundantes PRP/HSR, supervisórios SCADA e telecontrole ONS (DNP3 / 104).',
            tags: isEn ? ['IEC 61850 GOOSE/MMS', 'PRP / HSR Redundancy', 'DNP3 & SCADA'] : ['IEC 61850 GOOSE/MMS', 'Redundância PRP/HSR', 'DNP3 & SCADA'],
            href: isEn ? '/en/power-system-automation/' : '/automacao-sistemas-eletricos/',
            icon: (
                <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            id: 3,
            title: isEn ? 'COMMISSIONING & FIELD TESTING' : 'COMISSIONAMENTO & ENSAIOS EM CAMPO',
            description: isEn
                ? 'Zero start-up surprises. Calibrated secondary injection with OMICRON CMC sets, functional logic validation, trip matrix tests, and comprehensive FAT/SAT support up to 500 kV.'
                : 'Energização segura e sem imprevistos. Injeção secundária calibrada com malas OMICRON CMC, validação de lógicas, testes de matriz de trip e suporte integral a TAF/TAC até 500 kV.',
            tags: isEn ? ['OMICRON CMC 356', 'FAT / SAT Support', 'Trip Matrix Tests'] : ['OMICRON CMC 356', 'Suporte TAF / TAC', 'Matriz de Trip'],
            href: isEn ? '/en/commissioning-and-field-testing/' : '/comissionamento-e-ensaios-em-campo/',
            icon: (
                <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
        },
    ];

    return (
        <section id={isEn ? "services" : "servicos"} className={styles.services}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>{isEn ? 'TECHNICAL EXPERTISE' : 'EXPERTISE TÉCNICA'}</span>
                    </div>
                    <h2 className={styles.title}>{isEn ? 'OUR SERVICES' : 'NOSSOS SERVIÇOS'}</h2>
                    <p className={styles.headerDescription}>
                        {isEn
                            ? 'Integrated engineering solutions for maximum reliability, safety, and power system digitalization.'
                            : 'Soluções integradas de engenharia para máxima confiabilidade, segurança e digitalização do seu sistema de potência.'}
                    </p>
                    <div className={styles.divider}></div>
                </div>

                {/* Services Grid */}
                <div className={styles.grid}>
                    {services.map((service) => (
                        <div key={service.id} className={styles.serviceCard}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconBox}>{service.icon}</div>
                            </div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>

                            <div className={styles.tagList}>
                                {service.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>

                            <Link href={service.href} className={styles.serviceLink}>
                                <span>{isEn ? 'Learn More' : 'Saiba Mais'}</span>
                                <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
