'use client';

import Link from 'next/link';
import styles from '../../blog/page.module.css';

const articlesEn = [
    {
        id: 1,
        title: 'The Digital Substation Revolution and the IEC 61850 Standard',
        excerpt: 'How replacing copper control cables with optical fibers and process bus architectures elevates reliability and cuts lifecycle O&M costs.',
        category: 'Digital Substation',
        readTime: '6 min read',
        date: 'August 15, 2026',
        icon: (
            <svg className={styles.articleIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Challenges in Integrating Utility-Scale Solar & Wind into the Grid',
        excerpt: 'Voltage stability analysis, reactive power compensation, and transmission operator grid code compliance for renewable connections.',
        category: 'Renewable Energy',
        readTime: '8 min read',
        date: 'August 02, 2026',
        icon: (
            <svg className={styles.articleIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Coordination and Selectivity in Heavy Industrial Power Systems',
        excerpt: 'Best practices for numerical relay parameterization to eliminate unnecessary plant-wide outages during downstream motor and feeder faults.',
        category: 'Protection & Control',
        readTime: '5 min read',
        date: 'July 20, 2026',
        icon: (
            <svg className={styles.articleIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
];

export default function BlogPageEn() {
    return (
        <main className={styles.page}>
            {/* Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>TECHNICAL KNOWLEDGE</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        Technical Articles & Electrical Engineering Insights
                    </h1>
                    <p className={styles.bannerDescription}>
                        Practical insights, international standards, and in-depth analyses on substation automation, protection, and power systems.
                    </p>
                </div>
            </section>

            {/* Articles Section with Coming Soon Overlay */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>RECENT PUBLICATIONS</span>
                    </div>
                    <h2 className={styles.sectionTitle}>Featured Technical Papers</h2>
                    <div className={styles.titleDivider}></div>
                </div>

                {/* Coming Soon Wrapper */}
                <div className={styles.comingSoonWrapper}>
                    {/* Blurred article grid (still preserved in DOM) */}
                    <div className={styles.gridBlurred}>
                        <div className={styles.grid}>
                            {articlesEn.map((art) => (
                                <article key={art.id} className={styles.articleCard}>
                                    <div className={styles.articleBanner}>
                                        <div className={styles.articleIconWrapper}>{art.icon}</div>
                                    </div>
                                    <div className={styles.articleBody}>
                                        <div className={styles.articleMeta}>
                                            <span className={styles.categoryBadge}>{art.category}</span>
                                            <span className={styles.readTime}>{art.readTime}</span>
                                        </div>
                                        <h3 className={styles.articleTitle}>{art.title}</h3>
                                        <p className={styles.articleExcerpt}>{art.excerpt}</p>

                                        <div className={styles.articleFooter}>
                                            <span className={styles.publishDate}>{art.date}</span>
                                            <span className={styles.readLink}>
                                                <span>Read Paper</span>
                                                <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    {/* Coming Soon Overlay */}
                    <div className={styles.comingSoonOverlay}>
                        <div className={styles.comingSoonContent}>
                            <div className={styles.comingSoonIcon}>
                                <svg width="36" height="36" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className={styles.comingSoonBadge}>COMING SOON</span>
                            <h3 className={styles.comingSoonTitle}>Our Technical Articles Are Coming Soon</h3>
                            <p className={styles.comingSoonText}>
                                We are preparing in-depth technical analyses, practical tutorials, and whitepapers on electrical engineering, substation automation, and power system protection.
                            </p>
                            <Link href="/en/contact" className={styles.comingSoonBtn}>
                                NOTIFY ME WHEN PUBLISHED
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Newsletter / Contact Banner */}
                <section className={styles.newsletterBanner}>
                    <div className={styles.newsletterPattern}></div>
                    <div className={styles.newsletterContent}>
                        <h3 className={styles.newsletterTitle}>Stay Updated with Our Technical Publications</h3>
                        <p className={styles.newsletterSubtitle}>
                            Follow exclusive engineering insights on the power sector and substation automation.
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

