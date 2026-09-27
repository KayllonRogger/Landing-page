import type { Metadata } from 'next';
import ServiceLanding from '../components/ServiceLanding';
import { commissioningPt } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Comissionamento & Ensaios em Campo | KR Engenharia',
    description:
        'Comissionamento de subestações até 500 kV, injeção secundária com OMICRON CMC 356, testes de matriz de trip, TAF/TAC (FAT/SAT) e suporte na energização.',
    keywords: [
        'Comissionamento de Subestações',
        'Ensaios em Campo Subestações',
        'Injeção Secundária OMICRON CMC 356',
        'Testes de Matriz de Trip',
        'TAF Teste de Aceitação em Fábrica',
        'TAC Teste de Aceitação em Campo',
        'Testes de Relés de Proteção',
        'Energização de Subestações de Alta Tensão',
    ],
    alternates: {
        canonical: '/comissionamento-e-ensaios-em-campo/',
        languages: {
            'pt-BR': '/comissionamento-e-ensaios-em-campo/',
            'en-US': '/en/commissioning-and-field-testing/',
        },
    },
    openGraph: {
        title: 'Comissionamento & Ensaios em Campo | KR Engenharia',
        description:
            'Testes funcionais, injeção de corrente e tensão secundária com malas OMICRON CMC e energização assistida com segurança até 500 kV.',
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
                alt: 'Comissionamento e Ensaios em Campo - KR Engenharia',
            },
        ],
    },
};

export default function ComissionamentoPage() {
    return <ServiceLanding content={commissioningPt} />;
}
