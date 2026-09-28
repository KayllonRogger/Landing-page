import type { Metadata } from 'next';
import ServiceLanding from '../../components/ServiceLanding';
import { protectionStudiesEn } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Protection & Selectivity Studies',
    description:
        'Protection, coordination, selectivity, short-circuit, and load flow studies integrated with relay settings and testing. Transient studies assessed according to technical need.',
    keywords: [
        'Protection and Selectivity Studies',
        'Protection Coordination',
        'Short Circuit Studies',
        'Load Flow',
        'Relay Settings Table',
        'Protection Relay Settings',
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
            'Protection criteria, coordination, short-circuit, and load flow connected to settings implementation and testing.',
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
