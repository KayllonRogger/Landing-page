import Link from 'next/link';
import s from '../Section/Section.module.css';
import styles from './EntryOffer.module.css';
import { COMPANY, whatsappUrl } from '@/lib/company';

interface EntryOfferProps {
    locale?: 'pt' | 'en';
}

// The only commercial call on the home page; it also answers "how do I hire?".
const COPY = {
    pt: {
        title: 'Precisa de apoio técnico especializado?',
        text: 'Conte o tipo de instalação, os equipamentos e a janela prevista. Não é preciso enviar documentos agora.',
        stepsLabel: 'Como funciona a contratação',
        steps: ['Você descreve a demanda', 'Conversa técnica de cerca de 15 minutos', 'Proposta com escopo, premissas e responsáveis'],
        primary: 'Apresentar uma demanda técnica',
        whatsapp: 'Ou fale pelo WhatsApp',
        whatsappMessage: 'Olá! Gostaria de conversar sobre uma demanda técnica com a KR Engenharia.',
        contactHref: '/contato/',
    },
    en: {
        title: 'Need specialized technical support?',
        text: 'Tell us the type of installation, the equipment, and the planned window. No documents are needed at this stage.',
        stepsLabel: 'How hiring works',
        steps: ['You describe the need', 'A technical call of about 15 minutes', 'A proposal with scope, assumptions, and owners'],
        primary: 'Present a technical need',
        whatsapp: 'Or chat on WhatsApp',
        whatsappMessage: 'Hello! I would like to talk about a technical need with KR Engenharia.',
        contactHref: '/en/contact/',
    },
};

export default function EntryOffer({ locale = 'pt' }: EntryOfferProps) {
    const t = COPY[locale];

    return (
        <section className={s.sectionDark} id={locale === 'en' ? 'contact' : 'contato'} aria-labelledby="contato-final-title">
            <div className={`${s.container} ${styles.layout}`}>
                <div>
                    <h2 id="contato-final-title" className={styles.title}>{t.title}</h2>
                    <p className={styles.text}>{t.text}</p>
                    <div className={styles.actions}>
                        <Link href={t.contactHref} className={s.btnPrimary}>{t.primary}</Link>
                        <a href={whatsappUrl(t.whatsappMessage)} target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
                            {t.whatsapp}<span aria-hidden="true"> ↗</span>
                        </a>
                    </div>
                </div>

                <div>
                    <h3 className={styles.stepsLabel}>{t.stepsLabel}</h3>
                    <ol className={styles.steps}>
                        {t.steps.map((step, index) => (
                            <li key={step}>
                                <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
                                {step}
                            </li>
                        ))}
                    </ol>
                    <p className={styles.direct}>
                        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                        <span aria-hidden="true"> · </span>
                        <a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a>
                    </p>
                </div>
            </div>
        </section>
    );
}
