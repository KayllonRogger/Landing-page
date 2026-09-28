import type { Metadata } from 'next';
import ServiceLanding from '../components/ServiceLanding';
import { automationPt } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Retrofit de Proteção & Automação',
    description:
        'Apoio técnico em retrofits de proteção e automação: integração de IEDs, comunicação IEC 61850 (GOOSE e MMS), integração de pontos ao supervisório e lógicas aprovadas.',
    keywords: [
        'Retrofit de Proteção',
        'Retrofit de Automação',
        'IEC 61850',
        'GOOSE MMS',
        'Integração de IEDs',
        'Integração ao Supervisório',
        'Transferência Automática de Carga',
        'ABB Relion GE MiCOM SEL SIPROTEC',
    ],
    alternates: {
        canonical: '/automacao-sistemas-eletricos/',
        languages: {
            'pt-BR': '/automacao-sistemas-eletricos/',
            'en-US': '/en/power-system-automation/',
        },
    },
    openGraph: {
        title: 'Retrofit de Proteção & Automação | KR Engenharia',
        description:
            'Integração de IEDs, IEC 61850 (GOOSE e MMS), integração de pontos ao supervisório e implementação de lógicas aprovadas.',
        url: '/automacao-sistemas-eletricos/',
        siteName: 'KR Engenharia',
        locale: 'pt_BR',
        alternateLocale: ['en_US'],
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Retrofit de Proteção & Automação - KR Engenharia',
            },
        ],
    },
};

export default function AutomacaoSistemasEletricosPage() {
    return <ServiceLanding content={automationPt} />;
}
