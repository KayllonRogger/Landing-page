'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './RecentProjects.module.css';

export default function RecentProjects() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            id: 1,
            title: 'Modernização de Subestação Digital 230 kV',
            category: 'Automação & SAS',
            description: 'Implementação integral de arquitetura IEC 61850 com barramento de processo, relés numéricos redundantes e supervisão SCADA.',
            stats: 'Alta Confiabilidade • Tempo Real',
            icon: (
                <svg className={styles.projectIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            ),
        },
        {
            id: 2,
            title: 'Integração de Parques de Energia Renovável',
            category: 'Geração & Conexão',
            description: 'Estudos elétricos de interconexão, parametrização de proteções e comissionamento de subestações coletoras solar e eólica.',
            stats: 'Conexão à Rede Básica • ONS',
            icon: (
                <svg className={styles.projectIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
        },
        {
            id: 3,
            title: 'Comissionamento & Estudos de Proteção',
            category: 'Proteção & Controle',
            description: 'Aferição de relés secundários, simulações de transitórios eletromagnéticos e testes dinâmicos de atuação seletiva.',
            stats: 'Coordenação Rigorosa • Zero Falha',
            icon: (
                <svg className={styles.projectIconSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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

    return (
        <section id="projetos" className={styles.projects}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.header}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>PORTFÓLIO DE SUCESSO</span>
                    </div>
                    <h2 className={styles.title}>NOSSOS PROJETOS RECENTES</h2>
                    <p className={styles.headerDescription}>
                        Casos reais de engenharia de ponta aplicados em infraestruturas críticas de energia.
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
                                            <div className={styles.projectIconWrapper}>
                                                {project.icon}
                                            </div>
                                            <span className={styles.projectCategory}>{project.category}</span>
                                            <h3 className={styles.projectTitle}>{project.title}</h3>
                                            <p className={styles.projectDescription}>{project.description}</p>
                                            <span className={styles.projectStats}>{project.stats}</span>

                                            <Link href="/projetos" className={styles.projectBtn}>
                                                Ver Detalhes do Projeto →
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className={`${styles.navButton} ${styles.prevButton}`}
                        aria-label="Projeto anterior"
                    >
                        <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={nextSlide}
                        className={`${styles.navButton} ${styles.nextButton}`}
                        aria-label="Próximo projeto"
                    >
                        <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className={styles.dotsContainer}>
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                                aria-label={`Ir para projeto ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
