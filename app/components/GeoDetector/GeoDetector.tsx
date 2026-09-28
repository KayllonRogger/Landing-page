'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const PT_TO_EN: Record<string, string> = {
    '/': '/en',
    '/sobre': '/en/about',
    '/servicos': '/en/services',
    '/estudos-de-protecao-e-seletividade': '/en/protection-and-selectivity-studies',
    '/automacao-sistemas-eletricos': '/en/power-system-automation',
    '/comissionamento-e-ensaios-em-campo': '/en/commissioning-and-field-testing',
    '/projetos': '/en/projects',
    '/blog': '/en/blog',
    '/drive': '/en/drive',
    '/contato': '/en/contact',
};

function englishRoute(pathname: string) {
    const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
    return PT_TO_EN[normalized] ?? '/en';
}

export default function GeoDetector() {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        // Run only once on client mount
        if (typeof window === 'undefined') return;

        // Check if user already manually selected or detected language
        const userPref = localStorage.getItem('kr_preferred_lang');
        const sessionDetected = sessionStorage.getItem('kr_geo_detected');

        // If user already chose a preference, honor it
        if (userPref === 'en' && !pathname.startsWith('/en')) {
            router.replace(englishRoute(pathname));
            return;
        }

        if (userPref === 'pt' && pathname.startsWith('/en')) {
            // User explicitly chose PT
            return;
        }

        // If already checked in this session, don't query the API again
        if (sessionDetected) return;

        // Detect country via free GeoIP
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        fetch('https://ipapi.co/json/', { signal: controller.signal })
            .then((res) => {
                if (!res.ok) throw new Error('GeoIP fetch failed');
                return res.json();
            })
            .then((data) => {
                clearTimeout(timeoutId);
                const country = data?.country_code;

                if (country) {
                    sessionStorage.setItem('kr_geo_detected', country);

                    // If non-Brazilian IP and currently on default PT route
                    if (country !== 'BR' && !pathname.startsWith('/en')) {
                        localStorage.setItem('kr_preferred_lang', 'en');
                        router.replace(englishRoute(pathname));
                    }
                }
            })
            .catch(() => {
                // Silently fallback on failure (e.g. offline, timeout, adblock)
                sessionStorage.setItem('kr_geo_detected', 'failed');
            });

        return () => {
            clearTimeout(timeoutId);
            controller.abort();
        };
    }, [pathname, router]);

    return null;
}

