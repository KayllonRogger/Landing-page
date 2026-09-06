export type Locale = 'pt' | 'en';

export const translations = {
    header: {
        nav: {
            pt: [
                { href: '/', label: 'INÍCIO' },
                { href: '/sobre', label: 'SOBRE NÓS' },
                { href: '/servicos', label: 'SERVIÇOS' },
                { href: '/projetos', label: 'PROJETOS' },
                { href: '/blog', label: 'BLOG' },
                { href: '/contato', label: 'CONTATO' },
            ],
            en: [
                { href: '/en', label: 'HOME' },
                { href: '/en/about', label: 'ABOUT US' },
                { href: '/en/services', label: 'SERVICES' },
                { href: '/en/projects', label: 'PROJECTS' },
                { href: '/en/blog', label: 'BLOG' },
                { href: '/en/contact', label: 'CONTACT' },
            ],
        },
        cta: {
            pt: 'PROPOSTA TÉCNICA / ESCOPO',
            en: 'TECHNICAL PROPOSAL / SCOPE',
        },
        mobileCta: {
            pt: 'SOLICITAR PROPOSTA TÉCNICA / ANÁLISE DE ESCOPO',
            en: 'REQUEST TECHNICAL PROPOSAL / SCOPE ANALYSIS',
        },
        tagline: {
            pt: 'Engenharia Elétrica & SAS',
            en: 'Electrical Engineering & SAS',
        },
    },
    hero: {
        badge: {
            pt: 'SOLUÇÕES EM ENGENHARIA ELÉTRICA & SAS',
            en: 'ELECTRICAL ENGINEERING & SAS SOLUTIONS',
        },
        title: {
            pt: 'KR ENGENHARIA',
            en: 'KR ENGENHARIA',
        },
        subtitle: {
            pt: 'Automação inteligente de subestações e sistemas de energia. Engenharia integrada para máxima confiabilidade, segurança e digitalização da rede elétrica.',
            en: 'Intelligent substation automation and power systems engineering. Integrated solutions for maximum reliability, safety, and electrical grid digitalization.',
        },
        ctaPrimary: {
            pt: 'NOSSOS SERVIÇOS',
            en: 'OUR SERVICES',
        },
        ctaSecondary: {
            pt: 'SOLICITAR PROPOSTA TÉCNICA',
            en: 'REQUEST TECHNICAL PROPOSAL',
        },
    },
    techStack: {
        badge: {
            pt: 'DOMÍNIO TÉCNICO MULTIMARCA',
            en: 'MULTI-VENDOR TECHNICAL EXPERTISE',
        },
        title: {
            pt: 'Pilha Tecnológica & Equipamentos Especializados',
            en: 'Technology Stack & Specialized Equipment',
        },
        description: {
            pt: 'Profundo domínio prático nas plataformas líderes do setor elétrico para proteção, automação (IEC 61850) e ensaios secundários de alta tensão.',
            en: 'Comprehensive hands-on expertise in leading electrical industry platforms for protection, automation (IEC 61850), and high-voltage secondary testing.',
        },
        bottomNote: {
            pt: 'Capacidade de integração e comissionamento com interoperabilidade multimarca sob as normas IEC 61850 (Ed. 1 e Ed. 2), IEEE e ONS.',
            en: 'Integration and commissioning capability with multi-vendor interoperability under IEC 61850 (Ed. 1 & 2), IEEE, and grid code standards.',
        },
    },
    services: {
        badge: {
            pt: 'NOSSAS ESPECIALIDADES',
            en: 'OUR SPECIALTIES',
        },
        title: {
            pt: 'Serviços Especializados',
            en: 'Specialized Services',
        },
        description: {
            pt: 'Soluções completas de engenharia para subestações, usinas geradoras e sistemas industriais de alta e média tensão.',
            en: 'End-to-end engineering solutions for substations, power generation facilities, and medium & high voltage industrial systems.',
        },
        cards: {
            pt: [
                {
                    title: 'Proteção e Controle (PAC)',
                    desc: 'Estudos de seletividade, parametrização avançada de IEDs numéricos e testes de aceitação em fábrica e campo (TAF/TAC).',
                    category: 'SISTEMAS ELÉTRICOS',
                },
                {
                    title: 'Automação de Subestações (SAS)',
                    desc: 'Engenharia completa sob norma IEC 61850 (MMS, GOOSE, SV), gateways de comunicação e integração de arquiteturas digitais.',
                    category: 'TELECOM & REDES',
                },
                {
                    title: 'Sistemas SCADA & Teleassistência',
                    desc: 'Desenvolvimento de telas IHM locais e remotas, protocolos DNP3, IEC 60870-5-104 e integração direta com centros de operação.',
                    category: 'OPERAÇÃO & SUPERVISÃO',
                },
            ],
            en: [
                {
                    title: 'Protection & Control (P&C)',
                    desc: 'Selectivity studies, advanced numerical IED parameterization, and Factory/Site Acceptance Testing (FAT/SAT).',
                    category: 'POWER SYSTEMS',
                },
                {
                    title: 'Substation Automation (SAS)',
                    desc: 'Full engineering under IEC 61850 standard (MMS, GOOSE, SV), communication gateways, and digital architecture integration.',
                    category: 'TELECOM & NETWORKING',
                },
                {
                    title: 'SCADA Systems & Remote Operation',
                    desc: 'Development of local and remote HMI screens, DNP3, IEC 60870-5-104 protocols, and direct integration with control centers.',
                    category: 'OPERATION & SUPERVISION',
                },
            ],
        },
        ctaTitle: {
            pt: 'Precisa de uma proposta técnica ou análise de escopo?',
            en: 'Need a technical proposal or scope analysis?',
        },
        ctaSubtitle: {
            pt: 'Discuta seu escopo preliminar com nossos engenheiros e obtenha uma solução precisa para seu empreendimento.',
            en: 'Discuss your preliminary scope with our engineers and receive a precise solution tailored to your project.',
        },
        ctaBtn: {
            pt: 'SOLICITAR PROPOSTA TÉCNICA / ANÁLISE DE ESCOPO',
            en: 'REQUEST TECHNICAL PROPOSAL / SCOPE ANALYSIS',
        },
    },
    entryOffer: {
        badge: {
            pt: 'CONSULTORIA ÁGIL & SEM COMPROMISSO',
            en: 'AGILE CONSULTING & NO-COMMITMENT REVIEW',
        },
        headline: {
            pt: 'Precisa validar a coordenação de proteção da sua planta ou apoiar um TAF/TAC de painéis?',
            en: 'Need to validate your plant protection coordination or require FAT/SAT panel support?',
        },
        subtext: {
            pt: 'Envie seu escopo preliminar para avaliação técnica sem compromisso. Nossa equipe de engenharia analisa unifilares, parâmetros de IEDs e lógicas de intertravamento para fornecer uma orientação inicial precisa e mitigar riscos antes da energização.',
            en: 'Send your preliminary scope for a no-commitment technical review. Our engineering team analyzes single-line diagrams, IED parameters, and interlocking logic to provide precise guidance and mitigate risks prior to energization.',
        },
        check1: {
            pt: 'Análise de Seletividade & Curvas',
            en: 'Selectivity & Curves Analysis',
        },
        check2: {
            pt: 'Apoio Técnico em TAF / TAC',
            en: 'Technical Support for FAT / SAT',
        },
        check3: {
            pt: 'Sigilo e NDA Garantidos',
            en: 'Confidentiality & NDA Guaranteed',
        },
        boxTitle: {
            pt: 'Análise de Escopo Técnico',
            en: 'Technical Scope Assessment',
        },
        boxSubtitle: {
            pt: 'Sem custo inicial para avaliação preliminar',
            en: 'Zero initial cost for preliminary review',
        },
        ctaPrimary: {
            pt: 'ENVIAR ESCOPO PRELIMINAR',
            en: 'SUBMIT PRELIMINARY SCOPE',
        },
        ctaWhatsapp: {
            pt: 'CONSULTAR VIA WHATSAPP',
            en: 'INQUIRE VIA WHATSAPP',
        },
        sla: {
            pt: 'Retorno técnico do escopo em até 24 horas',
            en: 'Technical scope review returned within 24 hours',
        },
    },
    about: {
        badge: {
            pt: 'QUEM SOMOS',
            en: 'WHO WE ARE',
        },
        fieldBadge: {
            pt: 'ATUAÇÃO EM CAMPO',
            en: 'FIELD EXPERTISE',
        },
        fieldBadgeSub: {
            pt: 'Especialistas em SE & Alta Tensão',
            en: 'Substation & High-Voltage Specialists',
        },
        title: {
            pt: 'Engenharia de Alta Confiabilidade para Infraestrutura Crítica',
            en: 'High-Reliability Engineering for Critical Infrastructure',
        },
        p1: {
            pt: 'A KR Engenharia é especializada em soluções completas de proteção, automação de subestações (SAS) e engenharia consultiva no setor elétrico.',
            en: 'KR Engenharia specializes in comprehensive protection solutions, substation automation systems (SAS), and consulting engineering for the power sector.',
        },
        p2: {
            pt: 'Atuamos com profundo rigor técnico e interoperabilidade entre as principais tecnologias do mercado (SEL, Siemens, Schneider, OMICRON, ETAP), garantindo energização segura e conformidade plena com os Procedimentos de Rede.',
            en: 'We operate with strict technical rigor and multi-vendor interoperability across leading industry technologies (SEL, Siemens, Schneider, OMICRON, ETAP), ensuring safe energization and full grid code compliance.',
        },
        cta: {
            pt: 'CONHEÇA NOSSA HISTÓRIA E VALORES',
            en: 'LEARN MORE ABOUT OUR MISSION & VALUES',
        },
    },
    contact: {
        badge: {
            pt: 'PROPOSTA TÉCNICA & CONSULTORIA',
            en: 'TECHNICAL PROPOSAL & CONSULTING',
        },
        title: {
            pt: 'Solicite uma Proposta Técnica / Análise de Escopo',
            en: 'Request a Technical Proposal / Scope Analysis',
        },
        description: {
            pt: 'Conte com nossa equipe de engenharia para avaliar seu escopo preliminar, dimensionar e executar soluções especializadas em proteção, automação de subestações e sistemas de energia.',
            en: 'Count on our engineering team to assess your preliminary scope, dimension, and execute specialized protection, substation automation, and power systems solutions.',
        },
        channelsTitle: {
            pt: 'Canais de Atendimento Direto',
            en: 'Direct Contact Channels',
        },
        channelsSubtitle: {
            pt: 'Se preferir, fale diretamente com nossa equipe técnica através dos nossos canais corporativos:',
            en: 'Or contact our technical engineering team directly through our corporate channels:',
        },
        formHeading: {
            pt: 'Envie seu Escopo Preliminar',
            en: 'Submit Your Preliminary Scope',
        },
        formSubheading: {
            pt: 'Preencha os campos abaixo com os dados do empreendimento para gerarmos uma proposta técnica e análise de escopo sem compromisso.',
            en: 'Fill in the fields below with your project details to receive a personalized, no-commitment technical proposal and scope analysis.',
        },
        name: {
            pt: 'Nome Completo',
            en: 'Full Name',
        },
        company: {
            pt: 'Empresa / Empreendimento',
            en: 'Company / Project Name',
        },
        email: {
            pt: 'E-mail Corporativo',
            en: 'Corporate Email',
        },
        phone: {
            pt: 'Telefone / WhatsApp',
            en: 'Phone / WhatsApp',
        },
        service: {
            pt: 'Serviço de Interesse',
            en: 'Service of Interest',
        },
        message: {
            pt: 'Detalhes do Projeto / Escopo Preliminar',
            en: 'Project Details / Preliminary Scope',
        },
        submitBtn: {
            pt: 'SOLICITAR PROPOSTA TÉCNICA / ANÁLISE DE ESCOPO',
            en: 'REQUEST TECHNICAL PROPOSAL / SCOPE ANALYSIS',
        },
        submitting: {
            pt: 'ENVIANDO SOLICITAÇÃO...',
            en: 'SENDING REQUEST...',
        },
        successTitle: {
            pt: 'Solicitação Enviada com Sucesso!',
            en: 'Request Submitted Successfully!',
        },
        successText: {
            pt: 'Recebemos sua mensagem em contato@krconsultoria.com. Nossos engenheiros especialistas entrarão em contato em breve através do e-mail ou telefone informado.',
            en: 'We received your message at contato@krconsultoria.com. Our engineering specialists will contact you shortly via the email or phone provided.',
        },
        resetBtn: {
            pt: 'Enviar Outra Mensagem',
            en: 'Submit Another Message',
        },
    },
    blog: {
        badge: {
            pt: 'CONHECIMENTO TÉCNICO',
            en: 'TECHNICAL KNOWLEDGE',
        },
        title: {
            pt: 'Artigos & Novidades em Engenharia Elétrica',
            en: 'Technical Insights & Electrical Engineering Articles',
        },
        description: {
            pt: 'Insights práticos, tendências normativas e análises aprofundadas sobre automação de subestações, proteção e sistemas de energia.',
            en: 'Practical insights, regulatory standards, and in-depth analyses on substation automation, protection, and power systems.',
        },
        comingSoonBadge: {
            pt: 'EM BREVE',
            en: 'COMING SOON',
        },
        comingSoonTitle: {
            pt: 'Nossos Artigos Técnicos Chegam em Breve',
            en: 'Our Technical Articles Are Coming Soon',
        },
        comingSoonText: {
            pt: 'Estamos preparando análises aprofundadas, tutoriais práticos e novidades sobre engenharia elétrica, automação de subestações e proteção de sistemas de potência.',
            en: 'We are preparing in-depth technical analyses, practical tutorials, and whitepapers on electrical engineering, substation automation, and power system protection.',
        },
        notifyBtn: {
            pt: 'NOTIFIQUE-ME QUANDO PUBLICARMOS',
            en: 'NOTIFY ME WHEN PUBLISHED',
        },
    },
    footer: {
        rights: {
            pt: 'Todos os direitos reservados.',
            en: 'All rights reserved.',
        },
        quickLinks: {
            pt: 'Links Rápidos',
            en: 'Quick Links',
        },
        contactTitle: {
            pt: 'Contato Direto',
            en: 'Direct Contact',
        },
    },
};

