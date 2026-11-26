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
    const { breadcrumb, hero, overview, capabilities, requirements, gallery, faq, cta } = content;
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

                    {hero.trustBadges.length > 0 && (
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
                    )}
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

                {capabilities.groups ? (
                    <ol className={styles.groupList}>
                        {capabilities.groups.map((group, idx) => (
                            <li key={group.title} className={styles.group}>
                                <span className={styles.groupNumber} aria-hidden="true">{String(idx + 1).padStart(2, '0')}</span>
                                <div>
                                    <h3 className={styles.groupTitle}>{group.title}</h3>
                                    <p className={styles.groupText}>{group.description}</p>
                                    <details className={styles.disclosure}>
                                        <summary className={styles.disclosureSummary}>
                                            {capabilities.detailsLabel ?? capabilities.deliverablesLabel}
                                        </summary>
                                        <div className={styles.disclosureBody}>
                                            {group.pillars.map((i) => capabilities.pillars[i]).map((pillar) => (
                                                <div key={pillar.title} className={styles.groupPillar}>
                                                    <h4 className={styles.groupPillarTitle}>{pillar.title}</h4>
                                                    <p>{pillar.description}</p>
                                                    <p className={styles.groupPillarDeliverables}>
                                                        <strong>{capabilities.deliverablesLabel}</strong> {pillar.deliverables.join(' · ')}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </details>
                                </div>
                            </li>
                        ))}
                    </ol>
                ) : (
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

                )}

                {capabilities.method ? (
                    <div className={styles.methodBox}>
                        <h3 className={styles.techSpecsTitle}>{capabilities.method.title}</h3>
                        <p className={styles.techSpecsSubtitle}>{capabilities.method.subtitle}</p>
                        <ol className={styles.methodFlow}>
                            {capabilities.method.steps.map((step, idx) => (
                                <li key={step.title} className={styles.methodStep}>
                                    <span className={styles.methodNumber} aria-hidden="true">{idx + 1}</span>
                                    <h4 className={styles.methodTitle}>{step.title}</h4>
                                    <p className={styles.methodText}>{step.text}</p>
                                </li>
                            ))}
                        </ol>
                    </div>
                ) : (
                <div className={styles.techSpecsBox}>
                    <h3 className={styles.techSpecsTitle}>{capabilities.techSpecs.title}</h3>
                    <p className={styles.techSpecsSubtitle}>{capabilities.techSpecs.subtitle}</p>
                    <div className={styles.techSpecsTags}>
                        {capabilities.techSpecs.tags.map((tag, idx) => (
                            <span key={idx} className={styles.techSpecTag}>{tag}</span>
                        ))}
                    </div>
                </div>
                )}
            </section>

            {/* Data, dependencies, responsibilities and limitations (optional) */}
            {requirements && (
                <section className={styles.section} style={{ paddingTop: 0 }} aria-labelledby="requisitos-title">
                    <div className={styles.sectionHeader}>
                        <div className={styles.badgeLight}>
                            <span>{requirements.badge}</span>
                        </div>
                        <h2 id="requisitos-title" className={styles.sectionTitle}>{requirements.title}</h2>
                        <p className={styles.sectionSubtitle}>{requirements.subtitle}</p>
                        <div className={styles.titleDivider}></div>
                    </div>

                    <div className={styles.requirementsGrid}>
                        {requirements.columns.map((column) => (
                            <div key={column.title} className={styles.requirementsCard}>
                                <h3 className={styles.requirementsTitle}>{column.title}</h3>
                                {column.summary ? (
                                    <>
                                        <p className={styles.requirementsSummary}>{column.summary}</p>
                                        <details className={styles.disclosure}>
                                            <summary className={styles.disclosureSummary}>{requirements.detailsLabel}</summary>
                                            <ul className={styles.requirementsList}>
                                                {column.items.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        </details>
                                    </>
                                ) : (
                                    <ul className={styles.requirementsList}>
                                        {column.items.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </section>
            )}

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
                                </div>
                            )}
                            <div className={styles.galleryBody}>
                                {!galleryTextOnly && <p className={styles.galleryEyebrow}>{item.category}</p>}
                                <h3 className={styles.galleryTitle}>{item.title}</h3>
                                <p className={styles.galleryDescription}>{item.description}</p>
                                <p className={styles.galleryMeta}>{item.badges.join(' · ')}</p>
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

                {/* Native <details>: keyboard and screen-reader accessible, no JavaScript. */}
                <div className={styles.faqList}>
                    {faq.items.map((item) => (
                        <details key={item.question} className={styles.faqItem}>
                            <summary className={styles.faqQuestion}>
                                <h3>{item.question}</h3>
                            </summary>
                            <p className={styles.faqAnswer}>{item.answer}</p>
                        </details>
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
