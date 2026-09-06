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
            title: isEn ? 'PROTECTION & CONTROL STUDIES' : 'ESTUDOS DE PROTEÇÃO & CONTROLE',
            description: isEn
                ? 'Comprehensive short-circuit analysis, coordination, selectivity, and numerical IED parameterization under strict standards.'
                : 'Análise completa de curto-circuito, coordenação, seletividade e parametrização de IEDs com rigor normativo.',
            tags: isEn ? ['IEC 61850', 'Selectivity', 'Relay Settings'] : ['IEC 61850', 'Seletividade', 'Ajuste de Relés'],
            icon: (
                <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            id: 2,
            title: isEn ? 'NETWORK ENGINEERING & SAS' : 'ENGENHARIA DE REDES & SAS',
            description: isEn
                ? 'Advanced communication architectures for high- and extra-high-voltage substation automation systems.'
                : 'Arquiteturas avançadas de comunicação para sistemas de automação de subestações de alta e extra alta tensão.',
            tags: isEn ? ['GOOSE / MMS', 'PRP/HSR Networks', 'SAS Systems'] : ['GOOSE / MMS', 'Redes PRP/HSR', 'Sistemas SAS'],
            icon: (
                <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            id: 3,
            title: isEn ? 'AUTOMATION & SCADA' : 'AUTOMAÇÃO E SCADA',
            description: isEn
                ? 'Real-time supervision, control, and data acquisition systems, intuitive HMIs, and industrial telemetry.'
                : 'Sistemas de supervisão, controle e aquisição de dados em tempo real, telas intuitivas e telemetria industrial.',
            tags: isEn ? ['SCADA Screens', 'Historians', 'Telecontrol'] : ['Telas SCADA', 'Historiadores', 'Telecontrole'],
            icon: (
                <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
            ),
        },
    ];

    const servicesUrl = isEn ? '/en/services' : '/servicos';

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

                            <Link href={servicesUrl} className={styles.serviceLink}>
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
