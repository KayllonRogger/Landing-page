'use client';

import Link from 'next/link';
import styles from '../../servicos/page.module.css';

const detailedServicesEn = [
    {
        id: 1,
        title: 'Protection & Control Studies (P&C)',
        description: 'Comprehensive dimensioning and parameterization of numerical relays to ensure rapid fault clearing with maximum selectivity.',
        deliverables: [
            'Short-circuit and load-flow simulation studies',
            'Protection coordination and selectivity curve setting',
            'Parameterization and relay configuration files (CID/ICD/RVD)',
            'CT and VT saturation and burden validation',
        ],
        tags: ['Digital Protection', 'Selectivity', 'Transient Analysis'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Network Engineering & SAS Systems',
        description: 'Complete substation automation architecture engineering based on global standards for mission-critical operations.',
        deliverables: [
            'IEC 61850 architecture design (Ed. 1 and Ed. 2)',
            'GOOSE, MMS, and Sampled Values message configuration',
            'Ring network topologies with PRP/HSR and RSTP redundancy',
            'Multi-vendor gateway and numerical IED integration engineering',
        ],
        tags: ['IEC 61850', 'Industrial Networks', 'Digital Substation'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'SCADA Systems & Industrial Telemetry',
        description: 'Development of advanced supervisory control systems for local and remote operation with high availability and modern HMIs.',
        deliverables: [
            'Local and remote HMI & supervisory screen development',
            'Control center integration via DNP3.0 / IEC 60870-5-104',
            'Alarm management, oscillography, and event historians',
            'Interlocking logic and automated load restoration schemes',
        ],
        tags: ['SCADA', 'DNP3.0 / 104', 'Telecontrol'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Commissioning & Field Testing',
        description: 'Functional tests, calibrated secondary current/voltage injection, and point-to-point validation for safe energization.',
        deliverables: [
            'Secondary injection bench testing with OMICRON / Doble',
            'Point-to-point end-to-end telemetry validation (FAT / SAT)',
            'Circuit breaker trip timing and safety interlocking tests',
            'On-site technical support during initial energization',
        ],
        tags: ['FAT / SAT Testing', 'Commissioning', 'Secondary Injection'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
];

export default function ServicesPageEn() {
    return (
        <main className={styles.page}>
            {/* Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>SERVICES CATALOG</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        Specialized Engineering for Substations & Power Systems
                    </h1>
                    <p className={styles.bannerDescription}>
                        We operate with regulatory rigor, intelligent automation, and high-precision commissioning to guarantee energy reliability and safety.
                    </p>
                </div>
            </section>

            {/* Services Catalog */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>OUR CAPABILITIES</span>
                    </div>
                    <h2 className={styles.sectionTitle}>End-to-End Technical Engineering Solutions</h2>
                    <div className={styles.titleDivider}></div>
                </div>

                <div className={styles.catalogGrid}>
                    {detailedServicesEn.map((service) => (
                        <article key={service.id} className={styles.serviceCard}>
                            <div className={styles.cardTop}>
                                <div className={styles.iconBox}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                            </div>
                            <p className={styles.cardDescription}>{service.description}</p>

                            <h4 className={styles.deliverablesHeading}>Key Deliverables:</h4>
                            <ul className={styles.deliverablesList}>
                                {service.deliverables.map((item, idx) => (
                                    <li key={idx} className={styles.deliverableItem}>
                                        <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className={styles.cardFooter}>
                                {service.tags.map((tag) => (
                                    <span key={tag} className={styles.tag}>{tag}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>

                {/* CTA Box */}
                <section className={styles.ctaBanner}>
                    <div className={styles.ctaPattern}></div>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>Need a technical proposal or scope analysis?</h3>
                        <p className={styles.ctaSubtitle}>
                            Discuss your preliminary scope with our engineers and receive a precise solution tailored to your project.
                        </p>
                        <Link href="/en/contact" className={styles.ctaActionBtn}>
                            REQUEST TECHNICAL PROPOSAL / SCOPE ANALYSIS
                        </Link>
                    </div>
                </section>
            </section>
        </main>
    );
}

