'use client';

import Link from 'next/link';
import styles from './page.module.css';

const detailedServices = [
    {
        id: 1,
        title: 'Estudos Elétricos',
        href: '/estudos-de-protecao-e-seletividade/',
        description: 'Proteção, coordenação e seletividade, curto-circuito, fluxo de potência e transitórios, com modalidade e escopo definidos conforme a necessidade técnica. A KR é a interface comercial e coordena a entrega, inclusive quando há atuação de parceiros.',
        deliverables: [
            'Critérios de proteção, coordenação e seletividade',
            'Curto-circuito e fluxo de potência',
            'Memória de cálculo, curvas e tabela de ajustes',
            'Transitórios conforme a necessidade técnica',
        ],
        tags: ['Seletividade', 'Curto-Circuito', 'Fluxo de Potência'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Parametrização & Testes de Proteção',
        href: '/comissionamento-e-ensaios-em-campo/',
        description: 'Implementação de ajustes aprovados e testes funcionais de sistemas de proteção em plataformas ABB, Schneider Electric, SEL e Siemens, incluindo testes de painéis em TAF.',
        deliverables: [
            'Parametrização conforme ajustes aprovados pelo cliente',
            'Testes de painéis e TAF com procedimentos acordados',
            'Testes de seletividade lógica e de lógicas contratadas',
            'Registros de teste e pendências com responsáveis',
        ],
        tags: ['IEDs Multimarcas', 'TAF', 'Seletividade Lógica'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Comissionamento & Reforço em Campo',
        href: '/comissionamento-e-ensaios-em-campo/',
        description: 'Reforço para equipes de comissionamento, por escopo ou período, no Brasil ou no exterior, com experiência em projetos envolvendo IEDs ABB, GE, Schneider Electric, SEL e Siemens.',
        deliverables: [
            'Testes funcionais e verificação em campo',
            'Acompanhamento de testes de aceitação em campo (TAC)',
            'Atualização de documentação as-built quando contratada',
            'Atuação em inglês em projetos internacionais',
        ],
        tags: ['Comissionamento', 'TAC', 'Brasil e Exterior'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Retrofit de Proteção & Automação',
        href: '/automacao-sistemas-eletricos/',
        description: 'Apoio técnico em retrofits e preparação de paradas: integração de IEDs, comunicação IEC 61850 e lógicas de automação aprovadas.',
        deliverables: [
            'Integração de IEDs e comunicação IEC 61850 (GOOSE e MMS)',
            'Integração de pontos ao supervisório',
            'Implementação de lógicas aprovadas, como transferência automática',
            'Planejamento das interfaces e da janela de intervenção',
        ],
        tags: ['Retrofit', 'IEC 61850', 'Paradas'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
];

export default function ServicosPage() {
    return (
        <div className={styles.page}>
            {/* Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>SERVIÇOS</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        Estudos, proteção, automação e comissionamento
                    </h1>
                    <p className={styles.bannerDescription}>
                        Contrate uma etapa específica ou um pacote integrado. A KR é a interface comercial e coordena a entrega; quem elabora, revisa, aprova e executa cada etapa é definido na proposta.
                    </p>
                </div>
            </section>

            {/* Services Catalog */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>O QUE A KR FAZ</span>
                    </div>
                    <h2 className={styles.sectionTitle}>Etapas que você pode contratar</h2>
                    <div className={styles.titleDivider}></div>
                </div>

                <div className={styles.catalogGrid}>
                    {detailedServices.map((service) => (
                        <article key={service.id} className={styles.serviceCard}>
                            <div className={styles.cardTop}>
                                <div className={styles.iconBox}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                            </div>
                            <p className={styles.cardDescription}>{service.description}</p>

                            <h4 className={styles.deliverablesHeading}>Entregáveis típicos:</h4>
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
                                <span>Ver detalhes do serviço</span>
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
                        <h3 className={styles.ctaTitle}>Vamos conversar sobre a sua demanda?</h3>
                        <p className={styles.ctaSubtitle}>
                            Descreva o tipo de instalação, os equipamentos envolvidos e a janela prevista.
                        </p>
                        <Link href="/contato" className={styles.ctaActionBtn}>
                            Solicitar conversa técnica
                        </Link>
                    </div>
                </section>
            </section>
        </div>
    );
}
