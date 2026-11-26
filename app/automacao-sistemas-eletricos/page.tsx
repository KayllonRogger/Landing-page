import type { Metadata } from 'next';
import ServiceLanding from '../components/ServiceLanding';
import { automationPt } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Retrofit e Integração de SPCS',
    description:
        'Retrofit de sistemas de proteção, controle e supervisão (SPCS) legados: integração de IEDs, comunicação IEC 61850 (GOOSE e MMS), integração de pontos ao supervisório e lógicas aprovadas.',
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
        title: 'Retrofit e Integração de SPCS | KR Engenharia',
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
                alt: 'Retrofit e Integração de SPCS - KR Engenharia',
            },
        ],
    },
};

export default function AutomacaoSistemasEletricosPage() {
    return <ServiceLanding content={automationPt} />;
}
