'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from './WhatsAppButton.module.css';
import { whatsappUrl as buildWhatsappUrl } from '@/lib/company';

// Page CTAs the floating button must never cover (CSS module class names keep
// the source name, e.g. Hero-module__x__btnPrimary).
const CTA_SELECTOR = 'a[class*="btn"], a[class*="Btn"], a[class*="cta"], a[class*="Cta"], button[type="submit"]';
const CLEARANCE = 12;

export default function WhatsAppButton() {
    const pathname = usePathname();
    const isEn = pathname.startsWith('/en');
    const containerRef = useRef<HTMLDivElement>(null);
    const [isOverCta, setIsOverCta] = useState(false);

    // Step aside while a call-to-action passes under the button (mostly on phones,
    // where CTAs are full width), so the two never overlap or sit too close.
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        let frame = 0;
        const check = () => {
            frame = 0;
            const button = container.querySelector('a');
            if (!button) return;
            const a = button.getBoundingClientRect();
            const hit = Array.from(document.querySelectorAll<HTMLElement>(CTA_SELECTOR)).some((el) => {
                if (container.contains(el) || el.closest('header') || el.offsetParent === null) return false;
                const e = el.getBoundingClientRect();
                return e.right > a.left - CLEARANCE && e.left < a.right + CLEARANCE
                    && e.bottom > a.top - CLEARANCE && e.top < a.bottom + CLEARANCE;
            });
            setIsOverCta(hit);
        };
        const schedule = () => { if (!frame) frame = requestAnimationFrame(check); };
        schedule();
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule);
        return () => {
            window.removeEventListener('scroll', schedule);
            window.removeEventListener('resize', schedule);
            if (frame) cancelAnimationFrame(frame);
        };
    }, [pathname]);

    const message = isEn
        ? 'Hello! I would like to talk about a technical need with KR Engenharia.'
        : 'Olá! Gostaria de conversar sobre uma demanda técnica com a KR Engenharia.';
    const whatsappUrl = buildWhatsappUrl(message);
    const label = isEn ? 'Chat on WhatsApp' : 'Conversar pelo WhatsApp';

    return (
        <div ref={containerRef} className={`${styles.container} ${isOverCta ? styles.hidden : ''}`}>
            <a
                tabIndex={isOverCta ? -1 : undefined}
                aria-hidden={isOverCta || undefined}
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
                aria-label={label}
            >
                <svg className={styles.icon} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.44 0-2.85-.38-4.08-1.1l-.29-.17-3.03.79.81-2.95-.19-.3a8.16 8.16 0 0 1-1.25-4.32c0-4.54 3.7-8.23 8.24-8.23m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.14-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.61c.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.44.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3Z" />
                </svg>
            </a>

            <div className={styles.tooltip} aria-hidden="true">
                <span className={styles.tooltipDot}></span>
                <span>WhatsApp</span>
            </div>
        </div>
    );
}

