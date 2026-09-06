'use client';

import { useState } from 'react';
import styles from '../../projetos/page.module.css';

const projectsEn = [
    {
        id: 1,
        title: '230 kV Digital Substation Modernization',
        category: 'Automation & SAS',
        summary: 'Full substation digitalization with numerical IED integration, IEC 61850 protocols, and redundant SCADA supervision.',
        description:
            'Comprehensive modernization project deploying digital IEDs, station/process bus, IEC 61850 (GOOSE and MMS) protocols, and high-availability SCADA, expanding real-time operational visibility and situational awareness across the entire substation.',
        specs: [
            { label: 'Rated Voltage', value: '230 / 138 / 13.8 kV' },
            { label: 'Standard Applied', value: 'IEC 61850 Ed. 2 / PRP' },
            { label: 'Protocols', value: 'GOOSE, MMS, DNP3.0' },
            { label: 'Scope', value: 'Engineering, Parameterization & FAT' },
        ],
        photos: [
            {
                label: 'Digital Control Panel',
                caption: 'Cubicle layout with intelligent IEDs and redundant fiber-optic cabling management.',
            },
            {
                label: 'SCADA Supervision Console',
                caption: 'High-fidelity operator HMI with dynamic single-line synoptics and alarm logging.',
            },
            {
                label: 'Field Testing & Secondary Injection',
                caption: 'Dynamic tripping timing verification and interlocking logic validation.',
            },
        ],
    },
    {
        id: 2,
        title: 'Renewable Energy Plant Grid Interconnection',
        category: 'Renewable Energy',
        summary: 'Connection and interconnection of large-scale solar and wind generation complexes to medium & high voltage grids.',
        description:
            'Electrical interconnection studies, power flow, and transient stability analysis for connecting utility-scale solar and wind plants to the grid, integrating bay protection schemes, power factor / voltage control, and grid operator telemetry.',
        specs: [
            { label: 'Connected Capacity', value: '120 MWp Solar / 80 MW Wind' },
            { label: 'Point of Interconnection', value: '138 kV Grid Connection' },
            { label: 'Voltage Control', value: 'Automatic AVR / Q-V Control' },
            { label: 'Scope', value: 'Grid Interconnection Studies & Commissioning' },
        ],
        photos: [
            {
                label: 'Collector Step-Up Substation',
                caption: 'Power transformers and medium-to-high voltage interconnection bays.',
            },
            {
                label: 'Bay Protection Panels',
                caption: 'Multifunction protection relays with directional overcurrent, undervoltage, and overvoltage.',
            },
            {
                label: 'Grid Code Telemetry Gateway',
                caption: 'Real-time telemetry and data streaming to the National System Operator.',
            },
        ],
    },
    {
        id: 3,
        title: 'Commissioning & Protection Coordination',
        category: 'Protection & Control',
        summary: 'High-voltage protection system validation and coordination with dynamic simulation testing.',
        description:
            'Specialized technical service for commissioning secondary protection systems, featuring static and dynamic injection testing, selectivity curve coordination, and tripping logic validation, ensuring high operational safety and zero false trips.',
        specs: [
            { label: 'Tested Relays', value: 'Distance (21), Differential (87), Overcurrent (50/51)' },
            { label: 'Test Equipment', value: 'Calibrated Hexaphase Injection Sets' },
            { label: 'Performance Criteria', value: 'Total Selectivity & High-Speed Tripping' },
            { label: 'Scope', value: 'On-Site Field Testing & Certified Reports' },
        ],
        photos: [
            {
                label: 'Secondary Injection Test Bench',
                caption: 'Automated characteristic curve testing with calibration certificate generation.',
            },
            {
                label: 'Coordination & Selectivity Study',
                caption: 'Time-current curves adjusted for selective and fast fault clearance.',
            },
            {
                label: 'Circuit Breaker Timing Inspection',
                caption: 'Opening, closing, and automatic reclosing sequence verification.',
            },
        ],
    },
];

const categoriesEn = ['All', 'Automation & SAS', 'Renewable Energy', 'Protection & Control'];

export default function ProjectsPageEn() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [openProjectId, setOpenProjectId] = useState<number | null>(null);

    const filteredProjects =
        selectedCategory === 'All'
            ? projectsEn
            : projectsEn.filter((p) => p.category === selectedCategory);

    const project = projectsEn.find((item) => item.id === openProjectId) ?? null;

    return (
        <main className={styles.page}>
            {/* Top Hero Banner */}
            <section className={styles.heroBanner}>
                <div className={styles.bannerPattern}></div>
                <div className={styles.bannerContainer}>
                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        <span>ENGINEERING PORTFOLIO</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        Projects Combining Technical Rigor & Real-World Results
                    </h1>
                    <p className={styles.bannerDescription}>
                        Explore our proven track record in substation modernization, renewable integration, and protection & control systems.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.section}>
                {/* Category Filters */}
                <div className={styles.filterContainer}>
                    {categoriesEn.map((cat) => (
                        <button
                            key={cat}
                            type="button"
                            className={`${styles.filterBtn} ${selectedCategory === cat ? styles.filterBtnActive : ''}`}
                            onClick={() => setSelectedCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className={styles.cardGrid}>
                    {filteredProjects.map((item) => (
                        <article key={item.id} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <span className={styles.cardBadge}>{item.category}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardSummary}>{item.summary}</p>

                            <div className={styles.specsPreview}>
                                {item.specs.slice(0, 2).map((s, idx) => (
                                    <div key={idx} className={styles.specMini}>
                                        <span className={styles.specMiniLabel}>{s.label}:</span>
                                        <span className={styles.specMiniValue}>{s.value}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                type="button"
                                className={styles.cardButton}
                                onClick={() => setOpenProjectId(item.id)}
                            >
                                <span>View Technical Specifications</span>
                                <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            {/* Modal / Dialog Popover */}
            {project ? (
                <div className={styles.popoverOverlay} role="dialog" aria-modal="true" onClick={() => setOpenProjectId(null)}>
                    <div className={styles.popoverCard} onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => setOpenProjectId(null)}
                            aria-label="Close project details"
                        >
                            ✕
                        </button>

                        <div className={styles.popoverHeader}>
                            <div className={styles.popoverBadge}>{project.category}</div>
                            <h3 className={styles.popoverTitle}>{project.title}</h3>
                            <p className={styles.popoverText}>{project.description}</p>
                        </div>

                        {/* Specs Table */}
                        <div className={styles.specsGrid}>
                            {project.specs.map((spec, idx) => (
                                <div key={idx} className={styles.specCard}>
                                    <span className={styles.specLabel}>{spec.label}</span>
                                    <span className={styles.specValue}>{spec.value}</span>
                                </div>
                            ))}
                        </div>

                        {/* Technical Photos / Highlights */}
                        <div className={styles.photosHeading}>Technical Stages & Deliverables:</div>
                        <div className={styles.photosGrid}>
                            {project.photos.map((photo, index) => (
                                <div key={index} className={styles.photoCard}>
                                    <div className={styles.photoPreview}>
                                        <div className={styles.photoIconBadge}>
                                            <svg className={styles.photoSvg} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <span className={styles.photoTitle}>{photo.label}</span>
                                    </div>
                                    <p className={styles.photoCaption}>{photo.caption}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </main>
    );
}

