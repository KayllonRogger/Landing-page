import Image from 'next/image';
import Link from 'next/link';
import s from '../Section/Section.module.css';
import styles from './RecentProjects.module.css';
import { projectHref, projects } from '@/lib/projects';

interface RecentProjectsProps {
    locale?: 'pt' | 'en';
}

// Three documented cases with authorized photos. Home-sized copies of the
// photos live in /public/images/home (the originals are 3000-4000 px wide).
const SELECTED: { slug: string; image: string }[] = [
    { slug: 'subestacao-500kv-espirito-santo', image: '/images/home/exp-500kv.jpg' },
    { slug: 'conexao-eolica-offshore-400kv-polonia', image: '/images/home/exp-polonia.jpg' },
    { slug: 'retrofit-sel-mineracao-minas-gerais', image: '/images/home/exp-mineracao.jpg' },
];

export default function RecentProjects({ locale = 'pt' }: RecentProjectsProps) {
    const isEn = locale === 'en';
    const items = SELECTED.map((sel) => ({ ...sel, project: projects.find((p) => p.slug === sel.slug)! }));

    return (
        <section id={isEn ? 'projects' : 'projetos'} className={s.section} aria-labelledby="projetos-title">
            <div className={s.container}>
                <div className={styles.header}>
                    <div>
                        <p className={s.eyebrow}>{isEn ? 'Selected experience' : 'Experiência selecionada'}</p>
                        <h2 id="projetos-title" className={s.title}>
                            {isEn ? 'From the field' : 'Do campo'}
                        </h2>
                        <p className={styles.note}>
                            {isEn
                                ? 'Professional experience of KR’s engineer. Not direct contracts between KR and the asset owners.'
                                : 'Experiência profissional do engenheiro da KR. Não são contratos diretos da KR com os proprietários das instalações.'}
                        </p>
                    </div>
                    <Link href={isEn ? '/en/projects/' : '/projetos/'} className={styles.allLink}>
                        {isEn ? 'All experience' : 'Toda a experiência'}<span aria-hidden="true"> →</span>
                    </Link>
                </div>

                <ul className={styles.grid}>
                    {items.map(({ slug, image, project }) => (
                        <li key={slug} className={styles.item}>
                            <div className={styles.media}>
                                <Image src={image} alt="" fill sizes="(max-width: 768px) 100vw, 380px" className={styles.image} />
                            </div>
                            <p className={styles.location}>{project.location[locale]}</p>
                            <h3 className={styles.itemTitle}>
                                <Link href={projectHref(slug, locale)} className={styles.itemLink}>
                                    {project.title[locale]}
                                </Link>
                            </h3>
                            <p className={styles.itemText}>{project.headline[locale]}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
