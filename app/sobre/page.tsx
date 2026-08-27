'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './page.module.css';

const testimonials = [
    {
        name: 'André Ferreira',
        role: 'Diretor de Operações',
        company: 'Energia Sul LTDA',
        quote:
            'O trabalho da KR Engenharia trouxe estabilidade e clareza técnica sem precedentes para nossa subestação. A equipe entregou cada etapa com precisão cirúrgica e comunicação transparente.',
        initials: 'AF',
    },
    {
        name: 'Marina Costa',
        role: 'Gerente de Automação',
        company: 'Grid Control Engenharia',
        quote:
            'O projeto foi entregue com excelência normativa rigorosa e uma visão sistêmica que superou nossas expectativas. Recomendo para qualquer projeto de alta complexidade e criticidade.',
        initials: 'MC',
    },
    {
        name: 'Fábio Lima',
        role: 'Engenheiro Chefe',
        company: 'Renova Energia',
        quote:
            'A transparência e o rigor técnico foram decisivos para avançarmos com total confiança. A KR apresentou soluções de ponta e arquiteturas modernas para nossos sistemas.',
        initials: 'FL',
    },
];

const valuesList = [
    {
        id: 1,
        title: 'Segurança & Confiabilidade Inegociáveis',
        text: 'No nosso setor, não existe margem para "tentativa e erro". Um projeto de automação ou proteção mal executado pode resultar em blecautes, danos a equipamentos milionários ou riscos à vida.',
        highlight: 'Nosso compromisso primário é garantir que cada lógica de seletividade, relé configurado e descarte de cargas atue com precisão cirúrgica.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Rigor Normativo & IEC 61850',
        text: 'A engenharia de potência é regida por padrões internacionais rigorosos. Não entregamos apenas o que funciona: entregamos o que está perfeitamente alinhado com o estado da arte global.',
        highlight: 'O domínio profundo de normas como IEC 61850, IEEE e ONS é o nosso padrão básico, refletindo engenharia limpa e documentação irrepreensível.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Visão Sistêmica & Integração Inteligente',
        text: 'Não vendemos apenas painéis elétricos ou horas de programação em CLPs; entregamos inteligência operacional integrada para tomada de decisão em tempo real.',
        highlight: 'Desenhamos arquiteturas onde a automação e a proteção convergem para gerar confiabilidade, eficiência energética e estabilidade contínua.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Transparência & Parceria Estratégica',
        text: 'Projetos de SEP e automação envolvem alto investimento e criticidade (Capex/Opex). O cliente precisa confiar plenamente em quem está com a mão no painel.',
        highlight: 'Atuamos como parceiros estratégicos, desde o estudo de viabilidade até o comissionamento final em campo, com clareza e previsibilidade.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        id: 5,
        title: 'Inovação & Atualização Contínua',
        text: 'A tecnologia no setor elétrico evolui a passos largos. Mantemos nossa equipe em constante aprimoramento técnico e certificações internacionais.',
        highlight: 'Buscamos sempre as melhores topologias de rede, transceptores ultra rápidos e softwares analíticos de ponta para otimizar os resultados.',
        icon: (
            <svg className={styles.valueIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function SobrePage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const testimonial = testimonials[activeTestimonial];

    return (
        <main className={styles.page}>
            {/* Top Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>QUEM SOMOS</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        KR Engenharia
                    </h1>
                    <p className={styles.bannerDescription}>
                        Excelência técnica, confiabilidade inegociável e inovação contínua na engenharia elétrica e automação de subestações.
                    </p>
                </div>
            </section>

            {/* Core Values Section */}
            <section className={styles.section}>
                <div className={styles.sectionHeader}>
                    <div className={styles.badgeLight}>
                        <span>NOSSOS PILARES</span>
                    </div>
                    <h2 className={styles.sectionTitle}>Princípios que Guiavam Nossa Atuação</h2>
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
                        <h3 className={styles.panelTitle}>Nossa Missão</h3>
                        <p className={styles.panelText}>
                            Elevar a excelência da engenharia elétrica e automação para projetos críticos, entregando soluções seguras, alinhadas a normas internacionais e focadas em resultados reais.
                        </p>
                    </div>

                    <div className={`${styles.panelCard} ${styles.panelCardAccent}`}>
                        <div className={styles.panelIconWrapper}>
                            <svg className={styles.panelIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <h3 className={styles.panelTitle}>Nosso Método</h3>
                        <p className={styles.panelText}>
                            Priorizamos comunicação clara, análises técnicas profundas e decisões baseadas em dados, garantindo que cada etapa seja transparente e com valor perceptível.
                        </p>
                    </div>

                    <div className={styles.panelCard}>
                        <div className={styles.panelIconWrapperOrange}>
                            <svg className={styles.panelIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                        </div>
                        <h3 className={styles.panelTitleDark}>Entregas com Impacto</h3>
                        <p className={styles.panelTextDark}>
                            Nossa equipe atua desde a viabilidade técnica até o comissionamento final em campo, com foco em mitigação de riscos e alta disponibilidade operacional.
                        </p>
                    </div>
                </div>

                {/* Testimonials */}
                <section className={styles.testimonialsSection}>
                    <div className={styles.testimonialsHeader}>
                        <div className={styles.badgeLight}>
                            <span>DEPOIMENTOS</span>
                        </div>
                        <h2 className={styles.testimonialsTitle}>O Que Nossos Clientes Dizem</h2>
                    </div>

                    <div className={styles.testimonialCard}>
                        <div className={styles.quoteIcon}>“</div>
                        <div className={styles.testimonialTop}>
                            <div className={styles.avatar}>{testimonial.initials}</div>
                            <div>
                                <p className={styles.testimonialName}>{testimonial.name}</p>
                                <p className={styles.testimonialRole}>{testimonial.role} • {testimonial.company}</p>
                            </div>
                        </div>
                        <p className={styles.testimonialText}>
                            “{testimonial.quote}”
                        </p>
                        <div className={styles.testimonialFooter}>
                            <div className={styles.testimonialDots}>
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveTestimonial(idx)}
                                        className={`${styles.testDot} ${idx === activeTestimonial ? styles.testDotActive : ''}`}
                                        aria-label={`Ver depoimento ${idx + 1}`}
                                    />
                                ))}
                            </div>
                            <div className={styles.testimonialControls}>
                                <button
                                    type="button"
                                    className={styles.controlButton}
                                    onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                                    aria-label="Depoimento anterior"
                                >
                                    ❮
                                </button>
                                <button
                                    type="button"
                                    className={styles.controlButton}
                                    onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                                    aria-label="Próximo depoimento"
                                >
                                    ❯
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Box */}
                <section className={styles.ctaBanner}>
                    <div className={styles.ctaPattern}></div>
                    <div className={styles.ctaContent}>
                        <h3 className={styles.ctaTitle}>Pronto para elevar o nível do seu projeto elétrico?</h3>
                        <p className={styles.ctaSubtitle}>
                            Fale com nossa equipe técnica e receba uma avaliação detalhada para seu sistema de energia.
                        </p>
                        <Link href="/contato" className={styles.ctaActionBtn}>
                            FALE COM UM ESPECIALISTA
                        </Link>
                    </div>
                </section>
            </section>
        </main>
    );
}
