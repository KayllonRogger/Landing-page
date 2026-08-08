'use client';

import Image from 'next/image';

import subestacao from '../../../public/Image/20211228_131619.jpg';

import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="inicio" className={styles.hero}>
            <div className={styles.heroPattern}></div>

            <div className={styles.content}>
                {/* Left Content */}
                <div className={styles.textContent}>
                    <h1 className={styles.title}>
                        KAYLLON ROGGER<br />
                        <span className={styles.titleHighlight}>ENGENHARIA ELÉTRICA & SAS</span>
                    </h1>

                    <h2 className={styles.subtitle}>
                        AUTOMAÇÃO INTELIGENTE DE<br />
                        SUBESTAÇÕES E SISTEMAS DE ENERGIA.
                    </h2>

                    <p className={styles.description}>
                        Engenharia integrada para a confiabilidade,<br />
                        eficiência e digitalização da rede elétrica.
                    </p>

                    <div className={styles.buttons}>
                        <button className={styles.btnPrimary}>
                            NOSSOS SERVIÇOS
                        </button>
                        <button className={styles.btnSecondary}>
                            FALE COM UM ESPECIALISTA
                        </button>
                    </div>
                </div>

                {/* Right Content - Image Placeholder */}
                <div className={styles.imagePlaceholder}>
                    <div className={styles.imagePlaceholderCard}>
                        <div className={styles.imagePlaceholderContent}>
                            <Image src={subestacao} alt="Foto de uma subestacao" className={styles.imagePhoto} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className={styles.scrollIndicator}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
}
