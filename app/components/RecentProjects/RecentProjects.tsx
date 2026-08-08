'use client';

import { useState } from 'react';
import styles from './RecentProjects.module.css';

export default function RecentProjects() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const projects = [
        {
            id: 1,
            title: 'Modernização de Subestação Digital',
            image: '🏗️',
            category: 'Automação',
        },
        {
            id: 2,
            title: 'Integração de Energias Renováveis',
            image: '⚡',
            category: 'Energia',
        },
        {
            id: 3,
            title: 'Comissionamento de Sistemas de Proteção',
            image: '🔐',
            category: 'Proteção',
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
                    <h2 className={styles.title}>NOSSOS PROJETOS RECENTES</h2>
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
                                        <div className={styles.projectImage}>{project.image}</div>
                                        <h3 className={styles.projectTitle}>{project.title}</h3>
                                        <span className={styles.projectCategory}>{project.category}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        className={`${styles.navButton} ${styles.prevButton}`}
                    >
                        ❮
                    </button>
                    <button
                        onClick={nextSlide}
                        className={`${styles.navButton} ${styles.nextButton}`}
                    >
                        ❯
                    </button>

                    {/* Dots */}
                    <div className={styles.dotsContainer}>
                        {projects.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`${styles.dot} ${index === currentSlide ? styles.active : ''}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
