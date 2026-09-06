'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';

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
            router.replace('/en');
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
                        if (pathname === '/') {
                            router.replace('/en');
                        } else if (pathname === '/sobre') {
                            router.replace('/en/about');
                        } else if (pathname === '/servicos') {
                            router.replace('/en/services');
                        } else if (pathname === '/projetos') {
                            router.replace('/en/projects');
                        } else if (pathname === '/blog') {
                            router.replace('/en/blog');
                        } else if (pathname === '/contato') {
                            router.replace('/en/contact');
                        } else {
                            router.replace('/en');
                        }
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

