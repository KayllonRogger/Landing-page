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
        badge: 'Estudos • Proteção • Automação • Comissionamento',
        title: 'Engenharia de proteção e automação',
        titleHighlight: 'com experiência multimarcas',
        subtitle:
            'Parametrização, testes e comissionamento em plataformas ABB, Schneider Electric, SEL e Siemens, além de experiência em comissionamento envolvendo IEDs GE.',
        audience:
            'Para empresas de engenharia, integradoras e equipes de manutenção que precisam de estudos elétricos, retrofit, testes de painéis ou reforço em comissionamento de subestações e plantas industriais.',
        primaryCta: 'Solicitar conversa técnica',
        secondaryCta: 'Ver serviços',
        contactHref: '/contato',
        servicesHref: '#servicos',
        facts: ['Subestações até 500 kV', 'Brasil, EUA e Polônia', 'IEC 61850 · GOOSE e MMS'],
        factsLabel: 'Destaques da experiência',
    },
    en: {
        imageAlt: 'High-voltage substation yard',
        badge: 'Studies • Protection • Automation • Commissioning',
        title: 'Protection and automation engineering',
        titleHighlight: 'with multi-vendor experience',
        subtitle:
            'Relay settings, testing, and commissioning on ABB, Schneider Electric, SEL, and Siemens platforms, plus commissioning experience involving GE IEDs.',
        audience:
            'For engineering firms, system integrators, and maintenance teams that need electrical studies, retrofits, panel testing, or commissioning support for substations and industrial plants.',
        primaryCta: 'Request a technical call',
        secondaryCta: 'View services',
        contactHref: '/en/contact',
        servicesHref: '#services',
        facts: ['Substations up to 500 kV', 'Brazil, USA, and Poland', 'IEC 61850 · GOOSE and MMS'],
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
                        <a href={t.servicesHref} className={styles.btnSecondary}>
                            {t.secondaryCta}
                        </a>
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
