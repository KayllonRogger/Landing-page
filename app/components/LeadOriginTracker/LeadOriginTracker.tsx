'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { rememberVisit } from '@/lib/leadOrigin';

export default function LeadOriginTracker() {
    const pathname = usePathname();

    useEffect(() => {
        rememberVisit(pathname, window.location.search);
    }, [pathname]);

    return null;
}
