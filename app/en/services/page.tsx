'use client';

import Link from 'next/link';
import styles from '../../servicos/page.module.css';

const detailedServicesEn = [
    {
        id: 1,
        title: 'Electrical Studies',
        href: '/en/protection-and-selectivity-studies/',
        description: 'Protection, coordination, and selectivity, short circuit, load flow, and transient studies, with type and scope defined by the technical need. KR is the commercial point of contact and coordinates the delivery, including when partners are involved.',
        deliverables: [
            'Protection, coordination, and selectivity criteria',
            'Short circuit and load flow',
            'Calculation report, curves, and settings table',
            'Transient studies according to technical need',
        ],
        tags: ['Selectivity', 'Short Circuit', 'Load Flow'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Protection Settings & Testing',
        href: '/en/commissioning-and-field-testing/',
        description: 'Implementation of approved settings and functional testing of protection systems on ABB, Schneider Electric, SEL, and Siemens platforms, including panel testing during FAT.',
        deliverables: [
            'Settings based on client-approved values',
            'Panel testing and FAT with agreed procedures',
            'Logic selectivity and contracted logic testing',
            'Test records and open items with owners',
        ],
        tags: ['Multi-Vendor IEDs', 'FAT', 'Logic Selectivity'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Commissioning & Field Support',
        href: '/en/commissioning-and-field-testing/',
        description: 'Support for commissioning teams, by scope or period, in Brazil or abroad, with experience on projects involving ABB, GE, Schneider Electric, SEL, and Siemens IEDs.',
        deliverables: [
            'Functional testing and field verification',
            'Support during site acceptance testing (SAT)',
            'As-built documentation updates when contracted',
            'Work in English on international projects',
        ],
        tags: ['Commissioning', 'SAT', 'Brazil and Abroad'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Protection & Automation Retrofit',
        href: '/en/power-system-automation/',
        description: 'Technical support for retrofits and shutdown preparation: IED integration, IEC 61850 communication, and approved automation logic.',
        deliverables: [
            'IED integration and IEC 61850 communication (GOOSE and MMS)',
            'Point integration with SCADA',
            'Implementation of approved logic, such as automatic transfer',
            'Planning of interfaces and the intervention window',
        ],
        tags: ['Retrofit', 'IEC 61850', 'Shutdowns'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
];

export default function ServicesPageEn() {
    return (
        <div className={styles.page}>
            {/* Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>SERVICES</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        Studies, protection, automation, and commissioning
                    </h1>
                    <p className={styles.bannerDescription}>
                        Hire a specific stage or an integrated package. KR is the commercial point of contact and coordinates the delivery; who prepares, reviews, approves, and executes each stage is set in the proposal.
                    </p>
                </div>
            </section>

            {/* Services Catalog */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>WHAT KR DOES</span>
                    </div>
                    <h2 className={styles.sectionTitle}>Stages you can hire</h2>
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

                            <h4 className={styles.deliverablesHeading}>Typical deliverables:</h4>
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

                            <Link href={service.href} className={styles.serviceDetailLink}>
                                <span>View service details</span>
                                <svg className={styles.detailArrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>

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
                        <h3 className={styles.ctaTitle}>Shall we talk about your need?</h3>
                        <p className={styles.ctaSubtitle}>
                            Describe the type of installation, the equipment involved, and the planned window.
                        </p>
                        <Link href="/en/contact" className={styles.ctaActionBtn}>
                            Request a technical call
                        </Link>
                    </div>
                </section>
            </section>
        </div>
    );
}

