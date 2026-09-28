import type { Metadata } from 'next';
import ServiceLanding from '../components/ServiceLanding';
import { protectionStudiesPt } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Estudos de Proteção e Seletividade',
    description:
        'Estudos de proteção, coordenação, seletividade, curto-circuito e fluxo de potência integrados à parametrização e aos testes. Transitórios avaliados conforme a necessidade técnica.',
    keywords: [
        'Estudos de Proteção e Seletividade',
        'Coordenação de Proteção',
        'Estudos de Curto-Circuito',
        'Fluxo de Potência',
        'Tabela de Ajustes de Relés',
        'Parametrização de Relés de Proteção',
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
            'Critérios de proteção, coordenação, curto-circuito e fluxo de potência conectados à implementação dos ajustes e aos testes.',
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
