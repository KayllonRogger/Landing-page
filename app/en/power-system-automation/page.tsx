import type { Metadata } from 'next';
import ServiceLanding from '../../components/ServiceLanding';
import { automationEn } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Protection & Automation Retrofit',
    description:
        'Technical support for protection and automation retrofits: IED integration, IEC 61850 communication (GOOSE and MMS), SCADA point integration, and approved logic.',
    keywords: [
        'Protection Retrofit',
        'Automation Retrofit',
        'IEC 61850',
        'GOOSE MMS',
        'IED Integration',
        'SCADA Integration',
        'Automatic Load Transfer',
        'ABB Relion GE MiCOM SEL SIPROTEC',
    ],
    alternates: {
        canonical: '/en/power-system-automation/',
        languages: {
            'pt-BR': '/automacao-sistemas-eletricos/',
            'en-US': '/en/power-system-automation/',
        },
    },
    openGraph: {
        title: 'Protection & Automation Retrofit | KR Engenharia',
        description:
            'IED integration, IEC 61850 (GOOSE and MMS), SCADA point integration, and implementation of approved logic.',
        url: '/en/power-system-automation/',
        siteName: 'KR Engenharia',
        locale: 'en_US',
        alternateLocale: ['pt_BR'],
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Protection & Automation Retrofit - KR Engenharia',
            },
        ],
    },
};

export default function PowerSystemAutomationPageEn() {
    return <ServiceLanding content={automationEn} />;
}
