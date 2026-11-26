import Link from 'next/link';
import s from '../Section/Section.module.css';
import styles from './Services.module.css';
import { serviceByKey, type ServiceKey } from '@/lib/services/catalog';

interface ServicesProps {
    locale?: 'pt' | 'en';
}

// Home: three main solution areas. Electrical studies stay in the full catalog.
const AREAS: { key: ServiceKey; title: { pt: string; en: string }; text: { pt: string; en: string } }[] = [
    {
        key: 'testes-comissionamento',
        title: { pt: 'Testes e Comissionamento', en: 'Testing & Commissioning' },
        text: {
            pt: 'TAF, TAC e testes funcionais de sistemas de proteção, com parametrização e integração de IEDs multimarcas.',
            en: 'FAT, SAT, and functional testing of protection systems, with multi-vendor IED settings and integration.',
        },
    },
    {
        key: 'diagnostico-falhas',
        title: { pt: 'Diagnóstico e Investigação de Falhas', en: 'Fault Diagnosis & Investigation' },
        text: {
            pt: 'Atuações indevidas, falhas de trip e inconsistências de ajuste analisadas a partir de oscilografias e registros.',
            en: 'Unwanted operations, trip failures, and settings inconsistencies analyzed from oscillography and event records.',
        },
    },
    {
        key: 'retrofit-spcs',
        title: { pt: 'Proteção, Controle e Automação', en: 'Protection, Control & Automation' },
        text: {
            pt: 'Retrofit de sistemas legados, IEC 61850 com GOOSE e MMS e integração ao supervisório.',
            en: 'Legacy system retrofits, IEC 61850 with GOOSE and MMS, and SCADA integration.',
        },
    },
];

export default function Services({ locale = 'pt' }: ServicesProps) {
    const isEn = locale === 'en';

    return (
        <section id={isEn ? 'services' : 'servicos'} className={s.section} aria-labelledby="servicos-title">
            <div className={`${s.container} ${styles.layout}`}>
                <div className={styles.intro}>
                    <p className={s.eyebrow}>{isEn ? 'Solutions' : 'Soluções'}</p>
                    <h2 id="servicos-title" className={s.title}>
                        {isEn ? 'Three areas, one engineering standard' : 'Três frentes, o mesmo rigor técnico'}
                    </h2>
                    <p className={styles.lead}>
                        {isEn
                            ? 'Hire a single stage or an integrated package. Scope and responsibilities are set in the proposal.'
                            : 'Contrate uma etapa ou um pacote integrado. Escopo e responsabilidades ficam definidos na proposta.'}
                    </p>
                    <Link href={isEn ? '/en/services/' : '/servicos/'} className={styles.catalogLink}>
                        {isEn ? 'Full catalog, including electrical studies' : 'Catálogo completo, com estudos elétricos'}
                        <span aria-hidden="true"> →</span>
                    </Link>
                </div>

                <ol className={styles.list}>
                    {AREAS.map((area, index) => {
                        const service = serviceByKey(area.key)!;
                        return (
                            <li key={area.key} className={styles.item}>
                                <span className={styles.number} aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                                <div>
                                    <h3 className={styles.itemTitle}>
                                        <Link href={service.href[locale]} className={styles.itemLink}>
                                            {area.title[locale]}
                                        </Link>
                                    </h3>
                                    <p className={styles.itemText}>{area.text[locale]}</p>
                                </div>
                                <span className={styles.arrow} aria-hidden="true">→</span>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
