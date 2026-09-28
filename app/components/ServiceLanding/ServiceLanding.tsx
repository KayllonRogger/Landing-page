import Link from 'next/link';
import styles from './ServiceLanding.module.css';
import type { ServiceLandingContent } from '@/lib/services/content';

interface ServiceLandingProps {
    content: ServiceLandingContent;
}

const CheckIcon = () => (
    <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
    </svg>
);

function buildJsonLd(content: ServiceLandingContent) {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                name: content.schema.name,
                description: content.schema.description,
                provider: {
                    '@type': 'Organization',
                    name: 'KR Consultoria e Soluções em Engenharia LTDA',
                    url: 'https://krconsultoria.com.br',
                    logo: 'https://krconsultoria.com.br/logo.svg',
                },
                areaServed: {
                    '@type': 'Country',
                    name: content.schema.areaServed,
                },
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: content.schema.catalogName,
                    itemListElement: content.capabilities.pillars.map((pillar, index) => ({
                        '@type': 'Offer',
                        itemOffered: {
                            '@type': 'Service',
                            name: pillar.title,
                            description: pillar.description,
                        },
                        position: index + 1,
                    })),
                },
            },
            {
                '@type': 'FAQPage',
                mainEntity: content.faq.items.map((item) => ({
                    '@type': 'Question',
                    name: item.question,
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: item.answer,
                    },
                })),
            },
        ],
    };
}

export default function ServiceLanding({ content }: ServiceLandingProps) {
    const { breadcrumb, hero, overview, capabilities, gallery, faq, cta } = content;
    // Cards without an approved photo are shown as text cards; keep the whole row consistent.
    const galleryTextOnly = gallery.items.some((item) => !item.image);

    return (
        <div className={styles.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(content)) }}
            />

            {/* Breadcrumb */}
            <nav className={styles.breadcrumbNav} aria-label="Breadcrumb">
                <ol className={styles.breadcrumbList}>
                    <li>
                        <Link href={breadcrumb.home.href} className={styles.breadcrumbLink}>{breadcrumb.home.label}</Link>
                    </li>
                    <li className={styles.breadcrumbSeparator}>/</li>
                    <li>
                        <Link href={breadcrumb.services.href} className={styles.breadcrumbLink}>{breadcrumb.services.label}</Link>
                    </li>
                    <li className={styles.breadcrumbSeparator}>/</li>
                    <li className={styles.breadcrumbCurrent} aria-current="page">{breadcrumb.current}</li>
                </ol>
            </nav>

            {/* Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>{hero.badge}</span>
                    </div>
                    <h1 className={styles.bannerTitle}>{hero.title}</h1>
                    <p className={styles.bannerDescription}>{hero.description}</p>

                    <div className={styles.heroActions}>
                        <Link href={hero.primaryCta.href} className={styles.primaryCtaBtn}>
                            <span>{hero.primaryCta.label}</span>
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </Link>
                        <Link href={hero.secondaryCta.href} className={styles.secondaryCtaBtn}>
                            {hero.secondaryCta.label}
                        </Link>
                    </div>

                    <div className={styles.trustBadges}>
                        {hero.trustBadges.map((badge, idx) => (
                            <div key={idx} className={styles.trustBadgeItem}>
                                <svg className={styles.trustBadgeIcon} fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span>{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Challenge & Solution Overview */}
            <section className={styles.section}>
                <div className={styles.overviewGrid}>
                    <div className={styles.overviewBox}>
                        <h2 className={styles.overviewBoxTitle}>
                            <svg className={styles.overviewBoxTitleIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                            <span>{overview.challenge.title}</span>
                        </h2>
                        <p className={styles.overviewBoxText}>{overview.challenge.text}</p>
                    </div>

                    <div className={styles.overviewBox}>
                        <h2 className={styles.overviewBoxTitle}>
                            <svg className={styles.overviewBoxTitleIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{overview.solution.title}</span>
                        </h2>
                        <p className={styles.overviewBoxText}>{overview.solution.text}</p>
                        <ul className={styles.highlightList}>
                            {overview.highlights.map((item, idx) => (
                                <li key={idx} className={styles.highlightItem}>
                                    <CheckIcon />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Technical Capabilities & Deliverables */}
            <section className={styles.section} style={{ paddingTop: 0 }}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>{capabilities.badge}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{capabilities.title}</h2>
                    <p className={styles.sectionSubtitle}>{capabilities.subtitle}</p>
                    <div className={styles.titleDivider}></div>
                </div>

                <div className={styles.pillarsGrid}>
                    {capabilities.pillars.map((pillar, idx) => (
                        <article key={idx} className={styles.pillarCard}>
                            <div className={styles.pillarIcon}>
                                <svg width="28" height="28" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                            <p className={styles.pillarDescription}>{pillar.description}</p>
                            <h4 className={styles.deliverablesLabel}>{capabilities.deliverablesLabel}</h4>
                            <ul className={styles.deliverablesList}>
                                {pillar.deliverables.map((item, i) => (
                                    <li key={i} className={styles.deliverableItem}>
                                        <CheckIcon />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>

                <div className={styles.techSpecsBox}>
                    <h3 className={styles.techSpecsTitle}>{capabilities.techSpecs.title}</h3>
                    <p className={styles.techSpecsSubtitle}>{capabilities.techSpecs.subtitle}</p>
                    <div className={styles.techSpecsTags}>
                        {capabilities.techSpecs.tags.map((tag, idx) => (
                            <span key={idx} className={styles.techSpecTag}>{tag}</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools & Instrumentation Gallery */}
            <section className={styles.section} style={{ paddingTop: 0 }}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>{gallery.badge}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{gallery.title}</h2>
                    <p className={styles.sectionSubtitle}>{gallery.subtitle}</p>
                    <div className={styles.titleDivider}></div>
                </div>

                <div className={styles.galleryGrid}>
                    {gallery.items.map((item, idx) => (
                        <article key={idx} className={styles.galleryCard}>
                            {galleryTextOnly ? (
                                <div className={styles.galleryTextHeader}>
                                    <span>{item.category}</span>
                                </div>
                            ) : (
                                <div className={styles.galleryImageWrap}>
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className={styles.galleryImage}
                                        style={item.imageStyle}
                                        loading="lazy"
                                    />
                                    <span className={styles.galleryCategoryTag}>{item.category}</span>
                                </div>
                            )}
                            <div className={styles.galleryBody}>
                                <h3 className={styles.galleryTitle}>{item.title}</h3>
                                <p className={styles.galleryDescription}>{item.description}</p>
                                <div className={styles.galleryBadges}>
                                    {item.badges.map((badge, i) => (
                                        <span key={i} className={styles.galleryBadge}>{badge}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* FAQ & Final CTA */}
            <section className={styles.section} style={{ paddingTop: 0 }}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>{faq.badge}</span>
                    </div>
                    <h2 className={styles.sectionTitle}>{faq.title}</h2>
                    <p className={styles.sectionSubtitle}>{faq.subtitle}</p>
                    <div className={styles.titleDivider}></div>
                </div>

                <div className={styles.faqGrid}>
                    {faq.items.map((item, idx) => (
                        <div key={idx} className={styles.faqCard}>
                            <h3 className={styles.faqQuestion}>{item.question}</h3>
                            <p className={styles.faqAnswer}>{item.answer}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaBanner}>
                    <div className={styles.ctaContent}>
                        <h2 className={styles.ctaTitle}>{cta.title}</h2>
                        <p className={styles.ctaSubtitle}>{cta.subtitle}</p>
                        <Link href={cta.href} className={styles.ctaActionBtn}>{cta.label}</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
