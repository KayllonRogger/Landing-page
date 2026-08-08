'use client';

import Image from 'next/image';

import styles from './About.module.css';
import foto from "../../../public/Image/20260130_130042.jpg";

export default function About() {
    return (
        <section id="sobre" className={styles.about}>
            <div className={styles.container}>
                {/* Left - Image Placeholder */}
                <div className={styles.imagePlaceholder}>
                    <div className={styles.imagePlaceholderCard}>
                        <Image src={foto} alt="Foto em obra" className={styles.imageSvg} />
                    </div>
                </div>

                {/* Right - Content */}
                <div className={styles.content}>
                    <h2 className={styles.title}>KR ENGENHARIA E CONSULTORIA</h2>

                    <p className={styles.description}>
                        A Kayllon Rogger Engenharia e Consultoria combina expertise técnica para transformar desafios em oportunidades sustentáveis.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <svg className={styles.featureIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>EXPERIÊNCIA TÉCNICA</h3>
                                <p className={styles.featureDescription}>
                                    Décadas de conhecimento em engenharia elétrica e sistemas de automação.
                                </p>
                            </div>
                        </div>

                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <svg className={styles.featureIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>INOVAÇÃO COMPROVADA</h3>
                                <p className={styles.featureDescription}>
                                    Soluções inovadoras que impulsionam a eficiência operacional.
                                </p>
                            </div>
                        </div>

                        <div className={styles.featureItem}>
                            <div className={styles.featureIcon}>
                                <svg className={styles.featureIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className={styles.featureContent}>
                                <h3 className={styles.featureTitle}>ABORDAGEM PERSONALIZADA</h3>
                                <p className={styles.featureDescription}>
                                    Cada projeto é tratado com soluções específicas e customizadas.
                                </p>
                            </div>
                        </div>
                    </div>

                    <button className={styles.ctaButton}>
                        CONHEÇA MAIS SOBRE NÓS
                    </button>
                </div>
            </div>
        </section>
    );
}
