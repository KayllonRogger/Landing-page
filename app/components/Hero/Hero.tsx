'use client';

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
                            <svg className="w-24 h-24 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
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
