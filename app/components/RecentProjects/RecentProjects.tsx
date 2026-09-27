'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './RecentProjects.module.css';

interface RecentProjectsProps {
    locale?: 'pt' | 'en';
}

export default function RecentProjects({ locale = 'pt' }: RecentProjectsProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const isEn = locale === 'en';

    const projects = [
        {
            id: 1,
            title: isEn ? '230 kV Substation – MiCOM P-Series & BCU C264 (Pará)' : 'Subestação 230 kV – MiCOM Linha P & BCU C264 (Pará)',
            category: isEn ? '230 kV High Voltage' : 'Alta Tensão 230 kV',
            description: isEn
                ? 'Integration and parameterization of MiCOM P-series IEDs (transformer, feeder, line) with MiCOM C264 Bay Control Unit.'
                : 'Integração e parametrização de IEDs MiCOM linha P (transformador, alimentador e linha) com a BCU MiCOM C264.',
            stats: '230 kV • MiCOM P & C264 • IEC 61850',
            icon: (
                <svg className={styles.projectIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            id: 2,
            title: isEn ? '400 kV Offshore Wind Farm Grid Connection (Poland)' : 'Subestação 400 kV Conexão Windfarm Offshore (Polônia)',
            category: isEn ? '400 kV Extra High Voltage' : 'Extra Alta Tensão 400 kV',
            description: isEn
                ? 'Commissioning of a 400 kV substation integrating offshore wind farm power to the Polish national grid with GE, ABB IEDs and BCU C264.'
                : 'Comissionamento de subestação 400 kV para integração de parque eólico offshore ao grid polonês com IEDs GE, ABB e BCU C264.',
            stats: isEn ? '400 kV • GE & ABB IEDs • BCU C264 • PSE Grid' : '400 kV • IEDs GE & ABB • BCU C264 • Grid PSE',
            icon: (
                <svg className={styles.projectIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            id: 3,
            title: isEn ? 'Offshore Wind SOV Vessel Commissioning (USA)' : 'Embarcação SOV de Apoio a Eólica Offshore (EUA)',
            category: isEn ? 'Offshore Marine Power' : 'Sistemas Elétricos Navais Offshore',
            description: isEn
                ? 'Electrical and automation commissioning of a specialized Service Operation Vessel (SOV) supporting offshore wind turbines in the USA.'
                : 'Comissionamento elétrico e de automação de embarcação especializada de manutenção e operação de turbinas eólicas offshore nos EUA.',
            stats: isEn ? 'SOV Vessel • Marine Generation • Continuous Uptime' : 'Embarcação SOV • Geração de Bordo • Alta Disponibilidade',
            icon: (
                <svg className={styles.projectIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
        },
        {
            id: 4,
            title: isEn ? '500 kV Substation – Siemens SIPROTEC 5 (Espírito Santo)' : 'Subestação 500 kV – Siemens SIPROTEC 5 (Espírito Santo)',
            category: isEn ? '500 kV Extra High Voltage' : 'Extra Alta Tensão 500 kV',
            description: isEn
                ? 'Commissioning of a 500 kV substation with integration, parameterization, and secondary testing of Siemens SIPROTEC 5 IEDs.'
                : 'Comissionamento de subestação 500 kV com integração, parametrização e ensaios secundários de IEDs Siemens SIPROTEC 5.',
            stats: isEn ? '500 kV • SIPROTEC 5 • Calibrated OMICRON Tests' : '500 kV • SIPROTEC 5 • Ensaios Calibrados OMICRON',
            icon: (
                <svg className={styles.projectIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            ),
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const projectsUrl = isEn ? '/en/projects' : '/projetos';

    return (
        <section id={isEn ? "projects" : "projetos"} className={styles.projects}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>{isEn ? "PROJECT PORTFOLIO" : "PORTFÓLIO DE CASOS"}</span>
                    </div>
                    <h2 className={styles.title}>{isEn ? "RECENT PROJECTS" : "PROJETOS RECENTES"}</h2>
                    <p className={styles.headerDescription}>
                        {isEn
                            ? "Track record of proven technical excellence in power substations, industrial plants, and renewable energy facilities."
                            : "Trajetória de excelência técnica comprovada em subestações de energia, plantas industriais e usinas de geração renovável."}
                    </p>
                    <div className={styles.divider}></div>
                </div>

                {/* Carousel */}
                <div className={styles.carouselWrapper}>
                    <div className={styles.carouselContainer}>
                        <div
                            className={styles.carousel}
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {projects.map((project) => (
                                <div key={project.id} className={styles.carouselItem}>
                                    <div className={styles.carouselSlide}>
                                        <div className={styles.slidePattern}></div>
                                        <div className={styles.slideContent}>
                                            <div className={styles.projectIconWrapper}>{project.icon}</div>
                                            <span className={styles.projectCategory}>{project.category}</span>
                                            <h3 className={styles.projectTitle}>{project.title}</h3>
                                            <p className={styles.projectDescription}>{project.description}</p>
                                            <p className={styles.projectStats}>{project.stats}</p>
                                            <Link href={projectsUrl} className={styles.projectBtn}>
                                                {isEn ? "View All Projects" : "Ver Todos os Projetos"}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        className={`${styles.navButton} ${styles.prevButton}`}
                        onClick={prevSlide}
                        aria-label={isEn ? "Previous project" : "Projeto anterior"}
                    >
                        <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <button
                        className={`${styles.navButton} ${styles.nextButton}`}
                        onClick={nextSlide}
                        aria-label={isEn ? "Next project" : "Próximo projeto"}
                    >
                        <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Dots */}
                <div className={styles.dotsContainer}>
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${currentSlide === index ? styles.active : ''}`}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`${isEn ? "Go to project" : "Ir para o projeto"} ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
