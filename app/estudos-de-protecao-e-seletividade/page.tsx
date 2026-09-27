import type { Metadata } from 'next';
import ServiceLanding from '../components/ServiceLanding';
import { protectionStudiesPt } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Estudos de Proteção e Seletividade | KR Engenharia',
    description:
        'Estudos de curto-circuito, fluxo de potência, coordenação e seletividade de relés em ETAP, arc flash (IEEE 1584) e conformidade ONS para subestações e indústrias.',
    keywords: [
        'Estudos de Proteção e Seletividade',
        'Curvas de Coordenação e Seletividade',
        'Estudos de Curto-Circuito ETAP',
        'Parametrização de Relés de Proteção',
        'Arc Flash IEEE 1584',
        'Conformidade ONS Procedimentos de Rede',
        'Proteção de Transformadores e Geradores',
        'SEL DIGSI SIPROTEC MiCOM',
    ],
    alternates: {
        canonical: '/estudos-de-protecao-e-seletividade/',
        languages: {
            'pt-BR': '/estudos-de-protecao-e-seletividade/',
            'en-US': '/en/protection-and-selectivity-studies/',
        },
    },
    openGraph: {
        title: 'Estudos de Proteção e Seletividade | KR Engenharia',
        description:
            'Estudos de curto-circuito, fluxo de potência, coordenação e parametrização de relés digitais em ETAP com conformidade ONS.',
        url: '/estudos-de-protecao-e-seletividade/',
        siteName: 'KR Engenharia',
        locale: 'pt_BR',
        alternateLocale: ['en_US'],
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Estudos de Proteção e Seletividade - KR Engenharia',
            },
        ],
    },
};

export default function EstudosDeProtecaoPage() {
    return <ServiceLanding content={protectionStudiesPt} />;
}
