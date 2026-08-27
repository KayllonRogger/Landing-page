'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerPattern}></div>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Column 1 - Company Info */}
                    <div className={styles.column}>
                        <div className={styles.logoRow}>
                            <img src="/logo.svg" alt="KR Engenharia" className={styles.logoImg} />
                            <h3 className={styles.columnTitle}>KR ENGENHARIA</h3>
                        </div>
                        <p className={styles.columnDescription}>
                            Engenharia integrada para a confiabilidade, eficiência e digitalização da rede elétrica e sistemas de automação de subestações.
                        </p>
                        <div className={styles.socialLinks}>
                            {/* LinkedIn */}
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="LinkedIn"
                            >
                                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45c-.96 0-1.74.78-1.74 1.74s.78 1.74 1.74 1.74 1.74-.78 1.74-1.74-.78-1.74-1.74-1.74Z" />
                                </svg>
                            </a>
                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/5531995666963"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                                aria-label="WhatsApp"
                            >
                                <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.03.79.81-2.95-.19-.3a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3Z" />
                                </svg>
                            </a>
                            {/* Email */}
                            <a
                                href="mailto:contato@krconsultoria.com"
                                className={styles.socialLink}
                                aria-label="Enviar Email"
                            >
                                <svg className={styles.socialIcon} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className={styles.column}>
                        <h4 className={styles.columnHeading}>LINKS RÁPIDOS</h4>
                        <ul className={styles.linksList}>
                            <li className={styles.linksItem}>
                                <Link href="/" className={styles.linksItemLink}>
                                    <span className={styles.linkArrow}>→</span> Início
                                </Link>
                            </li>
                            <li className={styles.linksItem}>
                                <Link href="/sobre" className={styles.linksItemLink}>
                                    <span className={styles.linkArrow}>→</span> Sobre Nós
                                </Link>
                            </li>
                            <li className={styles.linksItem}>
                                <Link href="/servicos" className={styles.linksItemLink}>
                                    <span className={styles.linkArrow}>→</span> Serviços
                                </Link>
                            </li>
                            <li className={styles.linksItem}>
                                <Link href="/projetos" className={styles.linksItemLink}>
                                    <span className={styles.linkArrow}>→</span> Projetos
                                </Link>
                            </li>
                            <li className={styles.linksItem}>
                                <Link href="/blog" className={styles.linksItemLink}>
                                    <span className={styles.linkArrow}>→</span> Blog
                                </Link>
                            </li>
                            <li className={styles.linksItem}>
                                <Link href="/contato" className={styles.linksItemLink}>
                                    <span className={styles.linkArrow}>→</span> Contato & Orçamento
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Contact */}
                    <div className={styles.column}>
                        <h4 className={styles.columnHeading}>CONTATO & LOCALIZAÇÃO</h4>
                        <div className={styles.contactItem}>
                            <div className={styles.contactItemGroup}>
                                <p className={styles.contactLabel}>
                                    <svg className={styles.contactIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Endereço
                                </p>
                                <p className={styles.contactValue}>
                                    Rua Rio Grande do Norte, 1436, sala 813, Funcionários<br />
                                    Belo Horizonte, Minas Gerais
                                </p>
                            </div>
                            <div className={styles.contactItemGroup}>
                                <p className={styles.contactLabel}>
                                    <svg className={styles.contactIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    Telefone / WhatsApp
                                </p>
                                <a href="tel:+5531995666963" className={styles.contactValueLink}>
                                    +55 (31) 99566-6963
                                </a>
                            </div>
                            <div className={styles.contactItemGroup}>
                                <p className={styles.contactLabel}>
                                    <svg className={styles.contactIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Email
                                </p>
                                <a href="mailto:contato@krconsultoria.com" className={styles.contactValueLink}>
                                    contato@krconsultoria.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className={styles.divider}>
                    <div className={styles.copyright}>
                        <p className={styles.copyrightText}>© 2026 KR Consultoria e Soluções em Engenharia LTDA. Todos os direitos reservados.</p>
                        <p className={styles.copyrightLinks}>Engenharia Elétrica • Sistemas de Automação de Subestações (SAS) • SCADA</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
