// Commercial origin of a contact, sent together with the form message:
// - the last site page visited before the contact page (internal, no tracking IDs);
// - external campaign parameters (utm_*) from the landing URL, if the visitor
//   arrived through a tagged link. Internal links never add utm parameters.
// Kept in sessionStorage only (cleared when the tab closes); no cookies.

const PAGE_KEY = 'kr_origin_page';
const CAMPAIGN_KEY = 'kr_campaign';
const CAMPAIGN_PARAMS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
const CONTACT_PATHS = ['/contato', '/en/contact'];

function storage(): Storage | null {
    try {
        return typeof window === 'undefined' ? null : window.sessionStorage;
    } catch {
        return null;
    }
}

export function isContactPath(pathname: string) {
    const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
    return CONTACT_PATHS.includes(normalized);
}

/** Called on every navigation. */
export function rememberVisit(pathname: string, search: string) {
    const store = storage();
    if (!store) return;
    try {
        if (!isContactPath(pathname)) store.setItem(PAGE_KEY, pathname.slice(0, 200));

        // First tagged landing in the session wins; later untagged pages do not erase it.
        if (!store.getItem(CAMPAIGN_KEY)) {
            const params = new URLSearchParams(search);
            const campaign = CAMPAIGN_PARAMS
                .map((key) => [key, params.get(key)?.trim().slice(0, 100)] as const)
                .filter(([, value]) => value)
                .map(([key, value]) => `${key}=${value}`)
                .join('; ');
            if (campaign) store.setItem(CAMPAIGN_KEY, campaign);
        }
    } catch {
        // Storage can be blocked (private mode, policies); origin is optional.
    }
}

export function readLeadOrigin() {
    const store = storage();
    try {
        return {
            originPage: store?.getItem(PAGE_KEY) ?? '',
            campaign: store?.getItem(CAMPAIGN_KEY) ?? '',
        };
    } catch {
        return { originPage: '', campaign: '' };
    }
}
