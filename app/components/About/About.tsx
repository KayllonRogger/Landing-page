import Image from 'next/image';
import Link from 'next/link';
import s from '../Section/Section.module.css';
import styles from './About.module.css';

interface AboutProps {
    locale?: 'pt' | 'en';
}

const COPY = {
    pt: {
        eyebrow: 'Engenheiro responsável',
        name: 'Kayllon Rogger Nunes',
        text: 'Engenheiro com atuação de campo em subestações, indústrias, mineração e aplicações offshore, do TAF à energização. Na KR, é ele quem faz a conversa técnica e coordena cada entrega.',
        lean: 'A KR é uma empresa de engenharia de pequeno porte. A capacidade de cada trabalho é confirmada antes da proposta.',
        facts: [
            { value: '500 kV', label: 'maior tensão em comissionamento' },
            { value: '5 países', label: 'Brasil, EUA, Canadá, Chile e Polônia' },
            { value: '5 fabricantes', label: 'de IEDs com experiência de campo' },
        ],
        skillsLabel: 'Competências',
        skills: ['Parametrização e testes de IEDs', 'IEC 61850 · GOOSE e MMS', 'TAF e TAC', 'Seletividade lógica', 'Inglês fluente'],
        link: 'Conheça a KR',
        href: '/sobre/',
        imageAlt: 'Kayllon Rogger Nunes em pátio de subestação de 400 kV, na Polônia',
    },
    en: {
        eyebrow: 'Responsible engineer',
        name: 'Kayllon Rogger Nunes',
        text: 'Engineer with field experience at substations, industrial plants, mining sites, and offshore applications, from FAT to energization. At KR, he holds the technical call and coordinates every delivery.',
        lean: 'KR is a small engineering company. Capacity for each job is confirmed before the proposal.',
        facts: [
            { value: '500 kV', label: 'highest commissioning voltage' },
            { value: '5 countries', label: 'Brazil, USA, Canada, Chile, and Poland' },
            { value: '5 vendors', label: 'of IEDs with hands-on experience' },
        ],
        skillsLabel: 'Expertise',
        skills: ['IED settings and testing', 'IEC 61850 · GOOSE and MMS', 'FAT and SAT', 'Logic selectivity', 'Fluent English'],
        link: 'More about KR',
        href: '/en/about/',
        imageAlt: 'Kayllon Rogger Nunes at a 400 kV substation yard in Poland',
    },
};

export default function About({ locale = 'pt' }: AboutProps) {
    const t = COPY[locale];

    return (
        <section id={locale === 'en' ? 'about' : 'sobre'} className={s.sectionAlt} aria-labelledby="sobre-title">
            <div className={`${s.container} ${styles.layout}`}>
                <figure className={styles.photo}>
                    <Image
                        src="/Image/20260130_130042.jpg"
                        alt={t.imageAlt}
                        fill
                        sizes="(max-width: 900px) 100vw, 420px"
                        className={styles.image}
                    />
                </figure>

                <div>
                    <p className={s.eyebrow}>{t.eyebrow}</p>
                    <h2 id="sobre-title" className={s.title}>{t.name}</h2>
                    <p className={styles.text}>{t.text}</p>

                    <dl className={styles.facts}>
                        {t.facts.map((fact) => (
                            <div key={fact.value}>
                                <dt className={styles.factValue}>{fact.value}</dt>
                                <dd className={styles.factLabel}>{fact.label}</dd>
                            </div>
                        ))}
                    </dl>

                    <p className={styles.skillsLabel}>{t.skillsLabel}</p>
                    <ul className={styles.skills}>
                        {t.skills.map((skill) => (
                            <li key={skill}>{skill}</li>
                        ))}
                    </ul>

                    <p className={styles.lean}>{t.lean}</p>
                    <Link href={t.href} className={styles.link}>
                        {t.link}<span aria-hidden="true"> →</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
