'use client';

import { useState } from 'react';
import styles from '../../projetos/page.module.css';

const projects = [
    {
        id: 1,
        title: '230 kV Substation – MiCOM P-Series IEDs & BCU C264 Integration (Pará)',
        location: 'Pará, Brazil',
        category: 'Substations & High Voltage',
        coverImage: '/projects/para/20260813_145555.jpg',
        summary: 'Engineering, integration, and commissioning of a 230 kV substation, integrating MiCOM P-series IEDs (transformer, feeder, and line) with the MiCOM C264 Bay Control Unit.',
        description: 'Specialized engineering services executed for a 230 kV high-voltage substation in Pará, Brazil. The scope encompassed full integration and parameterization of MiCOM P-series numerical relays with the Schneider/Alstom MiCOM C264 Bay Control Unit (BCU), covering transformer differential and overcurrent protection, transmission line protection, feeder bays, horizontal GOOSE interlocking schemes, and substation SCADA telemetry under IEC 61850.',
        specs: [
            { label: 'Operating Voltage', value: '230 kV / 138 kV / 13.8 kV' },
            { label: 'Applied Standard', value: 'IEC 61850 Ed. 2 / GOOSE / MMS' },
            { label: 'IEDs & Control', value: 'MiCOM P-Series & MiCOM C264 BCU' },
            { label: 'Protection Scope', value: 'Power Transformer, Feeder & Line' },
            { label: 'Results', value: '100% Validated Interlocking & Telecontrol' },
        ],
        photos: [
            {
                src: '/projects/para/20260813_145555.jpg',
                label: '230 kV Substation Switchyard',
                caption: 'Overview of the 230 kV switchyard bay showing circuit breakers, disconnectors, and power transformer during commissioning.',
            },
            {
                src: '/projects/para/20260715_180937.jpg',
                label: '230 kV Gantries & Busbars at Dusk',
                caption: 'High-voltage gantry structures, insulator strings, and substation yard safety signage.',
            },
            {
                src: '/projects/para/20260812_155950.jpg',
                label: 'Schneider PACiS CMT – BCU C264 Management',
                caption: 'Database configuration and firmware maintenance (Database 1 & 2) of the C264 CPU via Schneider Electric Computer Maintenance Tool (CMT).',
            },
            {
                src: '/projects/para/IMG-20260811-WA0026.jpeg',
                label: 'IEC 61850 Engineering in Schneider PACiS SCE',
                caption: 'Data point profiles, GOOSE interlocking logic, and communication mapping for MiCOM IEDs (P141, P142, P643) and C264 BCU.',
            },
            {
                src: '/projects/para/IMG-20260813-WA0011.jpeg',
                label: 'SCADA / HMI Overall Single-Line Diagram',
                caption: 'Substation HMI display illustrating the 230 kV transmission line bay, breaker, disconnector, transformer, and 13.8 kV feeders.',
            },
        ],
    },
    {
        id: 2,
        title: '400 kV Offshore Wind Farm Grid Interconnection Substation (Poland)',
        location: 'Poland (PSE Transmission Grid)',
        category: 'Wind & Offshore',
        coverImage: '/projects/polonia/20260130_130042.jpg',
        summary: 'Commissioning of a 400 kV extra-high-voltage substation integrating offshore wind farm power into the Polish national transmission grid, featuring GE, ABB IEDs, and BCU C264.',
        description: 'Commissioning of an extra-high-voltage (400 kV) substation in Poland designed to collect offshore wind generation and feed it into the Polish national transmission grid (PSE). The work included on-site Site Acceptance Testing (SAT), multi-vendor integration of GE and ABB numerical protection IEDs with the MiCOM C264 Bay Control Unit, and validation of IEC 61850 PRP zero-recovery-time redundant networks.',
        specs: [
            { label: 'Operating Voltage', value: '400 kV (Extra High Voltage)' },
            { label: 'Application', value: 'Offshore Wind Farm Grid Connection' },
            { label: 'Equipment / IEDs', value: 'GE Multilin, ABB Relion & BCU C264' },
            { label: 'Protocols & Networks', value: 'IEC 61850 PRP Redundant, GOOSE, MMS' },
            { label: 'Results', value: '100% Compliance with European Grid Codes' },
        ],
        photos: [
            {
                src: '/projects/polonia/20260130_130042.jpg',
                label: 'Field Commissioning in Winter Conditions',
                caption: 'Commissioning engineer on-site inspecting 400 kV substation gantries and surge arresters amidst heavy snow in Poland.',
            },
            {
                src: '/projects/polonia/20260204_150528.jpg',
                label: 'GE Multilin & BCU Parameterization in Panel',
                caption: 'Field parameterization and configuration directly at the protection and control cubicle with GE Multilin IEDs and C264 BCU.',
            },
            {
                src: '/projects/polonia/20260311_161711.jpg',
                label: 'Gas-Insulated Substation (GIS SF6) Hall',
                caption: 'Indoor SF6 gas-insulated switchgear (GIS) hall, showing encapsulated phases, busducts, and local control cubicles.',
            },
            {
                src: '/projects/polonia/20260330_092427_1.jpg',
                label: 'Internal Wiring & Control Panel Inspection',
                caption: 'Verification of terminal blocks, auxiliary relays, miniature circuit breakers, and trip/signaling circuitry.',
            },
            {
                src: '/projects/polonia/20260331_135734.jpg',
                label: 'Mobile High-Voltage Applied Test System',
                caption: 'Trailer-mounted high-voltage resonant test set and mobile power generator performing dielectric insulation testing on-site.',
            },
        ],
    },
    {
        id: 3,
        title: 'Offshore Wind Service Operation Vessel (SOV) Commissioning (USA)',
        location: 'East Coast, United States (USA)',
        category: 'Wind & Offshore',
        coverImage: '/projects/eua/20250410_083833.jpg',
        summary: 'Electrical commissioning and automation of a state-of-the-art Service Operation Vessel (SOV) dedicated to offshore wind turbine maintenance in the United States.',
        description: 'Electrical and industrial automation commissioning of a high-tech Service Operation Vessel (SOV) in the United States. Serving as an offshore logistics and technical hub for continuous maintenance of offshore wind turbines, the project involved comprehensive testing of main switchboards, onboard auxiliary generation, dynamic positioning electrical drives, and safety interlocking systems.',
        specs: [
            { label: 'Application', value: 'Offshore Wind Farm Field Operations (USA)' },
            { label: 'Vessel Type', value: 'Service Operation Vessel (SOV)' },
            { label: 'Electrical Scope', value: 'Onboard Generation, Switchboards & Automation' },
            { label: 'Operational Safety', value: 'Critical Interlocking & Marine Emergency Trips' },
            { label: 'Results', value: 'Fully Certified Vessel with Continuous Uptime' },
        ],
        photos: [
            {
                src: '/projects/eua/20250410_083833.jpg',
                label: 'SOV "ECO LIBERTY" (Empire Wind Hybrid Vessel)',
                caption: 'Exterior view of the plug-in hybrid Service Operation Vessel (SOV) docked at the shipyard, built for offshore wind farm support.',
            },
            {
                src: '/projects/eua/20250410_091628.jpg',
                label: 'Secondary Injection with Omicron Test Set on Marine Switchboard',
                caption: 'Secondary injection testing of Woodward/Symap protection relays mounted on the marine switchboard doors using Omicron equipment.',
            },
            {
                src: '/projects/eua/20250421_222702.jpg',
                label: 'SMST Walk-to-Work Gangway & Aft Crane at Night',
                caption: 'Motion-compensated Walk-to-Work (SMST) gangway system and 3D crane on the vessel aft deck for safe turbine access in rough seas.',
            },
            {
                src: '/projects/eua/20250426_054530.jpg',
                label: 'Superstructure & Gangway Tower at Dawn',
                caption: 'Deck-level perspective showing the boarding elevator tower, offshore crane, and bridge superstructure.',
            },
            {
                src: '/projects/eua/IMG-20250610-WA0020.jpg',
                label: 'Engineer Operating Main Marine Switchgear',
                caption: "Commissioning engineer inspecting and testing circuit breaker controls in the vessel's primary power distribution room.",
            },
            {
                src: '/projects/eua/IMG-20250610-WA0021.jpg',
                label: 'Main Switchboard (MSB) Room Lineup',
                caption: 'Longitudinal view of the marine switchgear lineup with insulated safety flooring and marine handrails.',
            },
        ],
    },
    {
        id: 4,
        title: '500 kV Substation – Commissioning & Siemens SIPROTEC 5 IEDs (Espírito Santo)',
        location: 'Espírito Santo, Brazil',
        category: 'Substations & High Voltage',
        coverImage: '/projects/espirito-santo/IMG_20210310_150506.jpg',
        summary: 'Commissioning of a 500 kV extra-high-voltage substation in Espírito Santo, integrating, parameterizing, and secondary testing new Siemens SIPROTEC 5 digital IEDs.',
        description: 'Comprehensive electrical commissioning of an extra-high-voltage (500 kV) transmission substation in Espírito Santo, Brazil. The project encompassed engineering parameterization with DIGSI 5 for new Siemens SIPROTEC 5 numerical relays, on-site Site Acceptance Testing (SAT), hexaphase secondary injection with calibrated OMICRON CMC test sets, CT saturation knee-point testing, and trip matrix validation for seamless grid energization.',
        specs: [
            { label: 'Operating Voltage', value: '500 kV (Extra High Voltage)' },
            { label: 'IED Family', value: 'Siemens SIPROTEC 5 (7SA/7SL/7UT/7SJ)' },
            { label: 'Engineering Software', value: 'Siemens DIGSI 5 & OMICRON Test Universe' },
            {
                label: 'Field Testing Scope',
                value: 'Calibrated Secondary Injection, Trip Matrix & Polarity',
            },
            { label: 'Results', value: 'Flawless Grid Energization • Certified Engineering Reports' },
        ],
        photos: [
            {
                src: '/projects/espirito-santo/IMG_20210310_150506.jpg',
                label: '500 kV Extra-High-Voltage Switchyard',
                caption: 'Overview of the 500 kV switchyard bay featuring circuit breakers, instrument transformers, disconnectors with corona rings, and gantries.',
            },
            {
                src: '/projects/espirito-santo/IMG_20201119_102727.jpg',
                label: 'Communication Rack & RT2 Auxiliary Panel Inspection',
                caption: 'KR commissioning engineer inspecting telecommunication racks, patch panels, and control wiring adjacent to the AC/DC auxiliary power cubicle.',
            },
            {
                src: '/projects/espirito-santo/IMG_20201007_161729.jpg',
                label: 'Primary Tests on Current Transformers (CTs)',
                caption: 'Kelvin test leads connected for transformation ratio, knee-point saturation, and winding resistance testing on instrument transformers.',
            },
            {
                src: '/projects/espirito-santo/IMG_20201123_152227.jpg',
                label: 'Contact Resistance Testing on High-Voltage Disconnector',
                caption: 'Micro-ohmmeter measurement of contact resistance on disconnector switch contacts and insulators in assembly workshop.',
            },
            {
                src: '/projects/espirito-santo/IMG-20210222-WA0054.jpg',
                label: 'Aerial Connection Works on 500 kV Power Transformers',
                caption: 'Boom lift positioning technician for high-voltage busbar and drop lead connection above massive 500 kV power transformers and blast walls.',
            },
        ],
    },
];

export default function ProjectsPageEn() {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [openProjectId, setOpenProjectId] = useState<number | null>(null);

    const categories = ['All', 'Substations & High Voltage', 'Wind & Offshore'];

    const filteredProjects =
        selectedCategory === 'All'
            ? projects
            : projects.filter((p) => p.category === selectedCategory);

    const project = projects.find((item) => item.id === openProjectId) ?? null;

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
                        Projects Combining Technical Rigor & Concrete Results
                    </h1>
                    <p className={styles.bannerDescription}>
                        Explore our track record in commissioning high and extra-high-voltage substations (230 kV to 500 kV), offshore wind farm integration, and multi-vendor SAS engineering.
                    </p>
                </div>
            </section>

            {/* Main Content Section */}
            <section className={styles.section}>
                {/* Category Filters */}
                <div className={styles.filterContainer}>
                    {categories.map((cat) => (
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
                            <div className={styles.cardThumbWrapper}>
                                <img src={item.coverImage} alt={item.title} className={styles.cardThumb} loading="lazy" />
                                <span className={styles.cardBadgeOverlay}>{item.category}</span>
                            </div>
                            <div className={styles.cardHeader}>
                                <span style={{ fontSize: 12, fontWeight: 700, color: '#b8834c', letterSpacing: '0.04em' }}>
                                    📍 {item.location}
                                </span>
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardSummary}>{item.summary}</p>

                            <div className={styles.specsPreview}>
                                {item.specs.slice(0, 3).map((s, idx) => (
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
                                <span>View Photos & Technical Specs</span>
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
                            <div className={styles.popoverBadge}>{project.category} • {project.location}</div>
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

                        {/* Project Photos */}
                        <div className={styles.photosHeading}>Project Photos & Technical Deliverables:</div>
                        <div className={styles.photosGrid}>
                            {project.photos.map((photo, index) => (
                                <div key={index} className={styles.photoCard}>
                                    <div className={styles.photoImgWrapper}>
                                        <img src={photo.src} alt={photo.label} className={styles.photoImg} loading="lazy" />
                                    </div>
                                    <div className={styles.photoContent}>
                                        <span className={styles.photoTitle}>{photo.label}</span>
                                        <p className={styles.photoCaption}>{photo.caption}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </main>
    );
}
