import type { Metadata } from 'next';
import ServiceLanding from '../components/ServiceLanding';
import { automationPt } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Automação de Sistemas Elétricos & IEC 61850 | KR Engenharia',
    description:
        'Engenharia de automação de subestações SAS, IEC 61850 (GOOSE, MMS, SV), redundância PRP/HSR, telecontrole ONS (DNP3, IEC 60870-5-104) e sistemas SCADA.',
    keywords: [
        'Automação de Sistemas Elétricos',
        'Automação de Subestações IEC 61850',
        'Sistemas SAS Subestações',
        'Mensagens GOOSE Intertravamento',
        'Redundância PRP HSR',
        'Telecontrole ONS DNP3 IEC 60870-5-104',
        'Sistemas SCADA Subestação',
        'Unidade de Bay BCU C264 SIPROTEC SEL',
    ],
    alternates: {
        canonical: '/automacao-sistemas-eletricos/',
        languages: {
            'pt-BR': '/automacao-sistemas-eletricos/',
            'en-US': '/en/power-system-automation/',
        },
    },
    openGraph: {
        title: 'Automação de Sistemas Elétricos & IEC 61850 | KR Engenharia',
        description:
            'Projetos completos de SAS, integração IEC 61850 (GOOSE/MMS), protocolos de telecontrole DNP3/104 e supervisórios SCADA.',
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
                alt: 'Automação de Sistemas Elétricos - KR Engenharia',
            },
        ],
    },
};

export default function AutomacaoSistemasEletricosPage() {
    return <ServiceLanding content={automationPt} />;
}
