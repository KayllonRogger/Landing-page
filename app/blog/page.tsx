'use client';

import Link from 'next/link';
import styles from './page.module.css';

const articles = [
    {
        id: 1,
        title: 'A Revolução das Subestações Digitais e a Norma IEC 61850',
        excerpt: 'Como a substituição de quilômetros de cabos de cobre por fibra óptica e barramento de processo eleva a confiabilidade e reduz custos de O&M.',
        category: 'Subestação Digital',
        readTime: '6 min de leitura',
        date: '15 de Agosto, 2026',
        icon: (
            <svg className={styles.articleIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Desafios na Integração de Usinas Fotovoltaicas e Eólicas ao SIN',
        excerpt: 'Análise de estabilidade de tensão, impacto no fator de potência e requisitos regulatórios do ONS para conexão segura de renováveis.',
        category: 'Energias Renováveis',
        readTime: '8 min de leitura',
        date: '02 de Agosto, 2026',
        icon: (
            <svg className={styles.articleIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Coordenação e Seletividade em Sistemas Elétricos Industriais',
        excerpt: 'Melhores práticas na parametrização de relés numéricos para evitar desligamentos desnecessários em plantas industriais contínuas.',
        category: 'Proteção & Controle',
        readTime: '5 min de leitura',
        date: '20 de Julho, 2026',
        icon: (
            <svg className={styles.articleIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
];

export default function BlogPage() {
    return (
        <main className={styles.page}>
            {/* Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>CONHECIMENTO TÉCNICO</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        Artigos & Novidades em Engenharia Elétrica
                    </h1>
                    <p className={styles.bannerDescription}>
                        Insights práticos, tendências normativas e análises aprofundadas sobre automação de subestações, proteção e sistemas de energia.
                    </p>
                </div>
            </section>

            {/* Articles Grid */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>PUBLICAÇÕES RECENTES</span>
                    </div>
                    <h2 className={styles.sectionTitle}>Artigos em Destaque</h2>
                    <div className={styles.titleDivider}></div>
                </div>

                <div className={styles.grid}>
                    {articles.map((art) => (
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
                                        <span>Ler Artigo</span>
                                        <svg className={styles.arrowIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Newsletter / Contact Banner */}
                <section className={styles.newsletterBanner}>
                    <div className={styles.newsletterPattern}></div>
                    <div className={styles.newsletterContent}>
                        <h3 className={styles.newsletterTitle}>Mantenha-se Atualizado com Nossos Artigos</h3>
                        <p className={styles.newsletterSubtitle}>
                            Acompanhe análises e conteúdos técnicos exclusivos sobre o setor elétrico e automação de potência.
                        </p>
                        <Link href="/contato" className={styles.ctaActionBtn}>
                            ENTRE EM CONTATO COM A NOSSA EQUIPE
                        </Link>
                    </div>
                </section>
            </section>
        </main>
    );
}
