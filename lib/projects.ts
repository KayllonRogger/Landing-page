// Field cases shown on the home page and on /projetos (PT) and /en/projects (EN).
// They describe Kayllon Rogger Nunes's professional experience; they are not
// direct contracts between KR and the owners of the installations.
// Mining case: never add client, contractor, site name, city, or quantities.

export type Locale = 'pt' | 'en';
type L = { pt: string; en: string };

export type ProjectCategory = 'substations' | 'offshore' | 'mining';

export interface Project {
    slug: string;
    category: ProjectCategory;
    title: L;
    location: L;
    headline: L;
    context: L;
    technologies: string[];
    participation: L;
    activities: { pt: string[]; en: string[] };
    coverImage: string | null;
    photos: { src: string; label: L }[];
}

export const categoryLabels: Record<ProjectCategory | 'all', L> = {
    all: { pt: 'Todos', en: 'All' },
    substations: { pt: 'Subestações', en: 'Substations' },
    offshore: { pt: 'Offshore', en: 'Offshore' },
    mining: { pt: 'Mineração', en: 'Mining' },
};

export const projects: Project[] = [
    {
        slug: 'subestacao-500kv-espirito-santo',
        category: 'substations',
        title: { pt: 'Subestação de 500 kV', en: '500 kV substation' },
        location: { pt: 'Espírito Santo, Brasil', en: 'Espírito Santo, Brazil' },
        headline: {
            pt: 'Integração, parametrização e ensaios de IEDs Siemens SIPROTEC 5.',
            en: 'Integration, settings, and testing of Siemens SIPROTEC 5 IEDs.',
        },
        context: {
            pt: 'Subestação de 500 kV no Espírito Santo.',
            en: '500 kV substation in Espírito Santo, Brazil.',
        },
        technologies: ['Siemens SIPROTEC 5', 'DIGSI 5', 'OMICRON Test Universe'],
        participation: {
            pt: 'Integração, parametrização e ensaios dos IEDs de proteção.',
            en: 'Integration, settings, and testing of the protection IEDs.',
        },
        activities: {
            pt: [
                'Integração de IEDs SIPROTEC 5',
                'Parametrização com DIGSI 5',
                'Ensaios com OMICRON Test Universe',
            ],
            en: [
                'Integration of SIPROTEC 5 IEDs',
                'Settings with DIGSI 5',
                'Testing with OMICRON Test Universe',
            ],
        },
        coverImage: '/projects/espirito-santo/IMG_20210310_150506.jpg',
        photos: [
            { src: '/projects/espirito-santo/IMG_20210310_150506.jpg', label: { pt: 'Pátio de 500 kV', en: '500 kV switchyard' } },
            { src: '/projects/espirito-santo/IMG_20201119_102727.jpg', label: { pt: 'Painéis de comunicação e serviços auxiliares', en: 'Communication and auxiliary service panels' } },
            { src: '/projects/espirito-santo/IMG_20201007_161729.jpg', label: { pt: 'Testes em disjuntores', en: 'Circuit breaker testing' } },
            { src: '/projects/espirito-santo/IMG_20201123_152227.jpg', label: { pt: 'Ensaio de resistência de isolamento', en: 'Insulation resistance test' } },
            { src: '/projects/espirito-santo/IMG-20210222-WA0054.jpg', label: { pt: 'Conexões nos transformadores de força', en: 'Connections at the power transformers' } },
        ],
    },
    {
        slug: 'subestacao-230kv-para',
        category: 'substations',
        title: { pt: 'Subestação de 230/138/13,8 kV', en: '230/138/13.8 kV substation' },
        location: { pt: 'Pará, Brasil', en: 'Pará, Brazil' },
        headline: {
            pt: 'Integração e comissionamento de MiCOM linha P e BCU C264, com IEC 61850.',
            en: 'Integration and commissioning of MiCOM P-series IEDs and a C264 BCU, with IEC 61850.',
        },
        context: {
            pt: 'Subestação de 230/138/13,8 kV no Pará.',
            en: '230/138/13.8 kV substation in Pará, Brazil.',
        },
        technologies: ['Schneider Electric MiCOM linha P', 'BCU C264', 'IEC 61850 (GOOSE e MMS)'],
        participation: {
            pt: 'Integração e comissionamento dos IEDs e da unidade de controle de bay.',
            en: 'Integration and commissioning of the IEDs and the bay control unit.',
        },
        activities: {
            pt: [
                'Integração de IEDs MiCOM linha P e BCU C264',
                'Comunicação IEC 61850 com mensagens GOOSE e MMS',
                'Comissionamento',
            ],
            en: [
                'Integration of MiCOM P-series IEDs and a C264 BCU',
                'IEC 61850 communication with GOOSE and MMS messages',
                'Commissioning',
            ],
        },
        coverImage: '/projects/para/20260813_145555.jpg',
        photos: [
            { src: '/projects/para/20260813_145555.jpg', label: { pt: 'Pátio da subestação', en: 'Substation yard' } },
            { src: '/projects/para/20260715_180937.jpg', label: { pt: 'Pórticos e barramento de alta tensão', en: 'High-voltage gantries and busbar' } },
            { src: '/projects/para/20260812_155950.jpg', label: { pt: 'Software de configuração da BCU C264', en: 'C264 BCU configuration software' } },
            { src: '/projects/para/IMG-20260811-WA0026.jpeg', label: { pt: 'Engenharia IEC 61850 com IEDs MiCOM e BCU C264', en: 'IEC 61850 engineering with MiCOM IEDs and a C264 BCU' } },
            { src: '/projects/para/IMG-20260813-WA0011.jpeg', label: { pt: 'Unifilar do bay na tela de supervisão', en: 'Bay single-line diagram on the HMI' } },
        ],
    },
    {
        slug: 'conexao-eolica-offshore-400kv-polonia',
        category: 'offshore',
        title: { pt: 'Conexão eólica offshore de 400 kV', en: '400 kV offshore wind connection' },
        location: { pt: 'Polônia', en: 'Poland' },
        headline: {
            pt: 'Comissionamento envolvendo IEDs GE, ABB Relion e BCU C264.',
            en: 'Commissioning involving GE IEDs, ABB Relion IEDs, and a C264 BCU.',
        },
        context: {
            pt: 'Subestação de 400 kV para conexão de parque eólico offshore na Polônia.',
            en: '400 kV substation connecting an offshore wind farm in Poland.',
        },
        technologies: ['IEDs GE', 'ABB Relion', 'BCU C264'],
        participation: {
            pt: 'Comissionamento do sistema de proteção e controle.',
            en: 'Commissioning of the protection and control system.',
        },
        activities: {
            pt: [
                'Comissionamento envolvendo IEDs GE',
                'Comissionamento envolvendo IEDs ABB Relion',
                'Comissionamento envolvendo BCU C264',
            ],
            en: [
                'Commissioning involving GE IEDs',
                'Commissioning involving ABB Relion IEDs',
                'Commissioning involving a C264 BCU',
            ],
        },
        coverImage: '/projects/polonia/20260130_130042.jpg',
        photos: [
            { src: '/projects/polonia/20260130_130042.jpg', label: { pt: 'Pátio de 400 kV no inverno', en: '400 kV yard in winter' } },
            { src: '/projects/polonia/20260204_150528.jpg', label: { pt: 'Painel de proteção e controle', en: 'Protection and control panel' } },
            { src: '/projects/polonia/20260311_161711.jpg', label: { pt: 'Módulos de manobra da subestação abrigada', en: 'Indoor switchgear modules' } },
            { src: '/projects/polonia/20260330_092427_1.jpg', label: { pt: 'Fiação interna de painel de proteção', en: 'Protection panel internal wiring' } },
            { src: '/projects/polonia/20260331_135734.jpg', label: { pt: 'Conjunto de ensaio de alta tensão no pátio', en: 'High-voltage test set in the yard' } },
        ],
    },
    {
        slug: 'retrofit-sel-mineracao-minas-gerais',
        category: 'mining',
        title: { pt: 'Retrofit SEL em subestação de mineração', en: 'SEL retrofit at a mining substation' },
        location: { pt: 'Minas Gerais, Brasil', en: 'Minas Gerais, Brazil' },
        headline: {
            pt: 'Parametrização e testes em TAF de SEL-751, SEL-787 e SEL-2414, seletividade lógica e transferência automática.',
            en: 'FAT settings and testing of SEL-751, SEL-787, and SEL-2414 relays, logic selectivity, and automatic transfer.',
        },
        context: {
            pt: 'Subestação de mineração em Minas Gerais, no segundo semestre de 2025.',
            en: 'Mining substation in Minas Gerais, Brazil, in the second half of 2025.',
        },
        technologies: ['SEL-751', 'SEL-787', 'SEL-2414'],
        participation: {
            pt: 'Parametrização, testes, integração ao supervisório e lógica de transferência. O desenvolvimento do supervisório foi realizado por outro profissional.',
            en: 'Settings, testing, SCADA point integration, and transfer logic. SCADA development was carried out by another professional.',
        },
        activities: {
            pt: [
                'Parametrização e testes em TAF',
                'Integração de pontos ao supervisório',
                'Testes de seletividade lógica',
                'Participação na substituição de cubículos com a equipe da contratada',
                'Atualização as-built da documentação dos SEL-2414 em campo',
                'Implementação da lógica de transferência automática de carga entre transformadores',
            ],
            en: [
                'Settings and testing during FAT',
                'Point integration with the SCADA system',
                'Logic selectivity testing',
                'Took part in the switchgear replacement with the contractor’s team',
                'Field as-built documentation updates for the SEL-2414 units',
                'Implementation of the automatic load transfer logic between transformers',
            ],
        },
        coverImage: '/projects/mineracao/sel-751-painel.jpg',
        photos: [
            { src: '/projects/mineracao/sel-751-painel.jpg', label: { pt: 'SEL-751 instalado em painel de proteção', en: 'SEL-751 installed in a protection panel' } },
            { src: '/projects/mineracao/sel-787.jpg', label: { pt: 'SEL-787, proteção de transformador', en: 'SEL-787 transformer protection relay' } },
            { src: '/projects/mineracao/sel-751-bancada.jpg', label: { pt: 'Relés SEL-751 preparados para parametrização e testes', en: 'SEL-751 relays prepared for settings and testing' } },
            { src: '/projects/mineracao/taf-paineis.jpg', label: { pt: 'Testes de painéis em TAF', en: 'Panel testing during FAT' } },
            { src: '/projects/mineracao/oscilografia-sel.jpg', label: { pt: 'Oscilografia de evento registrada por relé SEL-751', en: 'Event oscillography recorded by an SEL-751 relay' } },
        ],
    },
    {
        slug: 'embarcacao-apoio-offshore-eua',
        category: 'offshore',
        title: { pt: 'Embarcação de apoio offshore', en: 'Offshore support vessel' },
        location: { pt: 'Estados Unidos', en: 'United States' },
        headline: {
            pt: 'Comissionamento elétrico e de automação, incluindo geração e distribuição de bordo.',
            en: 'Electrical and automation commissioning, including onboard generation and distribution.',
        },
        context: {
            pt: 'Embarcação de apoio offshore nos Estados Unidos.',
            en: 'Offshore support vessel in the United States.',
        },
        technologies: ['Geração de bordo', 'Distribuição elétrica', 'Automação'],
        participation: {
            pt: 'Comissionamento elétrico e de automação.',
            en: 'Electrical and automation commissioning.',
        },
        activities: {
            pt: [
                'Comissionamento elétrico',
                'Comissionamento de automação',
                'Sistemas de geração e distribuição de bordo',
            ],
            en: [
                'Electrical commissioning',
                'Automation commissioning',
                'Onboard generation and distribution systems',
            ],
        },
        coverImage: '/projects/eua/20250410_083833.jpg',
        photos: [
            { src: '/projects/eua/20250410_083833.jpg', label: { pt: 'Embarcação de apoio offshore', en: 'Offshore support vessel' } },
            { src: '/projects/eua/20250410_091628.jpg', label: { pt: 'Ensaio secundário em painel de bordo', en: 'Secondary injection test on an onboard switchboard' } },
            { src: '/projects/eua/20250421_222702.jpg', label: { pt: 'Passarela de acesso e guindaste', en: 'Access gangway and crane' } },
            { src: '/projects/eua/20250426_054530.jpg', label: { pt: 'Superestrutura da embarcação', en: 'Vessel superstructure' } },
            { src: '/projects/eua/IMG-20250610-WA0020.jpg', label: { pt: 'Painel elétrico principal de bordo', en: 'Main onboard switchboard' } },
            { src: '/projects/eua/IMG-20250610-WA0021.jpg', label: { pt: 'Corredor do quadro elétrico principal', en: 'Main switchboard room' } },
        ],
    },
];

const TECH_EN: Record<string, string> = {
    'Schneider Electric MiCOM linha P': 'Schneider Electric MiCOM P-series',
    'IEC 61850 (GOOSE e MMS)': 'IEC 61850 (GOOSE and MMS)',
    'IEDs GE': 'GE IEDs',
    'Geração de bordo': 'Onboard generation',
    'Distribuição elétrica': 'Power distribution',
    'Automação': 'Automation',
};

export function techLabel(tech: string, locale: Locale) {
    return locale === 'en' ? TECH_EN[tech] ?? tech : tech;
}

export function projectHref(slug: string, locale: Locale) {
    return `${locale === 'en' ? '/en/projects/' : '/projetos/'}#${slug}`;
}
