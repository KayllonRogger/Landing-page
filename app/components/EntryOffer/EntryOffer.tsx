'use client';

import Link from 'next/link';
import styles from './EntryOffer.module.css';

interface EntryOfferProps {
    locale?: 'pt' | 'en';
}

export default function EntryOffer({ locale = 'pt' }: EntryOfferProps) {
    const isEn = locale === 'en';

    const whatsappMessage = isEn
        ? 'Hello! I would like to request a no-commitment technical evaluation to validate plant protection coordination / FAT/SAT panel support.'
        : 'Olá! Gostaria de uma avaliação técnica sem compromisso para validar a coordenação de proteção / apoio em TAF/TAC de painéis.';

    const whatsappUrl = `https://wa.me/5531995666963?text=${encodeURIComponent(whatsappMessage)}`;
    const contactUrl = isEn ? '/en/contact' : '/contato';

    return (
        <section className={styles.section} id={isEn ? "preliminary-evaluation" : "avaliacao-preliminar"}>
            <div className={styles.container}>
                <div className={styles.bannerCard}>
                    <div className={styles.pattern}></div>
                    <div className={styles.glow}></div>

                    {/* Left content with the specific entry offer */}
                    <div className={styles.contentLeft}>
                        <div className={styles.badge}>
                            <span className={styles.badgeDot}></span>
                            <span>{isEn ? "AGILE CONSULTING & NO-COMMITMENT REVIEW" : "CONSULTORIA ÁGIL & SEM COMPROMISSO"}</span>
                        </div>

                        <h2 className={styles.headline}>
                            {isEn ? (
                                <>
                                    Need to validate your plant <span className={styles.highlightText}>protection coordination</span> or require <span className={styles.highlightText}>FAT/SAT panel support</span>?
                                </>
                            ) : (
                                <>
                                    Precisa validar a <span className={styles.highlightText}>coordenação de proteção</span> da sua planta ou apoiar um <span className={styles.highlightText}>TAF/TAC de painéis</span>?
                                </>
                            )}
                        </h2>

                        <p className={styles.subtext}>
                            {isEn
                                ? "Send your preliminary scope for a no-commitment technical review. Our engineering team analyzes single-line diagrams, IED parameters, and interlocking logic to provide precise guidance and mitigate risks prior to energization."
                                : "Envie seu escopo preliminar para avaliação técnica sem compromisso. Nossa equipe de engenharia analisa unifilares, parâmetros de IEDs e lógicas de intertravamento para fornecer uma orientação inicial precisa e mitigar riscos antes da energização."}
                        </p>

                        <div className={styles.checkList}>
                            <div className={styles.checkItem}>
                                <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{isEn ? "Selectivity & Curves Analysis" : "Análise de Seletividade & Curvas"}</span>
                            </div>
                            <div className={styles.checkItem}>
                                <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{isEn ? "Technical Support for FAT / SAT" : "Apoio Técnico em TAF / TAC"}</span>
                            </div>
                            <div className={styles.checkItem}>
                                <svg className={styles.checkIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{isEn ? "Confidentiality & NDA Guaranteed" : "Sigilo e NDA Garantidos"}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right action box */}
                    <div className={styles.contentRight}>
                        <div className={styles.rightHeader}>
                            <div className={styles.rightIconWrapper}>
                                <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className={styles.rightTitle}>
                                    {isEn ? "Technical Scope Assessment" : "Análise de Escopo Técnico"}
                                </h3>
                                <span className={styles.rightDescription}>
                                    {isEn ? "Zero initial cost for preliminary review" : "Sem custo inicial para avaliação preliminar"}
                                </span>
                            </div>
                        </div>

                        <div className={styles.actionButtons}>
                            <Link href={contactUrl} className={styles.primaryCta}>
                                <span>{isEn ? "SUBMIT PRELIMINARY SCOPE" : "ENVIAR ESCOPO PRELIMINAR"}</span>
                                <svg className={styles.buttonIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>

                            <a
                                href={whatsappUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.whatsappCta}
                            >
                                <svg className={styles.buttonIcon} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.03.79.81-2.95-.19-.3a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3Z" />
                                </svg>
                                <span>{isEn ? "INQUIRE VIA WHATSAPP" : "CONSULTAR VIA WHATSAPP"}</span>
                            </a>
                        </div>

                        <div className={styles.slaBadge}>
                            <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{isEn ? "Technical scope review returned within 24 hours" : "Retorno técnico do escopo em até 24 horas"}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
