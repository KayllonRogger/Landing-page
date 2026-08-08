'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {/* Column 1 - Company Info */}
                    <div className={styles.column}>
                        <h3 className={styles.columnTitle}>KAYLLON ROGGER</h3>
                        <p className={styles.columnDescription}>
                            Engenharia integrada para a confiabilidade, eficiência e digitalização da rede elétrica.
                        </p>
                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink}>f</a>
                            <a href="#" className={styles.socialLink}>in</a>
                            <a href="#" className={styles.socialLink}>@</a>
                        </div>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>LINKS RÁPIDOS</h4>
                        <ul className={styles.linksList}>
                            <li className={styles.linksItem}>
                                <Link href="#" className={styles.linksItemLink}>
                                    → Início
                                </Link>
                            </li>
                            <li className={styles.linksItem}>
                                <Link href="#" className={styles.linksItemLink}>
                                    → Sobre Nós
                                </Link>
                            </li>
                            <li className={styles.linksItem}>
                                <Link href="#" className={styles.linksItemLink}>
                                    → Serviços
                                </Link>
                            </li>
                            <li className={styles.linksItem}>
                                <Link href="#" className={styles.linksItemLink}>
                                    → Projetos
                                </Link>
                            </li>
                            <li className={styles.linksItem}>
                                <Link href="#" className={styles.linksItemLink}>
                                    → Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 - Contact */}
                    <div className={styles.column}>
                        <h4 className={styles.columnTitle}>CONTATO</h4>
                        <div className={styles.contactItem}>
                            <div className={styles.contactItemGroup}>
                                <p className={styles.contactLabel}>Endereço</p>
                                <p className={styles.contactValue}>
                                    Rua Jacaranda, 122, Barro<br />
                                    Fortaleza, Ceará
                                </p>
                            </div>
                            <div className={styles.contactItemGroup}>
                                <p className={styles.contactLabel}>Telefone</p>
                                <a href="tel:+5516305870" className={styles.contactValueLink}>
                                    +55 (1) 6305-8700
                                </a>
                            </div>
                            <div className={styles.contactItemGroup}>
                                <p className={styles.contactLabel}>Email</p>
                                <a href="mailto:contato@kayllogger.eng.br" className={styles.contactValueLink}>
                                    contato@kayllogger.eng.br
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}>
                    <div className={styles.copyright}>
                        <p className={styles.copyrightText}>© 2024 Kro Tec-Eng Soluções, Inc.</p>
                        <p className={styles.copyrightLinks}>Todos os direitos reservados. | Política de Privacidade</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
