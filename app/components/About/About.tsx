'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';

interface AboutProps {
    locale?: 'pt' | 'en';
}

export default function About({ locale = 'pt' }: AboutProps) {
    const isEn = locale === 'en';
    const aboutUrl = isEn ? '/en/about' : '/sobre';

    return (
        <section id={isEn ? "about" : "sobre"} className={styles.about}>
            <div className={styles.container}>
                {/* Left - Image with Modern Tech Frame */}
                <div className={styles.imageWrapper}>
                    <div className={styles.imageCard}>
                        <Image
                            src="/Image/20260130_130042.jpg"
                            alt={isEn ? "Field engineer at high-voltage substation" : "Engenheiro em campo na subestação"}
                            fill
                            sizes="(max-width: 1024px) 100vw, 480px"
                            className={styles.imagePhoto}
                        />
                        <div className={styles.imageOverlay}></div>
                        <div className={styles.floatingBadge}>
                            <div className={styles.badgePulse}></div>
                            <div>
                                <p className={styles.badgeTitle}>{isEn ? "FIELD EXPERTISE" : "ATUAÇÃO EM CAMPO"}</p>
                                <p className={styles.badgeSub}>{isEn ? "Substation & High-Voltage Specialists" : "Especialistas em SE & Alta Tensão"}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right - Content */}
                <div className={styles.content}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>{isEn ? "ABOUT KR ENGENHARIA" : "SOBRE A KR ENGENHARIA"}</span>
                    </div>

                    <h2 className={styles.title}>
                        {isEn ? "EXCELLENCE & INNOVATION IN POWER SYSTEMS" : "EXCELÊNCIA & INOVAÇÃO EM ENERGIA"}
                    </h2>

                    <p className={styles.description}>
                        {isEn
                            ? "KR Engenharia combines solid technical foundations and hands-on expertise to transform complex power system challenges into safe, sustainable, and digital operations."
                            : "A KR Engenharia combina sólida formação técnica e experiência prática para transformar desafios complexos de sistemas de potência em operações seguras, sustentáveis e digitais."}
                    </p>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <svg className={styles.featureIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>
                                    {isEn ? "APPLIED TECHNICAL EXPERTISE" : "EXPERIÊNCIA TÉCNICA APLICADA"}
                                </h3>
                                <p className={styles.featureDescription}>
                                    {isEn
                                        ? "Deep proficiency in electrical engineering, protection studies, and integrated substation automation."
                                        : "Domínio em engenharia elétrica, estudos de proteção e sistemas integrados de automação de subestações."}
                                </p>
                            </div>
                        </div>

                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <svg className={styles.featureIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>
                                    {isEn ? "REGULATORY RIGOR & IEC 61850" : "RIGOR NORMATIVO & IEC 61850"}
                                </h3>
                                <p className={styles.featureDescription}>
                                    {isEn
                                        ? "Engineering fully compliant with state-of-the-art standards and rigorous international electrical codes."
                                        : "Projetos 100% alinhados com o estado da arte e as mais exigentes normas internacionais do setor elétrico."}
                                </p>
                            </div>
                        </div>

                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <svg className={styles.featureIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>
                                    {isEn ? "STRATEGIC PARTNERSHIP" : "PARCERIA ESTRATÉGICA"}
                                </h3>
                                <p className={styles.featureDescription}>
                                    {isEn
                                        ? "Working side-by-side with our clients from project conception to on-site testing and energization."
                                        : "Atuação lado a lado com o cliente, da concepção do projeto ao comissionamento e testes de campo."}
                                </p>
                            </div>
                        </div>
                    </div>

                    <Link href={aboutUrl} className={styles.ctaButton}>
                        <span>{isEn ? "LEARN MORE ABOUT US" : "CONHEÇA MAIS SOBRE NÓS"}</span>
                        <svg className={styles.btnArrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
