'use client';

import Link from 'next/link';
import styles from './page.module.css';

const valuesList = [
    {
        id: 1,
        title: 'Segurança antes da energização',
        text: 'Proteção mal ajustada ou mal testada pode causar desligamentos indevidos, danos a equipamentos e riscos às pessoas.',
        highlight: 'Ajustes aprovados, procedimentos de teste e critérios de aceite são acordados antes da execução. A entrega documental não substitui a autorização operacional de energização.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Escopo claro desde o início',
        text: 'Cada demanda começa pelo tipo de instalação, pelos equipamentos envolvidos, pelas versões e pela janela prevista.',
        highlight: 'A proposta define quem elabora, revisa, aprova e executa cada etapa, além de fornecimentos, exclusões e critérios de aceite.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Experiência apresentada com precisão',
        text: 'A trajetória profissional é descrita pelo que foi feito, com quais equipamentos e em qual papel.',
        highlight: 'Casos de campo não são apresentados como contratos diretos da KR, e as marcas citadas não indicam parceria ou certificação de fabricante.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Estudos integrados à verificação',
        text: 'Estudos elétricos fundamentam decisões de proteção e operação. Quando integrados à parametrização e aos testes, conectam a análise do sistema à verificação em campo.',
        highlight: 'A KR é a interface comercial e coordena a entrega dos estudos, inclusive quando há atuação de parceiros. Quem elabora, revisa, aprova e executa cada etapa é definido na proposta.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
];

const credentials = [
    'Razão social: KR Consultoria e Soluções em Engenharia LTDA',
    'CNPJ: 68.797.626/0001-04',
    'Registro no CREA: nº 141854962-2',
    'Escritório em Belo Horizonte – MG',
];

export default function SobrePage() {
    return (
        <div className={styles.page}>
            {/* Top Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>SOBRE A KR</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        KR Engenharia
                    </h1>
                    <p className={styles.bannerDescription}>
                        KR Engenharia é o nome comercial da KR Consultoria e Soluções em Engenharia LTDA. Engenharia de proteção e automação com experiência multimarcas: estudos elétricos, parametrização, testes e comissionamento.
                    </p>
                </div>
            </section>

            {/* Core Values Section */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>COMO TRABALHAMOS</span>
                    </div>
                    <h2 className={styles.sectionTitle}>Princípios que orientam a nossa atuação</h2>
                    <div className={styles.titleDivider}></div>
                </div>

                <div className={styles.valuesGrid}>
                    {valuesList.map((val) => (
                        <article key={val.id} className={styles.valueCard}>
                            <div className={styles.valueHeader}>
                                <div className={styles.valueIconBox}>{val.icon}</div>
                                <h3 className={styles.valueTitle}>{val.title}</h3>
                            </div>
                            <p className={styles.valueText}>{val.text}</p>
                            <div className={styles.valueHighlightBox}>
                                <span className={styles.highlightTag}>Na prática:</span>
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
                        <h3 className={styles.panelTitle}>Nossa missão</h3>
                        <p className={styles.panelText}>
                            Apoiar empresas de engenharia, integradoras e equipes de manutenção em estudos, parametrização, testes e comissionamento de sistemas de proteção, com escopo e responsabilidades bem definidos.
                        </p>
                    </div>

                    <div className={styles.panelCard}>
                        <div className={styles.panelIconWrapperOrange}>
                            <svg className={styles.panelIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className={styles.panelTitleDark}>Nosso método</h3>
                        <p className={styles.panelTextDark}>
                            Conversa técnica para entender a necessidade, levantamento dos dados de entrada e proposta com escopo, premissas, exclusões e marcos verificáveis.
                        </p>
                    </div>

                    <div className={`${styles.panelCard} ${styles.panelCardAccent}`}>
                        <div className={styles.panelIconWrapper}>
                            <svg className={styles.panelIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className={styles.panelTitle}>Onde atuamos</h3>
                        <p className={styles.panelText}>
                            Estudos elétricos, reforço em testes de painéis e comissionamento, retrofit de proteção e automação, preparação de paradas e implementação de ajustes aprovados.
                        </p>
                    </div>
                </div>

                {/* Technical Responsibility & Governance */}
                <section className={styles.leadershipSection}>
                    <div>
                        <div className={styles.leadershipBadge}>REGISTRO E RESPONSABILIDADE TÉCNICA</div>
                        <h2 className={styles.leadershipTitle}>Dados cadastrais</h2>
                        <p className={styles.leadershipText}>
                            A KR Consultoria e Soluções em Engenharia LTDA possui registro no CREA. Os responsáveis técnicos e a documentação exigida para cada escopo e local de execução são definidos na proposta, antes da mobilização.
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
                        <div className={styles.leadRole}>ENGENHARIA E ATENDIMENTO TÉCNICO</div>
                        <h3 className={styles.leadName}>Eng. Kayllon Rogger Nunes</h3>
                        <p className={styles.leadBio}>
                            Experiência em parametrização, testes e comissionamento em subestações de 230 kV a 500 kV, indústrias, mineração e aplicações offshore, no Brasil, nos Estados Unidos e na Polônia. Atuação com plataformas ABB, Schneider Electric, SEL e Siemens e em comissionamento envolvendo IEDs GE. Inglês fluente.
                        </p>
                    </div>
                </section>

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
