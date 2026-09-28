import type { Metadata } from 'next';
import ServiceLanding from '../components/ServiceLanding';
import { commissioningPt } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Testes de Proteção & Comissionamento',
    description:
        'Parametrização, testes de painéis e comissionamento de sistemas de proteção em plataformas ABB, Schneider Electric, SEL e Siemens, com experiência em comissionamento envolvendo IEDs GE.',
    keywords: [
        'Comissionamento de Proteção',
        'Testes de Painéis de Proteção',
        'TAF TAC',
        'Parametrização de Relés',
        'ABB Relion',
        'GE',
        'Schneider Electric MiCOM',
        'SEL',
        'Siemens SIPROTEC',
        'Comissionamento de Subestações',
    ],
    alternates: {
        canonical: '/comissionamento-e-ensaios-em-campo/',
        languages: {
            'pt-BR': '/comissionamento-e-ensaios-em-campo/',
            'en-US': '/en/commissioning-and-field-testing/',
        },
    },
    openGraph: {
        title: 'Testes de Proteção & Comissionamento | KR Engenharia',
        description:
            'Parametrização, testes de painéis e comissionamento de sistemas de proteção, com escopo e entregáveis definidos antes da mobilização.',
        url: '/comissionamento-e-ensaios-em-campo/',
        siteName: 'KR Engenharia',
        locale: 'pt_BR',
        alternateLocale: ['en_US'],
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Testes de Proteção & Comissionamento - KR Engenharia',
            },
        ],
    },
};

export default function ComissionamentoPage() {
    return <ServiceLanding content={commissioningPt} />;
}
