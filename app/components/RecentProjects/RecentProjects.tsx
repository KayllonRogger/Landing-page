'use client';

import Link from 'next/link';
import s from '../Section/Section.module.css';
import styles from './RecentProjects.module.css';
import { projectHref, projects, techLabel } from '@/lib/projects';

interface RecentProjectsProps {
    locale?: 'pt' | 'en';
}

export default function RecentProjects({ locale = 'pt' }: RecentProjectsProps) {
    const isEn = locale === 'en';

    return (
        <section id={isEn ? 'projects' : 'projetos'} className={s.sectionAlt} aria-labelledby="projetos-title">
            <div className={s.container}>
                <div className={s.header}>
                    <p className={s.eyebrow}>{isEn ? 'Field experience' : 'Experiência de campo'}</p>
                    <h2 id="projetos-title" className={s.title}>
                        {isEn ? 'Where this experience comes from' : 'De onde vem essa experiência'}
                    </h2>
                    <p className={s.lead}>
                        {isEn
                            ? 'Cases from the professional career of Kayllon Rogger Nunes, KR’s engineer. They are not direct contracts between KR and the asset owners.'
                            : 'Casos da trajetória profissional de Kayllon Rogger Nunes, engenheiro da KR. Não representam contratos diretos da KR com os proprietários das instalações.'}
                    </p>
                </div>

                <ul className={styles.list}>
                    {projects.map((project) => (
                        <li key={project.slug} className={styles.item}>
                            <div className={styles.where}>
                                <span className={styles.location}>{project.location[locale]}</span>
                            </div>
                            <div className={styles.what}>
                                <h3 className={styles.itemTitle}>{project.title[locale]}</h3>
                                <p className={styles.itemText}>{project.headline[locale]}</p>
                                <ul className={styles.techList} aria-label={isEn ? 'Technologies' : 'Tecnologias'}>
                                    {project.technologies.map((tech) => (
                                        <li key={tech}>{techLabel(tech, locale)}</li>
                                    ))}
                                </ul>
                            </div>
                            <Link href={projectHref(project.slug, locale)} className={styles.itemLink}>
                                {isEn ? 'View details' : 'Ver detalhes'}
                                <span className="sr-only">: {project.title[locale]}</span>
                                <span aria-hidden="true"> →</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
