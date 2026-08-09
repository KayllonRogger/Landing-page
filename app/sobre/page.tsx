'use client';

import { useState } from 'react';
import styles from './page.module.css';

const testimonials = [
    {
        name: 'André Ferreira',
        company: 'Energia Sul LTDA',
        quote:
            'O trabalho da Kayllon Rogger trouxe estabilidade e clareza técnica para nossa subestação. A equipe entregou cada etapa com precisão e comunicação direta.',
        photo: 'AF',
    },
    {
        name: 'Marina Costa',
        company: 'Grid Control Engenharia',
        quote:
            'O projeto foi entregue com excelência normativa e uma visão sistêmica que superou nossas expectativas. Recomendo para qualquer projeto crítico.',
        photo: 'MC',
    },
    {
        name: 'Fábio Lima',
        company: 'Renova Energia',
        quote:
            'A transparência e o rigor técnico foram decisivos para avançarmos com confiança. A equipe apresentou soluções claras e atualizadas para nosso sistema.',
        photo: 'FL',
    },
];

export default function SobrePage() {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const testimonial = testimonials[activeTestimonial];

    return (
        <main className={styles.page}>
            <section className={styles.section}>
                <div className={styles.intro}>
                    <h1 className={styles.title}>
                        Conheça a Kayllon Rogger Engenharia e Consultoria
                    </h1>
                    <p className={styles.description}>
                        Descubra como nossa experiência técnica e foco em soluções sustentáveis transformam projetos de energia em resultados confiáveis.
                    </p>
                </div>

                <div className={styles.valuesGrid}>
                    <article className={styles.valueCard}>
                        <h2 className={styles.valueTitle}>
                            Segurança e Confiabilidade Inegociáveis
                        </h2>
                        <p className={styles.valueText}>
                            No nosso setor, não existe margem para "tentativa e erro". Um projeto de automação ou proteção mal executado pode resultar em blecautes, danos a equipamentos milionários ou riscos à vida.
                        </p>
                        <p className={styles.valueHighlight}>
                            Na prática: Nosso compromisso primário é garantir que cada lógica de seletividade, cada relé configurado e cada sistema de descarte de cargas atue com precisão cirúrgica. A confiabilidade do sistema do nosso cliente é a nossa própria reputação.
                        </p>
                    </article>

                    <article className={styles.valueCard}>
                        <h2 className={styles.valueTitle}>
                            Rigor Normativo e Excelência Técnica
                        </h2>
                        <p className={styles.valueText}>
                            A engenharia de potência é regida por padrões rigorosos. Não entregamos apenas o que funciona; entregamos o que está perfeitamente alinhado com o estado da arte da engenharia global.
                        </p>
                        <p className={styles.valueHighlight}>
                            Na prática: O domínio profundo de normas internacionais de comunicação e integração, como a IEC 61850, não é um diferencial, é o nosso padrão básico. Nossas entregas refletem uma engenharia limpa, documentada e tecnicamente irrepreensível.
                        </p>
                    </article>

                    <article className={styles.valueCard}>
                        <h2 className={styles.valueTitle}>
                            Visão Sistêmica e Integração Inteligente
                        </h2>
                        <p className={styles.valueText}>
                            Não vendemos painéis elétricos ou horas de programação em CLPs; nós vendemos inteligência operacional. Entendemos que um Sistema de Potência é um organismo vivo onde cada componente precisa se comunicar perfeitamente.
                        </p>
                        <p className={styles.valueHighlight}>
                            Na prática: Desenhamos arquiteturas onde a automação industrial e a proteção elétrica convergem, garantindo que o cliente tenha não apenas dados, mas informações úteis para a tomada de decisão em tempo real e eficiência energética.
                        </p>
                    </article>

                    <article className={styles.valueCard}>
                        <h2 className={styles.valueTitle}>
                            Transparência e Parceria Estratégica
                        </h2>
                        <p className={styles.valueText}>
                            Projetos de SEP e automação industrial geralmente envolvem alto investimento e criticidade (Capex/Opex). O cliente precisa confiar cegamente em quem está com a mão no painel.
                        </p>
                        <p className={styles.valueHighlight}>
                            Na prática: Atuamos como parceiros estratégicos, desde a viabilidade do projeto até o comissionamento final em campo. Se houver um gargalo estrutural, o cliente será o primeiro a saber, acompanhado de um plano de ação para resolução.
                        </p>
                    </article>

                    <article className={styles.valueCard}>
                        <h2 className={styles.valueTitle}>
                            Inovação Constante e Atualização Tecnológica
                        </h2>
                        <p className={styles.valueText}>
                            A tecnologia embarcada no setor elétrico muda rapidamente. O que era padrão há dez anos, hoje é obsoleto.
                        </p>
                        <p className={styles.valueHighlight}>
                            Na prática: Mantemos nossa equipe em constante aprimoramento (treinamentos, certificações, pós-graduações). Estamos sempre buscando a melhor topologia de rede, o transceptor mais rápido e o software de diagramação mais eficiente para otimizar os fluxos de trabalho e o resultado final.
                        </p>
                    </article>
                </div>

                <div className={styles.panelRow}>
                    <div className={`${styles.panelCard} ${styles.panelCardAccent}`}>
                        <h2 className={styles.panelTitle}>Nossa Missão</h2>
                        <p className={styles.panelText}>
                            Elevar a excelência da engenharia elétrica e automação para projetos críticos, entregando soluções seguras, alinhadas a normas internacionais e focadas em resultados reais.
                        </p>
                    </div>

                    <div className={`${styles.panelCard} ${styles.panelCardAccent}`}>
                        <h2 className={styles.panelTitle}>Nosso Jeito de Trabalhar</h2>
                        <p className={styles.panelText}>
                            Priorizamos comunicação clara, análises técnicas profundas e decisões baseadas em dados, garantindo que cada etapa do projeto seja transparente e que o cliente saiba exatamente o valor que está recebendo.
                        </p>
                    </div>

                    <div className={styles.panelCard}>
                        <h3 className={styles.panelTitle}>Entregas que fazem a diferença</h3>
                        <p className={styles.panelText}>
                            Nossa equipe atua desde o estudo de viabilidade até o comissionamento, com foco na minimização de riscos e na entrega de sistemas confiáveis e fáceis de operar.
                        </p>
                    </div>
                </div>

                <section className={styles.testimonialsSection}>
                    <div className={styles.testimonialsHeader}>
                        <span className={styles.sectionLabel}>Depoimentos</span>
                        <h2 className={styles.testimonialsTitle}>O que nossos clientes dizem</h2>
                    </div>

                    <div className={styles.testimonialCard}>
                        <div className={styles.testimonialTop}>
                            <div className={styles.avatar}>{testimonial.photo}</div>
                            <div>
                                <p className={styles.testimonialName}>{testimonial.name}</p>
                                <p className={styles.testimonialCompany}>{testimonial.company}</p>
                            </div>
                        </div>
                        <p className={styles.testimonialText}>
                            “{testimonial.quote}”
                        </p>
                        <div className={styles.testimonialControls}>
                            <button
                                type="button"
                                className={styles.controlButton}
                                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                                aria-label="Depoimento anterior"
                            >
                                ❮
                            </button>
                            <button
                                type="button"
                                className={styles.controlButton}
                                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                                aria-label="Próximo depoimento"
                            >
                                ❯
                            </button>
                        </div>
                    </div>
                </section>

                {/* <div className={styles.aboutBlock}>
                    <About />
                </div> */}
            </section>
        </main>
    );
}
