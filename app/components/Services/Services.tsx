import Link from 'next/link';
import s from '../Section/Section.module.css';
import styles from './Services.module.css';
import { catalog } from '@/lib/services/catalog';

interface ServicesProps {
    locale?: 'pt' | 'en';
}

export default function Services({ locale = 'pt' }: ServicesProps) {
    const isEn = locale === 'en';

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
                                ? 'Four service lines, hired as a single stage or as an integrated package. KR is your point of contact and coordinates the delivery; who prepares, reviews, approves, and executes each stage is set in the proposal.'
                                : 'Quatro linhas de serviço, contratadas como etapa isolada ou pacote integrado. A KR é a interface comercial e coordena a entrega; quem elabora, revisa, aprova e executa cada etapa é definido na proposta.'}
                        </p>
                    </div>
                    <Link href={isEn ? '/en/services' : '/servicos'} className={s.btnSecondary}>
                        {isEn ? 'Full service catalog' : 'Catálogo completo'}
                    </Link>
                </div>

                <ul className={styles.grid}>
                    {catalog.map((service, index) => (
                        <li key={service.key} className={styles.card}>
                            <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                            <h3 className={styles.cardTitle}>{service.title[locale]}</h3>
                            <p className={styles.cardText}>{service.description[locale]}</p>
                            <ul className={styles.deliverables} aria-label={isEn ? 'Typical deliverables' : 'Entregáveis típicos'}>
                                {service.deliverables[locale].map((d) => (
                                    <li key={d}>{d}</li>
                                ))}
                            </ul>
                            <Link href={service.href[locale]} className={styles.cardLink}>
                                {isEn ? 'Service details' : 'Detalhes do serviço'}
                                <span className="sr-only">: {service.title[locale]}</span>
                                <span aria-hidden="true"> →</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
