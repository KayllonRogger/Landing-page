// Equivalent PT ↔ EN routes. Used by the language switcher (Header) and by the
// language suggestion (GeoDetector), so a new page only needs to be added here.

export const PT_TO_EN: Record<string, string> = {
    '/': '/en',
    '/sobre': '/en/about',
    '/servicos': '/en/services',
    '/estudos-de-protecao-e-seletividade': '/en/protection-and-selectivity-studies',
    '/automacao-sistemas-eletricos': '/en/power-system-automation',
    '/comissionamento-e-ensaios-em-campo': '/en/commissioning-and-field-testing',
    '/diagnostico-de-falhas-eletricas': '/en/electrical-fault-diagnosis',
    '/projetos': '/en/projects',
    '/blog': '/en/blog',
    '/drive': '/en/drive',
    '/contato': '/en/contact',
};

export const EN_TO_PT: Record<string, string> = Object.fromEntries(
    Object.entries(PT_TO_EN).map(([pt, en]) => [en, pt]),
);

function normalize(pathname: string) {
    return pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname;
}

export function englishRoute(pathname: string) {
    return PT_TO_EN[normalize(pathname)] ?? '/en';
}

export function portugueseRoute(pathname: string) {
    return EN_TO_PT[normalize(pathname)] ?? '/';
}
