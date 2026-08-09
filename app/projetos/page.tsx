'use client';

import { useState } from 'react';
import styles from './page.module.css';

const projects = [
    {
        id: 1,
        title: 'Modernização de Subestação Digital',
        category: 'Automação',
        summary: 'Digitalização completa de subestação com integração de relés e supervisório.',
        description:
            'Projeto de modernização para integrar IEDs digitais, protocolos IEC 61850 e supervisório SCADA, melhorando a confiabilidade, visibilidade e controle em tempo real da subestação.',
        photos: [
            {
                label: 'Painel de Comando',
                caption: 'Layout de painel com relés digitais e cablagem organizada.',
            },
            {
                label: 'Console SCADA',
                caption: 'Tela de supervisão com telas de monitoramento e alarmes.',
            },
            {
                label: 'Teste em Campo',
                caption: 'Verificação do comissionamento e aferição de proteções.',
            },
        ],
    },
    {
        id: 2,
        title: 'Integração de Energias Renováveis',
        category: 'Energia',
        summary: 'Conexão de geração solar e eólica com a rede local.',
        description:
            'Projeto de integração de fontes renováveis em média tensão, incluindo estudo de interconexão, equipamentos de proteção e controle para garantir operação segura e estabilidade da rede.',
        photos: [
            {
                label: 'Estação Solar',
                caption: 'Campo solar conectado à subestação de média tensão.',
            },
            {
                label: 'Quadro de Proteção',
                caption: 'Proteção e automação dedicadas para geração renovável.',
            },
            {
                label: 'Análise de Rede',
                caption: 'Plano de conexão e desempenho de fluxo de carga.',
            },
        ],
    },
    {
        id: 3,
        title: 'Comissionamento de Sistemas de Proteção',
        category: 'Proteção',
        summary: 'Validação de sistemas de proteção e coordenação de relés.',
        description:
            'Serviço de comissionamento técnico para sistemas de proteção, com testes dinâmicos e estáticos, ajustes de curva e validação de atuação contra falta, garantindo segurança e conformidade operacional.',
        photos: [
            {
                label: 'Aferição de Relé',
                caption: 'Relé inteligente em bancada de testes.',
            },
            {
                label: 'Curvas de Proteção',
                caption: 'Planilha de coordenação e ajustes de tempo.',
            },
            {
                label: 'Teste Funcional',
                caption: 'Ensaios de atuação e medição de falhas.',
            },
        ],
    },
];

export default function ProjectsPage() {
    const [openProjectId, setOpenProjectId] = useState<number | null>(null);
    const project = projects.find((item) => item.id === openProjectId) ?? null;

    return (
        <main className={styles.page}>
            <section className={styles.banner}>
                <div className={styles.bannerContent}>
                    <span className={styles.sectionLabel}>PROJETOS</span>
                    <h1 className={styles.title}>Projetos que unem engenharia e resultado</h1>
                    <p className={styles.description}>
                        Conheça nossos projetos apresentados em cards interativos. Cada um traz uma descrição técnica, foco no cliente e fotos que demonstram o trabalho entregue.
                    </p>
                </div>
            </section>

            <section className={styles.gridSection}>
                <div className={styles.gridHeader}>
                    <h2 className={styles.gridTitle}>Destaques do portfólio</h2>
                    <div className={styles.gridDivider}></div>
                </div>

                <div className={styles.cardGrid}>
                    {projects.map((item) => (
                        <article key={item.id} className={styles.card}>
                            <div className={styles.cardBadge}>{item.category}</div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardSummary}>{item.summary}</p>
                            <button
                                type="button"
                                className={styles.cardButton}
                                onClick={() => setOpenProjectId(item.id)}
                            >
                                Ver detalhes
                            </button>
                        </article>
                    ))}
                </div>
            </section>

            {project ? (
                <div className={styles.popoverOverlay} role="dialog" aria-modal="true">
                    <div className={styles.popoverCard}>
                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => setOpenProjectId(null)}
                            aria-label="Fechar detalhes do projeto"
                        >
                            ×
                        </button>
                        <div className={styles.popoverHeader}>
                            <span className={styles.popoverBadge}>{project.category}</span>
                            <h3 className={styles.popoverTitle}>{project.title}</h3>
                            <p className={styles.popoverText}>{project.description}</p>
                        </div>
                        <div className={styles.photosGrid}>
                            {project.photos.map((photo, index) => (
                                <div key={index} className={styles.photoCard}>
                                    <div className={styles.photoLabel}>{photo.label}</div>
                                    <div className={styles.photoPreview}>
                                        <span>{photo.label}</span>
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
