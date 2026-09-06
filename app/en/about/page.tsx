'use client';

import Link from 'next/link';
import styles from '../../sobre/page.module.css';

const valuesListEn = [
    {
        id: 1,
        title: 'Non-Negotiable Safety & Reliability',
        text: 'In our industry, there is zero tolerance for trial and error. A poorly executed protection or automation project can result in blackouts, multimillion-dollar equipment damage, or risks to human life.',
        highlight: 'Our primary commitment is ensuring that every selectivity curve, configured relay, and load-shedding scheme operates with surgical precision.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Standard Compliance & IEC 61850',
        text: 'Power engineering is governed by strict international standards. We do not just deliver systems that work; we deliver architectures fully compliant with global state-of-the-art standards.',
        highlight: 'Mastery of standards such as IEC 61850, IEEE, and national grid codes is our baseline, reflected in clean engineering and impeccable documentation.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Systemic Vision & Intelligent Integration',
        text: 'We deliver integrated operational intelligence for real-time decision making rather than isolated panels or basic programming.',
        highlight: 'We design architectures where automation and protection converge to generate continuous reliability, energy efficiency, and operational stability.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Transparency & Strategic Partnership',
        text: 'Power systems and automation require substantial investment and carry critical operational weight. Clients need complete confidence in the engineers working on their panels.',
        highlight: 'We operate as long-term strategic partners, from initial feasibility studies through on-site field commissioning, providing clarity and predictability.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        id: 5,
        title: 'Innovation & Continuous Upgrading',
        text: 'Power sector technology progresses rapidly. We keep our engineering team continuously trained with global certifications and modern toolsets.',
        highlight: 'We always seek the optimal network topologies, high-speed transceivers, and cutting-edge analytical simulation software to maximize performance.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function AboutUsPageEn() {
    return (
        <main className={styles.page}>
            {/* Top Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>ABOUT US</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        KR Engenharia
                    </h1>
                    <p className={styles.bannerDescription}>
                        Technical excellence, non-negotiable reliability, and continuous innovation in electrical engineering and substation automation.
                    </p>
                </div>
            </section>

            {/* Core Values Section */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>OUR PILLARS</span>
                    </div>
                    <h2 className={styles.sectionTitle}>Principles That Guide Our Engineering</h2>
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
                        <h3 className={styles.panelTitle}>Our Mission</h3>
                        <p className={styles.panelText}>
                            Elevate the standards of electrical engineering and automation for critical infrastructure, delivering safe solutions aligned with international standards and focused on real results.
                        </p>
                    </div>

                    <div className={styles.panelCard}>
                        <div className={styles.panelIconWrapperOrange}>
                            <svg className={styles.panelIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className={styles.panelTitleDark}>Our Method</h3>
                        <p className={styles.panelTextDark}>
                            We prioritize clear communication, rigorous technical analyses, and data-driven decisions, ensuring that every project milestone is transparent with tangible engineering value.
                        </p>
                    </div>

                    <div className={`${styles.panelCard} ${styles.panelCardAccent}`}>
                        <div className={styles.panelIconWrapper}>
                            <svg className={styles.panelIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className={styles.panelTitle}>High-Impact Deliverables</h3>
                        <p className={styles.panelText}>
                            Our team operates from initial feasibility through final on-site field commissioning, maintaining relentless focus on risk mitigation and maximum operational availability.
                        </p>
                    </div>
                </div>

                {/* CTA Box */}
                <section className={styles.ctaBanner}>
                    <div className={styles.ctaPattern}></div>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>Ready to elevate your power system project?</h3>
                        <p className={styles.ctaSubtitle}>
                            Contact our engineering team and receive an in-depth technical scope assessment for your facility.
                        </p>
                        <Link href="/en/contact" className={styles.ctaActionBtn}>
                            TALK TO A SPECIALIST
                        </Link>
                    </div>
                </section>
            </section>
        </main>
    );
}

