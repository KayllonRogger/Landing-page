'use client';

import { useEffect, useRef, type RefObject } from 'react';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Modal dialog behaviour: locks background scroll (and hides the floating
 * WhatsApp button through the `kr-modal-open` body class), closes on Escape,
 * keeps Tab focus inside the dialog and returns focus to the opener on close.
 */
export function useDialog(open: boolean, onClose: () => void, dialogRef: RefObject<HTMLElement | null>) {
    const onCloseRef = useRef(onClose);

    useEffect(() => {
        onCloseRef.current = onClose;
    }, [onClose]);

    useEffect(() => {
        if (!open) return;

        const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
        const node = dialogRef.current;
        document.body.classList.add('kr-modal-open');
        (node?.querySelector<HTMLElement>('[data-autofocus]') ?? node)?.focus();

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                onCloseRef.current();
                return;
            }
            if (event.key !== 'Tab' || !node) return;
            const items = Array.from(node.querySelectorAll<HTMLElement>(FOCUSABLE));
            if (items.length === 0) return;
            const first = items[0];
            const last = items[items.length - 1];
            if (event.shiftKey && (document.activeElement === first || document.activeElement === node)) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('keydown', onKeyDown);
            document.body.classList.remove('kr-modal-open');
            if (opener && opener !== document.body) opener.focus();
        };
    }, [open, dialogRef]);
}
