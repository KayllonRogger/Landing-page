import type { Metadata } from 'next';
import ServiceLanding from '../../components/ServiceLanding';
import { protectionStudiesEn } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Protection & Selectivity Studies | KR Engenharia',
    description:
        'Short-circuit calculations, load flow, protection coordination, and relay parameterization in ETAP, arc flash (IEEE 1584), and grid code compliance.',
    keywords: [
        'Protection and Selectivity Studies',
        'Relay Coordination Curves',
        'ETAP Short Circuit Calculations',
        'Relay Parameterization',
        'Arc Flash IEEE 1584',
        'Grid Code Compliance',
        'Substation Protection Engineering',
    ],
    alternates: {
        canonical: '/en/protection-and-selectivity-studies/',
        languages: {
            'pt-BR': '/estudos-de-protecao-e-seletividade/',
            'en-US': '/en/protection-and-selectivity-studies/',
        },
    },
    openGraph: {
        title: 'Protection & Selectivity Studies | KR Engenharia',
        description:
            'Analytical short-circuit simulation, ETAP coordination curves, and multi-vendor numerical relay parameterization.',
        url: '/en/protection-and-selectivity-studies/',
        siteName: 'KR Engenharia',
        locale: 'en_US',
        alternateLocale: ['pt_BR'],
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Protection and Selectivity Studies - KR Engenharia',
            },
        ],
    },
};

export default function ProtectionStudiesPageEn() {
    return <ServiceLanding content={protectionStudiesEn} />;
}
