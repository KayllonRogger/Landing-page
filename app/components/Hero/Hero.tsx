'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
    locale?: 'pt' | 'en';
}

export default function Hero({ locale = 'pt' }: HeroProps) {
    const isEn = locale === 'en';

    return (
        <section id="inicio" className={styles.hero}>
            {/* Background Substation Image */}
            <Image
                src="/Image/20211228_131619.jpg"
                alt={isEn ? "Electrical substation and power automation systems" : "Subestação de energia elétrica e sistemas de automação"}
                fill
                priority
                quality={90}
                sizes="100vw"
                className={styles.bgImage}
            />

            {/* Gradient & Pattern Overlays */}
            <div className={styles.overlay}></div>
            <div className={styles.heroPattern}></div>

            <div className={styles.content}>
                {/* Text Content */}
                <div className={styles.textContent}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>{isEn ? "PROTECTION • AUTOMATION • IEC 61850 • SCADA • COMMISSIONING" : "PROTEÇÃO • AUTOMAÇÃO • IEC 61850 • SCADA • COMISSIONAMENTO"}</span>
                    </div>

                    <h1 className={styles.title}>
                        {isEn ? (
                            <>
                                ELECTRICAL ENGINEERING FOR<br />
                                <span className={styles.titleHighlight}>CRITICAL POWER SYSTEMS</span>
                            </>
                        ) : (
                            <>
                                ENGENHARIA ELÉTRICA PARA<br />
                                <span className={styles.titleHighlight}>SISTEMAS DE POTÊNCIA CRÍTICOS</span>
                            </>
                        )}
                    </h1>

                    <h2 className={styles.subtitle}>
                        {isEn
                            ? "We design, parameterize, test, and commission protection, control, and automation systems for substations, industrial plants, and power generation facilities."
                            : "Projetamos, parametrizamos, testamos e colocamos em operação sistemas de proteção, controle e automação de subestações, plantas industriais e sistemas de geração."}
                    </h2>

                    <p className={styles.description}>
                        {isEn
                            ? "Operational risk mitigation, uptime assurance, and 100% compliance with Grid Codes (ONS) and international standards (IEC 61850, IEEE, ABNT)."
                            : "Mitigação de riscos operacionais, garantia de continuidade operacional e 100% de conformidade com os Procedimentos de Rede do ONS e normas internacionais (IEC 61850, IEEE, ABNT)."}
                    </p>

                    <div className={styles.buttons}>
                        <Link href={isEn ? "/en/contact" : "/contato"} className={styles.btnPrimary}>
                            {isEn ? "REQUEST TECHNICAL ANALYSIS" : "SOLICITAR ANÁLISE TÉCNICA"}
                        </Link>
                        <Link href={isEn ? "/en/services" : "/servicos"} className={styles.btnSecondary}>
                            {isEn ? "VIEW OUR SERVICES" : "CONHECER SERVIÇOS"}
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a
                href={isEn ? "#services" : "#servicos"}
                className={styles.scrollIndicator}
                aria-label={isEn ? "Scroll to services section" : "Rolar para a seção de serviços"}
            >
                <svg className={styles.scrollIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </a>
        </section>
    );
}
