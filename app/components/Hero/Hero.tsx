import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
    locale?: 'pt' | 'en';
}

const COPY = {
    pt: {
        imageAlt: 'Pátio de subestação de 500 kV no Espírito Santo',
        eyebrow: 'Proteção · Controle · Automação',
        title: 'Engenharia especializada',
        titleHighlight: 'para sistemas elétricos mais confiáveis',
        subtitle:
            'Testes, comissionamento e investigação de falhas em sistemas de proteção e controle, com método e documentação em cada etapa.',
        primaryCta: 'Apresentar uma demanda técnica',
        secondaryCta: 'Conhecer os serviços',
        contactHref: '/contato/',
        servicesHref: '/servicos/',
        facts: ['Subestações até 500 kV', 'Brasil, EUA, Canadá, Chile e Polônia', 'IEC 61850'],
        factsLabel: 'Destaques da experiência',
        photoCaption: 'Subestação de 500 kV · Espírito Santo',
    },
    en: {
        imageAlt: '500 kV substation yard in Espírito Santo, Brazil',
        eyebrow: 'Protection · Control · Automation',
        title: 'Specialized engineering',
        titleHighlight: 'for more reliable electrical systems',
        subtitle:
            'Testing, commissioning, and fault investigation for protection and control systems, with a documented method at every stage.',
        primaryCta: 'Present a technical need',
        secondaryCta: 'Explore the services',
        contactHref: '/en/contact/',
        servicesHref: '/en/services/',
        facts: ['Substations up to 500 kV', 'Brazil, USA, Canada, Chile, and Poland', 'IEC 61850'],
        factsLabel: 'Experience highlights',
        photoCaption: '500 kV substation · Espírito Santo, Brazil',
    },
};

export default function Hero({ locale = 'pt' }: HeroProps) {
    const t = COPY[locale];

    return (
        <section id={locale === 'en' ? 'home' : 'inicio'} className={styles.hero}>
            <Image
                src="/images/home/hero-subestacao-500kv.jpg"
                alt={t.imageAlt}
                fill
                priority
                sizes="100vw"
                className={styles.bgImage}
            />
            <div className={styles.overlay} aria-hidden="true"></div>

            <div className={styles.content}>
                <div className={styles.textContent}>
                    <p className={styles.eyebrow}>{t.eyebrow}</p>
                    <h1 className={styles.title}>
                        {t.title} <span className={styles.titleHighlight}>{t.titleHighlight}</span>
                    </h1>
                    <p className={styles.subtitle}>{t.subtitle}</p>

                    <div className={styles.buttons}>
                        <Link href={t.contactHref} className={styles.btnPrimary}>{t.primaryCta}</Link>
                        <Link href={t.servicesHref} className={styles.btnSecondary}>{t.secondaryCta}</Link>
                    </div>
                </div>

                <ul className={styles.facts} aria-label={t.factsLabel}>
                    {t.facts.map((fact) => (
                        <li key={fact}>{fact}</li>
                    ))}
                </ul>
            </div>
            <p className={styles.caption}>{t.photoCaption}</p>
        </section>
    );
}
