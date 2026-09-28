'use client';

import Link from 'next/link';
import s from '../Section/Section.module.css';
import styles from './EntryOffer.module.css';
import { COMPANY, whatsappUrl } from '@/lib/company';

interface EntryOfferProps {
    locale?: 'pt' | 'en';
}

const COPY = {
    pt: {
        eyebrow: 'Contato',
        title: 'Tem um estudo, teste, comissionamento ou retrofit pela frente?',
        text: 'Conte o tipo de instalação, os equipamentos envolvidos e a janela prevista. O primeiro passo é uma conversa técnica de cerca de 15 minutos com o engenheiro que vai tratar da demanda.',
        primary: 'Descrever minha demanda',
        whatsapp: 'Conversar pelo WhatsApp',
        whatsappMessage: 'Olá! Gostaria de conversar sobre uma demanda técnica com a KR Engenharia.',
        topicsLabel: 'Ou comece pelo assunto no WhatsApp:',
        topics: [
            { label: 'Estudos elétricos', message: 'Olá! Gostaria de conversar sobre estudos elétricos (proteção, seletividade, curto-circuito ou fluxo de potência).' },
            { label: 'Parametrização de IEDs', message: 'Olá! Gostaria de conversar sobre parametrização e testes de IEDs de proteção.' },
            { label: 'Testes de painéis / TAF', message: 'Olá! Gostaria de conversar sobre testes de painéis de proteção / TAF.' },
            { label: 'Comissionamento', message: 'Olá! Gostaria de conversar sobre reforço técnico em um comissionamento.' },
            { label: 'Retrofit / parada', message: 'Olá! Gostaria de conversar sobre um retrofit de proteção e automação ou uma parada programada.' },
        ],
        contactHref: '/contato',
        referral: 'Se a contratação estiver com outra pessoa da sua empresa, a indicação do responsável também ajuda.',
    },
    en: {
        eyebrow: 'Contact',
        title: 'Is there a study, test, commissioning, or retrofit coming up?',
        text: 'Tell us the type of installation, the equipment involved, and the planned window. The first step is a technical call of about 15 minutes with the engineer who will handle the request.',
        primary: 'Describe my need',
        whatsapp: 'Chat on WhatsApp',
        whatsappMessage: 'Hello! I would like to talk about a technical need with KR Engenharia.',
        topicsLabel: 'Or start with a topic on WhatsApp:',
        topics: [
            { label: 'Electrical studies', message: 'Hello! I would like to talk about electrical studies (protection, selectivity, short circuit, or load flow).' },
            { label: 'IED settings', message: 'Hello! I would like to talk about protection IED settings and testing.' },
            { label: 'Panel testing / FAT', message: 'Hello! I would like to talk about protection panel testing / FAT.' },
            { label: 'Commissioning', message: 'Hello! I would like to talk about technical support for a commissioning.' },
            { label: 'Retrofit / shutdown', message: 'Hello! I would like to talk about a protection and automation retrofit or a planned shutdown.' },
        ],
        contactHref: '/en/contact',
        referral: 'If hiring is handled by someone else in your company, a referral to the right person also helps.',
    },
};

export default function EntryOffer({ locale = 'pt' }: EntryOfferProps) {
    const t = COPY[locale];

    return (
        <section className={s.sectionDark} id={locale === 'en' ? 'contact' : 'contato'} aria-labelledby="contato-final-title">
            <div className={`${s.container} ${styles.layout}`}>
                <div>
                    <p className={s.eyebrow}>{t.eyebrow}</p>
                    <h2 id="contato-final-title" className={s.title}>{t.title}</h2>
                    <p className={s.lead}>{t.text}</p>

                    <div className={styles.actions}>
                        <Link href={t.contactHref} className={s.btnPrimary}>{t.primary}</Link>
                        <a href={whatsappUrl(t.whatsappMessage)} target="_blank" rel="noopener noreferrer" className={s.btnSecondaryDark}>
                            {t.whatsapp}
                        </a>
                    </div>
                    <p className={styles.referral}>{t.referral}</p>
                </div>

                <div className={styles.topics}>
                    <p className={styles.topicsLabel}>{t.topicsLabel}</p>
                    <ul className={styles.topicList}>
                        {t.topics.map((topic) => (
                            <li key={topic.label}>
                                <a href={whatsappUrl(topic.message)} target="_blank" rel="noopener noreferrer" className={styles.topic}>
                                    {topic.label}
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </li>
                        ))}
                    </ul>
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
