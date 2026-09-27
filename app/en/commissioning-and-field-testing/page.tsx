import type { Metadata } from 'next';
import ServiceLanding from '../../components/ServiceLanding';
import { commissioningEn } from '@/lib/services/content';

export const metadata: Metadata = {
    title: 'Commissioning & Field Testing | KR Engenharia',
    description:
        'Substation commissioning up to 500 kV, calibrated secondary injection with OMICRON CMC sets, trip matrix validation, FAT/SAT, and energization support.',
    keywords: [
        'Substation Commissioning',
        'Field Testing High Voltage',
        'OMICRON CMC Secondary Injection',
        'Trip Matrix Functional Tests',
        'FAT Factory Acceptance Testing',
        'SAT Site Acceptance Testing',
        'Protective Relay Testing',
        'High Voltage Energization Support',
    ],
    alternates: {
        canonical: '/en/commissioning-and-field-testing/',
        languages: {
            'pt-BR': '/comissionamento-e-ensaios-em-campo/',
            'en-US': '/en/commissioning-and-field-testing/',
        },
    },
    openGraph: {
        title: 'Commissioning & Field Testing | KR Engenharia',
        description:
            'Comprehensive secondary injection with OMICRON CMC test sets, trip matrix verification, and energization support up to 500 kV.',
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
                alt: 'Commissioning and Field Testing - KR Engenharia',
            },
        ],
    },
};

export default function CommissioningPageEn() {
    return <ServiceLanding content={commissioningEn} />;
}
