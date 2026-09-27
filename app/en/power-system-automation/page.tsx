import type { Metadata } from 'next';
import ServiceLanding from '../../components/ServiceLanding';
import { automationEn } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Power System Automation & IEC 61850 | KR Engenharia',
    description:
        'Substation automation systems (SAS), IEC 61850 (GOOSE, MMS, SV), zero-loss PRP/HSR redundancy, utility telecontrol (DNP3, IEC 60870-5-104), and SCADA.',
    keywords: [
        'Power System Automation',
        'Substation Automation Systems SAS',
        'IEC 61850 Engineering',
        'GOOSE Interlocking Messages',
        'PRP HSR Redundancy',
        'DNP3 IEC 60870-5-104 Telecontrol',
        'Substation SCADA Systems',
        'Bay Controller Units BCU C264 SIPROTEC',
    ],
    alternates: {
        canonical: '/en/power-system-automation/',
        languages: {
            'pt-BR': '/automacao-sistemas-eletricos/',
            'en-US': '/en/power-system-automation/',
        },
    },
    openGraph: {
        title: 'Power System Automation & IEC 61850 | KR Engenharia',
        description:
            'Complete SAS architectures, multi-vendor IEC 61850 integration, industrial communication protocols, and SCADA solutions.',
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
                alt: 'Power System Automation - KR Engenharia',
            },
        ],
    },
};

export default function PowerSystemAutomationPageEn() {
    return <ServiceLanding content={automationEn} />;
}
