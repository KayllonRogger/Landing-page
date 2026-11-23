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
    /** Optional section: data needed, dependencies, responsibilities, limitations. */
    requirements?: {
        badge: string;
        title: string;
        subtitle: string;
        columns: { title: string; items: string[] }[];
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
        name: 'Estudos de Proteção e Seletividade',
        description: 'Estudos de proteção, coordenação, seletividade, curto-circuito e fluxo de potência integrados à implementação. Estudos de transitórios avaliados conforme a necessidade técnica.',
        catalogName: 'Estudos Elétricos',
        areaServed: 'Brasil',
    },
    breadcrumb: {
        home: { label: 'Início', href: '/' },
        services: { label: 'Serviços', href: '/servicos' },
        current: 'Estudos de Proteção e Seletividade',
    },
    hero: {
        badge: 'ESTUDOS ELÉTRICOS',
        title: 'Estudos de Proteção e Seletividade',
        description: 'Proteção, coordenação e seletividade, curto-circuito, fluxo de potência e transitórios, integrados à parametrização e aos testes. Contrate somente as etapas necessárias.',
        trustBadges: [
            'Proteção & seletividade',
            'Curto-circuito & fluxo de potência',
            'Transitórios conforme a necessidade técnica',
            'Revisão e aprovação definidas na proposta',
        ],
        primaryCta: { label: 'Solicitar avaliação técnica', href: '/contato/?servico=estudos-eletricos' },
        secondaryCta: { label: 'Ver Todos os Serviços', href: '/servicos' },
    },
    overview: {
        challenge: {
            title: 'O Papel dos Estudos',
            text: 'Estudos elétricos fundamentam decisões de proteção e operação. Quando integrados à parametrização e aos testes, conectam a análise do sistema à verificação em campo.',
        },
        solution: {
            title: 'Como a KR Apoia',
            text: 'A KR é a interface comercial e coordena a entrega: dados e escopo, estudos, implementação dos ajustes aprovados, testes e entrega. Quando há atuação de parceiros, quem elabora, revisa, aprova e executa cada etapa é definido na proposta.',
        },
        highlights: [
            'Cenários, dados, modelos e critérios definidos no alinhamento técnico.',
            'Memória de cálculo, curvas, recomendações e tabela de ajustes conforme o escopo.',
            'Implementação dos ajustes aprovados e testes, quando contratados.',
            'Transitórios com modalidade e escopo definidos conforme a necessidade técnica.',
        ],
    },
    capabilities: {
        badge: 'ESTUDOS',
        title: 'Estudos & Entregáveis',
        subtitle: 'Da coleta de dados à tabela de ajustes pronta para implementação',
        deliverablesLabel: 'Entregáveis típicos:',
        pillars: [
            {
                title: 'Proteção, Coordenação e Seletividade',
                description: 'Critérios de proteção e coordenação de dispositivos, com memória de cálculo, curvas e recomendações.',
                deliverables: [
                    'Memória de cálculo',
                    'Curvas de coordenação',
                    'Recomendações de ajuste',
                    'Tabela de ajustes conforme escopo',
                ],
            },
            {
                title: 'Curto-Circuito e Fluxo de Potência',
                description: 'Avaliação dos níveis de falta e das condições de operação, com cenários e critérios definidos no alinhamento técnico.',
                deliverables: [
                    'Níveis de curto-circuito por cenário',
                    'Condições de operação avaliadas',
                    'Premissas e dados utilizados documentados',
                    'Recomendações para adequações',
                ],
            },
            {
                title: 'Estudos de Transitórios',
                description: 'Modalidade e escopo definidos conforme o fenômeno e a necessidade técnica. Dados, ferramentas e responsáveis pela execução são confirmados antes da proposta.',
                deliverables: [
                    'Definição do fenômeno a analisar',
                    'Premissas e dados necessários',
                    'Relatório conforme escopo aprovado',
                    'Recomendações técnicas',
                ],
            },
            {
                title: 'Da Análise à Verificação',
                description: 'Integração do estudo à implementação dos ajustes aprovados e aos testes, quando essas etapas também são contratadas.',
                deliverables: [
                    'Ajustes aprovados implementados',
                    'Testes com critérios de aceite acordados',
                    'Arquivos finais e registros',
                    'Pendências com responsáveis',
                ],
            },
        ],
        techSpecs: {
            title: 'Da Análise à Verificação',
            subtitle: 'Cinco etapas, contratadas de forma isolada ou integrada',
            tags: [
                '1. Dados e escopo',
                '2. Estudos',
                '3. Implementação',
                '4. Testes',
                '5. Entrega',
            ],
        },
    },
    gallery: {
        badge: 'BASE TÉCNICA',
        title: 'Como Cada Estudo É Definido',
        subtitle: 'A ferramenta de cada estudo é definida no alinhamento técnico, conforme o escopo e os dados disponíveis',
        items: [
            {
                image: '',
                alt: '',
                category: 'Simulação de Sistemas de Potência',
                title: 'Curto-Circuito, Fluxo e Coordenação',
                description: 'Cenários, modelos e critérios definidos no alinhamento técnico, com a ferramenta de simulação adequada ao escopo e aos dados disponíveis.',
                badges: [
                    'Curto-Circuito',
                    'Fluxo de Potência',
                    'Coordenação',
                ],
            },
            {
                image: '',
                alt: '',
                category: 'Transitórios',
                title: 'Análise de Transitórios',
                description: 'Avaliados quando o fenômeno e o objetivo da instalação justificam o estudo. Modalidade, ferramenta e responsáveis são definidos na proposta.',
                badges: [
                    'Conforme a Necessidade Técnica',
                ],
            },
            {
                image: '/images/services/autocad.jpg',
                alt: 'Diagramas unifilares e documentação',
                category: 'Documentação',
                title: 'Unifilares & Documentação',
                description: 'O unifilar e a documentação da instalação são a base para definir dados, cenários e premissas do estudo.',
                badges: [
                    'Unifilar',
                    'Dados de Entrada',
                ],
            },
        ],
    },
    requirements: {
        badge: 'TRANSPARÊNCIA',
        title: 'Dados de Entrada & Responsabilidades',
        subtitle: 'O que é necessário para começar e quem responde por cada entregável',
        columns: [
            {
                title: 'Dados de Entrada',
                items: [
                    'Diagrama unifilar atualizado',
                    'Dados de transformadores, cabos, TCs, TPs e dispositivos de proteção',
                    'Ajustes existentes, quando houver',
                    'Níveis de curto-circuito no ponto de conexão, quando aplicável',
                    'Cenários de operação a considerar',
                ],
            },
            {
                title: 'Responsabilidades',
                items: [
                    'A KR é a interface comercial e coordena a entrega',
                    'A elaboração pode envolver parceiros técnicos, identificados na proposta',
                    'O responsável técnico por cada entregável é definido em contrato',
                    'A capacidade de execução é confirmada antes da proposta, conforme o escopo e a agenda',
                ],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Perguntas Frequentes sobre Estudos de Proteção',
        subtitle: 'Dados, prazos e responsabilidades',
        items: [
            {
                question: 'Quais dados são necessários para iniciar um estudo?',
                answer: 'Em geral, o unifilar, os dados dos equipamentos, os ajustes existentes e os cenários de operação. A lista exata é definida no alinhamento técnico, conforme o objetivo do estudo.',
            },
            {
                question: 'Qual é o prazo de um estudo de proteção e seletividade?',
                answer: 'Depende do porte da instalação, da disponibilidade dos dados e das revisões previstas. O prazo é definido na proposta, depois de conhecer o escopo.',
            },
            {
                question: 'Os estudos são elaborados por equipe própria da KR?',
                answer: 'A KR é a interface comercial e coordena a entrega. Dependendo do escopo, a elaboração pode envolver parceiros; a proposta identifica quem elabora, revisa, aprova e executa cada etapa.',
            },
            {
                question: 'A KR também implementa e testa os ajustes calculados?',
                answer: 'Sim, quando essas etapas são contratadas. A proposta define quem elabora, revisa, aprova e executa cada etapa, do estudo aos testes.',
            },
        ],
    },
    cta: {
        title: 'Comece pelo objetivo',
        subtitle: 'Conte o objetivo do estudo, o tipo de instalação e o prazo. Os dados e documentos necessários são definidos depois, no alinhamento técnico.',
        label: 'Solicitar avaliação técnica',
        href: '/contato/?servico=estudos-eletricos',
    },
};

export const protectionStudiesEn: ServiceLandingContent = {
    schema: {
        name: 'Protection & Selectivity Studies',
        description: 'Protection, coordination, selectivity, short-circuit, and load flow studies connected to implementation. Transient studies assessed according to technical need.',
        catalogName: 'Electrical Studies',
        areaServed: 'Brazil',
    },
    breadcrumb: {
        home: { label: 'Home', href: '/en' },
        services: { label: 'Services', href: '/en/services' },
        current: 'Protection & Selectivity Studies',
    },
    hero: {
        badge: 'STUDIES CONNECTED TO IMPLEMENTATION',
        title: 'Protection & Selectivity Studies',
        description: 'Protection, coordination, and selectivity, short circuit, load flow, and transient studies, integrated with relay settings and testing. Hire only the stages you need.',
        trustBadges: [
            'Protection & selectivity',
            'Short circuit & load flow',
            'Transients according to technical need',
            'Review and approval set in the proposal',
        ],
        primaryCta: { label: 'Request a technical assessment', href: '/en/contact/?servico=estudos-eletricos' },
        secondaryCta: { label: 'View All Services', href: '/en/services' },
    },
    overview: {
        challenge: {
            title: 'The Role of Studies',
            text: 'Electrical studies support protection and operating decisions. When integrated with relay settings and testing, they connect system analysis to field verification.',
        },
        solution: {
            title: 'How KR Helps',
            text: 'KR is the commercial point of contact and coordinates the delivery: data and scope, studies, implementation of approved settings, testing, and handover. When partners are involved, who prepares, reviews, approves, and executes each stage is set in the proposal.',
        },
        highlights: [
            'Scenarios, data, models, and criteria defined during technical alignment.',
            'Calculation report, curves, recommendations, and settings table per scope.',
            'Implementation of approved settings and testing, when contracted.',
            "Transients assessed according to the phenomenon and the installation's goal.",
        ],
    },
    capabilities: {
        badge: 'STUDIES',
        title: 'Studies & Deliverables',
        subtitle: 'From data collection to a settings table ready for implementation',
        deliverablesLabel: 'Typical deliverables:',
        pillars: [
            {
                title: 'Protection, Coordination, and Selectivity',
                description: 'Protection and device coordination criteria, with calculation report, curves, and recommendations.',
                deliverables: [
                    'Calculation report',
                    'Coordination curves',
                    'Settings recommendations',
                    'Settings table per scope',
                ],
            },
            {
                title: 'Short Circuit and Load Flow',
                description: 'Assessment of fault levels and operating conditions, with scenarios and criteria defined during technical alignment.',
                deliverables: [
                    'Short-circuit levels per scenario',
                    'Operating conditions assessed',
                    'Assumptions and data documented',
                    'Recommendations for upgrades',
                ],
            },
            {
                title: 'Transient Studies',
                description: "Analysis according to the phenomenon and the installation's goal. Method, tool, data, and execution capacity are confirmed before the proposal.",
                deliverables: [
                    'Definition of the phenomenon to analyze',
                    'Required assumptions and data',
                    'Report per approved scope',
                    'Technical recommendations',
                ],
            },
            {
                title: 'From Analysis to Verification',
                description: 'Integration of the study with implementation of approved settings and testing, when those stages are also hired.',
                deliverables: [
                    'Approved settings implemented',
                    'Tests with agreed acceptance criteria',
                    'Final files and records',
                    'Open items with owners',
                ],
            },
        ],
        techSpecs: {
            title: 'From Analysis to Verification',
            subtitle: 'Five stages, hired individually or as an integrated package',
            tags: [
                '1. Data & scope',
                '2. Studies',
                '3. Implementation',
                '4. Testing',
                '5. Handover',
            ],
        },
    },
    gallery: {
        badge: 'TECHNICAL BASIS',
        title: 'How Each Study Is Defined',
        subtitle: 'The tool for each study is defined during technical alignment, according to scope and available data',
        items: [
            {
                image: '',
                alt: '',
                category: 'Power System Simulation',
                title: 'Short Circuit, Load Flow, and Coordination',
                description: 'Scenarios, models, and criteria defined during technical alignment, with the simulation tool suited to the scope and available data.',
                badges: [
                    'Short Circuit',
                    'Load Flow',
                    'Coordination',
                ],
            },
            {
                image: '',
                alt: '',
                category: 'Transients',
                title: 'Transient Analysis',
                description: "Electromagnetic transient tools, used when the phenomenon and the installation's goal justify the study.",
                badges: [
                    'According to Technical Need',
                ],
            },
            {
                image: '/images/services/autocad.jpg',
                alt: 'Single-line diagrams and documentation',
                category: 'Documentation',
                title: 'Single-Line Diagrams & Documentation',
                description: 'The single-line diagram and installation documents are the basis for defining study data, scenarios, and assumptions.',
                badges: [
                    'Single-Line Diagram',
                    'Input Data',
                ],
            },
        ],
    },
    requirements: {
        badge: 'TRANSPARENCY',
        title: 'Input Data & Responsibilities',
        subtitle: 'What is needed to start and who is accountable for each deliverable',
        columns: [
            {
                title: 'Input Data',
                items: [
                    'Up-to-date single-line diagram',
                    'Data for transformers, cables, CTs, VTs, and protection devices',
                    'Existing settings, when available',
                    'Short-circuit levels at the point of connection, when applicable',
                    'Operating scenarios to consider',
                ],
            },
            {
                title: 'Responsibilities',
                items: [
                    'KR is the commercial point of contact and coordinates the delivery',
                    'Preparation may involve technical partners, named in the proposal',
                    'The engineer accountable for each deliverable is defined in the contract',
                    'Execution capacity is confirmed before the proposal, according to scope and schedule',
                ],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Frequently Asked Questions on Protection Studies',
        subtitle: 'Data, schedule, and responsibilities',
        items: [
            {
                question: 'What data is needed to start a study?',
                answer: "Usually the single-line diagram, equipment data, existing settings, and operating scenarios. The exact list is defined during technical alignment, according to the study's goal.",
            },
            {
                question: 'How long does a protection and selectivity study take?',
                answer: 'It depends on the installation size, data availability, and planned review rounds. The schedule is defined in the proposal once the scope is known.',
            },
            {
                question: 'Are the studies prepared by an in-house KR team?',
                answer: 'KR is the commercial point of contact and coordinates the delivery. Depending on the scope, the work may involve partners; the proposal identifies who prepares, reviews, approves, and executes each stage.',
            },
            {
                question: 'Does KR also implement and test the calculated settings?',
                answer: 'Yes, when those stages are hired. The proposal defines who prepares, reviews, approves, and executes each stage, from study to testing.',
            },
        ],
    },
    cta: {
        title: 'Start with the goal',
        subtitle: 'Tell us the goal of the study, the type of installation, and the deadline. The required data and documents are defined later, during technical alignment.',
        label: 'Request a technical assessment',
        href: '/en/contact/?servico=estudos-eletricos',
    },
};

export const automationPt: ServiceLandingContent = {
    schema: {
        name: 'Retrofit e Integração de SPCS',
        description: 'Apoio técnico em retrofits de proteção e automação: integração de IEDs, comunicação IEC 61850 (GOOSE e MMS), integração de pontos ao supervisório e lógicas aprovadas.',
        catalogName: 'Atividades de Retrofit & Integração',
        areaServed: 'Brasil',
    },
    breadcrumb: {
        home: { label: 'Início', href: '/' },
        services: { label: 'Serviços', href: '/servicos' },
        current: 'Retrofit e Integração de SPCS',
    },
    hero: {
        badge: 'PROTEÇÃO • CONTROLE • SUPERVISÃO • IEC 61850',
        title: 'Retrofit e Integração de SPCS',
        description: 'Modernização de sistemas de proteção, controle e supervisão (SPCS) legados: integração de IEDs, comunicação IEC 61850 (GOOSE e MMS), interfaces com o supervisório e testes de validação funcional, com a parada preparada antes da intervenção.',
        trustBadges: [
            'IEC 61850 (GOOSE e MMS)',
            'Integração ao supervisório',
            'Experiência em retrofit de mineração',
            'Escopo definido na proposta',
        ],
        primaryCta: { label: 'Solicitar avaliação técnica', href: '/contato/?servico=retrofit-spcs' },
        secondaryCta: { label: 'Ver Todos os Serviços', href: '/servicos' },
    },
    overview: {
        challenge: {
            title: 'O Desafio',
            text: 'Retrofits mexem com equipamentos em operação: a janela de intervenção é limitada e as interfaces entre proteção, automação e supervisório precisam funcionar na primeira energização.',
        },
        solution: {
            title: 'Como a KR Apoia',
            text: 'Avaliamos a configuração existente, as interfaces e a janela de intervenção para delimitar um pacote de apoio técnico com responsabilidades claras.',
        },
        highlights: [
            'Integração de IEDs e comunicação IEC 61850 (GOOSE e MMS).',
            'Integração de pontos ao supervisório, em conjunto com o responsável pelo SCADA.',
            'Implementação de lógicas aprovadas, como transferência automática de carga.',
            'Atualização de documentação as-built quando contratada.',
        ],
    },
    capabilities: {
        badge: 'O QUE PODE SER CONTRATADO',
        title: 'Atividades & Entregáveis',
        subtitle: 'Da avaliação da configuração existente à verificação em campo',
        deliverablesLabel: 'Entregáveis típicos:',
        pillars: [
            {
                title: 'Levantamento & Preparação da Parada',
                description: 'Análise da configuração existente, das interfaces e da janela de intervenção para definir o escopo e os dados de entrada necessários.',
                deliverables: [
                    'Lista de dados e documentos necessários',
                    'Mapeamento das interfaces envolvidas',
                    'Plano de atividades para a janela prevista',
                    'Riscos e premissas registrados na proposta',
                ],
            },
            {
                title: 'Integração de IEDs & IEC 61850',
                description: 'Integração de IEDs e comunicação IEC 61850 com mensagens GOOSE e MMS, conforme a arquitetura aprovada.',
                deliverables: [
                    'Configuração de comunicação dos IEDs',
                    'Mensagens GOOSE conforme lógica aprovada',
                    'Testes de comunicação e de seletividade lógica',
                    'Registro das configurações aplicadas',
                ],
            },
            {
                title: 'Integração ao Supervisório',
                description: 'Integração de pontos entre IEDs e supervisório, em interface com o responsável pelo desenvolvimento do SCADA.',
                deliverables: [
                    'Lista de pontos integrada',
                    'Testes ponto a ponto acordados',
                    'Registro de divergências e pendências',
                    'Interface documentada com o responsável pelo SCADA',
                ],
            },
            {
                title: 'Lógicas de Automação',
                description: 'Implementação e teste de lógicas aprovadas, como transferência automática de carga entre transformadores.',
                deliverables: [
                    'Lógica implementada conforme especificação aprovada',
                    'Testes funcionais da lógica',
                    'Documentação da lógica implementada',
                    'Pendências com responsáveis',
                ],
            },
        ],
        techSpecs: {
            title: 'Plataformas e Ferramentas',
            subtitle: 'As marcas citadas descrevem experiência profissional; não representam parceria nem certificação de fabricante',
            tags: [
                'ABB Relion',
                'IEDs GE',
                'Schneider MiCOM P & BCU C264',
                'SEL-751 / 787 / 2414',
                'Siemens SIPROTEC 5',
                'IEC 61850 (GOOSE / MMS)',
            ],
        },
    },
    gallery: {
        badge: 'PLATAFORMAS',
        title: 'Integração & Supervisão',
        subtitle: 'Tipos de sistema com os quais o retrofit precisa se integrar',
        items: [
            {
                image: '/images/services/iec61850.jpg',
                alt: 'Engenharia de configuração IEC 61850',
                category: 'Comunicação',
                title: 'Configuração IEC 61850',
                description: 'Configuração de comunicação entre IEDs e controle de bay, com mensagens GOOSE e MMS conforme a arquitetura aprovada.',
                badges: [
                    'GOOSE',
                    'MMS',
                    'IEDs Multimarca',
                ],
            },
            {
                image: '',
                alt: '',
                category: 'Supervisão',
                title: 'Supervisório (SCADA)',
                description: 'Integração de pontos com o supervisório, em interface com o responsável pelo desenvolvimento das telas e da base de dados.',
                badges: [
                    'Integração de Pontos',
                    'Testes Ponto a Ponto',
                ],
            },
            {
                image: '/images/services/ihm.jpg',
                alt: 'IHM local e painéis de controle',
                category: 'Operação Local',
                title: 'IHM Local & Painéis de Controle',
                description: 'Verificação de comandos, sinalizações e intertravamentos no nível do bay durante testes e comissionamento.',
                badges: [
                    'Comandos',
                    'Intertravamentos',
                    'Sinalizações',
                ],
            },
        ],
    },
    requirements: {
        badge: 'RESPONSABILIDADES',
        title: 'Execução, Análise, Projeto & Aprovação',
        subtitle: 'Papéis diferentes, definidos na proposta antes da parada',
        columns: [
            {
                title: 'Execução (quando contratada à KR)',
                items: [
                    'Configuração e integração de IEDs',
                    'Comunicação IEC 61850 com mensagens GOOSE e MMS',
                    'Integração de pontos ao supervisório, em interface com o responsável pelo SCADA',
                    'Testes funcionais, ponto a ponto e de lógicas',
                ],
            },
            {
                title: 'Análise',
                items: [
                    'Levantamento da configuração existente e das interfaces',
                    'Identificação de dados faltantes e de riscos para a janela de intervenção',
                    'Verificação da aderência entre o que foi implementado e a especificação aprovada',
                ],
            },
            {
                title: 'Projeto & Aprovação Técnica',
                items: [
                    'O projeto do retrofit é elaborado pelo responsável indicado na proposta: cliente, projetista contratado ou parceiro',
                    'Ajustes, lógicas e arquitetura de comunicação são aprovados pelo responsável técnico da instalação antes da implementação',
                    'A execução pela KR não substitui a aprovação técnica do proprietário nem do projetista responsável',
                ],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Perguntas Frequentes sobre Retrofit & Automação',
        subtitle: 'Escopo, interfaces e responsabilidades',
        items: [
            {
                question: 'A KR desenvolve as telas do supervisório?',
                answer: 'O escopo típico é a integração de pontos entre IEDs e supervisório. O desenvolvimento de telas e da base do SCADA pode ficar com outro responsável; a proposta define essa interface.',
            },
            {
                question: 'Qual a diferença entre GOOSE e MMS no IEC 61850?',
                answer: 'Mensagens GOOSE trocam sinais rápidos entre IEDs, como bloqueios e intertravamentos. MMS é usado na comunicação cliente-servidor entre IEDs e o supervisório.',
            },
            {
                question: 'Como é definido o escopo de um retrofit?',
                answer: 'Pela configuração existente, pelos equipamentos novos, pelas interfaces envolvidas e pela janela de intervenção. Com esses dados, a proposta define atividades, responsabilidades e pendências.',
            },
        ],
    },
    cta: {
        title: 'Tem um retrofit ou parada pela frente?',
        subtitle: 'Podemos avaliar a configuração existente, as interfaces e a janela de intervenção para delimitar um pacote de apoio técnico.',
        label: 'Solicitar avaliação técnica',
        href: '/contato/?servico=retrofit-spcs',
    },
};

export const automationEn: ServiceLandingContent = {
    schema: {
        name: 'Protection, Control & SCADA Retrofit',
        description: 'Technical support for protection and automation retrofits: IED integration, IEC 61850 communication (GOOSE and MMS), SCADA point integration, and approved logic.',
        catalogName: 'Retrofit & Integration Activities',
        areaServed: 'Brazil',
    },
    breadcrumb: {
        home: { label: 'Home', href: '/en' },
        services: { label: 'Services', href: '/en/services' },
        current: 'Protection, Control & SCADA Retrofit',
    },
    hero: {
        badge: 'PROTECTION • CONTROL • SCADA • IEC 61850',
        title: 'Protection, Control & SCADA Retrofit',
        description: 'Modernization of legacy protection, control, and supervision systems: IED integration, IEC 61850 communication (GOOSE and MMS), SCADA interfaces, and functional validation testing, with the shutdown prepared before the intervention.',
        trustBadges: [
            'IEC 61850 (GOOSE and MMS)',
            'SCADA integration',
            'Mining retrofit experience',
            'Scope defined in the proposal',
        ],
        primaryCta: { label: 'Request a technical assessment', href: '/en/contact/?servico=retrofit-spcs' },
        secondaryCta: { label: 'View All Services', href: '/en/services' },
    },
    overview: {
        challenge: {
            title: 'The Challenge',
            text: 'Retrofits affect equipment in operation: the intervention window is limited and the interfaces between protection, automation, and SCADA must work at first energization.',
        },
        solution: {
            title: 'How KR Helps',
            text: 'We assess the existing configuration, interfaces, and intervention window to define a technical support package with clear responsibilities.',
        },
        highlights: [
            'IED integration and IEC 61850 communication (GOOSE and MMS).',
            'Point integration with SCADA, together with the SCADA owner.',
            'Implementation of approved logic, such as automatic load transfer.',
            'As-built documentation updates when contracted.',
        ],
    },
    capabilities: {
        badge: 'WHAT CAN BE HIRED',
        title: 'Activities & Deliverables',
        subtitle: 'From assessing the existing configuration to field verification',
        deliverablesLabel: 'Typical deliverables:',
        pillars: [
            {
                title: 'Survey & Shutdown Preparation',
                description: 'Review of the existing configuration, interfaces, and intervention window to define the scope and required input data.',
                deliverables: [
                    'List of required data and documents',
                    'Map of the interfaces involved',
                    'Activity plan for the planned window',
                    'Risks and assumptions recorded in the proposal',
                ],
            },
            {
                title: 'IED Integration & IEC 61850',
                description: 'IED integration and IEC 61850 communication with GOOSE and MMS messages, according to the approved architecture.',
                deliverables: [
                    'IED communication configuration',
                    'GOOSE messages per approved logic',
                    'Communication and logic selectivity tests',
                    'Record of applied configurations',
                ],
            },
            {
                title: 'SCADA Integration',
                description: 'Point integration between IEDs and SCADA, interfacing with the party responsible for SCADA development.',
                deliverables: [
                    'Integrated point list',
                    'Agreed point-to-point tests',
                    'Record of discrepancies and open items',
                    'Documented interface with the SCADA owner',
                ],
            },
            {
                title: 'Automation Logic',
                description: 'Implementation and testing of approved logic, such as automatic load transfer between transformers.',
                deliverables: [
                    'Logic implemented per approved specification',
                    'Functional logic tests',
                    'Documentation of the implemented logic',
                    'Open items with owners',
                ],
            },
        ],
        techSpecs: {
            title: 'Platforms and Tools',
            subtitle: 'The brands listed describe professional experience; they do not represent partnerships or manufacturer certification',
            tags: [
                'ABB Relion',
                'GE IEDs',
                'Schneider MiCOM P & C264 BCU',
                'SEL-751 / 787 / 2414',
                'Siemens SIPROTEC 5',
                'IEC 61850 (GOOSE / MMS)',
            ],
        },
    },
    gallery: {
        badge: 'PLATFORMS',
        title: 'Integration & Supervision',
        subtitle: 'Types of systems a retrofit needs to integrate with',
        items: [
            {
                image: '/images/services/iec61850.jpg',
                alt: 'IEC 61850 configuration engineering',
                category: 'Communication',
                title: 'IEC 61850 Configuration',
                description: 'Communication setup between IEDs and bay control, with GOOSE and MMS messages according to the approved architecture.',
                badges: [
                    'GOOSE',
                    'MMS',
                    'Multi-Vendor IEDs',
                ],
            },
            {
                image: '',
                alt: '',
                category: 'Supervision',
                title: 'SCADA',
                description: 'Point integration with SCADA, interfacing with the party responsible for screens and database development.',
                badges: [
                    'Point Integration',
                    'Point-to-Point Tests',
                ],
            },
            {
                image: '/images/services/ihm.jpg',
                alt: 'Local HMI and control panels',
                category: 'Local Operation',
                title: 'Local HMI & Control Panels',
                description: 'Verification of commands, signals, and interlocks at bay level during testing and commissioning.',
                badges: [
                    'Commands',
                    'Interlocks',
                    'Signals',
                ],
            },
        ],
    },
    requirements: {
        badge: 'RESPONSIBILITIES',
        title: 'Execution, Analysis, Design & Approval',
        subtitle: 'Different roles, defined in the proposal before the shutdown',
        columns: [
            {
                title: 'Execution (when hired from KR)',
                items: [
                    'IED configuration and integration',
                    'IEC 61850 communication with GOOSE and MMS messages',
                    'SCADA point integration, working with the party responsible for SCADA',
                    'Functional, point-to-point, and logic testing',
                ],
            },
            {
                title: 'Analysis',
                items: [
                    'Survey of the existing configuration and interfaces',
                    'Identification of missing data and risks for the intervention window',
                    'Check that what was implemented matches the approved specification',
                ],
            },
            {
                title: 'Design & Technical Approval',
                items: [
                    'The retrofit design is prepared by the party named in the proposal: the client, a hired designer, or a partner',
                    'Settings, logic, and communication architecture are approved by the installation’s responsible engineer before implementation',
                    'Execution by KR does not replace technical approval by the owner or the design engineer of record',
                ],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Frequently Asked Questions on Retrofit & Automation',
        subtitle: 'Scope, interfaces, and responsibilities',
        items: [
            {
                question: 'Does KR develop the SCADA screens?',
                answer: 'The typical scope is point integration between IEDs and SCADA. Screen and database development may be handled by another party; the proposal defines this interface.',
            },
            {
                question: 'What is the difference between GOOSE and MMS in IEC 61850?',
                answer: 'GOOSE messages exchange fast signals between IEDs, such as blocking and interlocking. MMS is used for client-server communication between IEDs and SCADA.',
            },
            {
                question: 'How is the scope of a retrofit defined?',
                answer: 'By the existing configuration, the new equipment, the interfaces involved, and the intervention window. With this data, the proposal defines activities, responsibilities, and open items.',
            },
        ],
    },
    cta: {
        title: 'Is a retrofit or shutdown coming up?',
        subtitle: 'We can assess the existing configuration, interfaces, and intervention window to define a technical support package.',
        label: 'Request a technical assessment',
        href: '/en/contact/?servico=retrofit-spcs',
    },
};

export const commissioningPt: ServiceLandingContent = {
    schema: {
        name: 'Testes e Comissionamento Especializados',
        description: 'Parametrização, testes de painéis e comissionamento de sistemas de proteção em plataformas ABB, Schneider Electric, SEL e Siemens, com experiência em comissionamento envolvendo IEDs GE.',
        catalogName: 'Atividades de Testes & Comissionamento',
        areaServed: 'Brasil',
    },
    breadcrumb: {
        home: { label: 'Início', href: '/' },
        services: { label: 'Serviços', href: '/servicos' },
        current: 'Testes e Comissionamento Especializados',
    },
    hero: {
        badge: 'PARAMETRIZAÇÃO • TESTES • COMISSIONAMENTO',
        title: 'Testes e Comissionamento Especializados',
        description: 'Reforço especializado em parametrização, testes de painéis e comissionamento de sistemas de proteção em plataformas ABB, Schneider Electric, SEL e Siemens, além de experiência em comissionamento envolvendo IEDs GE.',
        trustBadges: [
            'ABB, GE, Schneider Electric, SEL e Siemens',
            'Experiência em subestações até 500 kV',
            'Brasil, EUA, Canadá, Chile e Polônia',
            'Inglês fluente',
        ],
        primaryCta: { label: 'Solicitar avaliação técnica', href: '/contato/?servico=testes-comissionamento' },
        secondaryCta: { label: 'Ver Todos os Serviços', href: '/servicos' },
    },
    overview: {
        challenge: {
            title: 'Problemas Atendidos',
            text: 'Janelas de teste e comissionamento são curtas, e falhas de parametrização, lógica ou interface costumam aparecer só em campo, quando o custo de corrigir é maior. A KR atua em TAF, TAC, testes funcionais, parametrização e integração de IEDs, por escopo ou período.',
        },
        solution: {
            title: 'Como a KR Apoia',
            text: 'Reforço técnico para a sua equipe, por escopo ou período, conectando ajustes aprovados, lógicas, integração e verificação em campo.',
        },
        highlights: [
            'Implementação dos ajustes aprovados fornecidos pelo cliente.',
            'Procedimentos de teste e critérios de aceite acordados antes da execução.',
            'Testes de seletividade lógica e verificação de intertravamentos.',
            'Registro de pendências com responsáveis ao final de cada etapa.',
        ],
    },
    capabilities: {
        badge: 'O QUE PODE SER CONTRATADO',
        title: 'Atividades & Entregáveis',
        subtitle: 'Contrate a etapa necessária: preparação, testes, campo ou entrega documental',
        deliverablesLabel: 'Entregáveis típicos:',
        pillars: [
            {
                title: 'Parametrização de IEDs',
                description: 'Implementação de ajustes e lógicas aprovados em IEDs ABB, Schneider Electric, SEL e Siemens.',
                deliverables: [
                    'Arquivos de configuração conforme ajustes aprovados',
                    'Lógicas contratadas implementadas e documentadas',
                    'Conferência de versões de firmware e software',
                    'Registro das alterações realizadas',
                ],
            },
            {
                title: 'Testes de Painéis & TAF',
                description: 'Testes funcionais de painéis de proteção antes do envio a campo, conforme procedimentos e critérios de aceite acordados.',
                deliverables: [
                    'Testes funcionais das proteções contratadas',
                    'Testes de seletividade lógica',
                    'Verificação de intertravamentos e sinalizações',
                    'Relatório de testes e lista de pendências',
                ],
            },
            {
                title: 'Comissionamento em Campo',
                description: 'Verificação em campo de proteção, integração e lógicas, em apoio à equipe de comissionamento do contratante.',
                deliverables: [
                    'Testes funcionais em campo',
                    'Verificação de integração com o supervisório',
                    'Apoio aos testes de aceitação em campo (TAC)',
                    'Registro de resultados e pendências',
                ],
            },
            {
                title: 'Documentação & Entrega',
                description: 'Entrega dos arquivos finais, registros e pendências acordados, com critérios verificáveis definidos na proposta.',
                deliverables: [
                    'Arquivos finais de configuração',
                    'Relatórios de teste no formato acordado',
                    'Atualização de as-built quando contratada',
                    'Lista de pendências com responsáveis',
                ],
            },
        ],
        techSpecs: {
            title: 'Plataformas e Ferramentas',
            subtitle: 'As marcas citadas descrevem experiência profissional; não representam parceria nem certificação de fabricante',
            tags: [
                'ABB Relion 615 / 650 / 670',
                'IEDs GE (comissionamento)',
                'Schneider Easergy, MiCOM P & BCU C264',
                'SEL-751 / 787 / 2414',
                'Siemens SIPROTEC 5 & DIGSI 5',
                'IEC 61850 (GOOSE / MMS)',
                'OMICRON Test Universe',
            ],
        },
    },
    gallery: {
        badge: 'INSTRUMENTAL',
        title: 'Instrumental de Ensaio',
        subtitle: 'Fornecido pelo contratante ou previsto por locação, com evidência de calibração definida na proposta',
        items: [
            {
                image: '/images/services/cmc500.jpg',
                alt: 'Mala de testes de relés OMICRON CMC',
                category: 'Injeção Secundária',
                title: 'Mala de Testes OMICRON CMC',
                description: 'Referência para ensaios de relés de proteção com o software Test Universe, usado em experiências anteriores em campo.',
                badges: [
                    'Test Universe',
                    'Injeção Secundária',
                    'Ensaios de Relés',
                ],
            },
            {
                image: '/images/services/vebko_amt205.jpg',
                alt: 'Mala de testes de relés Vebko AMT 205',
                category: 'Injeção Secundária',
                title: 'Malas de Testes de Outros Fabricantes',
                description: 'Outras malas de testes de relés podem ser utilizadas conforme a disponibilidade do contratante ou da locação.',
                badges: [
                    'Conforme Disponibilidade',
                    'Locação',
                ],
            },
            {
                image: '/images/services/megger.jpg',
                alt: 'Megômetro digital',
                category: 'Ensaios Complementares',
                title: 'Instrumentos Complementares',
                description: 'Megômetros, micro-ohmímetros e outros instrumentos são definidos no escopo, com fornecedor e requisitos acordados.',
                badges: [
                    'Definido no Escopo',
                    'Evidência de Calibração',
                ],
            },
        ],
    },
    requirements: {
        badge: 'ANTES DE CONTRATAR',
        title: 'Dependências & Critérios de Contratação',
        subtitle: 'O que precisa estar definido para a execução começar',
        columns: [
            {
                title: 'Equipamentos',
                items: [
                    'Mala de testes de relés compatível com o escopo, fornecida pelo contratante ou prevista por locação',
                    'Evidência de calibração do instrumental, conforme a proposta',
                    'Softwares de configuração dos fabricantes envolvidos, com licenças confirmadas antes da execução',
                    'Acesso aos IEDs e à rede de comunicação, quando houver integração',
                ],
            },
            {
                title: 'Documentação',
                items: [
                    'Ajustes aprovados ou estudo de proteção vigente',
                    'Diagramas unifilar, trifilar e funcionais',
                    'Procedimentos de teste e critérios de aceite, ou definição conjunta antes da execução',
                    'Arquivos de configuração e arquitetura de comunicação (SCD/CID), quando aplicável',
                ],
            },
            {
                title: 'Critérios de Contratação',
                items: [
                    'Escopo por etapa (preparação, TAF, TAC, campo) ou por período de apoio',
                    'Local, janela de execução e condições de acesso definidos',
                    'Responsáveis por elaborar, revisar, aprovar e executar cada etapa indicados na proposta',
                    'Requisitos de segurança e de integração do contratante informados antes da mobilização',
                ],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Perguntas Frequentes sobre Testes & Comissionamento',
        subtitle: 'Escopo, instrumental e mobilização',
        items: [
            {
                question: 'Quem fornece a mala de testes e os acessórios?',
                answer: 'O instrumental de ensaio é fornecido pelo contratante ou previsto por locação. O fornecedor, os acessórios e a evidência de calibração são definidos na proposta, antes da reserva de agenda.',
            },
            {
                question: 'A KR desenvolve os ajustes ou apenas os implementa?',
                answer: 'Depende do escopo. Quando o escopo é de implementação, a KR utiliza os ajustes aprovados fornecidos pelo cliente. Quando os estudos também são contratados, a proposta define quem elabora, revisa e aprova os ajustes.',
            },
            {
                question: 'Vocês atuam fora do Brasil?',
                answer: 'Sim. Há experiência em projetos nos Estados Unidos, no Canadá, no Chile e na Polônia, com inglês fluente. Requisitos de mobilização internacional são definidos caso a caso na proposta.',
            },
        ],
    },
    cta: {
        title: 'Tem um teste ou comissionamento pela frente?',
        subtitle: 'Descreva o tipo de instalação, os equipamentos envolvidos e a janela prevista para definirmos o próximo passo.',
        label: 'Solicitar avaliação técnica',
        href: '/contato/?servico=testes-comissionamento',
    },
};

export const commissioningEn: ServiceLandingContent = {
    schema: {
        name: 'Specialized Testing & Commissioning',
        description: 'Relay settings, panel testing, and commissioning of protection systems on ABB, Schneider Electric, SEL, and Siemens platforms, plus commissioning experience involving GE IEDs.',
        catalogName: 'Testing & Commissioning Activities',
        areaServed: 'Brazil',
    },
    breadcrumb: {
        home: { label: 'Home', href: '/en' },
        services: { label: 'Services', href: '/en/services' },
        current: 'Specialized Testing & Commissioning',
    },
    hero: {
        badge: 'SETTINGS • TESTING • COMMISSIONING',
        title: 'Specialized Testing & Commissioning',
        description: 'Specialized support for relay settings, panel testing, and commissioning of protection systems on ABB, Schneider Electric, SEL, and Siemens platforms, plus commissioning experience involving GE IEDs.',
        trustBadges: [
            'ABB, GE, Schneider Electric, SEL, and Siemens',
            'Experience at substations up to 500 kV',
            'Brazil, USA, Canada, Chile, and Poland',
            'Fluent English',
        ],
        primaryCta: { label: 'Request a technical assessment', href: '/en/contact/?servico=testes-comissionamento' },
        secondaryCta: { label: 'View All Services', href: '/en/services' },
    },
    overview: {
        challenge: {
            title: 'Problems We Address',
            text: 'Testing and commissioning windows are short, and settings, logic, or interface issues often show up only in the field, when fixing them costs more. KR works on FAT, SAT, functional testing, IED settings, and integration, by scope or period.',
        },
        solution: {
            title: 'How KR Helps',
            text: 'Technical support for your team, by scope or period, connecting approved settings, logic, integration, and field verification.',
        },
        highlights: [
            'Implementation of client-approved settings.',
            'Test procedures and acceptance criteria agreed before execution.',
            'Logic selectivity testing and interlock verification.',
            'Open items recorded with owners at the end of each stage.',
        ],
    },
    capabilities: {
        badge: 'WHAT CAN BE HIRED',
        title: 'Activities & Deliverables',
        subtitle: 'Hire the stage you need: preparation, testing, field work, or documentation',
        deliverablesLabel: 'Typical deliverables:',
        pillars: [
            {
                title: 'IED Settings',
                description: 'Implementation of approved settings and logic in ABB, Schneider Electric, SEL, and Siemens IEDs.',
                deliverables: [
                    'Configuration files based on approved settings',
                    'Contracted logic implemented and documented',
                    'Firmware and software version checks',
                    'Record of changes made',
                ],
            },
            {
                title: 'Panel Testing & FAT',
                description: 'Functional testing of protection panels before shipment, according to agreed procedures and acceptance criteria.',
                deliverables: [
                    'Functional tests of contracted protections',
                    'Logic selectivity tests',
                    'Interlocking and signaling checks',
                    'Test report and open-items list',
                ],
            },
            {
                title: 'Field Commissioning',
                description: "Field verification of protection, integration, and logic, supporting the client's commissioning team.",
                deliverables: [
                    'Functional field tests',
                    'SCADA integration checks',
                    'Support during site acceptance testing (SAT)',
                    'Record of results and open items',
                ],
            },
            {
                title: 'Documentation & Handover',
                description: 'Delivery of agreed final files, records, and open items, with verifiable criteria defined in the proposal.',
                deliverables: [
                    'Final configuration files',
                    'Test reports in the agreed format',
                    'As-built updates when contracted',
                    'Open-items list with owners',
                ],
            },
        ],
        techSpecs: {
            title: 'Platforms and Tools',
            subtitle: 'The brands listed describe professional experience; they do not represent partnerships or manufacturer certification',
            tags: [
                'ABB Relion 615 / 650 / 670',
                'GE IEDs (commissioning)',
                'Schneider Easergy, MiCOM P & C264 BCU',
                'SEL-751 / 787 / 2414',
                'Siemens SIPROTEC 5 & DIGSI 5',
                'IEC 61850 (GOOSE / MMS)',
                'OMICRON Test Universe',
            ],
        },
    },
    gallery: {
        badge: 'TEST EQUIPMENT',
        title: 'Test Equipment',
        subtitle: 'Supplied by the client or planned as a rental, with calibration evidence defined in the proposal',
        items: [
            {
                image: '/images/services/cmc500.jpg',
                alt: 'OMICRON CMC relay test set',
                category: 'Secondary Injection',
                title: 'OMICRON CMC Relay Test Set',
                description: 'A reference for protection relay testing with Test Universe software, used in previous field work.',
                badges: [
                    'Test Universe',
                    'Secondary Injection',
                    'Relay Testing',
                ],
            },
            {
                image: '/images/services/vebko_amt205.jpg',
                alt: 'Vebko AMT 205 relay test set',
                category: 'Secondary Injection',
                title: 'Other Relay Test Sets',
                description: 'Other relay test sets can be used depending on availability from the client or rental.',
                badges: [
                    'Subject to Availability',
                    'Rental',
                ],
            },
            {
                image: '/images/services/megger.jpg',
                alt: 'Digital insulation tester',
                category: 'Complementary Tests',
                title: 'Complementary Instruments',
                description: 'Insulation testers, micro-ohmmeters, and other instruments are defined in the scope, with agreed supplier and requirements.',
                badges: [
                    'Defined in Scope',
                    'Calibration Evidence',
                ],
            },
        ],
    },
    requirements: {
        badge: 'BEFORE YOU HIRE',
        title: 'Dependencies & Hiring Criteria',
        subtitle: 'What needs to be defined before execution starts',
        columns: [
            {
                title: 'Equipment',
                items: [
                    'A relay test set suited to the scope, supplied by the client or planned as a rental',
                    'Calibration evidence for the test equipment, as set in the proposal',
                    'Configuration software for the vendors involved, with licenses confirmed before execution',
                    'Access to the IEDs and the communication network, when integration is in scope',
                ],
            },
            {
                title: 'Documentation',
                items: [
                    'Approved settings or the current protection study',
                    'Single-line, three-line, and functional diagrams',
                    'Test procedures and acceptance criteria, or a joint definition before execution',
                    'Configuration files and communication architecture (SCD/CID), when applicable',
                ],
            },
            {
                title: 'Hiring Criteria',
                items: [
                    'Scope by stage (preparation, FAT, SAT, field) or by support period',
                    'Site, execution window, and access conditions defined',
                    'Who prepares, reviews, approves, and executes each stage named in the proposal',
                    'Client safety and integration requirements shared before mobilization',
                ],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Frequently Asked Questions on Testing & Commissioning',
        subtitle: 'Scope, test equipment, and mobilization',
        items: [
            {
                question: 'Who supplies the test set and accessories?',
                answer: 'Test equipment is supplied by the client or planned as a rental. Supplier, accessories, and calibration evidence are defined in the proposal, before booking the schedule.',
            },
            {
                question: 'Does KR develop the settings or only implement them?',
                answer: 'It depends on the scope. For implementation-only scopes, KR uses the approved settings provided by the client. When studies are also hired, the proposal defines who prepares, reviews, and approves the settings.',
            },
            {
                question: 'Do you work outside Brazil?',
                answer: 'Yes. There is experience on projects in the United States, Canada, Chile, and Poland, with fluent English. International mobilization requirements are defined case by case in the proposal.',
            },
        ],
    },
    cta: {
        title: 'Is a test or commissioning coming up?',
        subtitle: 'Describe the type of installation, the equipment involved, and the planned window so we can define the next step.',
        label: 'Request a technical assessment',
        href: '/en/contact/?servico=testes-comissionamento',
    },
};

// Fault diagnosis: the result depends on the evidence available and on the
// contracted scope. Never promise that the root cause will be found.
export const faultDiagnosisPt: ServiceLandingContent = {
    schema: {
        name: 'Diagnóstico e Investigação de Falhas Elétricas',
        description: 'Análise de oscilografias e registros de eventos, investigação de atuações indevidas e de falhas de comando e trip, e verificação de ajustes, circuitos e lógicas de sistemas de proteção.',
        catalogName: 'Atividades de Diagnóstico e Investigação',
        areaServed: 'Brasil',
    },
    breadcrumb: {
        home: { label: 'Início', href: '/' },
        services: { label: 'Serviços', href: '/servicos' },
        current: 'Diagnóstico e Investigação de Falhas',
    },
    hero: {
        badge: 'DIAGNÓSTICO • OSCILOGRAFIA • INVESTIGAÇÃO',
        title: 'Diagnóstico e Investigação de Falhas',
        description: 'Análise técnica de atuações indevidas, falhas de comando e trip e inconsistências de parametrização em sistemas de proteção e controle, a partir das evidências disponíveis: oscilografias, registros de eventos, ajustes e documentação.',
        trustBadges: [
            'Oscilografias e registros de eventos',
            'Experiência multimarcas em IEDs',
            'Método e premissas documentados',
            'Conclusões limitadas às evidências',
        ],
        primaryCta: { label: 'Solicitar avaliação técnica', href: '/contato/?servico=diagnostico-falhas' },
        secondaryCta: { label: 'Ver Todos os Serviços', href: '/servicos' },
    },
    overview: {
        challenge: {
            title: 'O Problema',
            text: 'Um disjuntor abriu sem causa aparente, uma proteção atuou fora da zona esperada ou um comando de trip não foi executado. Sem uma análise estruturada, a instalação volta a operar com a mesma incerteza, e a ocorrência pode se repetir.',
        },
        solution: {
            title: 'Como a KR Investiga',
            text: 'Reconstruímos a sequência da ocorrência a partir dos registros dos IEDs e da documentação, levantamos hipóteses técnicas e verificamos cada uma contra as evidências. Quando contratados, testes complementares em bancada ou em campo ajudam a confirmar ou descartar hipóteses.',
        },
        highlights: [
            'Análise de oscilografias (COMTRADE) e registros sequenciais de eventos.',
            'Conferência de ajustes, lógicas e esquemas contra a documentação vigente.',
            'Hipóteses classificadas pelo grau de evidência que as sustenta.',
            'Relatório técnico com recomendações e próximos passos.',
        ],
    },
    capabilities: {
        badge: 'ESCOPO POSSÍVEL',
        title: 'O que Pode Ser Investigado',
        subtitle: 'O escopo é definido pela ocorrência e pelos dados disponíveis',
        deliverablesLabel: 'Entregáveis típicos:',
        pillars: [
            {
                title: 'Análise de Oscilografias',
                description: 'Leitura dos registros de perturbação dos IEDs para identificar grandezas, tempos de atuação, elementos sensibilizados e a sequência dos eventos.',
                deliverables: [
                    'Linha do tempo da ocorrência',
                    'Grandezas e tempos analisados',
                    'Elementos de proteção sensibilizados',
                ],
            },
            {
                title: 'Atuações Indevidas',
                description: 'Investigação de trips sem falta aparente ou fora da zona esperada, considerando ajustes, polaridades, relações de TC e TP e lógicas.',
                deliverables: [
                    'Hipóteses avaliadas e descartadas',
                    'Não conformidades encontradas',
                    'Recomendações de correção',
                ],
            },
            {
                title: 'Falhas de Comando e Trip',
                description: 'Análise de comandos não executados ou com atraso: circuitos de disparo, contatos de saída, bobinas, alimentação auxiliar e supervisão do circuito de trip.',
                deliverables: [
                    'Pontos verificados do circuito',
                    'Evidência de cada verificação',
                    'Recomendações para restabelecimento',
                ],
            },
            {
                title: 'Verificação de Circuitos de Proteção',
                description: 'Conferência de circuitos de corrente, tensão, disparo e sinalização contra diagramas e as-built, com testes em campo quando contratados.',
                deliverables: [
                    'Divergências entre campo e documentação',
                    'Registro dos testes executados',
                    'Pendências com responsáveis',
                ],
            },
            {
                title: 'Inconsistências de Parametrização',
                description: 'Comparação entre os ajustes aplicados nos IEDs, o estudo vigente e a especificação aprovada, incluindo versões de firmware e arquivos de configuração.',
                deliverables: [
                    'Tabela de divergências de ajustes',
                    'Impacto técnico de cada divergência',
                    'Indicação do que exige revisão de estudo',
                ],
            },
            {
                title: 'Intertravamentos e Seletividade',
                description: 'Avaliação de lógicas de intertravamento, de seletividade lógica e de mensagens GOOSE envolvidas na ocorrência.',
                deliverables: [
                    'Lógicas analisadas',
                    'Comportamento esperado × registrado',
                    'Recomendações de ajuste ou de teste',
                ],
            },
        ],
        techSpecs: {
            title: 'Metodologia de Análise',
            subtitle: 'Cinco etapas, ajustadas ao escopo contratado',
            tags: [
                '1. Coleta de evidências e dados',
                '2. Reconstrução da sequência de eventos',
                '3. Hipóteses técnicas',
                '4. Verificação por análise e, se contratados, testes',
                '5. Relatório e recomendações',
            ],
        },
    },
    requirements: {
        badge: 'PREMISSAS',
        title: 'Dados, Entregáveis & Limites da Análise',
        subtitle: 'O que define a profundidade e a confiabilidade das conclusões',
        columns: [
            {
                title: 'Documentação e Dados Necessários',
                items: [
                    'Oscilografias e registros de eventos dos IEDs envolvidos, de preferência em COMTRADE',
                    'Arquivos de ajustes e de configuração aplicados',
                    'Diagramas unifilar, trifilar e funcionais vigentes',
                    'Estudo de proteção ou tabela de ajustes aprovada, quando houver',
                    'Relato da operação: horário, manobras e condições do sistema',
                    'Intervenções recentes, como manutenção ou alteração de ajustes',
                ],
            },
            {
                title: 'Entregáveis Técnicos',
                items: [
                    'Relatório técnico da ocorrência',
                    'Linha do tempo e análise das grandezas registradas',
                    'Hipóteses avaliadas, com o grau de evidência de cada uma',
                    'Recomendações e próximos passos',
                    'Lista de dados faltantes, quando houver',
                ],
            },
            {
                title: 'Limitações e Premissas',
                items: [
                    'A identificação da causa raiz não é garantida: depende das evidências disponíveis e do escopo contratado',
                    'As conclusões são classificadas como confirmadas, prováveis ou não conclusivas',
                    'Registros sobrescritos, relógios sem sincronismo ou documentação desatualizada limitam a análise',
                    'Ajustes recomendados dependem de revisão e aprovação do responsável técnico da instalação',
                    'Testes em campo exigem janela, liberação e instrumental definidos na proposta',
                ],
            },
        ],
    },
    gallery: {
        badge: 'EVIDÊNCIAS',
        title: 'Com que Registros Trabalhamos',
        subtitle: 'Imagens da trajetória profissional do engenheiro, sem dados de clientes',
        items: [
            {
                image: '/projects/mineracao/oscilografia-sel.jpg',
                alt: 'Oscilografia de evento registrada por relé SEL-751',
                category: 'Oscilografia',
                title: 'Registros de Perturbação',
                description: 'Formas de onda e sinais digitais registrados pelos IEDs são a principal evidência para reconstruir a ocorrência.',
                badges: ['COMTRADE', 'Sequência de Eventos'],
            },
            {
                image: '/projects/mineracao/sel-751-bancada.jpg',
                alt: 'Relés SEL-751 em bancada para parametrização e testes',
                category: 'Ajustes e Configuração',
                title: 'Arquivos dos IEDs',
                description: 'Ajustes, lógicas e versões aplicados nos IEDs são comparados com o estudo e com a especificação aprovada.',
                badges: ['Ajustes', 'Lógicas', 'Firmware'],
            },
            {
                image: '/projects/mineracao/taf-paineis.jpg',
                alt: 'Testes de painéis de proteção em TAF',
                category: 'Verificação',
                title: 'Testes Complementares',
                description: 'Quando contratados, testes em bancada ou em campo confirmam ou descartam hipóteses levantadas na análise.',
                badges: ['Injeção Secundária', 'Testes Funcionais'],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Perguntas Frequentes sobre Diagnóstico de Falhas',
        subtitle: 'Evidências, limites e próximos passos',
        items: [
            {
                question: 'A KR garante encontrar a causa da falha?',
                answer: 'Não. A análise busca a causa mais provável com base nas evidências disponíveis. Quando os registros são insuficientes, o relatório indica o que não pôde ser concluído e quais dados ou testes ajudariam a avançar.',
            },
            {
                question: 'É possível fazer a análise sem ir a campo?',
                answer: 'Em muitos casos, sim: oscilografias, registros de eventos, ajustes e diagramas permitem uma análise remota inicial. A necessidade de verificação em campo é indicada no relatório ou prevista na proposta.',
            },
            {
                question: 'Devo enviar os arquivos já no primeiro contato?',
                answer: 'Não é necessário. No primeiro contato, descreva a ocorrência e os registros disponíveis. Os arquivos são trocados depois do alinhamento técnico, pelo canal e nas condições de confidencialidade combinados.',
            },
            {
                question: 'Quais fabricantes de IEDs podem ser analisados?',
                answer: 'Há experiência profissional com IEDs ABB, Schneider Electric, SEL e Siemens, e em comissionamento envolvendo IEDs GE. Para outros fabricantes, a viabilidade é avaliada caso a caso.',
            },
            {
                question: 'A KR também corrige os ajustes depois da análise?',
                answer: 'Quando contratado, a KR pode implementar e testar os ajustes revisados. A definição e a aprovação dos novos ajustes ficam com o responsável técnico indicado na proposta.',
            },
        ],
    },
    cta: {
        title: 'Teve uma ocorrência sem explicação?',
        subtitle: 'Descreva o que aconteceu, os equipamentos envolvidos e os registros disponíveis. Avaliamos se as evidências permitem uma análise e propomos o escopo.',
        label: 'Solicitar avaliação técnica',
        href: '/contato/?servico=diagnostico-falhas',
    },
};

export const faultDiagnosisEn: ServiceLandingContent = {
    schema: {
        name: 'Electrical Fault Diagnosis & Investigation',
        description: 'Analysis of oscillography and event records, investigation of unwanted operations and trip or command failures, and review of protection settings, circuits, and logic.',
        catalogName: 'Diagnosis & Investigation Activities',
        areaServed: 'Brazil',
    },
    breadcrumb: {
        home: { label: 'Home', href: '/en' },
        services: { label: 'Services', href: '/en/services' },
        current: 'Fault Diagnosis & Investigation',
    },
    hero: {
        badge: 'DIAGNOSIS • OSCILLOGRAPHY • INVESTIGATION',
        title: 'Fault Diagnosis & Investigation',
        description: 'Technical analysis of unwanted operations, trip or command failures, and settings inconsistencies in protection and control systems, based on the evidence available: oscillography, event records, settings, and documentation.',
        trustBadges: [
            'Oscillography and event records',
            'Multi-vendor IED experience',
            'Documented method and assumptions',
            'Conclusions limited to the evidence',
        ],
        primaryCta: { label: 'Request a technical assessment', href: '/en/contact/?servico=diagnostico-falhas' },
        secondaryCta: { label: 'View All Services', href: '/en/services' },
    },
    overview: {
        challenge: {
            title: 'The Problem',
            text: 'A breaker opened with no apparent cause, a protection function operated outside its expected zone, or a trip command was not executed. Without a structured analysis, the plant goes back into service with the same uncertainty, and the event may happen again.',
        },
        solution: {
            title: 'How KR Investigates',
            text: 'We rebuild the sequence of the event from IED records and documentation, raise technical hypotheses, and check each one against the evidence. When contracted, additional bench or field tests help confirm or rule out hypotheses.',
        },
        highlights: [
            'Analysis of oscillography (COMTRADE) and sequence-of-events records.',
            'Review of settings, logic, and schemes against current documentation.',
            'Hypotheses ranked by the level of evidence behind them.',
            'Technical report with recommendations and next steps.',
        ],
    },
    capabilities: {
        badge: 'POSSIBLE SCOPE',
        title: 'What Can Be Investigated',
        subtitle: 'The scope is set by the event and by the data available',
        deliverablesLabel: 'Typical deliverables:',
        pillars: [
            {
                title: 'Oscillography Analysis',
                description: 'Reading IED disturbance records to identify quantities, operating times, picked-up elements, and the sequence of events.',
                deliverables: [
                    'Event timeline',
                    'Quantities and times analyzed',
                    'Protection elements picked up',
                ],
            },
            {
                title: 'Unwanted Operations',
                description: 'Investigation of trips with no apparent fault or outside the expected zone, considering settings, polarities, CT and VT ratios, and logic.',
                deliverables: [
                    'Hypotheses assessed and ruled out',
                    'Nonconformities found',
                    'Corrective recommendations',
                ],
            },
            {
                title: 'Command and Trip Failures',
                description: 'Analysis of commands not executed or delayed: trip circuits, output contacts, coils, auxiliary supply, and trip circuit supervision.',
                deliverables: [
                    'Circuit points checked',
                    'Evidence for each check',
                    'Recommendations to restore service',
                ],
            },
            {
                title: 'Protection Circuit Verification',
                description: 'Check of current, voltage, trip, and indication circuits against drawings and as-built records, with field tests when contracted.',
                deliverables: [
                    'Differences between site and drawings',
                    'Record of tests performed',
                    'Open items with owners',
                ],
            },
            {
                title: 'Settings Inconsistencies',
                description: 'Comparison between the settings applied in the IEDs, the current study, and the approved specification, including firmware versions and configuration files.',
                deliverables: [
                    'Settings differences table',
                    'Technical impact of each difference',
                    'What requires a study review',
                ],
            },
            {
                title: 'Interlocking and Selectivity',
                description: 'Assessment of interlocking logic, logic selectivity, and GOOSE messages involved in the event.',
                deliverables: [
                    'Logic analyzed',
                    'Expected vs. recorded behavior',
                    'Settings or test recommendations',
                ],
            },
        ],
        techSpecs: {
            title: 'Analysis Method',
            subtitle: 'Five stages, adjusted to the contracted scope',
            tags: [
                '1. Evidence and data collection',
                '2. Rebuilding the sequence of events',
                '3. Technical hypotheses',
                '4. Verification by analysis and, if contracted, testing',
                '5. Report and recommendations',
            ],
        },
    },
    requirements: {
        badge: 'ASSUMPTIONS',
        title: 'Data, Deliverables & Limits of the Analysis',
        subtitle: 'What determines how deep and how reliable the conclusions can be',
        columns: [
            {
                title: 'Documentation and Data Needed',
                items: [
                    'Oscillography and event records from the IEDs involved, preferably in COMTRADE',
                    'Applied settings and configuration files',
                    'Current single-line, three-line, and functional diagrams',
                    'Protection study or approved settings table, when available',
                    'Operations account: time, switching, and system conditions',
                    'Recent interventions, such as maintenance or settings changes',
                ],
            },
            {
                title: 'Technical Deliverables',
                items: [
                    'Technical report on the event',
                    'Timeline and analysis of the recorded quantities',
                    'Hypotheses assessed, with the level of evidence for each',
                    'Recommendations and next steps',
                    'List of missing data, when applicable',
                ],
            },
            {
                title: 'Limitations and Assumptions',
                items: [
                    'Identifying the root cause is not guaranteed: it depends on the evidence available and the contracted scope',
                    'Conclusions are classified as confirmed, probable, or inconclusive',
                    'Overwritten records, unsynchronized clocks, or outdated drawings limit the analysis',
                    'Recommended settings depend on review and approval by the installation’s responsible engineer',
                    'Field tests require a window, clearance, and test equipment defined in the proposal',
                ],
            },
        ],
    },
    gallery: {
        badge: 'EVIDENCE',
        title: 'Records We Work With',
        subtitle: 'Images from the engineer’s professional career, with no client data',
        items: [
            {
                image: '/projects/mineracao/oscilografia-sel.jpg',
                alt: 'Event oscillography recorded by an SEL-751 relay',
                category: 'Oscillography',
                title: 'Disturbance Records',
                description: 'Waveforms and digital signals recorded by the IEDs are the main evidence to rebuild the event.',
                badges: ['COMTRADE', 'Sequence of Events'],
            },
            {
                image: '/projects/mineracao/sel-751-bancada.jpg',
                alt: 'SEL-751 relays on a bench for settings and testing',
                category: 'Settings and Configuration',
                title: 'IED Files',
                description: 'Settings, logic, and versions applied in the IEDs are compared with the study and the approved specification.',
                badges: ['Settings', 'Logic', 'Firmware'],
            },
            {
                image: '/projects/mineracao/taf-paineis.jpg',
                alt: 'Protection panel testing during FAT',
                category: 'Verification',
                title: 'Additional Testing',
                description: 'When contracted, bench or field tests confirm or rule out hypotheses raised during the analysis.',
                badges: ['Secondary Injection', 'Functional Testing'],
            },
        ],
    },
    faq: {
        badge: 'FAQ',
        title: 'Frequently Asked Questions on Fault Diagnosis',
        subtitle: 'Evidence, limits, and next steps',
        items: [
            {
                question: 'Does KR guarantee finding the cause of the failure?',
                answer: 'No. The analysis looks for the most probable cause based on the evidence available. When records are insufficient, the report states what could not be concluded and which data or tests would help move forward.',
            },
            {
                question: 'Can the analysis be done without a site visit?',
                answer: 'In many cases, yes: oscillography, event records, settings, and drawings allow an initial remote analysis. The need for field verification is stated in the report or planned in the proposal.',
            },
            {
                question: 'Should I send the files in the first contact?',
                answer: 'There is no need. In the first contact, describe the event and the records available. Files are exchanged after technical alignment, through the agreed channel and under the agreed confidentiality terms.',
            },
            {
                question: 'Which IED vendors can be analyzed?',
                answer: 'There is professional experience with ABB, Schneider Electric, SEL, and Siemens IEDs, and with commissioning involving GE IEDs. For other vendors, feasibility is assessed case by case.',
            },
            {
                question: 'Does KR also correct the settings after the analysis?',
                answer: 'When contracted, KR can implement and test the revised settings. Defining and approving the new settings remains with the responsible engineer named in the proposal.',
            },
        ],
    },
    cta: {
        title: 'Had an event with no explanation?',
        subtitle: 'Describe what happened, the equipment involved, and the records available. We assess whether the evidence supports an analysis and propose the scope.',
        label: 'Request a technical assessment',
        href: '/en/contact/?servico=diagnostico-falhas',
    },
};
