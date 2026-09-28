'use client';

import Link from 'next/link';
import s from '../Section/Section.module.css';
import styles from './Services.module.css';

interface ServicesProps {
    locale?: 'pt' | 'en';
}

const SERVICES = {
    pt: [
        {
            title: 'Estudos elétricos',
            description: 'Proteção, coordenação e seletividade, curto-circuito e fluxo de potência. Transitórios com modalidade e escopo definidos conforme a necessidade técnica.',
            deliverables: ['Memória de cálculo e curvas', 'Tabela de ajustes', 'Premissas documentadas'],
            href: '/estudos-de-protecao-e-seletividade/',
        },
        {
            title: 'Parametrização e testes',
            description: 'Implementação de ajustes e lógicas aprovados em IEDs multimarcas e testes de painéis em TAF, com procedimentos e critérios de aceite acordados.',
            deliverables: ['Arquivos de configuração', 'Testes de seletividade lógica', 'Relatório e pendências'],
            href: '/comissionamento-e-ensaios-em-campo/',
        },
        {
            title: 'Comissionamento',
            description: 'Reforço para equipes de comissionamento, por escopo ou período, no Brasil e no exterior: verificação de proteção, integração e lógicas em campo.',
            deliverables: ['Testes funcionais em campo', 'Apoio ao TAC', 'As-built quando contratado'],
            href: '/comissionamento-e-ensaios-em-campo/',
        },
        {
            title: 'Retrofit e automação',
            description: 'Integração de IEDs em IEC 61850 (GOOSE e MMS), pontos no supervisório e lógicas aprovadas, como transferência automática de carga.',
            deliverables: ['Configuração de comunicação', 'Testes ponto a ponto', 'Lógicas documentadas'],
            href: '/automacao-sistemas-eletricos/',
        },
    ],
    en: [
        {
            title: 'Electrical studies',
            description: 'Protection, coordination, and selectivity, short circuit, and load flow. Transient studies with type and scope defined by the technical need.',
            deliverables: ['Calculation report and curves', 'Settings table', 'Documented assumptions'],
            href: '/en/protection-and-selectivity-studies/',
        },
        {
            title: 'Settings and testing',
            description: 'Implementation of approved settings and logic on multi-vendor IEDs, and panel testing during FAT with agreed procedures and acceptance criteria.',
            deliverables: ['Configuration files', 'Logic selectivity tests', 'Report and open items'],
            href: '/en/commissioning-and-field-testing/',
        },
        {
            title: 'Commissioning',
            description: 'Support for commissioning teams, by scope or period, in Brazil and abroad: field verification of protection, integration, and logic.',
            deliverables: ['Field functional tests', 'SAT support', 'As-built when contracted'],
            href: '/en/commissioning-and-field-testing/',
        },
        {
            title: 'Retrofit and automation',
            description: 'IED integration over IEC 61850 (GOOSE and MMS), SCADA points, and approved logic such as automatic load transfer.',
            deliverables: ['Communication configuration', 'Point-to-point tests', 'Documented logic'],
            href: '/en/power-system-automation/',
        },
    ],
};

export default function Services({ locale = 'pt' }: ServicesProps) {
    const isEn = locale === 'en';
    const services = SERVICES[locale];

    return (
        <section id={isEn ? 'services' : 'servicos'} className={s.section} aria-labelledby="servicos-title">
            <div className={s.container}>
                <div className={styles.headerRow}>
                    <div className={s.header}>
                        <p className={s.eyebrow}>{isEn ? 'Services' : 'Serviços'}</p>
                        <h2 id="servicos-title" className={s.title}>
                            {isEn ? 'What you can hire' : 'O que você pode contratar'}
                        </h2>
                        <p className={s.lead}>
                            {isEn
                                ? 'Hire a single stage or an integrated package, from studies to field verification. KR is your commercial point of contact and coordinates the delivery; who prepares, reviews, approves, and executes each stage is set in the proposal.'
                                : 'Contrate uma etapa isolada ou um pacote integrado, dos estudos à verificação em campo. A KR é a interface comercial e coordena a entrega; quem elabora, revisa, aprova e executa cada etapa é definido na proposta.'}
                        </p>
                    </div>
                    <Link href={isEn ? '/en/services' : '/servicos'} className={s.btnSecondary}>
                        {isEn ? 'Full service catalog' : 'Catálogo completo'}
                    </Link>
                </div>

                <ul className={styles.grid}>
                    {services.map((service, index) => (
                        <li key={service.title} className={styles.card}>
                            <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardText}>{service.description}</p>
                            <ul className={styles.deliverables} aria-label={isEn ? 'Typical deliverables' : 'Entregáveis típicos'}>
                                {service.deliverables.map((d) => (
                                    <li key={d}>{d}</li>
                                ))}
                            </ul>
                            <Link href={service.href} className={styles.cardLink}>
                                {isEn ? 'Service details' : 'Detalhes do serviço'}
                                <span className="sr-only">: {service.title}</span>
                                <span aria-hidden="true"> →</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
