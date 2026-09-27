// Content for the dedicated service landing pages (PT and EN).
// Rendered by app/components/ServiceLanding/ServiceLanding.tsx.

import type { CSSProperties } from 'react';

export interface ServiceLandingContent {
    schema: {
        name: string;
        description: string;
        catalogName: string;
        areaServed: string;
    };
    breadcrumb: {
        home: { label: string; href: string };
        services: { label: string; href: string };
        current: string;
    };
    hero: {
        badge: string;
        title: string;
        description: string;
        primaryCta: { label: string; href: string };
        secondaryCta: { label: string; href: string };
        trustBadges: string[];
    };
    overview: {
        challenge: { title: string; text: string };
        solution: { title: string; text: string };
        highlights: string[];
    };
    capabilities: {
        badge: string;
        title: string;
        subtitle: string;
        deliverablesLabel: string;
        pillars: { title: string; description: string; deliverables: string[] }[];
        techSpecs: { title: string; subtitle: string; tags: string[] };
    };
    gallery: {
        badge: string;
        title: string;
        subtitle: string;
        items: {
            image: string;
            alt: string;
            category: string;
            title: string;
            description: string;
            badges: string[];
            imageStyle?: CSSProperties;
        }[];
    };
    faq: {
        badge: string;
        title: string;
        subtitle: string;
        items: { question: string; answer: string }[];
    };
    cta: { title: string; subtitle: string; label: string; href: string };
}

export const protectionStudiesPt: ServiceLandingContent = {
    schema: {
        name: 'Estudos de Proteção e Seletividade Elétrica',
        description: 'Estudos de curto-circuito, fluxo de potência, coordenação e seletividade de relés em ETAP, arc flash (IEEE 1584) e conformidade ONS.',
        catalogName: 'Capacidades Técnicas & Entregáveis',
        areaServed: 'Brazil',
    },
    breadcrumb: {
        home: { label: 'Início', href: '/' },
        services: { label: 'Serviços', href: '/servicos' },
        current: 'Estudos de Proteção e Seletividade',
    },
    hero: {
        badge: 'ENGENHARIA DE SISTEMAS DE POTÊNCIA',
        title: 'Estudos de Proteção e Seletividade Elétrica',
        description: 'Dimensionamento analítico, modelagem em software ETAP e parametrização rigorosa de relés numéricos multimarcas para garantir eliminação ultrarrápida de faltas e máxima continuidade operacional.',
        primaryCta: { label: 'SOLICITAR ANÁLISE DE ESCOPO / PROPOSTA', href: '/contato' },
        secondaryCta: { label: 'Ver Todos os Serviços', href: '/servicos' },
        trustBadges: [
            'Engenharia Registrada CREA-MG',
            'Conformidade com Procedimentos de Rede ONS',
            'Modelagem Avançada em ETAP',
            'Atuação em Subestações até 500 kV',
        ],
    },
    overview: {
        challenge: {
            title: 'O Desafio Operacional',
            text: 'Ajustes inadequados de relés e falta de estudos de seletividade provocam desligamentos intempestivos em cascata, danos severos a transformadores e geradores, e pesadas penalidades regulatórias por interrupção de fornecimento.',
        },
        solution: {
            title: 'Nossa Solução de Engenharia',
            text: 'Executamos a modelagem completa do sistema elétrico industrial ou de transmissão, calculando correntes de curto-circuito simétricas e assimétricas, elaborando curvas tempo-corrente coordenadas e entregando arquivos de parametrização testados.',
        },
        highlights: [
            'Isolamento seletivo da falta no menor tempo possível sem desarmar o restante da planta.',
            'Conformidade irrestrita com normas ABNT, IEEE, IEC e exigências das concessionárias.',
            'Mitigação de risco elétrico através do cálculo de energia incidente (Arc Flash).',
            'Suporte completo na aprovação de estudos junto ao ONS e distribuidoras.',
        ],
    },
    capabilities: {
        badge: 'ENTREGÁVEIS TÉCNICOS',
        title: 'Capacidades Técnicas & Entregáveis',
        subtitle: 'Do cálculo analítico à geração dos arquivos de configuração dos IEDs',
        deliverablesLabel: 'Principais Entregáveis de Engenharia:',
        pillars: [
            {
                title: 'Estudos de Curto-Circuito & Fluxo de Carga',
                description: 'Modelagem completa da topologia da rede no software ETAP para determinação das correntes de falta trifásica, bifásica e fase-terra conforme normas ANSI/IEEE e IEC 60909.',
                deliverables: [
                    'Relatório analítico de curto-circuito máximo e mínimo',
                    'Verificação de capacidade de interrupção de disjuntores',
                    'Análise de fluxo de potência e perfil de tensão em regime permanente',
                    'Avaliação de carregamento de cabos, barramentos e transformadores',
                ],
            },
            {
                title: 'Coordenação e Seletividade de Proteção',
                description: 'Definição rigorosa de curvas tempo-corrente (TCC) para garantir coordenação cronométrica e amperimétrica entre todos os dispositivos de proteção a montante e a jusante.',
                deliverables: [
                    'Gráficos coordenados de curvas de atuação (TCC)',
                    'Ajuste das funções 50/51, 50N/51N, 67, 21, 87T, 87L, 59/27',
                    'Margem de seletividade otimizada evitando atuações em falso',
                    'Tabela consolidada de ajustes para aplicação em campo',
                ],
            },
            {
                title: 'Parametrização de Relés de Proteção (IEDs)',
                description: 'Elaboração e validação de arquivos de ajuste e lógica para os principais fabricantes mundiais de relés digitais (SEL, Siemens, Schneider, ABB/Hitachi).',
                deliverables: [
                    'Arquivos de parametrização (.CID, .ICD, .RVD, .ENV)',
                    'Configuração de esquemas de teleproteção e intertravamento lógico',
                    'Validação de dimensionamento e saturação de TCs e TPs',
                    'Matriz de disparo (Trip Matrix) e lógicas booleanas customizadas',
                ],
            },
            {
                title: 'Estudos de Arco Elétrico (Arc Flash / IEEE 1584)',
                description: 'Determinação dos níveis de energia incidente e distâncias de aproximação segura em quadros e painéis de média e baixa tensão conforme IEEE 1584 e NFPA 70E.',
                deliverables: [
                    'Cálculo de energia incidente (cal/cm²) em todos os barramentos',
                    'Definição do nível de proteção dos EPIs exigidos (NR-10)',
                    'Geração de etiquetas padronizadas de advertência de risco de arco',
                    'Recomendações técnicas para redução dos níveis de energia incidente',
                ],
            },
        ],
        techSpecs: {
            title: 'Ferramentas de Engenharia & Plataformas Suportadas',
            subtitle: 'Softwares analíticos avançados e domínio multimarca em IEDs numéricos',
            tags: [
                'Software ETAP',
                'IEEE 1584-2018',
                'IEC 60909 / ANSI C37',
                'Procedimentos de Rede ONS',
                'SEL AcSELerator QuickSet',
                'Siemens DIGSI 4 & 5',
                'Schneider Easergy Studio & S1 Agile',
                'Hitachi PCM600',
                'GE Enervista',
            ],
        },
    },
    gallery: {
        badge: 'FERRAMENTAS & INSTRUMENTAÇÃO',
        title: 'Softwares Especializados para Estudos & Projetos',
        subtitle: 'Plataformas consagradas internacionalmente para simulações elétricas e engenharia de detalhamento',
        items: [
            {
                image: '/images/services/etap.jpg',
                alt: 'ETAP - Power System Simulator',
                category: 'Simulação de Potência & Proteção',
                title: 'ETAP - Power System Simulator',
                description: 'Modelagem completa da topologia da rede para cálculos de curto-circuito (ANSI/IEC), fluxo de carga e curvas de coordenação tempo-corrente (TCC).',
                badges: ['Curto-Circuito', 'Coordenação TCC', 'Arc Flash IEEE 1584', 'Conformidade ONS'],
            },
            {
                image: '/images/services/autocad.jpg',
                alt: 'AutoCAD Electrical / Plantas de Subestação',
                category: 'Projetos Elétricos & Diagramas',
                title: 'AutoCAD Electrical / Plantas de Subestação',
                description: 'Desenvolvimento de diagramas unifilares funcionais, plantas de arranjo físico de subestações de alta tensão, esquemáticos e painéis de proteção.',
                badges: ['Diagramas Unifilares', 'Plantas de Subestações', 'Painéis de Proteção'],
            },
            {
                image: '/images/services/atp.jpg',
                alt: 'ATP / ATPDraw',
                category: 'Transitórios Eletromagnéticos (EMTP)',
                title: 'ATP / ATPDraw',
                description: 'Análise aprofundada de transitórios eletromagnéticos, coordenação de isolamento, descargas atmosféricas e sobretensões de chaveamento de disjuntores.',
                badges: ['Transitórios EMTP', 'Coordenação de Isolamento', 'Surtos de Manobra'],
            },
            {
                image: '/images/services/ptw.jpg',
                alt: 'SKM Power*Tools (PTW)',
                category: 'Análise Industrial & Seletividade',
                title: 'SKM Power*Tools (PTW)',
                description: 'Estudos analíticos para plantas industriais complexas, cálculo de energia incidente de arco elétrico e verificação de capacidade de interrupção.',
                badges: ['Seletividade Industrial', 'Arc Flash Analysis', 'Normas IEEE / NFPA'],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Perguntas Frequentes sobre Estudos de Proteção',
        subtitle: 'Tire suas dúvidas técnicas sobre prazos, normas e escopo',
        items: [
            {
                question: 'Qual é o prazo típico para entrega de um estudo de proteção e seletividade?',
                answer: 'O prazo varia conforme o porte da subestação e o número de alimentadores e IEDs. Em média, estudos de média tensão são entregues entre 15 e 30 dias úteis, incluindo a emissão dos relatórios preliminares para alinhamento com a concessionária ou ONS.',
            },
            {
                question: 'Vocês emitem Anotação de Responsabilidade Técnica (ART) do CREA?',
                answer: 'Sim. A KR Engenharia é devidamente registrada no CREA e todo projeto ou estudo de proteção é acompanhado por ART emitida pelo engenheiro responsável com certificação técnica.',
            },
            {
                question: 'A KR Engenharia realiza a parametrização direta nos relés em campo?',
                answer: 'Sim, além do estudo teórico e emissão dos relatórios, nossa equipe de campo pode carregar os arquivos de parametrização nos IEDs e realizar os ensaios de injeção secundária com mala de testes para comprovar a atuação das curvas calculadas.',
            },
        ],
    },
    cta: {
        title: 'Precisa de um Estudo de Proteção Aprovado e Conforme?',
        subtitle: 'Converse com nossos engenheiros especialistas em sistemas de potência e solicite uma proposta técnica detalhada.',
        label: 'SOLICITAR ANÁLISE DE ESCOPO / PROPOSTA',
        href: '/contato',
    },
};

export const protectionStudiesEn: ServiceLandingContent = {
    schema: {
        name: 'Protection & Coordination Selectivity Studies',
        description: 'Analytical short-circuit simulation, ETAP coordination curves, and multi-vendor numerical relay parameterization with grid code compliance.',
        catalogName: 'Technical Capabilities & Engineering Deliverables',
        areaServed: 'Brazil',
    },
    breadcrumb: {
        home: { label: 'Home', href: '/en' },
        services: { label: 'Services', href: '/en/services' },
        current: 'Protection & Selectivity Studies',
    },
    hero: {
        badge: 'POWER SYSTEM ENGINEERING',
        title: 'Protection & Coordination Selectivity Studies',
        description: 'Analytical power system modeling, ETAP simulations, and rigorous numerical relay parameterization to ensure ultra-fast fault clearing and maximum operational continuity.',
        primaryCta: { label: 'REQUEST TECHNICAL PROPOSAL / SCOPE REVIEW', href: '/en/contact' },
        secondaryCta: { label: 'View All Services', href: '/en/services' },
        trustBadges: [
            'Registered Engineering Practice',
            'Grid Code & Utility Compliance',
            'Advanced ETAP Simulation',
            'Field Expertise up to 500 kV',
        ],
    },
    overview: {
        challenge: {
            title: 'The Operational Challenge',
            text: 'Inaccurate relay settings and missing coordination studies cause cascading nuisance trips, catastrophic damage to critical transformers and generators, and severe grid non-compliance penalties.',
        },
        solution: {
            title: 'Our Engineering Solution',
            text: 'We build comprehensive power system models for industrial facilities and utility substations, determining symmetrical and asymmetrical fault currents, plotting coordinated time-current curves (TCC), and supplying validated configuration files.',
        },
        highlights: [
            'Selective fault isolation in milliseconds without tripping upstream feeders.',
            'Full compliance with IEEE, IEC, and national grid operator criteria.',
            'Mitigation of electrical hazards through IEEE 1584 Arc Flash hazard analysis.',
            'Comprehensive technical support for utility interconnection approval.',
        ],
    },
    capabilities: {
        badge: 'TECHNICAL DELIVERABLES',
        title: 'Technical Capabilities & Engineering Deliverables',
        subtitle: 'From analytical system calculations to numerical IED configuration files',
        deliverablesLabel: 'Key Engineering Deliverables:',
        pillars: [
            {
                title: 'Short-Circuit & Load Flow Studies',
                description: 'Comprehensive network modeling in ETAP software determining balanced and unbalanced fault currents in strict accordance with ANSI/IEEE and IEC 60909 standards.',
                deliverables: [
                    'Maximum and minimum fault current analytical report',
                    'Circuit breaker and switchgear interrupting rating evaluation',
                    'Steady-state load flow and busbar voltage profile analysis',
                    'Cable, transformer, and bus duct thermal rating validation',
                ],
            },
            {
                title: 'Protection Coordination & Selectivity',
                description: 'Rigorous calculation of Time-Current Characteristic (TCC) curves ensuring time and current grading across all protective stages from generation to low-voltage feeders.',
                deliverables: [
                    'Coordinated TCC response plots and grading margins',
                    'Parameter settings for 50/51, 50N/51N, 67, 21, 87T, 87L, 59/27 functions',
                    'Optimized clearing times mitigating arc energy while preserving selectivity',
                    'Master relay setting schedule for field implementation',
                ],
            },
            {
                title: 'Numerical Relay Parameterization (IEDs)',
                description: 'Engineering and validation of configuration files and programmable logic schemes for leading global relay manufacturers (SEL, Siemens, Schneider, ABB/Hitachi).',
                deliverables: [
                    'Vendor-specific configuration files (.CID, .ICD, .RVD, .ENV)',
                    'Teleprotection and fast logic inter-tripping schemes',
                    'CT and VT dimensioning and saturation curve checks',
                    'Trip matrix verification and custom boolean logic schemes',
                ],
            },
            {
                title: 'Arc Flash Hazard Analysis (IEEE 1584)',
                description: 'Determination of incident energy levels and arc flash boundary distances across medium- and low-voltage switchgear per IEEE 1584 and NFPA 70E.',
                deliverables: [
                    'Incident energy calculations (cal/cm²) across all electrical buses',
                    'PPE category classification and safe work boundary definition',
                    'Compliant multi-language warning labels for electrical equipment',
                    'Practical engineering recommendations to reduce incident energy',
                ],
            },
        ],
        techSpecs: {
            title: 'Engineering Software & Supported Hardware',
            subtitle: 'Advanced analytical suites and multi-vendor numerical IED mastery',
            tags: [
                'ETAP Software Suite',
                'IEEE 1584-2018',
                'IEC 60909 / ANSI C37',
                'Grid Code Compliance',
                'SEL AcSELerator QuickSet',
                'Siemens DIGSI 4 & 5',
                'Schneider Easergy Studio & S1 Agile',
                'Hitachi PCM600',
                'GE Enervista',
            ],
        },
    },
    gallery: {
        badge: 'PLATFORMS & INSTRUMENTATION',
        title: 'Engineering Software & Modeling Suites',
        subtitle: 'Industry-standard simulation and drafting software utilized for power system design and analysis',
        items: [
            {
                image: '/images/services/etap.jpg',
                alt: 'ETAP - Power System Simulator',
                category: 'Power Simulation & Protection',
                title: 'ETAP - Power System Simulator',
                description: 'Comprehensive electrical network modeling for short-circuit analysis (ANSI/IEC), steady-state load flow, and Time-Current Coordination (TCC) curve development.',
                badges: ['Short-Circuit', 'TCC Coordination', 'Arc Flash IEEE 1584', 'Grid Compliance'],
            },
            {
                image: '/images/services/autocad.jpg',
                alt: 'AutoCAD Electrical / Substation Layouts',
                category: 'Electrical CAD & Schematic Design',
                title: 'AutoCAD Electrical / Substation Layouts',
                description: 'Engineering development of executive single-line diagrams, high-voltage substation physical arrangements, three-line schematics, and relay panel wiring.',
                badges: ['Single-Line Diagrams', 'Substation Layouts', 'Protection Panels'],
            },
            {
                image: '/images/services/atp.jpg',
                alt: 'ATP / ATPDraw',
                category: 'Electromagnetic Transients (EMTP)',
                title: 'ATP / ATPDraw',
                description: 'Detailed simulation of high-voltage electromagnetic transients, breaker switching overvoltages, lightning strike surges, and insulation coordination.',
                badges: ['EMTP Transients', 'Insulation Coordination', 'Switching Surges'],
            },
            {
                image: '/images/services/ptw.jpg',
                alt: 'SKM Power*Tools (PTW)',
                category: 'Industrial Analysis & Selectivity',
                title: 'SKM Power*Tools (PTW)',
                description: 'Analytical evaluation of complex industrial power distribution networks, circuit breaker interrupting duty checks, and arc flash hazard evaluations.',
                badges: ['Industrial Selectivity', 'Arc Flash Analysis', 'IEEE / NFPA Standards'],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Frequently Asked Questions',
        subtitle: 'Technical details regarding scope, lead time, and deliverables',
        items: [
            {
                question: 'What is the typical lead time for a protection coordination study?',
                answer: 'Lead time depends on network size and relay count. Standard medium-voltage facilities take between 15 to 30 business days, including interim reports for utility or grid operator alignment.',
            },
            {
                question: 'Do you provide formal engineering certification and sign-off?',
                answer: 'Yes. All our studies and reports are signed by licensed, credentialed professional electrical engineers with full legal and regulatory backing.',
            },
            {
                question: 'Can KR Engenharia also inject and test settings on-site?',
                answer: 'Absolutely. In addition to theoretical studies, our field commissioning engineers can flash the parameter files onto the IEDs and execute secondary injection tests with OMICRON test sets to verify tripping behavior.',
            },
        ],
    },
    cta: {
        title: 'Need a Certified Protection & Selectivity Study?',
        subtitle: 'Discuss your project scope with our power system specialists and receive an authoritative technical proposal.',
        label: 'REQUEST TECHNICAL PROPOSAL / SCOPE REVIEW',
        href: '/en/contact',
    },
};

export const automationPt: ServiceLandingContent = {
    schema: {
        name: 'Automação de Sistemas Elétricos & Protocolos de Comunicação',
        description: 'Engenharia de automação de subestações SAS, IEC 61850 (GOOSE, MMS, SV), redundância PRP/HSR, telecontrole ONS (DNP3, IEC 60870-5-104) e sistemas SCADA.',
        catalogName: 'Soluções Técnicas em Automação & Redes',
        areaServed: 'Brazil',
    },
    breadcrumb: {
        home: { label: 'Início', href: '/' },
        services: { label: 'Serviços', href: '/servicos' },
        current: 'Automação de Sistemas Elétricos',
    },
    hero: {
        badge: 'AUTOMAÇÃO & TELECONTROLE INDUSTRIAL',
        title: 'Automação de Sistemas Elétricos & Protocolos de Comunicação',
        description: 'Arquitetura completa de automação de subestações (SAS) e usinas baseada na norma IEC 61850, com domínio profundo em protocolos industriais de comunicação (DNP3.0, IEC 60870-5-104), supervisórios SCADA e redes de alta disponibilidade PRP/HSR.',
        primaryCta: { label: 'SOLICITAR PROPOSTA TÉCNICA DE AUTOMAÇÃO', href: '/contato' },
        secondaryCta: { label: 'Ver Todos os Serviços', href: '/servicos' },
        trustBadges: [
            'IEC 61850 Edição 1 e Edição 2',
            'Protocolos ONS / DNP3 / IEC 60870-5-104',
            'Redundância Zero-Loss PRP / HSR',
            'Integração Multimarca de BCUs e Gateways',
        ],
    },
    overview: {
        challenge: {
            title: 'A Complexidade da Subestação Digital',
            text: 'A modernização de subestações exige integrar IEDs de diferentes fornecedores em barramentos de processo e de estação, garantindo comunicação em tempo real sem perda de pacotes e em estrita conformidade com os requisitos de telemetria do ONS e concessionárias.',
        },
        solution: {
            title: 'Nossa Solução de Integração Total',
            text: 'Projetamos, configuramos e comissionamos a arquitetura de automação completa (níveis de processo, bay e estação). Configuramos trocas de mensagens GOOSE de alta velocidade, relatórios MMS, gateways de telemetria e telas supervisórias SCADA com rastreabilidade cronológica milimétrica (SOE).',
        },
        highlights: [
            'Interoperabilidade comprovada entre diferentes fabricantes de IEDs (SEL, Siemens, Schneider, GE, ABB).',
            'Tempo de transferência zero em falha de enlace com protocolos de redundância PRP e HSR.',
            'Homologação de telemetria junto a centros de controle (ONS, COS, COI) sem pendências.',
            'Interface operacional ergonômica com telas sinóticas SCADA e diagnósticos detalhados.',
        ],
    },
    capabilities: {
        badge: 'ENTREGÁVEIS TÉCNICOS',
        title: 'Soluções Técnicas em Automação & Redes',
        subtitle: 'Engenharia de ponta para operação crítica em alta e extra-alta tensão',
        deliverablesLabel: 'Principais Entregáveis de Engenharia:',
        pillars: [
            {
                title: 'Arquitetura SAS & Norma IEC 61850',
                description: 'Concepção e engenharia do sistema de automação conforme IEC 61850 Ed. 1 e Ed. 2. Estruturação dos barramentos de estação (Station Bus) e processo (Process Bus), configuração de ficheiros SCD/SSD/CID.',
                deliverables: [
                    'Projeto de arquitetura física e lógica de rede',
                    'Engenharia do arquivo de configuração do sistema (.SCD)',
                    'Configuração de mensagens GOOSE para intertravamento e trip (< 4 ms)',
                    'Parametrização de relatórios MMS para servidores e clientes SCADA',
                ],
            },
            {
                title: 'Protocolos de Comunicação & Telecontrole ONS',
                description: 'Implementação de protocolos padrão para interligação segura entre a subestação e os centros de despacho de concessionárias e do ONS via canais dedicados e redes IP.',
                deliverables: [
                    'Parametrização de gateways DNP3.0 (Serial RS-232/485 e TCP/IP)',
                    'Configuração de enlaces IEC 60870-5-104 e IEC 60870-5-101',
                    'Tabela de pontos de telemetria aprovada e validada ponto a ponto',
                    'Comandos remotos seguros com confirmação seletiva (Select-Before-Operate)',
                ],
            },
            {
                title: 'Redes Industriais de Alta Disponibilidade (PRP/HSR)',
                description: 'Dimensionamento e configuração de switches industriais gerenciáveis em topologias com redundância determinística, impedindo qualquer interrupção operacional.',
                deliverables: [
                    'Implementação de redes duplas independentes PRP (Parallel Redundancy)',
                    'Configuração de anéis HSR (High-availability Seamless Redundancy)',
                    'Sincronismo de tempo de alta precisão via PTP (IEEE 1588) e IRIG-B',
                    'Segmentação com VLANs, priorização de tráfego QoS e segurança cibernética',
                ],
            },
            {
                title: 'Sistemas SCADA & IHMs Operacionais',
                description: 'Desenvolvimento de sistemas supervisórios locais e remotos modernos para monitoramento situacional em tempo real e controle total da planta.',
                deliverables: [
                    'Telas unifilares sinóticas com navegação intuitiva e controle de bay',
                    'Gestão inteligente de alarmes priorizados e oscilografias COMTRADE',
                    'Registro auditável de Sequência de Eventos (SOE) com estampa de tempo em ms',
                    'Lógicas de recomposição automática e intertravamentos de segurança',
                ],
            },
        ],
        techSpecs: {
            title: 'Protocolos & Tecnologias Dominadas',
            subtitle: 'Padrões internacionais e plataformas de fabricantes líderes globais',
            tags: [
                'IEC 61850 Ed. 1 & 2',
                'GOOSE / MMS / Sampled Values (SV)',
                'DNP3.0 (Serial & TCP/IP)',
                'IEC 60870-5-104 / 101',
                'Modbus RTU / TCP',
                'PRP & HSR Redundancy',
                'PTP (IEEE 1588v2) & SNTP',
                'BCU C264 / MiCOM',
                'Siemens SICAM & SIPROTEC',
                'SEL Real-Time Automation Controllers (RTAC)',
            ],
        },
    },
    gallery: {
        badge: 'FERRAMENTAS & INSTRUMENTAÇÃO',
        title: 'Softwares de Engenharia IEC 61850, SCADA & IHMs',
        subtitle: 'Ferramentas especializadas para configuração de IEDs, telas sinóticas e controle em tempo real',
        items: [
            {
                image: '/images/services/iec61850.jpg',
                alt: 'Software de Engenharia IEC 61850 (SEL Architect)',
                category: 'Configuração SAS & Barramento Digital',
                title: 'Software de Engenharia IEC 61850 (SEL Architect)',
                description: 'Engenharia e configuração de arquivos de subestação (.SCD / .CID) no SEL Architect, mapeamento de nós lógicos (LN), configuração de relatórios MMS e matriz de mensagens GOOSE de alta velocidade entre IEDs.',
                badges: [
                    'SEL Architect',
                    'Arquivos .SCD / .CID',
                    'Mensagens GOOSE (< 4ms)',
                    'Relatórios MMS',
                ],
            },
            {
                image: '/images/services/scada.jpg',
                alt: 'Sistema SCADA (SAGE / CEPEL) & Telemetria em Tempo Real',
                category: 'Supervisão de Sala de Controle',
                title: 'Sistema SCADA (SAGE / CEPEL) & Telemetria em Tempo Real',
                description: 'Configuração e supervisão de centros de controle com a plataforma SAGE (Cepel / Eletrobras) e SCADA de subestação, medição em tempo real de MW/MVAR, telecontrole conforme ONS e registro auditável SOE.',
                badges: [
                    'SAGE (Cepel / Eletrobras)',
                    'Telas Sinóticas',
                    'DNP3 / IEC 60870-5-104',
                    'Telecontrole ONS',
                ],
            },
            {
                image: '/images/services/ihm.jpg',
                alt: 'IHM Operacional, Painéis de Bay & Switchboard (PMS)',
                category: 'Interface Homem-Máquina Local & Switchboard',
                title: 'IHM Operacional, Painéis de Bay & Switchboard (PMS)',
                description: 'Telas touchscreen e IHMs locais para comando de switchboards (690V / Média Tensão), supervisão de geradores, barramentos, BESS, controle de disjuntores e intertravamentos de segurança em tempo real.',
                badges: [
                    'Painéis Touchscreen',
                    'Switchboard 690V / MT',
                    'Geradores & BESS',
                    'Intertravamentos de Segurança',
                ],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Perguntas Frequentes sobre Automação de Sistemas Elétricos',
        subtitle: 'Respostas diretas sobre implementação de IEC 61850 e telecontrole',
        items: [
            {
                question: 'Qual a diferença entre mensagens GOOSE e relatórios MMS na IEC 61850?',
                answer: 'As mensagens GOOSE trafegam diretamente na camada de enlace Ethernet (Layer 2) com prioridade máxima para troca ultrarrápida de estados (< 4 ms) entre IEDs (intertravamento e desarmes). Já os relatórios MMS utilizam a pilha TCP/IP (Layer 7) para comunicação cliente-servidor com os supervisórios SCADA e gateways.',
            },
            {
                question: 'Como a KR Engenharia garante a redundância zero-loss na subestação?',
                answer: 'Utilizamos os protocolos PRP (Parallel Redundancy Protocol, onde os pacotes são duplicados simultaneamente em duas LANs independentes) e HSR (High-availability Seamless Redundancy, em anel fechado), garantindo tempo de recuperação de zero milissegundos em caso de rompimento de fibra óptica ou quebra de cabo.',
            },
            {
                question: 'Vocês realizam a integração com o centro de controle do ONS ou distribuidora?',
                answer: 'Sim, cuidamos de toda a cadeia: desde o mapeamento dos pontos de telemetria na norma da concessionária/ONS, parametrização dos gateways DNP3 ou 104, até os testes de ponta a ponta com a sala de controle.',
            },
        ],
    },
    cta: {
        title: 'Quer Digitalizar ou Automatizar sua Subestação?',
        subtitle: 'Fale com nossos especialistas em redes industriais, IEC 61850 e telemetria para desenhar sua arquitetura de automação.',
        label: 'SOLICITAR PROPOSTA TÉCNICA DE AUTOMAÇÃO',
        href: '/contato',
    },
};

export const automationEn: ServiceLandingContent = {
    schema: {
        name: 'Power System Automation & Communication Protocols',
        description: 'Substation automation systems (SAS), IEC 61850 (GOOSE, MMS, SV), zero-loss PRP/HSR redundancy, utility telecontrol (DNP3, IEC 60870-5-104), and SCADA.',
        catalogName: 'Technical Capabilities in Automation & Networks',
        areaServed: 'Brazil',
    },
    breadcrumb: {
        home: { label: 'Home', href: '/en' },
        services: { label: 'Services', href: '/en/services' },
        current: 'Power System Automation',
    },
    hero: {
        badge: 'AUTOMATION & INDUSTRIAL TELECONTROL',
        title: 'Power System Automation & Communication Protocols',
        description: 'Complete Substation Automation System (SAS) and power plant architectures compliant with IEC 61850, featuring deep expertise in industrial communication protocols (DNP3, IEC 60870-5-104), modern SCADA HMIs, and zero-loss PRP/HSR networks.',
        primaryCta: { label: 'REQUEST AUTOMATION PROPOSAL', href: '/en/contact' },
        secondaryCta: { label: 'View All Services', href: '/en/services' },
        trustBadges: [
            'IEC 61850 Edition 1 & 2 Standards',
            'Utility Protocols DNP3 / IEC 60870-5-104',
            'Zero-Loss PRP / HSR Redundancy',
            'Multi-Vendor BCU & Gateway Integration',
        ],
    },
    overview: {
        challenge: {
            title: 'The Complexity of Digital Substations',
            text: 'Modern digital substations require seamless integration of multi-vendor IEDs across station and process buses, requiring determinism, zero packet loss, and full compliance with regional utility and grid operator telemetry mandates.',
        },
        solution: {
            title: 'Our End-to-End Integration Capability',
            text: 'We design, engineer, configure, and commission complete SAS architectures covering process, bay, and station levels. We deliver ultra-fast GOOSE messaging, reliable MMS reporting, telecontrol gateways, and high-availability SCADA HMIs with millisecond SOE timestamping.',
        },
        highlights: [
            'Proven multi-vendor interoperability across SEL, Siemens, Schneider, GE, and ABB platforms.',
            'Zero recovery time on network communication links using PRP and HSR protocols.',
            'Flawless telemetry commissioning and sign-off with national grid control centers.',
            'Ergonomic, situational-awareness SCADA HMIs with real-time diagnostic reporting.',
        ],
    },
    capabilities: {
        badge: 'TECHNICAL DELIVERABLES',
        title: 'Technical Capabilities in Automation & Networks',
        subtitle: 'Cutting-edge engineering for mission-critical transmission and industrial assets',
        deliverablesLabel: 'Key Engineering Deliverables:',
        pillars: [
            {
                title: 'SAS Architecture & IEC 61850 Standards',
                description: 'Design and engineering of substation automation systems according to IEC 61850 Ed. 1 and Ed. 2. Implementation of Station and Process Buses, SCD/SSD/CID file integration.',
                deliverables: [
                    'Physical and logical network architecture engineering drawings',
                    'Substation Configuration Description (.SCD) file compilation',
                    'Fast horizontal GOOSE messaging for interlocking and trip (< 4 ms)',
                    'MMS reporting and client-server parameterization for SCADA',
                ],
            },
            {
                title: 'Communication Protocols & Grid Telecontrol',
                description: 'Implementation of standard communication protocols for dependable interconnection between the substation and utility dispatch centers via dedicated telemetry links.',
                deliverables: [
                    'DNP3.0 gateway parameterization (Serial RS-232/485 & TCP/IP)',
                    'IEC 60870-5-104 and IEC 60870-5-101 channel integration',
                    'Comprehensive telemetry point lists approved and point-to-point verified',
                    'Secure remote command handling with Select-Before-Operate (SBO)',
                ],
            },
            {
                title: 'High-Availability Industrial Networks (PRP/HSR)',
                description: 'Dimensioning and configuration of managed industrial Ethernet switches in deterministic topologies to eliminate network single points of failure.',
                deliverables: [
                    'Dual independent LAN implementation using PRP (Parallel Redundancy)',
                    'Closed-ring topologies configured with HSR (Seamless Redundancy)',
                    'Nanosecond-grade clock synchronization via IEEE 1588v2 PTP and IRIG-B',
                    'VLAN isolation, QoS prioritization, and cybersecurity hardening',
                ],
            },
            {
                title: 'Substation SCADA & Operational HMIs',
                description: 'Development of modern local and remote supervisory control systems ensuring complete situational awareness and intuitive plant operation.',
                deliverables: [
                    'Dynamic single-line diagrams with bay control interlocks',
                    'Intelligent prioritized alarm management and COMTRADE oscillography',
                    'Auditable Sequence of Events (SOE) recording with millisecond precision',
                    'Automatic restoration logic and emergency load shedding schemes',
                ],
            },
        ],
        techSpecs: {
            title: 'Supported Protocols & Industrial Technologies',
            subtitle: 'Global standards and platforms from industry-leading manufacturers',
            tags: [
                'IEC 61850 Ed. 1 & 2',
                'GOOSE / MMS / Sampled Values (SV)',
                'DNP3.0 (Serial & TCP/IP)',
                'IEC 60870-5-104 / 101',
                'Modbus RTU / TCP',
                'PRP & HSR Redundancy',
                'PTP (IEEE 1588v2) & SNTP',
                'BCU C264 / MiCOM',
                'Siemens SICAM & SIPROTEC',
                'SEL Real-Time Automation Controllers (RTAC)',
            ],
        },
    },
    gallery: {
        badge: 'PLATFORMS & INSTRUMENTATION',
        title: 'IEC 61850 Engineering, SCADA & HMI Platforms',
        subtitle: 'Specialized engineering software tools for multi-vendor IED integration and real-time situational control',
        items: [
            {
                image: '/images/services/iec61850.jpg',
                alt: 'IEC 61850 Engineering Software (SEL Architect)',
                category: 'SAS Configuration & Digital Bus',
                title: 'IEC 61850 Engineering Software (SEL Architect)',
                description: 'Full lifecycle engineering of Substation Configuration Description (.SCD / .CID) files in SEL Architect, logical node mapping, high-speed GOOSE control blocks, and MMS reporting.',
                badges: [
                    'SEL Architect',
                    '.SCD / .CID Engineering',
                    'GOOSE Messaging (< 4ms)',
                    'MMS Datasets',
                ],
            },
            {
                image: '/images/services/scada.jpg',
                alt: 'SCADA System (SAGE / CEPEL) & Real-Time Telemetry',
                category: 'Control Center Supervisory',
                title: 'SCADA System (SAGE / CEPEL) & Real-Time Telemetry',
                description: 'Control center and substation SCADA engineering using the SAGE (Cepel / Eletrobras) open energy management platform, real-time MW/MVAR monitoring, utility grid telecontrol, and millisecond SOE.',
                badges: [
                    'SAGE (Cepel / Eletrobras)',
                    'Single-Line Mimics',
                    'DNP3 / IEC 60870-5-104',
                    'Grid Code Telecontrol',
                ],
            },
            {
                image: '/images/services/ihm.jpg',
                alt: 'Operational HMI, Bay & Switchboard Control (PMS)',
                category: 'Local Human-Machine Interface & Switchboard',
                title: 'Operational HMI, Bay & Switchboard Control (PMS)',
                description: 'Touchscreen panels and local HMIs for 690V / Medium-Voltage switchboard control, generator monitoring, busbar management, BESS, breaker status, and real-time safety interlocking.',
                badges: [
                    'Industrial Touchscreen',
                    '690V / MV Switchboard',
                    'Generators & BESS',
                    'Safety Interlocks',
                ],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Frequently Asked Questions on Power System Automation',
        subtitle: 'Practical insights into IEC 61850 implementation and telecontrol protocols',
        items: [
            {
                question: 'What is the distinction between GOOSE and MMS messages in IEC 61850?',
                answer: 'GOOSE messages operate directly at the Ethernet data link layer (Layer 2) for ultra-fast peer-to-peer relay trip and interlock exchanges (< 4 ms). In contrast, MMS messages use the TCP/IP stack (Layer 7) for client-server communication between IEDs and SCADA supervisory stations.',
            },
            {
                question: 'How do you guarantee zero communication downtime in SAS networks?',
                answer: 'We deploy PRP (Parallel Redundancy Protocol), where every Ethernet packet is duplicated and sent simultaneously over two completely separate LANs, or HSR (High-availability Seamless Redundancy) in rings, delivering zero-millisecond failover if a cable or switch fails.',
            },
            {
                question: 'Can you handle complete point-to-point testing with the grid operator?',
                answer: 'Yes. We manage the entire lifecycle: telemetry point mapping, gateway protocol configuration, and live point-by-point end-to-end testing with utility and transmission operators.',
            },
        ],
    },
    cta: {
        title: 'Ready to Digitize or Automate Your Substation?',
        subtitle: 'Consult our industrial network and IEC 61850 automation engineers to architect your system.',
        label: 'REQUEST AUTOMATION PROPOSAL',
        href: '/en/contact',
    },
};

export const commissioningPt: ServiceLandingContent = {
    schema: {
        name: 'Comissionamento de Subestações & Ensaios em Campo',
        description: 'Comissionamento de subestações até 500 kV, injeção secundária com OMICRON CMC 356, testes de matriz de trip, TAF/TAC (FAT/SAT) e suporte na energização.',
        catalogName: 'Escopo Técnico dos Ensaios & Comissionamento',
        areaServed: 'Brazil',
    },
    breadcrumb: {
        home: { label: 'Início', href: '/' },
        services: { label: 'Serviços', href: '/servicos' },
        current: 'Comissionamento & Ensaios em Campo',
    },
    hero: {
        badge: 'COMISSIONAMENTO & TESTES DE ALTA TENSÃO',
        title: 'Comissionamento de Subestações & Ensaios em Campo',
        description: 'Energização segura, sem desarmes inesperados e com rastreabilidade total. Ensaios funcionais com injeção secundária de precisão utilizando malas OMICRON CMC, levantamento de curvas de relés, validação de matrizes de disparo e acompanhamento in loco em subestações até 500 kV.',
        primaryCta: { label: 'SOLICITAR PROPOSTA DE COMISSIONAMENTO', href: '/contato' },
        secondaryCta: { label: 'Ver Todos os Serviços', href: '/servicos' },
        trustBadges: [
            'Malas de Teste OMICRON CMC Calibradas',
            'Experiência em Subestações de 13.8 kV a 500 kV',
            'Equipe Técnica Certificada NR-10 e SEP',
            'Acompanhamento Presencial na Partida / Energização',
        ],
    },
    overview: {
        challenge: {
            title: 'O Risco da Energização sem Testes Rigorosos',
            text: 'Erros de fiação em painéis, inversão de polaridade em TCs/TPs ou lógicas de desarme não testadas causam explosões, queima de equipamentos milionários e atrasos críticos no cronograma de entrada em operação comercial de usinas e subestações.',
        },
        solution: {
            title: 'Nossa Metodologia Preventiva de Campo',
            text: 'Executamos procedimentos sistemáticos de comissionamento elétrico: inspeção visual, testes de continuidade e isolamento, injeção secundária com sinal dinâmico e ensaios ponto a ponto até o centro de operação, assegurando que o sistema atue exatamente conforme projetado no instante da energização.',
        },
        highlights: [
            'Testes dinâmicos de relés com simulação de oscilografias de faltas reais.',
            'Disparo físico real de disjuntores para comprovação da cadeia de intertravamento.',
            'Emissão de relatórios técnicos de ensaio com certificados rastreáveis.',
            'Plantão e suporte na energização em regime de operação assistida.',
        ],
    },
    capabilities: {
        badge: 'ENTREGÁVEIS TÉCNICOS',
        title: 'Escopo Técnico dos Ensaios & Comissionamento',
        subtitle: 'Garantia de integridade física e funcional de todos os ativos da subestação',
        deliverablesLabel: 'Principais Entregáveis de Engenharia:',
        pillars: [
            {
                title: 'Injeção Secundária de Corrente e Tensão',
                description: 'Ensaios metrológicos de relés numéricos com malas hexafásicas calibradas OMICRON CMC 356, levantando com exatidão os pontos de partida (pickup), tempos de atuação e características direcionais.',
                deliverables: [
                    'Levantamento de curvas de sobrecorrente (50/51, 50N/51N)',
                    'Ensaios das zonas de proteção de distância (21) e diferencial (87)',
                    'Verificação de saturação de TCs e checagem de polaridade e relação',
                    'Relatório detalhado de ensaio com oscilogramas gerados',
                ],
            },
            {
                title: 'Testes de Matriz de Trip & Intertravamento',
                description: 'Validação física completa da cadeia de comando: da saída digital do IED até a bobina de abertura e fechamento do disjuntor e seccionadoras associadas.',
                deliverables: [
                    'Ensaio exaustivo da matriz de causa e efeito (Trip Matrix)',
                    'Comprovação de atuação de bloqueios (função 86 - Lockout)',
                    'Simulação de falha de disjuntor (função 50BF) e religamento automático',
                    'Intertravamentos eletromecânicos e lógicos entre vãos (bays)',
                ],
            },
            {
                title: 'Testes TAF (FAT) e TAC (SAT)',
                description: 'Suporte e liderança técnica nos Testes de Aceitação em Fábrica (TAF) junto aos integradores de painéis e Testes de Aceitação em Campo (TAC) na obra civil/elétrica.',
                deliverables: [
                    'Inspeção dimensional, fiação e esquemas elétricos em fábrica',
                    'Protocolos formais de teste aprovados pelo cliente final',
                    'Testes ponto a ponto de sinais digitais e analógicos até o SCADA',
                    'Gestão e encerramento de listas de pendências (Punch List)',
                ],
            },
            {
                title: 'Energização Inicial & Operação Assistida',
                description: 'Presença em campo de engenheiros seniores durante as manobras de energização da subestação, monitorando grandezas elétricas e apoiando as equipes de operação.',
                deliverables: [
                    'Medição de grandezas em vazio (tensão, sincronismo e fasores)',
                    'Acompanhamento do primeiro fechamento de carga sob corrente real',
                    'Verificação do sentido do fluxo de potência e fasorial da proteção',
                    'Suporte técnico e contingência durante a operação assistida inicial',
                ],
            },
        ],
        techSpecs: {
            title: 'Instrumentação & Equipamentos de Teste',
            subtitle: 'Equipamentos de alta tecnologia calibrados por laboratórios credenciados',
            tags: [
                'Mala de Testes OMICRON CMC 356',
                'OMICRON Test Universe Suite',
                'RelaySimTest (Simulação Dinâmica)',
                'Megômetros Digitais de Alta Tensão',
                'Micro-ohmímetros de Contato (Ducter)',
                'Alicates de Fase e Medidores Fasoriais',
                'Calibração Rastreável RBC / Inmetro',
                'Normas IEC 60255 e IEEE C37',
            ],
        },
    },
    gallery: {
        badge: 'FERRAMENTAS & INSTRUMENTAÇÃO',
        title: 'Malas & Equipamentos de Teste Aplicados em Campo',
        subtitle: 'Instrumentação metrológica de ponta aplicada em ensaios secundários, isolamento e resistência de contato',
        items: [
            {
                image: '/images/services/cmc500.jpg',
                alt: 'Mala de Testes OMICRON CMC 500 / 356',
                category: 'Injeção Secundária Hexafásica de Precisão',
                title: 'Mala de Testes OMICRON CMC 500 / 356',
                description: 'Mala microprocessada de alta exatidão OMICRON CMC aplicando injeção de corrente e tensão secundária em relés numéricos de alimentadores, linhas e transformadores em subestação.',
                badges: ['OMICRON CMC', 'Injeção Hexafásica', 'Test Universe', 'Calibração RBC'],
            },
            {
                image: '/images/services/vebko_amt205.jpg',
                alt: 'Mala de Testes Vebko AMT 205',
                category: 'Sistema Universal de Testes de Relés',
                title: 'Mala de Testes Vebko AMT 205',
                description: 'Mala de testes universal Vebko AMT 205 conectada aos terminais de ensaio em cubículo de proteção para ensaios automatizados de sobrecorrente, direcional e pick-up/drop-out.',
                badges: [
                    'Vebko AMT 205',
                    'Testes Automatizados',
                    'Pick-up & Drop-out',
                    'Salas de Comando',
                ],
            },
            {
                image: '/images/services/megger.jpg',
                alt: 'Megômetro Digital Megger (Alta Tensão)',
                category: 'Ensaio de Resistência de Isolamento',
                title: 'Megômetro Digital Megger (Alta Tensão)',
                description: 'Equipamento Megger de alta tensão (5kV / 10kV) conectado a buchas de transformadores de potência e cabos isolados para medição de IP (Índice de Polarização) e DA (Absorção Dielétrica).',
                badges: [
                    'Megger 5kV / 10kV',
                    'Índice de Polarização (IP)',
                    'Absorção Dielétrica',
                    'Transformadores de Força',
                ],
            },
            {
                image: '/images/services/microohmmeter.jpg',
                alt: 'Micro-ohmímetro Digital (Micro / Ducter)',
                category: 'Medição de Resistência de Contato (μΩ)',
                title: 'Micro-ohmímetro Digital (Micro / Ducter)',
                description: 'Ensaio em campo aplicando injeção de alta corrente contínua (100A/200A) com garras Kelvin através dos polos de disjuntores e contatos de seccionadoras para validação de resistência de contato.',
                badges: [
                    'Micro-ohmímetro (Micro)',
                    'Resistência de Contato (μΩ)',
                    'Disjuntores & Seccionadoras',
                    'Garras Kelvin',
                ],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Perguntas Frequentes sobre Comissionamento',
        subtitle: 'Procedimentos de segurança, instrumentação e mobilização de equipe',
        items: [
            {
                question: 'Quais modelos de malas de ensaio a KR Engenharia utiliza em campo?',
                answer: 'Utilizamos primordialmente malas de ensaio hexafásicas da família OMICRON CMC (especialmente CMC 356 com software Test Universe), referência mundial em precisão e ensaios automatizados de relés de proteção.',
            },
            {
                question: 'A equipe possui todas as certificações de segurança do trabalho?',
                answer: 'Sim, nossos engenheiros e técnicos contam com treinamentos atualizados de NR-10 (Básico e Complementar SEP - Sistema Elétrico de Potência), NR-35 (Trabalho em Altura) e equipamentos de proteção individual calibrados.',
            },
            {
                question: 'Vocês atendem em todo o território nacional?',
                answer: 'Sim, temos capacidade de mobilização rápida para qualquer estado do Brasil, atendendo desde subestações de usinas solares e eólicas até grandes plantas industriais e concessionárias de transmissão.',
            },
        ],
    },
    cta: {
        title: 'Sua Subestação Pronta para Energizar com Segurança Total',
        subtitle: 'Garanta que sua entrada em operação ocorra dentro do prazo e sem falhas. Solicite uma proposta para nossa equipe de comissionamento.',
        label: 'SOLICITAR PROPOSTA DE COMISSIONAMENTO',
        href: '/contato',
    },
};

export const commissioningEn: ServiceLandingContent = {
    schema: {
        name: 'Substation Commissioning & Secondary Injection Testing',
        description: 'Substation commissioning up to 500 kV, calibrated secondary injection with OMICRON CMC sets, trip matrix validation, FAT/SAT, and energization support.',
        catalogName: 'Technical Testing Scope & Commissioning Deliverables',
        areaServed: 'Brazil',
    },
    breadcrumb: {
        home: { label: 'Home', href: '/en' },
        services: { label: 'Services', href: '/en/services' },
        current: 'Commissioning & Field Testing',
    },
    hero: {
        badge: 'COMMISSIONING & HIGH-VOLTAGE TESTING',
        title: 'Substation Commissioning & Secondary Injection Testing',
        description: 'Safe, predictable energization with complete auditability. Precision secondary injection testing using OMICRON CMC sets, numerical relay pickup and curve verification, full trip matrix testing, and on-site energization support for substations up to 500 kV.',
        primaryCta: { label: 'REQUEST COMMISSIONING PROPOSAL', href: '/en/contact' },
        secondaryCta: { label: 'View All Services', href: '/en/services' },
        trustBadges: [
            'Calibrated OMICRON CMC Test Sets',
            'Field Experience from 13.8 kV to 500 kV',
            'Certified Safety & High-Voltage Engineers',
            'On-Site Energization & Assisted Operation',
        ],
    },
    overview: {
        challenge: {
            title: 'The Severe Risk of Inadequate Testing',
            text: 'Wiring mistakes, reversed CT/VT polarities, or unverified tripping schemes result in catastrophic equipment damage, arc flash incidents, and costly commercial delays during substation start-up.',
        },
        solution: {
            title: 'Our Systematic Field Verification',
            text: 'We execute systematic, auditable electrical commissioning protocols: visual inspection, insulation resistance tests, dynamic secondary injection, and point-to-point verification to SCADA to ensure every protection element acts as designed at first energization.',
        },
        highlights: [
            'Dynamic relay testing simulating real transient fault waveforms.',
            'Physical trip testing on breakers verifying all lockout and interlock schemes.',
            'Comprehensive technical test reports with traceable calibration certificates.',
            'On-site standby and technical supervision during live energization.',
        ],
    },
    capabilities: {
        badge: 'TECHNICAL DELIVERABLES',
        title: 'Technical Testing Scope & Commissioning Deliverables',
        subtitle: 'Protecting physical assets and ensuring regulatory compliance during energization',
        deliverablesLabel: 'Key Engineering Deliverables:',
        pillars: [
            {
                title: 'Secondary Current & Voltage Injection',
                description: 'Metrological testing of numerical relays using calibrated hexaphase OMICRON CMC 356 sets, verifying pickup values, operating times, and directional impedance characteristics.',
                deliverables: [
                    'Overcurrent curve verification (50/51, 50N/51N)',
                    'Distance protection (21) and transformer differential (87) zone testing',
                    'CT saturation checks, polarity verification, and ratio validation',
                    'Detailed test reports with generated oscillograms and calibration data',
                ],
            },
            {
                title: 'Trip Matrix & Functional Interlocking',
                description: 'Physical validation of the complete control chain: from the IED digital output contact to breaker opening/closing coils and associated disconnectors.',
                deliverables: [
                    'Comprehensive cause-and-effect trip matrix testing',
                    'Master trip and lockout relay (ANSI 86) operation checks',
                    'Breaker failure (50BF) and auto-reclosing simulation',
                    'Inter-bay hardware and software interlocking validation',
                ],
            },
            {
                title: 'FAT and SAT Acceptance Testing',
                description: 'Engineering leadership in Factory Acceptance Testing (FAT) with panel integrators and Site Acceptance Testing (SAT) at the project facility.',
                deliverables: [
                    'Panel wiring, layout, and schematic verification at the factory',
                    'Client-approved standardized test procedure sign-offs',
                    'Point-to-point digital and analog verification to SCADA HMIs',
                    'Systematic punch list management and definitive resolution',
                ],
            },
            {
                title: 'Initial Energization & Assisted Operation',
                description: 'Senior field engineers on-site during initial substation switching operations, monitoring electrical quantities and supporting operations personnel.',
                deliverables: [
                    'No-load measurements (voltage, phase sequence, synchronism check)',
                    'Phasor diagram verification under initial live load current',
                    'Real-time verification of power flow direction and differential currents',
                    'Contingency support and monitoring during assisted initial operation',
                ],
            },
        ],
        techSpecs: {
            title: 'Testing Instrumentation & Software Suites',
            subtitle: 'State-of-the-art testing technology calibrated by accredited laboratories',
            tags: [
                'OMICRON CMC 356 Test Sets',
                'OMICRON Test Universe Suite',
                'RelaySimTest (Transient Testing)',
                'High-Voltage Digital Megohmmeters',
                'Contact Resistance Micro-Ohmmeters',
                'Phase Angle Meters & Phasor Checkers',
                'Traceable Calibration Certificates',
                'IEC 60255 & IEEE C37 Standards',
            ],
        },
    },
    gallery: {
        badge: 'PLATFORMS & INSTRUMENTATION',
        title: 'Secondary Injection & Field Test Sets in Action',
        subtitle: 'State-of-the-art metrological testing equipment applied in live substation commissioning',
        items: [
            {
                image: '/images/services/cmc500.jpg',
                alt: 'OMICRON CMC 500 / 356 Relay Test Set',
                category: 'Precision Hexaphase Secondary Injection',
                title: 'OMICRON CMC 500 / 356 Relay Test Set',
                description: 'High-precision microprocessed OMICRON CMC test set performing dynamic secondary injection into numerical feeder, line, and transformer protection relays.',
                badges: ['OMICRON CMC', 'Hexaphase Injection', 'Test Universe', 'Traceable Calibration'],
            },
            {
                image: '/images/services/vebko_amt205.jpg',
                alt: 'Vebko AMT 205 Universal Relay Test Set',
                category: 'Automated Protection Testing System',
                title: 'Vebko AMT 205 Universal Relay Test Set',
                description: 'Vebko AMT 205 universal test set interfaced with substation relay panel test switches, executing automated pickup/dropout and timing tests on protection elements.',
                badges: [
                    'Vebko AMT 205',
                    'Automated Testing',
                    'Pickup / Dropout',
                    'Control Room Cubicles',
                ],
            },
            {
                image: '/images/services/megger.jpg',
                alt: 'High-Voltage Digital Megger Test Set',
                category: 'Insulation Resistance & Dielectric Testing',
                title: 'High-Voltage Digital Megger Test Set',
                description: 'Heavy-duty 5kV / 10kV Megger test set connected across high-voltage transformer bushings for Polarization Index (PI) and Dielectric Absorption (DA) testing.',
                badges: [
                    'Megger 5kV / 10kV',
                    'Polarization Index (PI)',
                    'Dielectric Absorption',
                    'Power Transformers',
                ],
            },
            {
                image: '/images/services/microohmmeter.jpg',
                alt: 'Digital Micro-Ohmmeter (Micro / Ducter)',
                category: 'Contact Resistance Testing (μΩ)',
                title: 'Digital Micro-Ohmmeter (Micro / Ducter)',
                description: 'Live field testing injecting high continuous DC current (100A/200A) via Kelvin clamps through high-voltage disconnector and circuit breaker contact poles.',
                badges: [
                    'Micro-Ohmmeter (Micro)',
                    'Contact Resistance (μΩ)',
                    'Circuit Breakers & Disconnectors',
                    'Kelvin Clamps',
                ],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Frequently Asked Questions on Commissioning',
        subtitle: 'Instrumentation, team mobilization, and electrical safety standards',
        items: [
            {
                question: 'What test equipment models does KR Engenharia utilize on site?',
                answer: 'We primarily utilize OMICRON CMC hexaphase test sets (specifically the CMC 356 with Test Universe software), the undisputed international benchmark for accuracy and automated relay testing.',
            },
            {
                question: 'Does your field team have all mandatory electrical safety qualifications?',
                answer: 'Yes. Our field engineers and technicians hold active certifications in high-voltage electrical safety (NR-10 / High-Voltage SEP) and work at heights, equipped with calibrated PPE.',
            },
            {
                question: 'Do you offer mobilization across all regions and internationally?',
                answer: 'Yes. We provide rapid nationwide and international mobilization for wind farms, solar plants, industrial complexes, and major transmission substations.',
            },
        ],
    },
    cta: {
        title: 'Prepare Your Substation for Flawless Energization',
        subtitle: 'Ensure your commercial operation date is met safely and without surprises. Request a technical commissioning proposal today.',
        label: 'REQUEST COMMISSIONING PROPOSAL',
        href: '/en/contact',
    },
};
