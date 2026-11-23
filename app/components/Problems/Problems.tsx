import Link from 'next/link';
import s from '../Section/Section.module.css';
import styles from './Problems.module.css';
import { serviceByKey, type Locale, type ServiceKey } from '@/lib/services/catalog';

type L = { pt: string; en: string };

// Home section 1: the problems KR is hired to solve, each pointing to the service that handles it.
const PROBLEMS: { title: L; text: L; service: ServiceKey }[] = [
    {
        title: { pt: 'Atuação indevida sem causa aparente', en: 'Unwanted trip with no apparent cause' },
        text: {
            pt: 'Um disjuntor abriu, ou a proteção atuou fora da zona esperada, e a instalação voltou a operar sem explicação.',
            en: 'A breaker opened, or protection operated outside its expected zone, and the plant went back into service without an explanation.',
        },
        service: 'diagnostico-falhas',
    },
    {
        title: { pt: 'Falha de comando ou de trip', en: 'Command or trip failure' },
        text: {
            pt: 'O comando de abertura não foi executado ou chegou com atraso, e é preciso verificar circuitos, contatos e lógicas.',
            en: 'An opening command was not executed or arrived late, and circuits, contacts, and logic need to be checked.',
        },
        service: 'diagnostico-falhas',
    },
    {
        title: { pt: 'Painéis que precisam de TAF', en: 'Panels that need FAT' },
        text: {
            pt: 'Painéis de proteção precisam ser parametrizados e testados antes do envio a campo, com critérios de aceite acordados.',
            en: 'Protection panels need settings and testing before shipping to site, with agreed acceptance criteria.',
        },
        service: 'testes-comissionamento',
    },
    {
        title: { pt: 'Comissionamento com prazo curto', en: 'Commissioning on a tight schedule' },
        text: {
            pt: 'A janela de comissionamento é curta e a equipe precisa de reforço especializado por escopo ou período.',
            en: 'The commissioning window is short and the team needs specialized support by scope or period.',
        },
        service: 'testes-comissionamento',
    },
    {
        title: { pt: 'Sistema legado a modernizar', en: 'A legacy system to modernize' },
        text: {
            pt: 'Relés antigos ou sem suporte precisam ser substituídos e integrados em IEC 61850 e ao supervisório, dentro da parada.',
            en: 'Old or unsupported relays need replacing and integrating over IEC 61850 and with SCADA, within the shutdown.',
        },
        service: 'retrofit-spcs',
    },
    {
        title: { pt: 'Ajustes sem estudo atualizado', en: 'Settings without an up-to-date study' },
        text: {
            pt: 'A instalação mudou, mas os ajustes não acompanharam, e a seletividade entre as proteções está em dúvida.',
            en: 'The installation changed but the settings did not, and selectivity between protection devices is in question.',
        },
        service: 'estudos-eletricos',
    },
];

export default function Problems({ locale = 'pt' }: { locale?: Locale }) {
    const isEn = locale === 'en';

    return (
        <section id={isEn ? 'problems' : 'problemas'} className={s.sectionAlt} aria-labelledby="problemas-title">
            <div className={s.container}>
                <div className={s.header}>
                    <p className={s.eyebrow}>{isEn ? 'Problems we solve' : 'Problemas que resolvemos'}</p>
                    <h2 id="problemas-title" className={s.title}>
                        {isEn ? 'When to call KR' : 'Quando chamar a KR'}
                    </h2>
                    <p className={s.lead}>
                        {isEn
                            ? 'Situations in protection, control, and automation systems where specialized analysis or testing makes the difference.'
                            : 'Situações em sistemas de proteção, controle e automação em que análise ou ensaio especializado fazem diferença.'}
                    </p>
                </div>

                <ul className={styles.grid}>
                    {PROBLEMS.map((problem) => {
                        const service = serviceByKey(problem.service)!;
                        return (
                            <li key={problem.title.pt} className={styles.card}>
                                <h3 className={styles.cardTitle}>{problem.title[locale]}</h3>
                                <p className={styles.cardText}>{problem.text[locale]}</p>
                                <Link href={service.href[locale]} className={styles.cardLink}>
                                    {service.title[locale]}
                                    <span aria-hidden="true"> →</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}
