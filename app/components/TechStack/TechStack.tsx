'use client';

import s from '../Section/Section.module.css';
import styles from './TechStack.module.css';

type L = { pt: string; en: string };

interface Vendor {
    brand: string;
    platforms: L;
    reference: L;
}

// Alphabetical order; every vendor gets the same card layout and weight.
const vendors: Vendor[] = [
    {
        brand: 'ABB',
        platforms: { pt: 'Relion séries 615, 650 e 670', en: 'Relion 615, 650, and 670 series' },
        reference: {
            pt: 'Comissionamento em conexão eólica offshore de 400 kV na Polônia.',
            en: 'Commissioning at a 400 kV offshore wind connection in Poland.',
        },
    },
    {
        brand: 'GE',
        platforms: { pt: 'IEDs GE em comissionamento', en: 'GE IEDs in commissioning' },
        reference: {
            pt: 'Comissionamento envolvendo IEDs GE em conexão eólica offshore de 400 kV na Polônia.',
            en: 'Commissioning involving GE IEDs at a 400 kV offshore wind connection in Poland.',
        },
    },
    {
        brand: 'Schneider Electric',
        platforms: { pt: 'Easergy, MiCOM linha P e BCU C264', en: 'Easergy, MiCOM P-series, and C264 BCU' },
        reference: {
            pt: 'Integração e comissionamento de MiCOM linha P e BCU C264 em subestação de 230 kV no Pará.',
            en: 'Integration and commissioning of MiCOM P-series IEDs and a C264 BCU at a 230 kV substation in Pará, Brazil.',
        },
    },
    {
        brand: 'SEL',
        platforms: { pt: 'SEL-751, SEL-787 e SEL-2414', en: 'SEL-751, SEL-787, and SEL-2414' },
        reference: {
            pt: 'Parametrização, testes em TAF e lógica de transferência em retrofit de subestação de mineração em Minas Gerais.',
            en: 'Settings, FAT testing, and transfer logic in a mining substation retrofit in Minas Gerais, Brazil.',
        },
    },
    {
        brand: 'Siemens',
        platforms: { pt: 'SIPROTEC 5 com DIGSI 5', en: 'SIPROTEC 5 with DIGSI 5' },
        reference: {
            pt: 'Integração, parametrização e ensaios em subestação de 500 kV no Espírito Santo.',
            en: 'Integration, settings, and testing at a 500 kV substation in Espírito Santo, Brazil.',
        },
    },
];

const groups: { title: L; items: L[]; note?: L }[] = [
    {
        title: { pt: 'Comunicação e integração', en: 'Communication and integration' },
        items: [
            { pt: 'IEC 61850', en: 'IEC 61850' },
            { pt: 'Mensagens GOOSE', en: 'GOOSE messaging' },
            { pt: 'MMS', en: 'MMS' },
            { pt: 'Integração de pontos ao supervisório', en: 'SCADA point integration' },
            { pt: 'Seletividade lógica', en: 'Logic selectivity' },
        ],
    },
    {
        title: { pt: 'Ferramentas de engenharia e ensaio', en: 'Engineering and test tools' },
        items: [
            { pt: 'DIGSI 4', en: 'DIGSI 4' },
            { pt: 'DIGSI 5', en: 'DIGSI 5' },
            { pt: 'IEC 61850 System Configurator', en: 'IEC 61850 System Configurator' },
            { pt: 'PCM600', en: 'PCM600' },
            { pt: 'EnerVista', en: 'EnerVista' },
            { pt: 'Easergy Studio', en: 'Easergy Studio' },
            { pt: 'PACiS SCE / CAT', en: 'PACiS SCE / CAT' },
            { pt: 'acSELerator QuickSet', en: 'acSELerator QuickSet' },
            { pt: 'acSELerator Architect', en: 'acSELerator Architect' },
            { pt: 'IEDScout', en: 'IEDScout' },
            { pt: 'OMICRON Test Universe', en: 'OMICRON Test Universe' },
        ],
        note: {
            pt: 'O instrumental de ensaio é fornecido pelo contratante ou previsto por locação, conforme a proposta.',
            en: 'Test equipment is supplied by the client or planned as a rental, as set in the proposal.',
        },
    },
];

const facts: { value: L; label: L }[] = [
    { value: { pt: '500 kV', en: '500 kV' }, label: { pt: 'Maior tensão em comissionamento', en: 'Highest commissioning voltage' } },
    { value: { pt: '3 países', en: '3 countries' }, label: { pt: 'Brasil, Estados Unidos e Polônia', en: 'Brazil, United States, and Poland' } },
    { value: { pt: '5 fabricantes', en: '5 vendors' }, label: { pt: 'de IEDs com experiência de campo', en: 'of IEDs with hands-on experience' } },
    { value: { pt: 'Inglês fluente', en: 'Fluent English' }, label: { pt: 'Atuação em projetos internacionais', en: 'Work on international projects' } },
];

interface TechStackProps {
    locale?: 'pt' | 'en';
}

export default function TechStack({ locale = 'pt' }: TechStackProps) {
    const isEn = locale === 'en';

    return (
        <section className={s.sectionAlt} id={isEn ? 'expertise' : 'competencias'} aria-labelledby="competencias-title">
            <div className={s.container}>
                <div className={s.header}>
                    <p className={s.eyebrow}>{isEn ? 'Multi-vendor expertise' : 'Competências multimarcas'}</p>
                    <h2 id="competencias-title" className={s.title}>
                        {isEn ? 'Protection and control platforms' : 'Plataformas de proteção e controle'}
                    </h2>
                    <p className={s.lead}>
                        {isEn
                            ? 'Relay settings, testing, and commissioning on ABB, Schneider Electric, SEL, and Siemens platforms, plus commissioning experience involving GE IEDs.'
                            : 'Parametrização, testes e comissionamento em plataformas ABB, Schneider Electric, SEL e Siemens, além de experiência em comissionamento envolvendo IEDs GE.'}
                    </p>
                </div>

                <dl className={styles.facts}>
                    {facts.map((fact) => (
                        <div key={fact.value.pt} className={styles.fact}>
                            <dt className={styles.factValue}>{fact.value[locale]}</dt>
                            <dd className={styles.factLabel}>{fact.label[locale]}</dd>
                        </div>
                    ))}
                </dl>

                <h3 className={styles.groupHeading}>{isEn ? 'IED vendors' : 'Fabricantes de IEDs'}</h3>
                <ul className={styles.vendorGrid}>
                    {vendors.map((vendor) => (
                        <li key={vendor.brand} className={styles.vendorCard}>
                            <h4 className={styles.vendorName}>{vendor.brand}</h4>
                            <p className={styles.vendorPlatforms}>{vendor.platforms[locale]}</p>
                            <p className={styles.vendorReference}>
                                <span className={styles.vendorReferenceLabel}>{isEn ? 'Field reference' : 'Referência de campo'}</span>
                                {vendor.reference[locale]}
                            </p>
                        </li>
                    ))}
                </ul>

                <div className={styles.groupRow}>
                    {groups.map((group) => (
                        <div key={group.title.pt} className={styles.groupCard}>
                            <h3 className={styles.groupTitle}>{group.title[locale]}</h3>
                            <ul className={styles.chipList}>
                                {group.items.map((item) => (
                                    <li key={item.pt} className={styles.chip}>{item[locale]}</li>
                                ))}
                            </ul>
                            {group.note && <p className={styles.groupNote}>{group.note[locale]}</p>}
                        </div>
                    ))}
                </div>

                <p className={styles.disclaimer}>
                    {isEn
                        ? 'The brands listed describe professional experience. They do not represent authorized service agreements, manufacturer certifications, or partnerships.'
                        : 'As marcas citadas descrevem experiência profissional. Não representam assistência técnica autorizada, certificação de fabricante nem parceria.'}
                </p>
            </div>
        </section>
    );
}
