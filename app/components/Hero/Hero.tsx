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
                        <span>{isEn ? "HIGH-VOLTAGE & SAS ENGINEERING SOLUTIONS" : "SOLUÇÕES EM ALTA TENSÃO & SAS"}</span>
                    </div>

                    <h1 className={styles.title}>
                        KR ENGENHARIA<br />
                        <span className={styles.titleHighlight}>
                            {isEn ? "ELECTRICAL, AUTOMATION & SAS" : "ELÉTRICA, AUTOMAÇÃO & SAS"}
                        </span>
                    </h1>

                    <h2 className={styles.subtitle}>
                        {isEn ? (
                            <>
                                INTELLIGENT AUTOMATION FOR<br />
                                SUBSTATIONS & POWER SYSTEMS.
                            </>
                        ) : (
                            <>
                                AUTOMAÇÃO INTELIGENTE DE<br />
                                SUBESTAÇÕES E SISTEMAS DE ENERGIA.
                            </>
                        )}
                    </h2>

                    <p className={styles.description}>
                        {isEn
                            ? "Integrated engineering for electrical grid reliability, efficiency, and digitalization."
                            : "Engenharia integrada para a confiabilidade, eficiência e digitalização da rede elétrica."}
                    </p>

                    <div className={styles.buttons}>
                        <Link href={isEn ? "/en/services" : "/servicos"} className={styles.btnPrimary}>
                            {isEn ? "OUR SERVICES" : "NOSSOS SERVIÇOS"}
                        </Link>
                        <Link href={isEn ? "/en/contact" : "/contato"} className={styles.btnSecondary}>
                            {isEn ? "TALK TO A SPECIALIST" : "FALE COM UM ESPECIALISTA"}
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
