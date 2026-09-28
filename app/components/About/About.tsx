'use client';

import Image from 'next/image';
import Link from 'next/link';
import s from '../Section/Section.module.css';
import styles from './About.module.css';
import { COMPANY } from '@/lib/company';

interface AboutProps {
    locale?: 'pt' | 'en';
}

export default function About({ locale = 'pt' }: AboutProps) {
    const isEn = locale === 'en';

    const points = isEn
        ? [
              {
                  title: 'One point of contact',
                  text: 'KR is the commercial point of contact and coordinates the delivery. When studies involve partners, who prepares, reviews, approves, and executes each stage is set in the proposal.',
              },
              {
                  title: 'Brazil and abroad',
                  text: 'Field experience in Brazil, the United States, and Poland, with fluent English. International mobilization is assessed according to scope and schedule.',
              },
          ]
        : [
              {
                  title: 'Uma interface técnica e comercial',
                  text: 'A KR é a interface comercial e coordena a entrega. Quando os estudos envolvem parceiros, quem elabora, revisa, aprova e executa cada etapa é definido na proposta.',
              },
              {
                  title: 'Brasil e exterior',
                  text: 'Experiência de campo no Brasil, nos Estados Unidos e na Polônia, com inglês fluente. A mobilização internacional é avaliada conforme escopo e agenda.',
              },
          ];

    return (
        <section id={isEn ? 'about' : 'sobre'} className={s.section} aria-labelledby="sobre-title">
            <div className={`${s.container} ${styles.layout}`}>
                <div className={styles.imageCard}>
                    <Image
                        src="/Image/20260130_130042.jpg"
                        alt={isEn ? '400 kV substation yard in winter, Poland' : 'Pátio de subestação de 400 kV no inverno, na Polônia'}
                        fill
                        sizes="(max-width: 900px) 100vw, 440px"
                        className={styles.image}
                    />
                </div>

                <div>
                    <p className={s.eyebrow}>{isEn ? 'About KR' : 'Sobre a KR'}</p>
                    <h2 id="sobre-title" className={s.title}>
                        {isEn ? 'Kayllon Rogger Nunes and KR Engenharia' : 'Kayllon Rogger Nunes e a KR Engenharia'}
                    </h2>
                    <p className={s.lead}>
                        {isEn
                            ? 'KR Engenharia is the trade name of KR Consultoria e Soluções em Engenharia LTDA, based in Belo Horizonte, Brazil. It brings together Kayllon Rogger Nunes’s experience in substations, industrial facilities, mining, and offshore applications, connecting studies, settings, logic, integration, and field verification.'
                            : 'KR Engenharia é o nome comercial da KR Consultoria e Soluções em Engenharia LTDA, com escritório em Belo Horizonte (MG). A empresa reúne a experiência de Kayllon Rogger Nunes em subestações, indústrias, mineração e aplicações offshore, conectando estudos, ajustes, lógicas, integração e verificação em campo.'}
                    </p>

                    <div className={styles.points}>
                        {points.map((point) => (
                            <div key={point.title} className={styles.point}>
                                <h3 className={styles.pointTitle}>{point.title}</h3>
                                <p className={styles.pointText}>{point.text}</p>
                            </div>
                        ))}
                    </div>

                    <dl className={styles.registry}>
                        <div>
                            <dt>{isEn ? 'Legal name' : 'Razão social'}</dt>
                            <dd>{COMPANY.legalName}</dd>
                        </div>
                        <div>
                            <dt>CNPJ</dt>
                            <dd>{COMPANY.cnpj}</dd>
                        </div>
                        <div>
                            <dt>{isEn ? 'CREA registration' : 'Registro no CREA'}</dt>
                            <dd>{isEn ? `No. ${COMPANY.crea}` : `nº ${COMPANY.crea}`}</dd>
                        </div>
                    </dl>

                    <Link href={isEn ? '/en/about' : '/sobre'} className={s.btnSecondary}>
                        {isEn ? 'More about KR' : 'Conheça a KR'}
                    </Link>
                </div>
            </div>
        </section>
    );
}
