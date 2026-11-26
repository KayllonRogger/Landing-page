import type { Metadata } from 'next';
import ServiceLanding from '../components/ServiceLanding';
import { faultDiagnosisPt } from '@/lib/services/content';

const DESCRIPTION =
    'Análise de oscilografias e registros de eventos, investigação de atuações indevidas e de falhas de comando e trip, e verificação de ajustes, circuitos e lógicas de proteção, com conclusões limitadas às evidências disponíveis.';

export const metadata: Metadata = {
    title: 'Diagnóstico e Investigação de Falhas Elétricas',
    description: DESCRIPTION,
    keywords: [
        'Diagnóstico de Falhas Elétricas',
        'Análise de Oscilografia',
        'COMTRADE',
        'Atuação Indevida de Proteção',
        'Falha de Trip',
        'Circuito de Disparo',
        'Análise de Perturbação',
        'Seletividade Lógica',
    ],
    alternates: {
        canonical: '/diagnostico-de-falhas-eletricas/',
        languages: {
            'pt-BR': '/diagnostico-de-falhas-eletricas/',
            'en-US': '/en/electrical-fault-diagnosis/',
        },
    },
    openGraph: {
        title: 'Diagnóstico e Investigação de Falhas Elétricas | KR Engenharia',
        description: DESCRIPTION,
        url: '/diagnostico-de-falhas-eletricas/',
        siteName: 'KR Engenharia',
        locale: 'pt_BR',
        alternateLocale: ['en_US'],
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Diagnóstico e Investigação de Falhas Elétricas - KR Engenharia',
            },
        ],
    },
};

export default function DiagnosticoFalhasPage() {
    return <ServiceLanding content={faultDiagnosisPt} />;
}
