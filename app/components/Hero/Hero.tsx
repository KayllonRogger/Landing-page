'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="inicio" className={styles.hero}>
            {/* Background Substation Image */}
            <Image
                src={"/Image/20211228_131619.jpg"}
                alt="Subestação de energia elétrica e sistemas de automação"
                fill
                priority
                quality={90}
                placeholder="blur"
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
                        <span>SOLUÇÕES EM ALTA TENSÃO & SAS</span>
                    </div>

                    <h1 className={styles.title}>
                        KR ENGENHARIA<br />
                        <span className={styles.titleHighlight}>ELÉTRICA, AUTOMAÇÃO & SAS</span>
                    </h1>

                    <h2 className={styles.subtitle}>
                        AUTOMAÇÃO INTELIGENTE DE<br />
                        SUBESTAÇÕES E SISTEMAS DE ENERGIA.
                    </h2>

                    <p className={styles.description}>
                        Engenharia integrada para a confiabilidade, eficiência e digitalização da rede elétrica.
                    </p>

                    <div className={styles.buttons}>
                        <Link href="/servicos" className={styles.btnPrimary}>
                            NOSSOS SERVIÇOS
                        </Link>
                        <Link href="/contato" className={styles.btnSecondary}>
                            FALE COM UM ESPECIALISTA
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <a href="#servicos" className={styles.scrollIndicator} aria-label="Rolar para a seção de serviços">
                <svg className={styles.scrollIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </a>
        </section>
    );
}
