// Commercial service catalog (PT and EN), shared by the home page, the
// /servicos and /en/services pages, the header menu, the footer and the
// contact form. Detailed content of each service page lives in ./content.ts.

export type Locale = 'pt' | 'en';
type L = { pt: string; en: string };

export type ServiceKey = 'testes-comissionamento' | 'diagnostico-falhas' | 'retrofit-spcs' | 'estudos-eletricos';

export interface CatalogService {
    key: ServiceKey;
    href: L;
    title: L;
    /** One line for menus. */
    summary: L;
    description: L;
    problems: { pt: string[]; en: string[] };
    deliverables: { pt: string[]; en: string[] };
    tags: { pt: string[]; en: string[] };
}

export const catalog: CatalogService[] = [
    {
        key: 'testes-comissionamento',
        href: { pt: '/comissionamento-e-ensaios-em-campo/', en: '/en/commissioning-and-field-testing/' },
        title: { pt: 'Testes e Comissionamento Especializados', en: 'Specialized Testing & Commissioning' },
        summary: {
            pt: 'TAF, TAC, testes funcionais, parametrização e integração de IEDs',
            en: 'FAT, SAT, functional testing, IED settings, and integration',
        },
        description: {
            pt: 'Parametrização de IEDs com ajustes aprovados, testes de painéis em TAF, testes funcionais e apoio ao TAC e ao comissionamento em campo, no Brasil e no exterior.',
            en: 'IED settings based on approved values, panel testing during FAT, functional testing, and support for SAT and field commissioning, in Brazil and abroad.',
        },
        problems: {
            pt: [
                'Painéis precisam ser testados antes do envio a campo',
                'A equipe de comissionamento precisa de reforço por escopo ou período',
                'Falhas de lógica ou interface aparecendo só na energização',
            ],
            en: [
                'Panels need testing before shipping to site',
                'The commissioning team needs support by scope or period',
                'Logic or interface issues showing up only at energization',
            ],
        },
        deliverables: {
            pt: ['Arquivos de configuração aplicados', 'Registros de teste com critérios de aceite', 'Pendências com responsáveis'],
            en: ['Applied configuration files', 'Test records with acceptance criteria', 'Open items with owners'],
        },
        tags: { pt: ['TAF', 'TAC', 'IEDs multimarcas'], en: ['FAT', 'SAT', 'Multi-vendor IEDs'] },
    },
    {
        key: 'diagnostico-falhas',
        href: { pt: '/diagnostico-de-falhas-eletricas/', en: '/en/electrical-fault-diagnosis/' },
        title: { pt: 'Diagnóstico e Investigação de Falhas', en: 'Fault Diagnosis & Investigation' },
        summary: {
            pt: 'Oscilografias, atuações indevidas e falhas de comando e trip',
            en: 'Oscillography, unwanted operations, and trip or command failures',
        },
        description: {
            pt: 'Análise de oscilografias e registros de eventos, investigação de atuações indevidas e de falhas de comando e trip, e verificação de ajustes, circuitos e lógicas de proteção.',
            en: 'Analysis of oscillography and event records, investigation of unwanted operations and trip or command failures, and review of protection settings, circuits, and logic.',
        },
        problems: {
            pt: [
                'Disjuntor abriu sem causa aparente',
                'Proteção atuou fora da zona esperada ou não atuou',
                'Comando de trip não executado ou com atraso',
            ],
            en: [
                'A breaker opened with no apparent cause',
                'Protection operated outside its expected zone, or failed to operate',
                'A trip command was not executed or was delayed',
            ],
        },
        deliverables: {
            pt: ['Linha do tempo da ocorrência', 'Hipóteses avaliadas e grau de evidência', 'Relatório com recomendações'],
            en: ['Event timeline', 'Hypotheses assessed and level of evidence', 'Report with recommendations'],
        },
        tags: { pt: ['Oscilografia', 'COMTRADE', 'Circuitos de trip'], en: ['Oscillography', 'COMTRADE', 'Trip circuits'] },
    },
    {
        key: 'retrofit-spcs',
        href: { pt: '/automacao-sistemas-eletricos/', en: '/en/power-system-automation/' },
        title: { pt: 'Retrofit e Integração de SPCS', en: 'Protection, Control & SCADA Retrofit' },
        summary: {
            pt: 'Sistemas legados, IEC 61850 (GOOSE e MMS) e supervisório',
            en: 'Legacy systems, IEC 61850 (GOOSE and MMS), and SCADA',
        },
        description: {
            pt: 'Modernização de sistemas de proteção, controle e supervisão (SPCS) legados: integração de IEDs, comunicação IEC 61850, interfaces com o supervisório e testes de validação funcional.',
            en: 'Modernization of legacy protection, control, and supervision systems: IED integration, IEC 61850 communication, SCADA interfaces, and functional validation testing.',
        },
        problems: {
            pt: [
                'Relés eletromecânicos ou IEDs sem suporte do fabricante',
                'Integração de IEDs novos a um supervisório existente',
                'Janela de parada curta para trocar e validar o sistema',
            ],
            en: [
                'Electromechanical relays or IEDs no longer supported by the manufacturer',
                'Integrating new IEDs into an existing SCADA',
                'A short shutdown window to replace and validate the system',
            ],
        },
        deliverables: {
            pt: ['Configuração de comunicação aplicada', 'Testes ponto a ponto e de lógicas', 'Documentação as-built quando contratada'],
            en: ['Applied communication configuration', 'Point-to-point and logic tests', 'As-built documentation when contracted'],
        },
        tags: { pt: ['Retrofit', 'IEC 61850', 'GOOSE / MMS'], en: ['Retrofit', 'IEC 61850', 'GOOSE / MMS'] },
    },
    {
        key: 'estudos-eletricos',
        href: { pt: '/estudos-de-protecao-e-seletividade/', en: '/en/protection-and-selectivity-studies/' },
        title: { pt: 'Estudos Elétricos', en: 'Electrical Studies' },
        summary: {
            pt: 'Proteção, seletividade, curto-circuito e fluxo de potência',
            en: 'Protection, selectivity, short circuit, and load flow',
        },
        description: {
            pt: 'Proteção, coordenação e seletividade, curto-circuito e fluxo de potência; transitórios conforme a necessidade técnica. Quem elabora, revisa e aprova cada estudo, inclusive parceiros, é definido na proposta.',
            en: 'Protection, coordination, and selectivity, short circuit, and load flow; transients according to technical need. Who prepares, reviews, and approves each study, including partners, is set in the proposal.',
        },
        problems: {
            pt: [
                'Ajustes aplicados sem estudo atualizado',
                'Seletividade questionada após ampliação ou nova carga',
                'Necessidade de tabela de ajustes para um retrofit',
            ],
            en: [
                'Settings applied without an up-to-date study',
                'Selectivity in question after an expansion or new load',
                'A settings table is needed for a retrofit',
            ],
        },
        deliverables: {
            pt: ['Memória de cálculo e curvas', 'Tabela de ajustes conforme escopo', 'Premissas documentadas'],
            en: ['Calculation report and curves', 'Settings table per scope', 'Documented assumptions'],
        },
        tags: { pt: ['Seletividade', 'Curto-circuito', 'Fluxo de potência'], en: ['Selectivity', 'Short circuit', 'Load flow'] },
    },
];

export function serviceByKey(key: string | null | undefined) {
    return catalog.find((service) => service.key === key);
}

/** Contact page link that pre-selects a service in the form. */
export function contactHref(locale: Locale, key?: ServiceKey) {
    const base = locale === 'en' ? '/en/contact/' : '/contato/';
    return key ? `${base}?servico=${key}` : base;
}
