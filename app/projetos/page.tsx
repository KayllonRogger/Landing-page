'use client';

import { useState } from 'react';
import styles from './page.module.css';

const projects = [
    {
        id: 1,
        title: 'Modernização de Subestação Digital 230 kV',
        category: 'Automação & SAS',
        summary: 'Digitalização completa de subestação com integração de IEDs, protocolos IEC 61850 e supervisório SCADA redundante.',
        description:
            'Projeto de modernização integral para integrar IEDs digitais, barramento de processo/estação, protocolos IEC 61850 (GOOSE e MMS) e supervisório SCADA de alta disponibilidade, aumentando a visibilidade e o controle em tempo real da subestação.',
        specs: [
            { label: 'Tensão Nominal', value: '230 / 138 / 13.8 kV' },
            { label: 'Norma Aplicada', value: 'IEC 61850 Ed. 2 / PRP' },
            { label: 'Protocolos', value: 'GOOSE, MMS, DNP3.0' },
            { label: 'Escopo', value: 'Engenharia, Parametrização & TAF' },
        ],
        photos: [
            {
                label: 'Painel de Comando Digital',
                caption: 'Layout do cubículo com IEDs inteligentes e organização de cabeamento óptico redundante.',
            },
            {
                label: 'Console de Supervisão SCADA',
                caption: 'Interface homem-máquina de alta fidelidade com sinóptico dinâmico e gestão de alarmes.',
            },
            {
                label: 'Testes de Campo & Injeção',
                caption: 'Aferição dinâmica de tempos de disparo e validação de lógicas de intertravamento.',
            },
        ],
    },
    {
        id: 2,
        title: 'Integração de Parques de Energia Renovável',
        category: 'Energia Renovável',
        summary: 'Conexão e interconexão de complexos de geração solar e eólica à rede de média e alta tensão.',
        description:
            'Estudos elétricos de interconexão, fluxo de potência e regime transitório para conexão de usinas solares e eólicas à concessionária, integrando sistemas de proteção de bay, controle de fator de potência e telemetria ONS.',
        specs: [
            { label: 'Potência Conectada', value: '120 MWp Solar / 80 MW Eólico' },
            { label: 'Ponto de Acoplamento', value: '138 kV - Conexão ONS' },
            { label: 'Controle de Tensão', value: 'AVR / Q-V Control Automático' },
            { label: 'Escopo', value: 'Estudo de Acesso & Comissionamento' },
        ],
        photos: [
            {
                label: 'Subestação Elevadora Coletora',
                caption: 'Transformadores de potência e bay de conexão de média para alta tensão.',
            },
            {
                label: 'Painéis de Proteção de Bay',
                caption: 'Relés multifunção com proteção de sobrecorrente, direcional e sub/sobretensão.',
            },
            {
                label: 'Telemetria & Gateway ONS',
                caption: 'Integração de dados em tempo real com o Operador Nacional do Sistema.',
            },
        ],
    },
    {
        id: 3,
        title: 'Comissionamento & Estudos de Proteção',
        category: 'Proteção & Controle',
        summary: 'Validação e coordenação de sistemas de proteção de alta tensão com simulações dinâmicas.',
        description:
            'Serviço técnico especializado de comissionamento de sistemas de proteção secundária, com ensaios dinâmicos e estáticos, coordenação de curvas e validação de atuação contra faltas, garantindo segurança operacional e zero atuações indevidas.',
        specs: [
            { label: 'Relés Ensaiados', value: 'Distância (21), Diferencial (87), Sobrecorrente (50/51)' },
            { label: 'Ferramental', value: 'Caixas de Injeção Hexafásica Calibradas' },
            { label: 'Critério', value: 'Seletividade Total e Rapidez' },
            { label: 'Escopo', value: 'Ensaios em Campo & Laudos Técnicos' },
        ],
        photos: [
            {
                label: 'Bancada de Injeção Secundária',
                caption: 'Ensaios automáticos de curvas características com geração de relatórios de calibração.',
            },
            {
                label: 'Estudo de Coordenação & Seletividade',
                caption: 'Diagramas tempo-corrente ajustados para eliminação seletiva de faltas.',
            },
            {
                label: 'Inspeção Funcional de Disjuntores',
                caption: 'Verificação de tempos de abertura, fechamento e lógicas de religamento automático.',
            },
        ],
    },
];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
    const [openProjectId, setOpenProjectId] = useState<number | null>(null);

    const categories = ['Todos', 'Automação & SAS', 'Energia Renovável', 'Proteção & Controle'];

    const filteredProjects =
        selectedCategory === 'Todos'
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
                        <span>PORTFÓLIO DE ENGENHARIA</span>
                    </div>
                    <h1 className={styles.bannerTitle}>
                        Projetos que Unem Rigor Técnico & Resultados Reais
                    </h1>
                    <p className={styles.bannerDescription}>
                        Conheça nossos cases de sucesso em modernização de subestações, integração de fontes renováveis e sistemas de proteção e controle.
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
                                <span>Ver Especificações Técnicas</span>
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
                            aria-label="Fechar detalhes do projeto"
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
                        <div className={styles.photosHeading}>Etapas Técnicas & Entregáveis:</div>
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
