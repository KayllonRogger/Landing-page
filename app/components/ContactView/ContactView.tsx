'use client';

import { useRef, useState } from 'react';
import styles from './ContactView.module.css';
import { COMPANY } from '@/lib/company';

type Locale = 'pt' | 'en';
type Field = 'name' | 'company' | 'email' | 'phone' | 'service' | 'message' | 'website';
type Status =
    | { kind: 'idle' }
    | { kind: 'submitting' }
    | { kind: 'success' }
    | { kind: 'failed'; message: string };

const COPY = {
    pt: {
        eyebrow: 'Contato',
        title: 'Descreva a sua demanda',
        intro: 'Conte o tipo de instalação, os equipamentos envolvidos e a janela prevista. A mensagem é enviada nesta página, sem abrir outro aplicativo.',
        formTitle: 'Formulário de contato',
        required: 'obrigatório',
        optional: 'opcional',
        name: 'Nome',
        company: 'Empresa',
        email: 'E-mail',
        phone: 'Telefone ou WhatsApp',
        contactHint: 'Informe pelo menos um meio de retorno: e-mail ou telefone.',
        service: 'Serviço',
        servicePlaceholder: 'Selecione o serviço',
        services: [
            'Estudos elétricos',
            'Parametrização e testes de proteção',
            'Comissionamento em campo',
            'Retrofit de proteção e automação',
            'Outro assunto',
        ],
        message: 'Mensagem',
        messagePlaceholder: 'Ex.: subestação de 138 kV, relés SEL e Siemens, testes de painéis previstos para março.',
        messageHint: 'Não inclua documentos, desenhos ou dados confidenciais nesta primeira mensagem.',
        submit: 'Enviar mensagem',
        submitting: 'Enviando…',
        success: 'Mensagem enviada com sucesso. Retornaremos pelos dados de contato informados.',
        failed: 'Não foi possível enviar a mensagem agora. Tente novamente ou use o contato direto.',
        errors: {
            summary: 'Revise os campos indicados antes de enviar.',
            name: 'Informe o seu nome.',
            contact: 'Informe um e-mail ou um telefone para retorno.',
            email: 'Informe um e-mail válido, como nome@empresa.com.br.',
            phone: 'Informe um telefone com DDD.',
            message: 'Descreva a demanda em pelo menos 20 caracteres.',
        },
        privacyTitle: 'Privacidade',
        privacy: 'Ao enviar, os dados informados são processados pelo serviço de entrega de e-mail Resend e encaminhados para contato@krconsultoria.com.br, exclusivamente para responder à solicitação. Não envie documentos, desenhos ou informações confidenciais neste primeiro contato. Para sugerir o idioma da página, o site consulta um serviço externo de localização aproximada por IP.',
        direct: 'Contato direto',
        directText: 'Fale com Kayllon Rogger Nunes pelos canais abaixo.',
        emailLabel: 'E-mail',
        phoneLabel: 'Telefone e WhatsApp',
        addressLabel: 'Endereço',
        city: COMPANY.address.cityPt,
        registry: 'Dados cadastrais',
        creaLabel: 'Registro no CREA',
        creaValue: `nº ${COMPANY.crea}`,
    },
    en: {
        eyebrow: 'Contact',
        title: 'Describe your need',
        intro: 'Tell us the type of installation, the equipment involved, and the planned window. The message is sent from this page without opening another application.',
        formTitle: 'Contact form',
        required: 'required',
        optional: 'optional',
        name: 'Name',
        company: 'Company',
        email: 'Email',
        phone: 'Phone or WhatsApp',
        contactHint: 'Provide at least one way to reach you: email or phone.',
        service: 'Service',
        servicePlaceholder: 'Select a service',
        services: [
            'Electrical studies',
            'Protection settings and testing',
            'Field commissioning',
            'Protection and automation retrofit',
            'Other',
        ],
        message: 'Message',
        messagePlaceholder: 'E.g.: 138 kV substation, SEL and Siemens relays, panel testing planned for March.',
        messageHint: 'Do not include documents, drawings, or confidential data in this first message.',
        submit: 'Send message',
        submitting: 'Sending…',
        success: 'Message sent successfully. We will reply using the contact details provided.',
        failed: 'The message could not be sent right now. Please try again or use the direct contact details.',
        errors: {
            summary: 'Please review the highlighted fields before sending.',
            name: 'Enter your name.',
            contact: 'Enter an email or a phone number so we can reply.',
            email: 'Enter a valid email address, such as name@company.com.',
            phone: 'Enter a phone number including the area code.',
            message: 'Describe your need in at least 20 characters.',
        },
        privacyTitle: 'Privacy',
        privacy: 'When submitted, the information is processed by the Resend email delivery service and forwarded to contato@krconsultoria.com.br solely to answer the request. Do not send documents, drawings, or confidential information in this first contact. To suggest the page language, the site queries an external service for approximate IP-based location.',
        direct: 'Direct contact',
        directText: 'Talk to Kayllon Rogger Nunes through the channels below.',
        emailLabel: 'Email',
        phoneLabel: 'Phone and WhatsApp',
        addressLabel: 'Address',
        city: COMPANY.address.cityEn,
        registry: 'Company registration',
        creaLabel: 'CREA registration',
        creaValue: `No. ${COMPANY.crea}`,
    },
};

// `next dev` serves app/api/contact/route.ts; the static export on the Apache/PHP
// host uses public/api/contact.php instead.
const CONTACT_ENDPOINT = process.env.NODE_ENV === 'development' ? '/api/contact/' : '/api/contact.php';

const EMPTY: Record<Field, string> = {
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    website: '',
};

export default function ContactView({ locale }: { locale: Locale }) {
    const t = COPY[locale];
    const [values, setValues] = useState(EMPTY);
    const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
    const [status, setStatus] = useState<Status>({ kind: 'idle' });
    const formRef = useRef<HTMLFormElement>(null);

    const update = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setValues((prev) => ({ ...prev, [name]: value }));
        if (errors[name as Field]) setErrors((prev) => ({ ...prev, [name]: undefined }));
        setStatus({ kind: 'idle' });
    };

    const validate = () => {
        const next: Partial<Record<Field, string>> = {};
        const email = values.email.trim();
        const phoneDigits = values.phone.replace(/\D/g, '');
        if (values.name.trim().length < 2) next.name = t.errors.name;
        if (!email && !phoneDigits) {
            next.email = t.errors.contact;
        } else {
            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = t.errors.email;
            if (phoneDigits && phoneDigits.length < 10) next.phone = t.errors.phone;
        }
        if (values.message.trim().length < 20) next.message = t.errors.message;
        return next;
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const found = validate();
        setErrors(found);
        if (Object.keys(found).length > 0) {
            setStatus({ kind: 'idle' });
            const first = (['name', 'email', 'phone', 'message'] as Field[]).find((f) => found[f]);
            if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
            return;
        }

        setStatus({ kind: 'submitting' });
        try {
            const response = await fetch(CONTACT_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({ ...values, locale }),
            });
            // A missing endpoint returns the site's HTML error page; never show a JSON parser error.
            const isJson = response.headers.get('content-type')?.includes('application/json');
            const result = isJson ? await response.json().catch(() => null) as { success?: boolean; error?: string } | null : null;
            if (!response.ok || !result?.success) throw new Error(result?.error || t.failed);
            setStatus({ kind: 'success' });
            setValues(EMPTY);
        } catch (error) {
            setStatus({
                kind: 'failed',
                message: error instanceof Error ? error.message : t.failed,
            });
        }
    };

    const hasErrors = Object.values(errors).some(Boolean);
    const describedBy = (field: Field, hint?: string) =>
        [hint, errors[field] ? `${field}-error` : ''].filter(Boolean).join(' ') || undefined;

    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroInner}>
                    <p className={styles.eyebrow}>{t.eyebrow}</p>
                    <h1 className={styles.heroTitle}>{t.title}</h1>
                    <p className={styles.heroText}>{t.intro}</p>
                </div>
            </section>

            <section className={styles.section}>
                <div className={styles.grid}>
                    <div className={styles.formCard}>
                        <h2 className={styles.formTitle}>{t.formTitle}</h2>

                        {hasErrors && (
                            <p className={styles.errorSummary} role="alert">{t.errors.summary}</p>
                        )}

                        <form ref={formRef} onSubmit={onSubmit} noValidate className={styles.form}>
                            <div className={styles.honeypot} aria-hidden="true">
                                <label htmlFor="website">Website</label>
                                <input
                                    id="website"
                                    name="website"
                                    type="text"
                                    value={values.website}
                                    onChange={update}
                                    tabIndex={-1}
                                    autoComplete="off"
                                />
                            </div>

                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label htmlFor="name" className={styles.label}>
                                        {t.name} <span className={styles.req}>({t.required})</span>
                                    </label>
                                    <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={update}
                                        className={styles.input} aria-invalid={!!errors.name} aria-describedby={describedBy('name')} required />
                                    {errors.name && <p id="name-error" className={styles.error}>{errors.name}</p>}
                                </div>
                                <div className={styles.field}>
                                    <label htmlFor="company" className={styles.label}>
                                        {t.company} <span className={styles.opt}>({t.optional})</span>
                                    </label>
                                    <input id="company" name="company" type="text" autoComplete="organization" value={values.company} onChange={update}
                                        className={styles.input} />
                                </div>
                            </div>

                            <fieldset className={styles.fieldset}>
                                <legend className={styles.legend} id="contact-hint">{t.contactHint}</legend>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label htmlFor="email" className={styles.label}>{t.email}</label>
                                        <input id="email" name="email" type="email" autoComplete="email" inputMode="email" value={values.email} onChange={update}
                                            className={styles.input} aria-invalid={!!errors.email} aria-describedby={describedBy('email')} />
                                        {errors.email && <p id="email-error" className={styles.error}>{errors.email}</p>}
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="phone" className={styles.label}>{t.phone}</label>
                                        <input id="phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" value={values.phone} onChange={update}
                                            className={styles.input} aria-invalid={!!errors.phone} aria-describedby={describedBy('phone')} />
                                        {errors.phone && <p id="phone-error" className={styles.error}>{errors.phone}</p>}
                                    </div>
                                </div>
                            </fieldset>

                            <div className={styles.field}>
                                <label htmlFor="service" className={styles.label}>
                                    {t.service} <span className={styles.opt}>({t.optional})</span>
                                </label>
                                <select id="service" name="service" value={values.service} onChange={update} className={styles.input}>
                                    <option value="">{t.servicePlaceholder}</option>
                                    {t.services.map((service) => (
                                        <option key={service} value={service}>{service}</option>
                                    ))}
                                </select>
                            </div>

                            <div className={styles.field}>
                                <label htmlFor="message" className={styles.label}>
                                    {t.message} <span className={styles.req}>({t.required})</span>
                                </label>
                                <textarea id="message" name="message" rows={5} value={values.message} onChange={update}
                                    placeholder={t.messagePlaceholder} className={styles.textarea}
                                    aria-invalid={!!errors.message} aria-describedby={describedBy('message', 'message-hint')} required />
                                <p id="message-hint" className={styles.hint}>{t.messageHint}</p>
                                {errors.message && <p id="message-error" className={styles.error}>{errors.message}</p>}
                            </div>

                            <div className={styles.actions}>
                                <button type="submit" className={styles.btnPrimary} disabled={status.kind === 'submitting'}>
                                    {status.kind === 'submitting' ? t.submitting : t.submit}
                                </button>
                            </div>

                            <div aria-live="polite">
                                {status.kind === 'success' && <p className={styles.statusOk}>{t.success}</p>}
                                {status.kind === 'failed' && <p className={styles.statusError} role="alert">{status.message}</p>}
                            </div>
                        </form>

                        <div className={styles.privacy}>
                            <h3 className={styles.privacyTitle}>{t.privacyTitle}</h3>
                            <p>{t.privacy}</p>
                        </div>
                    </div>

                    <aside className={styles.info}>
                        <h2 className={styles.infoTitle}>{t.direct}</h2>
                        <p className={styles.infoText}>{t.directText}</p>
                        <dl className={styles.infoList}>
                            <div>
                                <dt>{t.emailLabel}</dt>
                                <dd><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></dd>
                            </div>
                            <div>
                                <dt>{t.phoneLabel}</dt>
                                <dd><a href={COMPANY.phoneHref}>{COMPANY.phoneDisplay}</a></dd>
                            </div>
                            <div>
                                <dt>{t.addressLabel}</dt>
                                <dd>{COMPANY.address.street}<br />{t.city}</dd>
                            </div>
                        </dl>

                        <h2 className={styles.infoTitle}>{t.registry}</h2>
                        <dl className={styles.infoList}>
                            <div>
                                <dt>{locale === 'en' ? 'Legal name' : 'Razão social'}</dt>
                                <dd>{COMPANY.legalName}</dd>
                            </div>
                            <div>
                                <dt>CNPJ</dt>
                                <dd className={styles.mono}>{COMPANY.cnpj}</dd>
                            </div>
                            <div>
                                <dt>{t.creaLabel}</dt>
                                <dd className={styles.mono}>{t.creaValue}</dd>
                            </div>
                        </dl>
                    </aside>
                </div>
            </section>
        </div>
    );
}
