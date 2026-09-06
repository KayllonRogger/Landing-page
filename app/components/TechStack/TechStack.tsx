'use client';

import styles from './TechStack.module.css';

interface TechItem {
    id: string;
    brand: string;
    category: { pt: string; en: string };
    models: string[];
    description: { pt: string; en: string };
    highlight?: boolean;
    icon: React.ReactNode;
}

const techItems: TechItem[] = [
    {
        id: 'etap',
        brand: 'ETAP',
        category: { pt: 'Software de Engenharia', en: 'Power System Software' },
        models: ['Short-Circuit', 'Load Flow', 'Coordination', 'Arc Flash'],
        description: {
            pt: 'Simulações de transitórios, parametrização analítica e seletividade rigorosa para plantas industriais e concessionárias.',
            en: 'Transient simulations, analytical parameterization, and rigorous selectivity for industrial plants and utilities.',
        },
        icon: (
            <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        id: 'sel',
        brand: 'SEL',
        category: { pt: 'Proteção & Automação', en: 'Protection & Automation' },
        models: ['SEL-700 Series', 'SEL-400 Series', 'SEL-2000 Gateways'],
        description: {
            pt: 'Schweitzer Engineering Laboratories: relés de alta velocidade, lógicas Mirrored Bits, IEC 61850 e automação em subestações.',
            en: 'Schweitzer Engineering Laboratories: high-speed relays, Mirrored Bits logic, IEC 61850, and substation automation.',
        },
        icon: (
            <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
    },
    {
        id: 'siemens',
        brand: 'Siemens',
        category: { pt: 'Famílias de IEDs', en: 'Numerical IED Families' },
        models: ['SIPROTEC 4', 'SIPROTEC 5', 'DIGSI 4 / 5', 'Reyrolle'],
        description: {
            pt: 'Engenharia completa, parametrização avançada de IEDs numéricos, controle de bay e barramentos de processo/estação.',
            en: 'Comprehensive engineering, advanced numerical IED parameterization, bay control, and station/process bus integration.',
        },
        icon: (
            <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
        ),
    },
    {
        id: 'schneider',
        brand: 'Schneider Electric',
        category: { pt: 'Relés de Proteção', en: 'Protection Relays' },
        models: ['Easergy P3', 'Easergy P5', 'MiCOM Series'],
        description: {
            pt: 'Proteção seletiva para alimentadores, transformadores e motores industriais com suporte total a protocolos IEC 61850 e Modbus.',
            en: 'Selective protection for feeders, transformers, and industrial motors with full support for IEC 61850 and Modbus protocols.',
        },
        icon: (
            <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 004 11m0 0a8 8 0 008 8" />
            </svg>
        ),
    },
    {
        id: 'omicron',
        brand: 'OMICRON',
        category: { pt: 'Caixas de Teste Secundário', en: 'Secondary Injection Test Sets' },
        models: ['CMC 356', 'CMC 500', 'Test Universe', 'RelaySimTest'],
        description: {
            pt: 'Injeção de corrente e tensão secundária hexafásica calibrada, validação automatizada de curvas dinâmicas e testes funcionais.',
            en: 'Calibrated hexaphase secondary current and voltage injection, automated dynamic curve validation, and functional testing.',
        },
        icon: (
            <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        id: 'doble',
        brand: 'Doble Engineering',
        category: { pt: 'Ensaios & Diagnóstico', en: 'Testing & Diagnostics' },
        models: ['Insulation Testing', 'Equipment Diagnostics'],
        description: {
            pt: 'Metodologia e equipamentos para verificação de integridade operacional, comissionamento e testes de bancada em campo.',
            en: 'Methodology and testing tools for operational integrity verification, commissioning, and on-site field tests.',
        },
        icon: (
            <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        ),
    },
    {
        id: 'hitachi',
        brand: 'Hitachi Energy',
        category: { pt: 'IEDs Linha 670 / 650', en: '670 / 650 Series IEDs' },
        models: ['RET (Transformer)', 'RED (Differential)', 'REL (Line)', 'REF (Feeder)'],
        description: {
            pt: 'Configuração em PCM600, proteção de grandes geradores, transformadores elevadores e linhas de transmissão de extra alta tensão.',
            en: 'PCM600 engineering, protection for major generation plants, step-up transformers, and EHV transmission lines.',
        },
        highlight: true,
        icon: (
            <svg className={styles.iconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
];

interface TechStackProps {
    locale?: 'pt' | 'en';
}

export default function TechStack({ locale = 'pt' }: TechStackProps) {
    const isEn = locale === 'en';

    return (
        <section className={styles.techSection} id={isEn ? "technology" : "tecnologias"}>
            <div className={styles.techPattern}></div>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>{isEn ? "MULTI-VENDOR TECHNICAL EXPERTISE" : "DOMÍNIO TÉCNICO MULTIMARCA"}</span>
                    </div>
                    <h2 className={styles.title}>
                        {isEn ? "Technology Stack & Specialized Equipment" : "Pilha Tecnológica & Equipamentos Especializados"}
                    </h2>
                    <p className={styles.description}>
                        {isEn
                            ? "Comprehensive hands-on expertise in leading electrical industry platforms for protection, automation (IEC 61850), and high-voltage secondary testing."
                            : "Profundo domínio prático nas plataformas líderes do setor elétrico para proteção, automação (IEC 61850) e ensaios secundários de alta tensão."}
                    </p>
                </div>

                {/* Grid */}
                <div className={styles.grid}>
                    {techItems.map((item) => (
                        <article
                            key={item.id}
                            className={`${styles.card} ${item.highlight ? styles.cardHighlight : ''}`}
                        >
                            <div className={styles.cardTop}>
                                <span className={styles.categoryTag}>{item.category[locale]}</span>
                                <div className={styles.iconBox}>{item.icon}</div>
                            </div>

                            <h3 className={styles.brandName}>{item.brand}</h3>

                            <div className={styles.modelsList}>
                                {item.models.map((model, idx) => (
                                    <span
                                        key={idx}
                                        className={idx === 0 ? styles.modelBadgeAccent : styles.modelBadge}
                                    >
                                        {model}
                                    </span>
                                ))}
                            </div>

                            <p className={styles.cardDescription}>{item.description[locale]}</p>
                        </article>
                    ))}
                </div>

                {/* Bottom Trust Note */}
                <div className={styles.bottomNote}>
                    <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24" className="text-amber-500">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className={styles.bottomNoteText}>
                        {isEn ? (
                            <>
                                Integration and commissioning capability with <span className={styles.bottomNoteHighlight}>multi-vendor interoperability</span> under IEC 61850 (Ed. 1 & 2), IEEE, and grid code standards.
                            </>
                        ) : (
                            <>
                                Capacidade de integração e comissionamento com <span className={styles.bottomNoteHighlight}>interoperabilidade multimarca</span> sob as normas IEC 61850 (Ed. 1 e Ed. 2), IEEE e ONS.
                            </>
                        )}
                    </span>
                </div>
            </div>
        </section>
    );
}
