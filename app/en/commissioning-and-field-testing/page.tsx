import type { Metadata } from 'next';
import ServiceLanding from '../../components/ServiceLanding';
import { commissioningEn } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Protection Testing & Commissioning',
    description:
        'Relay settings, panel testing, and commissioning of protection systems on ABB, Schneider Electric, SEL, and Siemens platforms, plus commissioning experience involving GE IEDs.',
    keywords: [
        'Protection Commissioning',
        'Protection Panel Testing',
        'FAT SAT',
        'Relay Settings',
        'ABB Relion',
        'GE',
        'Schneider Electric MiCOM',
        'SEL',
        'Siemens SIPROTEC',
        'Substation Commissioning',
    ],
    alternates: {
        canonical: '/en/commissioning-and-field-testing/',
        languages: {
            'pt-BR': '/comissionamento-e-ensaios-em-campo/',
            'en-US': '/en/commissioning-and-field-testing/',
        },
    },
    openGraph: {
        title: 'Protection Testing & Commissioning | KR Engenharia',
        description:
            'Relay settings, panel testing, and commissioning of protection systems, with scope and deliverables defined before mobilization.',
        url: '/en/commissioning-and-field-testing/',
        siteName: 'KR Engenharia',
        locale: 'en_US',
        alternateLocale: ['pt_BR'],
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Protection Testing & Commissioning - KR Engenharia',
            },
        ],
    },
};

export default function CommissioningPageEn() {
    return <ServiceLanding content={commissioningEn} />;
}
