'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

interface HeroProps {
    locale?: 'pt' | 'en';
}

const COPY = {
    pt: {
        imageAlt: 'Pátio de subestação de alta tensão',
        badge: 'Proteção • Controle • Automação • Comissionamento',
        title: 'Engenharia especializada',
        titleHighlight: 'para sistemas elétricos mais confiáveis',
        subtitle:
            'Da investigação de falhas ao comissionamento de sistemas de proteção e controle, a KR apoia indústrias, integradores e empresas de engenharia com análise técnica, ensaios e soluções de automação.',
        audience:
            'Experiência multimarcas em IEDs ABB, Schneider Electric, SEL e Siemens, e em comissionamento envolvendo IEDs GE. Operação enxuta: o escopo, a equipe e os recursos de cada trabalho são definidos na proposta.',
        primaryCta: 'Apresentar uma demanda técnica',
        secondaryCta: 'Conhecer nossos serviços',
        contactHref: '/contato/',
        servicesHref: '/servicos/',
        facts: ['Subestações até 500 kV', 'Brasil, EUA, Canadá, Chile e Polônia', 'IEC 61850 · GOOSE e MMS'],
        factsLabel: 'Destaques da experiência',
    },
    en: {
        imageAlt: 'High-voltage substation yard',
        badge: 'Protection • Control • Automation • Commissioning',
        title: 'Specialized engineering',
        titleHighlight: 'for more reliable electrical systems',
        subtitle:
            'From fault investigation to commissioning of protection and control systems, KR supports industrial plants, system integrators, and engineering firms with technical analysis, testing, and automation solutions.',
        audience:
            'Multi-vendor experience with ABB, Schneider Electric, SEL, and Siemens IEDs, plus commissioning involving GE IEDs. A lean operation: the scope, team, and resources for each job are set in the proposal.',
        primaryCta: 'Present a technical need',
        secondaryCta: 'Explore our services',
        contactHref: '/en/contact/',
        servicesHref: '/en/services/',
        facts: ['Substations up to 500 kV', 'Brazil, USA, Canada, Chile, and Poland', 'IEC 61850 · GOOSE and MMS'],
        factsLabel: 'Experience highlights',
    },
};

export default function Hero({ locale = 'pt' }: HeroProps) {
    const t = COPY[locale];

    return (
        <section id={locale === 'en' ? 'home' : 'inicio'} className={styles.hero}>
            <Image
                src="/Image/20211228_131619.jpg"
                alt={t.imageAlt}
                fill
                priority
                quality={90}
                sizes="100vw"
                className={styles.bgImage}
            />

            <div className={styles.overlay}></div>

            <div className={styles.content}>
                <div className={styles.textContent}>
                    <p className={styles.badge}>{t.badge}</p>

                    <h1 className={styles.title}>
                        {t.title}{' '}
                        <span className={styles.titleHighlight}>{t.titleHighlight}</span>
                    </h1>

                    <p className={styles.subtitle}>{t.subtitle}</p>

                    <p className={styles.description}>{t.audience}</p>

                    <div className={styles.buttons}>
                        <Link href={t.contactHref} className={styles.btnPrimary}>
                            {t.primaryCta}
                        </Link>
                        <Link href={t.servicesHref} className={styles.btnSecondary}>
                            {t.secondaryCta}
                        </Link>
                    </div>

                    <ul className={styles.facts} aria-label={t.factsLabel}>
                        {t.facts.map((fact) => (
                            <li key={fact} className={styles.fact}>{fact}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
