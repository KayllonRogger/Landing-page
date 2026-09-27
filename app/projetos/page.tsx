'use client';

import { useState } from 'react';
import styles from './page.module.css';

const projects = [
    {
        id: 1,
        title: 'Subestação 230 kV – Integração IEDs MiCOM Linha P & BCU C264 (Pará)',
        location: 'Pará, Brasil',
        category: 'Subestações & Alta Tensão',
        coverImage: '/projects/para/20260813_145555.jpg',
        summary: 'Engenharia, integração e comissionamento de subestação 230 kV, integrando IEDs MiCOM linha P (transformador, alimentador e linha) à Bay Control Unit (BCU) C264.',
        description: 'Atuação técnica especializada em subestação de alta tensão 230 kV no estado do Pará. O escopo compreendeu a integração e parametrização completa dos relés de proteção IEDs MiCOM linha P com a Bay Control Unit (BCU) MiCOM C264, abrangendo proteção diferencial e sobrecorrente de transformador de potência, proteção de alimentadores e linhas de transmissão, lógicas de intertravamento e comunicação sob a norma IEC 61850.',
        specs: [
            { label: 'Tensão de Operação', value: '230 kV / 138 kV / 13.8 kV' },
            { label: 'Norma Aplicada', value: 'IEC 61850 Ed. 2 / GOOSE / MMS' },
            { label: 'IEDs & Controle', value: 'MiCOM Linha P & BCU MiCOM C264' },
            { label: 'Escopo de Proteção', value: 'Transformador, Alimentador e Linha' },
            { label: 'Resultados', value: 'Intertravamento e Telecomando 100% Homologados' },
        ],
        photos: [
            {
                src: '/projects/para/20260813_145555.jpg',
                label: 'Pátio da Subestação 230 kV',
                caption: 'Visão geral do pátio e módulos de manobra 230 kV com disjuntores, seccionadoras e transformador de força ao fundo sob condições de comissionamento.',
            },
            {
                src: '/projects/para/20260715_180937.jpg',
                label: 'Pórticos e Barramento 230 kV ao Entardecer',
                caption: 'Estruturas de pórtico de alta tensão, cadeias de isoladores e sinalização de segurança no pátio da subestação.',
            },
            {
                src: '/projects/para/20260812_155950.jpg',
                label: 'Schneider PACiS CMT – Gerenciamento da BCU C264',
                caption: 'Parametrização e manutenção de bases de dados (Data base 1 e 2) da CPU C264 via Schneider Electric Computer Maintenance Tool (CMT).',
            },
            {
                src: '/projects/para/IMG-20260811-WA0026.jpeg',
                label: 'Engenharia IEC 61850 no Schneider PACiS SCE',
                caption: 'Mapeamento de pontos de dados, perfis de comunicação e lógicas de intertravamento GOOSE para os IEDs MiCOM (P141, P142, P643) e BCU C264.',
            },
            {
                src: '/projects/para/IMG-20260813-WA0011.jpeg',
                label: 'Tela de Supervisão & Unifilar SCADA / IHM',
                caption: 'Supervisão operacional (IHM) exibindo unifilar geral da LT Serra Norte 230 kV, disjuntor, seccionadora, transformador e alimentadores 13.8 kV.',
            },
        ],
    },
    {
        id: 2,
        title: 'Subestação 400 kV de Conexão Windfarm Offshore (Polônia)',
        location: 'Polônia (Grid PSE)',
        category: 'Eólica & Offshore',
        coverImage: '/projects/polonia/20260130_130042.jpg',
        summary: 'Comissionamento de subestação 400 kV para integração de parque eólico offshore ao sistema elétrico de transmissão polonês, com IEDs GE, ABB e BCU C264.',
        description: 'Comissionamento de subestação em nível de extra alta tensão (400 kV) na Polônia, projetada para receber e elevar a energia gerada por um complexo eólico marítimo (offshore windfarm) e transmiti-la à rede básica polonesa (PSE). A atuação englobou testes de aceitação em campo (TAC/SAT), integração de IEDs numéricos das fabricantes GE e ABB com a Bay Control Unit MiCOM C264 e validação de redundância de rede IEC 61850 PRP.',
        specs: [
            { label: 'Tensão de Operação', value: '400 kV (Extra Alta Tensão)' },
            { label: 'Aplicação', value: 'Integração Windfarm Offshore ao Grid PSE' },
            { label: 'Equipamentos / IEDs', value: 'Linhas GE, ABB Relion & BCU C264' },
            { label: 'Protocolos & Redes', value: 'IEC 61850 PRP Redundante, GOOSE, MMS' },
            { label: 'Resultados', value: '100% Conformidade com o Código de Rede Europeu' },
        ],
        photos: [
            {
                src: '/projects/polonia/20260130_130042.jpg',
                label: 'Comissionamento em Condições de Inverno',
                caption: 'Engenheiro especialista em campo inspecionando estruturas e para-raios da subestação 400 kV sob neve intensa na Polônia.',
            },
            {
                src: '/projects/polonia/20260204_150528.jpg',
                label: 'Parametrização de Relés GE Multilin & BCU no Painel',
                caption: 'Engenharia e parametrização direta no painel de controle e proteção com relés GE Multilin e BCU C264.',
            },
            {
                src: '/projects/polonia/20260311_161711.jpg',
                label: 'Galpão da Subestação Isolada a Gás (GIS SF6)',
                caption: 'Módulos blindados de manobra em SF6 (GIS), barramentos isolados e painéis locais de comando da subestação abrigada.',
            },
            {
                src: '/projects/polonia/20260330_092427_1.jpg',
                label: 'Inspeção e Fiação Interna dos Painéis de Proteção',
                caption: 'Conferência minuciosa de réguas de bornes, relés auxiliares, disjuntores miniatura e circuitos de disparo e sinalização.',
            },
            {
                src: '/projects/polonia/20260331_135734.jpg',
                label: 'Sistema Móvel para Ensaio de Tensão Aplicada (HV)',
                caption: 'Conjunto de ensaio ressonante de alta tensão em reboque com gerador móvel no pátio externo para testes de isolamento e comissionamento.',
            },
        ],
    },
    {
        id: 3,
        title: 'Embarcação SOV de Apoio a Geradores Eólicos Offshore (EUA)',
        location: 'Costa Leste, Estados Unidos (EUA)',
        category: 'Eólica & Offshore',
        coverImage: '/projects/eua/20250410_083833.jpg',
        summary: 'Comissionamento elétrico e automação de embarcação especializada (SOV) de manutenção e operação para parques eólicos offshore nos Estados Unidos.',
        description: 'Comissionamento elétrico e de automação industrial de uma embarcação de operação e serviços marítimos (SOV - Service Operation Vessel) de alta tecnologia nos Estados Unidos. Essa embarcação atua como base logística e técnica para manutenção contínua de aerogeradores offshore. O trabalho envolveu testes de quadros elétricos principais, sistemas de geração de energia de bordo, acionamentos de propulsão e intertravamento de segurança.',
        specs: [
            { label: 'Aplicação', value: 'Suporte a Parques Eólicos Offshore (EUA)' },
            { label: 'Tipo de Embarcação', value: 'Service Operation Vessel (SOV)' },
            { label: 'Escopo Elétrico', value: 'Geração de Bordo, Distribuição & Automação' },
            { label: 'Segurança Operacional', value: 'Intertravamento Crítico & Emergência Marítima' },
            { label: 'Resultados', value: 'Embarcação Certificada com Operação Contínua' },
        ],
        photos: [
            {
                src: '/projects/eua/20250410_083833.jpg',
                label: 'Embarcação SOV "ECO LIBERTY" (Empire Wind)',
                caption: 'Visão da embarcação híbrida plug-in de serviços de operação e manutenção de aerogeradores offshore (SOV) atracada no estaleiro.',
            },
            {
                src: '/projects/eua/20250410_091628.jpg',
                label: 'Ensaios Secundários com Mala Omicron no Switchboard Naval',
                caption: 'Injeção secundária e ensaios dos relés de proteção Woodward/Symap instalados nas portas dos painéis de manobra de média tensão da embarcação.',
            },
            {
                src: '/projects/eua/20250421_222702.jpg',
                label: 'Passarela Walk-to-Work (SMST) & Guindaste de Popa à Noite',
                caption: 'Sistema de passarela telescópica com compensação ativa de movimento (Walk-to-Work SMST) e guindaste 3D para transferência segura aos aerogeradores em alto-mar.',
            },
            {
                src: '/projects/eua/20250426_054530.jpg',
                label: 'Superestrutura e Torre da Passarela ao Amanhecer',
                caption: 'Perspectiva a partir do convés principal mostrando a torre de embarque, guindaste offshore e superestrutura da ponte de comando.',
            },
            {
                src: '/projects/eua/IMG-20250610-WA0020.jpg',
                label: 'Engenheiro Operando o Switchgear Naval Principal',
                caption: 'Especialista em comissionamento elétrico inspecionando e operando os disjuntores e comandos do painel elétrico principal de bordo.',
            },
            {
                src: '/projects/eua/IMG-20250610-WA0021.jpg',
                label: 'Corredor do Main Switchboard (MSB) da Embarcação',
                caption: 'Visão longitudinal completa dos cubículos de manobra e distribuição de força naval, com piso isolante e corrimãos de segurança marítima.',
            },
        ],
    },
    {
        id: 4,
        title: 'Subestação 500 kV – Comissionamento & IEDs SIPROTEC 5 (Espírito Santo)',
        location: 'Espírito Santo, Brasil',
        category: 'Subestações & Alta Tensão',
        coverImage: '/projects/espirito-santo/IMG_20210310_150506.jpg',
        summary: 'Comissionamento de subestação 500 kV no Espírito Santo, integrando, parametrizando e ensaiando novos IEDs digitais da linha Siemens SIPROTEC 5.',
        description: 'Execução completa do comissionamento elétrico de subestação em extra alta tensão (500 kV) no estado do Espírito Santo. O projeto abrangeu a integração dos novos relés numéricos de proteção Siemens SIPROTEC 5 via software DIGSI 5, testes de aceitação em campo (TAC/SAT), ensaios com caixas de injeção secundária calibradas hexafásicas OMICRON, levantamento de curvas de saturação de TCs e validação de matriz de trip para energização segura.',
        specs: [
            { label: 'Tensão de Operação', value: '500 kV (Extra Alta Tensão)' },
            { label: 'Família de IEDs', value: 'Siemens SIPROTEC 5 (Linha 7SA/7SL/7UT/7SJ)' },
            { label: 'Software de Engenharia', value: 'Siemens DIGSI 5 & OMICRON Test Universe' },
            {
                label: 'Ensaios Realizados',
                value: 'Injeção Secundária Calibrada, Matriz de Trip & Polaridade',
            },
            { label: 'Resultados', value: 'Energização Perfeita sem Retrabalho • Laudos com ART' },
        ],
        photos: [
            {
                src: '/projects/espirito-santo/IMG_20210310_150506.jpg',
                label: 'Pátio de Extra Alta Tensão (500 kV)',
                caption: 'Módulos de manobra de 500 kV com disjuntores, transformadores de instrumentos, seccionadoras com anéis anticorona e pórticos metálicos.',
            },
            {
                src: '/projects/espirito-santo/IMG_20201119_102727.jpg',
                label: 'Inspeção de Racks de Comunicação & Painéis Auxiliares RT2',
                caption: 'Engenheiro KR inspecionando cubículo de telecomunicações, réguas ópticas e cabeamento de controle adjacente ao retificador de serviços auxiliares CC/CA.',
            },
            {
                src: '/projects/espirito-santo/IMG_20201007_161729.jpg',
                label: 'Ensaios Primários em Transformadores de Corrente (TCs)',
                caption: 'Conexão de cabos de ensaio com garras Kelvin para medições de relação, saturação e resistência ôhmica em TCs de alta tensão.',
            },
            {
                src: '/projects/espirito-santo/IMG_20201123_152227.jpg',
                label: 'Ensaio de Resistência de Contato em Chave Seccionadora',
                caption: 'Medição de micro-ohmimetria (resistência de contato nos contatos principais) dos polos de seccionadora de alta tensão em oficina/canteiro.',
            },
            {
                src: '/projects/espirito-santo/IMG-20210222-WA0054.jpg',
                label: 'Montagem e Conexão Aérea nos Transformadores de Força',
                caption: 'Plataforma elevatória posicionando técnico para conexão dos condutores de alta tensão às buchas dos grandes transformadores de potência 500 kV.',
            },
        ],
    },
];

export default function ProjectsPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
    const [openProjectId, setOpenProjectId] = useState<number | null>(null);

    const categories = ['Todos', 'Subestações & Alta Tensão', 'Eólica & Offshore'];

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
                        Conheça nossos cases de sucesso em comissionamento de subestações de alta e extra alta tensão (230 kV a 500 kV), integração de eólicas offshore e automação com IEDs líderes de mercado.
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
                                <span>Ver Fotos & Especificações</span>
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
                        <div className={styles.photosHeading}>Fotos do Projeto & Entregáveis Técnicos:</div>
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
