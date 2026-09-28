import s from '../Section/Section.module.css';
import styles from './HowItWorks.module.css';

type L = { pt: string; en: string };

const steps: { title: L; text: L }[] = [
    {
        title: { pt: 'Você descreve a demanda', en: 'You describe the need' },
        text: {
            pt: 'Tipo de instalação, equipamentos envolvidos e janela prevista, pelo formulário ou pelo WhatsApp. Não é preciso enviar documentos nesta etapa.',
            en: 'Type of installation, equipment involved, and planned window, through the form or WhatsApp. No documents are needed at this stage.',
        },
    },
    {
        title: { pt: 'Conversa técnica', en: 'Technical call' },
        text: {
            pt: 'Uma conversa curta para entender o objetivo, os dados disponíveis e as interfaces com outras equipes.',
            en: 'A short call to understand the goal, the available data, and the interfaces with other teams.',
        },
    },
    {
        title: { pt: 'Proposta com escopo', en: 'Proposal with scope' },
        text: {
            pt: 'Atividades, entregáveis, premissas, exclusões e responsáveis por elaborar, revisar, aprovar e executar cada etapa, incluindo o instrumental de ensaio.',
            en: 'Activities, deliverables, assumptions, exclusions, and who prepares, reviews, approves, and executes each stage, including test equipment.',
        },
    },
    {
        title: { pt: 'Execução e entrega', en: 'Execution and delivery' },
        text: {
            pt: 'Execução conforme o plano acordado, com registros de teste, arquivos finais e lista de pendências com responsáveis.',
            en: 'Execution according to the agreed plan, with test records, final files, and an open-items list with owners.',
        },
    },
];

export default function HowItWorks({ locale = 'pt' }: { locale?: 'pt' | 'en' }) {
    const isEn = locale === 'en';

    return (
        <section id={isEn ? 'how-it-works' : 'como-contratar'} className={s.section} aria-labelledby="como-contratar-title">
            <div className={s.container}>
                <div className={s.header}>
                    <p className={s.eyebrow}>{isEn ? 'How hiring works' : 'Como funciona a contratação'}</p>
                    <h2 id="como-contratar-title" className={s.title}>
                        {isEn ? 'From the first message to delivery' : 'Da primeira mensagem à entrega'}
                    </h2>
                </div>

                <ol className={styles.steps}>
                    {steps.map((step, index) => (
                        <li key={step.title.pt} className={styles.step}>
                            <span className={styles.stepNumber} aria-hidden="true">{index + 1}</span>
                            <h3 className={styles.stepTitle}>{step.title[locale]}</h3>
                            <p className={styles.stepText}>{step.text[locale]}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
