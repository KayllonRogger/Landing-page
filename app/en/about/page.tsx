'use client';

import Link from 'next/link';
import styles from '../../sobre/page.module.css';

const valuesListEn = [
    {
        id: 1,
        title: 'Safety before energization',
        text: 'Poorly set or poorly tested protection can cause nuisance trips, equipment damage, and risks to people.',
        highlight: 'Approved settings, test procedures, and acceptance criteria are agreed before execution. Documentation does not replace the operational authorization to energize.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Clear scope from the start',
        text: 'Every request starts with the type of installation, the equipment involved, their versions, and the planned window.',
        highlight: 'The proposal defines who prepares, reviews, approves, and executes each stage, along with supplies, exclusions, and acceptance criteria.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Experience stated precisely',
        text: 'The professional track record is described by what was done, with which equipment, and in which role.',
        highlight: 'Field cases are not presented as direct KR contracts, and the brands listed do not indicate partnerships or manufacturer certification.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Studies connected to field verification',
        text: 'Electrical studies support protection and operating decisions. When integrated with relay settings and testing, they connect system analysis to field verification.',
        highlight: 'KR is the commercial point of contact and coordinates the delivery of studies, including when partners are involved. Who prepares, reviews, approves, and executes each stage is set in the proposal.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
];

const credentials = [
    'Legal name: KR Consultoria e Soluções em Engenharia LTDA',
    'Corporate Tax ID (CNPJ): 68.797.626/0001-04',
    'CREA registration: No. 141854962-2',
    'Office in Belo Horizonte, Brazil',
];

export default function AboutUsPageEn() {
    return (
        <div className={styles.page}>
            {/* Top Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>ABOUT KR</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        KR Engenharia
                    </h1>
                    <p className={styles.bannerDescription}>
                        KR Engenharia is the trade name of KR Consultoria e Soluções em Engenharia LTDA. Protection and automation engineering with multi-vendor experience: electrical studies, relay settings, testing, and commissioning.
                    </p>
                </div>
            </section>

            {/* Core Values Section */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>HOW WE WORK</span>
                    </div>
                    <h2 className={styles.sectionTitle}>Principles that guide our work</h2>
                    <div className={styles.titleDivider}></div>
                </div>

                <div className={styles.valuesGrid}>
                    {valuesListEn.map((val) => (
                        <article key={val.id} className={styles.valueCard}>
                            <div className={styles.valueHeader}>
                                <div className={styles.valueIconBox}>{val.icon}</div>
                                <h3 className={styles.valueTitle}>{val.title}</h3>
                            </div>
                            <p className={styles.valueText}>{val.text}</p>
                            <div className={styles.valueHighlightBox}>
                                <span className={styles.highlightTag}>In practice:</span>
                                <p className={styles.valueHighlight}>{val.highlight}</p>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pillars / Mission Row */}
                <div className={styles.panelRow}>
                    <div className={`${styles.panelCard} ${styles.panelCardAccent}`}>
                        <div className={styles.panelIconWrapper}>
                            <svg className={styles.panelIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className={styles.panelTitle}>Our mission</h3>
                        <p className={styles.panelText}>
                            Support engineering firms, system integrators, and maintenance teams with studies, relay settings, testing, and commissioning of protection systems, with a well-defined scope and responsibilities.
                        </p>
                    </div>

                    <div className={styles.panelCard}>
                        <div className={styles.panelIconWrapperOrange}>
                            <svg className={styles.panelIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className={styles.panelTitleDark}>Our method</h3>
                        <p className={styles.panelTextDark}>
                            A technical call to understand the need, collection of input data, and a proposal with scope, assumptions, exclusions, and verifiable milestones.
                        </p>
                    </div>

                    <div className={`${styles.panelCard} ${styles.panelCardAccent}`}>
                        <div className={styles.panelIconWrapper}>
                            <svg className={styles.panelIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className={styles.panelTitle}>Where we help</h3>
                        <p className={styles.panelText}>
                            Electrical studies, support for panel testing and commissioning, protection and automation retrofits, shutdown preparation, and implementation of approved settings.
                        </p>
                    </div>
                </div>

                {/* Technical Responsibility & Governance */}
                <section className={styles.leadershipSection}>
                    <div>
                        <div className={styles.leadershipBadge}>REGISTRATION AND TECHNICAL RESPONSIBILITY</div>
                        <h2 className={styles.leadershipTitle}>Company registration</h2>
                        <p className={styles.leadershipText}>
                            KR Consultoria e Soluções em Engenharia LTDA is registered with CREA (Brazil&apos;s Regional Council of Engineering). Technical responsibility and the documentation required for each scope and site are defined in the proposal, before mobilization.
                        </p>
                        <div className={styles.creaList}>
                            {credentials.map((item) => (
                                <div key={item} className={styles.creaItem}>
                                    <svg className={styles.creaIcon} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.leadershipCardRight}>
                        <div className={styles.leadRole}>ENGINEERING AND TECHNICAL CONTACT</div>
                        <h3 className={styles.leadName}>Eng. Kayllon Rogger Nunes</h3>
                        <p className={styles.leadBio}>
                            Experience in relay settings, testing, and commissioning at 230 kV to 500 kV substations, industrial facilities, mining sites, and offshore applications in Brazil, the United States, and Poland. Work with ABB, Schneider Electric, SEL, and Siemens platforms and commissioning involving GE IEDs. Fluent English.
                        </p>
                    </div>
                </section>

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
