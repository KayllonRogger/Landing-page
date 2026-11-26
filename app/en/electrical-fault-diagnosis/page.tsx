import type { Metadata } from 'next';
import ServiceLanding from '../../components/ServiceLanding';
import { faultDiagnosisEn } from '@/lib/services/content';

const DESCRIPTION =
    'Analysis of oscillography and event records, investigation of unwanted operations and trip or command failures, and review of protection settings, circuits, and logic, with conclusions limited to the evidence available.';

export const metadata: Metadata = {
    title: 'Electrical Fault Diagnosis & Investigation',
    description: DESCRIPTION,
    keywords: [
        'Electrical Fault Diagnosis',
        'Oscillography Analysis',
        'COMTRADE',
        'Protection Misoperation',
        'Trip Failure',
        'Trip Circuit',
        'Disturbance Analysis',
        'Logic Selectivity',
    ],
    alternates: {
        canonical: '/en/electrical-fault-diagnosis/',
        languages: {
            'pt-BR': '/diagnostico-de-falhas-eletricas/',
            'en-US': '/en/electrical-fault-diagnosis/',
        },
    },
    openGraph: {
        title: 'Electrical Fault Diagnosis & Investigation | KR Engenharia',
        description: DESCRIPTION,
        url: '/en/electrical-fault-diagnosis/',
        siteName: 'KR Engenharia',
        locale: 'en_US',
        alternateLocale: ['pt_BR'],
        type: 'website',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Electrical Fault Diagnosis & Investigation - KR Engenharia',
            },
        ],
    },
};

export default function FaultDiagnosisPageEn() {
    return <ServiceLanding content={faultDiagnosisEn} />;
}
