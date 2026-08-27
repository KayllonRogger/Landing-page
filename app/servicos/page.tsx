'use client';

import Link from 'next/link';
import styles from './page.module.css';

const detailedServices = [
    {
        id: 1,
        title: 'Estudos de Proteção & Controle',
        description: 'Dimensionamento e parametrização detalhada de relés numéricos para assegurar a rápida eliminação de faltas com máxima seletividade.',
        deliverables: [
            'Estudos de curto-circuito e fluxo de carga',
            'Coordenação e seletividade de proteção',
            'Parametrização e arquivos de ajuste (CID/ICD/RVD)',
            'Validação de saturação de TCs e TPs',
        ],
        tags: ['Proteção Digital', 'Seletividade', 'Análise de Transitórios'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Engenharia de Redes & Sistemas SAS',
        description: 'Projetos completos de arquitetura de automação de subestações baseados em normas internacionais para operação crítica.',
        deliverables: [
            'Projetos de arquitetura IEC 61850 (Ed. 1 e Ed. 2)',
            'Configuração de mensagens GOOSE, MMS e Sampled Values',
            'Topologias de rede em anel com redundância PRP/HSR e RSTP',
            'Engenharia de integração com gateways e IEDs multimarca',
        ],
        tags: ['IEC 61850', 'Redes Industriais', 'Subestação Digital'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Sistemas SCADA & Telemetria Industrial',
        description: 'Desenvolvimento de sistemas supervisórios avançados para operação local e remota com alta disponibilidade e interface moderna.',
        deliverables: [
            'Desenvolvimento de telas HMI e supervisórios locais e remotos',
            'Integração com centros de operação (COS/COI/ONS) via DNP3 / IEC 60870-5-104',
            'Gestão de alarmes, oscilografia e historiadores de eventos',
            'Lógicas de intertravamento e recomposição automática de carga',
        ],
        tags: ['SCADA', 'DNP3.0 / 104', 'Telecontrole ONS'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Comissionamento & Ensaios em Campo',
        description: 'Testes funcionais, injeção de corrente e tensão secundária e validação ponto a ponto para energização segura e conforme.',
        deliverables: [
            'Testes de bancada com caixas de injeção secundária',
            'Validação ponto a ponto até o centro de operação (TAF / TAC)',
            'Ensaios de atuação de disjuntores e intertravamentos de segurança',
            'Acompanhamento e suporte técnico na energização inicial',
        ],
        tags: ['Testes TAF / TAC', 'Comissionamento', 'Injeção Secundária'],
        icon: (
            <svg className={styles.cardIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
];

export default function ServicosPage() {
    return (
        <main className={styles.page}>
            {/* Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>CATÁLOGO DE SERVIÇOS</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        Engenharia Especializada para Subestações & Sistemas de Energia
                    </h1>
                    <p className={styles.bannerDescription}>
                        Atuamos com rigor normativo, automação inteligente e comissionamento de alta precisão para garantir confiabilidade e segurança energética.
                    </p>
                </div>
            </section>

            {/* Services Catalog */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>NOSSAS CAPACIDADES</span>
                    </div>
                    <h2 className={styles.sectionTitle}>Soluções Técnicas de Ponta a Ponta</h2>
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

                            <h4 className={styles.deliverablesHeading}>Principais Entregáveis:</h4>
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
                        <h3 className={styles.ctaTitle}>Precisa de uma proposta técnica customizada?</h3>
                        <p className={styles.ctaSubtitle}>
                            Discuta seu escopo com nossos engenheiros e obtenha uma solução precisa para seu empreendimento.
                        </p>
                        <Link href="/contato" className={styles.ctaActionBtn}>
                            SOLICITAR DIAGNÓSTICO TÉCNICO
                        </Link>
                    </div>
                </section>
            </section>
        </main>
    );
}
