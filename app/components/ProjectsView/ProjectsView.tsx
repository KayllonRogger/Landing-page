'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './ProjectsView.module.css';
import { categoryLabels, projects, techLabel, type Locale, type ProjectCategory } from '@/lib/projects';
import { useDialog } from '@/lib/useDialog';

const COPY = {
    pt: {
        badge: 'Trajetória profissional',
        title: 'Experiência de campo no Brasil e no exterior',
        intro: 'Casos da trajetória profissional de Kayllon Rogger Nunes, engenheiro da KR, em subestações de 230 kV a 500 kV, indústrias, mineração e aplicações offshore. Não representam contratos diretos da KR com os proprietários das instalações.',
        filterLabel: 'Filtrar casos por categoria',
        details: 'Ver detalhes',
        noPhoto: 'Sem fotos publicadas',
        close: 'Fechar',
        context: 'Contexto',
        technologies: 'Tecnologias',
        participation: 'Participação de Kayllon',
        activities: 'Atividades e entregas confirmadas',
        photos: 'Registros fotográficos',
        ctaTitle: 'Tem uma demanda parecida?',
        ctaText: 'Descreva a instalação, os equipamentos envolvidos e a janela prevista.',
        ctaButton: 'Descrever minha demanda',
        contactHref: '/contato',
    },
    en: {
        badge: 'Professional track record',
        title: 'Field experience in Brazil and abroad',
        intro: 'Cases from the professional career of Kayllon Rogger Nunes, KR’s engineer, at 230 kV to 500 kV substations, industrial facilities, mining sites, and offshore applications. They are not direct contracts between KR and the asset owners.',
        filterLabel: 'Filter cases by category',
        details: 'View details',
        noPhoto: 'No published photos',
        close: 'Close',
        context: 'Context',
        technologies: 'Technologies',
        participation: 'Kayllon’s role',
        activities: 'Confirmed activities and deliverables',
        photos: 'Site photos',
        ctaTitle: 'Have a similar need?',
        ctaText: 'Describe the installation, the equipment involved, and the planned window.',
        ctaButton: 'Describe my need',
        contactHref: '/en/contact',
    },
};

const FILTERS: (ProjectCategory | 'all')[] = ['all', 'substations', 'offshore', 'mining'];

export default function ProjectsView({ locale }: { locale: Locale }) {
    const t = COPY[locale];
    const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');
    const [openSlug, setOpenSlug] = useState<string | null>(null);
    const dialogRef = useRef<HTMLDivElement>(null);

    const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter);
    const project = projects.find((p) => p.slug === openSlug) ?? null;

    const open = (slug: string) => {
        setOpenSlug(slug);
        window.history.replaceState(null, '', `#${slug}`);
    };

    const close = useCallback(() => {
        setOpenSlug(null);
        window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }, []);

    useDialog(project !== null, close, dialogRef);

    // Deep links from the home page: /projetos/#<slug>
    useEffect(() => {
        const fromHash = () => {
            const slug = decodeURIComponent(window.location.hash.slice(1));
            if (projects.some((p) => p.slug === slug)) setOpenSlug(slug);
        };
        fromHash();
        window.addEventListener('hashchange', fromHash);
        return () => window.removeEventListener('hashchange', fromHash);
    }, []);

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <p className={styles.eyebrow}>{t.badge}</p>
                    <h1 className={styles.heroTitle}>{t.title}</h1>
                    <p className={styles.heroText}>{t.intro}</p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.filters} role="group" aria-label={t.filterLabel}>
                    {FILTERS.map((key) => (
                        <button
                            key={key}
                            type="button"
                            aria-pressed={filter === key}
                            className={`${styles.filterBtn} ${filter === key ? styles.filterBtnActive : ''}`}
                            onClick={() => setFilter(key)}
                        >
                            {categoryLabels[key][locale]}
                        </button>
                    ))}
                </div>

                <ul className={styles.list}>
                    {visible.map((item) => (
                        <li key={item.slug} id={`caso-${item.slug}`} className={styles.card}>
                            <div className={styles.cardMedia}>
                                {item.coverImage ? (
                                    <img src={item.coverImage} alt="" className={styles.cardImage} loading="lazy" />
                                ) : (
                                    <div className={styles.cardPlaceholder}>
                                        {item.technologies.map((tech) => (
                                            <span key={tech}>{techLabel(tech, locale)}</span>
                                        ))}
                                        <small>{t.noPhoto}</small>
                                    </div>
                                )}
                            </div>
                            <div className={styles.cardBody}>
                                <p className={styles.cardMeta}>
                                    {categoryLabels[item.category][locale]} · {item.location[locale]}
                                </p>
                                <h2 className={styles.cardTitle}>{item.title[locale]}</h2>
                                <p className={styles.cardText}>{item.headline[locale]}</p>
                                <ul className={styles.techList} aria-label={t.technologies}>
                                    {item.technologies.map((tech) => (
                                        <li key={tech} className={styles.techChip}>{techLabel(tech, locale)}</li>
                                    ))}
                                </ul>
                                <button type="button" className={styles.detailsBtn} onClick={() => open(item.slug)}>
                                    {t.details}
                                    <span className="sr-only">: {item.title[locale]}</span>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className={styles.cta}>
                    <div>
                        <h2 className={styles.ctaTitle}>{t.ctaTitle}</h2>
                        <p className={styles.ctaText}>{t.ctaText}</p>
                    </div>
                    <Link href={t.contactHref} className={styles.ctaBtn}>{t.ctaButton}</Link>
                </div>
            </section>

            {project && (
                <div className={styles.overlay} onClick={close}>
                    <div
                        ref={dialogRef}
                        className={styles.dialog}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="project-dialog-title"
                        tabIndex={-1}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className={styles.dialogHeader}>
                            <div>
                                <p className={styles.cardMeta}>
                                    {categoryLabels[project.category][locale]} · {project.location[locale]}
                                </p>
                                <h2 id="project-dialog-title" className={styles.dialogTitle}>{project.title[locale]}</h2>
                            </div>
                            <button type="button" className={styles.closeBtn} onClick={close} data-autofocus>
                                <span aria-hidden="true">✕</span>
                                <span className="sr-only">{t.close}</span>
                            </button>
                        </div>

                        <dl className={styles.facts}>
                            <div className={styles.fact}>
                                <dt>{t.context}</dt>
                                <dd>{project.context[locale]}</dd>
                            </div>
                            <div className={styles.fact}>
                                <dt>{t.technologies}</dt>
                                <dd>
                                    <ul className={styles.techList}>
                                        {project.technologies.map((tech) => (
                                            <li key={tech} className={styles.techChip}>{techLabel(tech, locale)}</li>
                                        ))}
                                    </ul>
                                </dd>
                            </div>
                            <div className={styles.fact}>
                                <dt>{t.participation}</dt>
                                <dd>{project.participation[locale]}</dd>
                            </div>
                            <div className={styles.fact}>
                                <dt>{t.activities}</dt>
                                <dd>
                                    <ul className={styles.activityList}>
                                        {project.activities[locale].map((a) => (
                                            <li key={a}>{a}</li>
                                        ))}
                                    </ul>
                                </dd>
                            </div>
                        </dl>

                        {project.photos.length > 0 && (
                            <>
                                <h3 className={styles.photosHeading}>{t.photos}</h3>
                                <ul className={styles.photoGrid}>
                                    {project.photos.map((photo) => (
                                        <li key={photo.src} className={styles.photo}>
                                            <img src={photo.src} alt={photo.label[locale]} loading="lazy" />
                                            <span>{photo.label[locale]}</span>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
